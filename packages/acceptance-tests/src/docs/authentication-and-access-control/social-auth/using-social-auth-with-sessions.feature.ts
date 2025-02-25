// std
import { deepStrictEqual, strictEqual } from 'assert';

// 3p
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from '@foal/typeorm/node_modules/typeorm';

// FoalTS
import {
  Config,
  Context,
  createController,
  createSession,
  dependency,
  Get,
  HttpResponseRedirect,
  Session,
  Store,
  UseSessions,
} from '@foal/core';
import { GoogleProvider } from '@foal/social';
import { closeTestConnection, createTestConnection, getTypeORMStorePath } from '../../../common';
import { DatabaseSession } from '@foal/typeorm';

describe('Feature: Using social auth with sessions', () => {

  before(() => {
    Config.set('settings.session.store', getTypeORMStorePath());
  });

  after(() => {
    Config.remove('settings.session.store');
    return closeTestConnection();
  });

  it('Example: Simple auth controller.', async () => {

    /* ======================= DOCUMENTATION BEGIN ======================= */

    @Entity()
    class User extends BaseEntity {

      @PrimaryGeneratedColumn()
      id: number;

      @Column({ unique: true })
      email: string;

    }

    class AuthController {
      @dependency
      google: GoogleProvider;

      @dependency
      store: Store;

      @Get('/signin/google')
      redirectToGoogle() {
        return this.google.redirect();
      }

      @Get('/signin/google/callback')
      @UseSessions({
        cookie: true,
        // The `getUserInfo` method uses another CSRF protection specific to the OAuth2 procotol.
        csrf: false,
      })
      async handleGoogleRedirection(ctx: Context<User, Session>) {
        const { userInfo } = await this.google.getUserInfo<{ email: string }>(ctx);

        if (!userInfo.email) {
          throw new Error('Google should have returned an email address.');
        }

        let user = await User.findOne({ email: userInfo.email });

        if (!user) {
          // If the user has not already signed up, then add them to the database.
          user = new User();
          user.email = userInfo.email;
          await user.save();
        }

        ctx.session.setUser(user);

        return new HttpResponseRedirect('/');
      }

    }

    /* ======================= DOCUMENTATION END ========================= */

    await createTestConnection([ User, DatabaseSession ]);

    const user = new User();
    user.email = 'jane.doe@foalts.org';
    await user.save();

    const googleProviderMock = {
      getUserInfo(ctx: Context) {
        if (ctx.request.query.code === 'known_user') {
          return {
            userInfo: { email: 'jane.doe@foalts.org' }
          };
        } else {
          return {
            userInfo: { email: 'unknown@foalts.org' }
          };
        }
      }
    }

    const controller = createController(AuthController, {
      google: googleProviderMock
    });

    // Known user
    const ctx = new Context<any, Session>({
      query: {
        code: 'known_user'
      }
    });
    ctx.session = await createSession({} as any);

    strictEqual(ctx.session.userId, null);

    await controller.handleGoogleRedirection(ctx);

    deepStrictEqual(ctx.session.userId, user.id);

    // Unknown user
    const ctx2 = new Context<any, Session>({
      query: {
        code: 'unknown_user'
      }
    });
    ctx2.session = await createSession({} as any);

    strictEqual(ctx2.session.userId, null);
    strictEqual(await User.findOne({ email: 'unknown@foalts.org' }), undefined);

    await controller.handleGoogleRedirection(ctx2);

    const user2 = await User.findOneOrFail({ email: 'unknown@foalts.org' })

    deepStrictEqual(ctx2.session.userId, user2.id);
  });

});
