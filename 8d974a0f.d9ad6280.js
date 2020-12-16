(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{177:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t(3),c=t(7),a=(t(0),t(250)),o={title:"Services & Dependency Injection"},s={unversionedId:"architecture/services-and-dependency-injection",id:"version-1.x/architecture/services-and-dependency-injection",isDocsHomePage:!1,title:"Services & Dependency Injection",description:"`sh",source:"@site/versioned_docs/version-1.x/architecture/services-and-dependency-injection.md",slug:"/architecture/services-and-dependency-injection",permalink:"/docs/1.x/architecture/services-and-dependency-injection",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/architecture/services-and-dependency-injection.md",version:"1.x",sidebar:"someSidebar",previous:{title:"Controllers",permalink:"/docs/1.x/architecture/controllers"},next:{title:"Hooks",permalink:"/docs/1.x/architecture/hooks"}},i=[{value:"Description",id:"description",children:[]},{value:"Architecture",id:"architecture",children:[]},{value:"Use &amp; Dependency Injection",id:"use--dependency-injection",children:[]},{value:"Testing services",id:"testing-services",children:[{value:"Services (or Controllers) with Dependencies",id:"services-or-controllers-with-dependencies",children:[]}]},{value:"Injecting other Instances",id:"injecting-other-instances",children:[]},{value:"Abstract Services",id:"abstract-services",children:[{value:"Default Concrete Services",id:"default-concrete-services",children:[]}]},{value:"Usage with Interfaces and Generic Classes",id:"usage-with-interfaces-and-generic-classes",children:[]},{value:"Accessing the <code>ServiceManager</code>",id:"accessing-the-servicemanager",children:[]}],l={rightToc:i};function p(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"foal generate service my-service\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export class MyService {\n\n}\n")),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Services are useful to organize your code in domains. They can be used in a wide variety of situations: logging, interaction with a database, calculations, communication with an external API, etc."),Object(a.b)("h2",{id:"architecture"},"Architecture"),Object(a.b)("p",null,"Basically, a service can be any class with a narrow and well defined purpose. They are instantiated as singletons."),Object(a.b)("h2",{id:"use--dependency-injection"},"Use & Dependency Injection"),Object(a.b)("p",null,"You can access a service from a controller using the ",Object(a.b)("inlineCode",{parentName:"p"},"@dependency")," decorator."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency, Get, HttpResponseOK } from '@foal/core';\n\nclass AppController {\n  @dependency\n  logger: Logger\n\n  @Get('/')\n  index() {\n    this.logger.log('index has been called!');\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n\nclass Logger {\n  log(message: string) {\n    console.log(`${new Date()} - ${message}`);\n  }\n}\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"When instantiating the controller, FoalTS will provide the service instance. This mechanism is called ",Object(a.b)("em",{parentName:"p"},"dependency injection")," and is particularly interesting in unit testing (see section below).")),Object(a.b)("p",null,"In the same way, you can access a service from another service."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency } from '@foal/core';\n\nclass MyService {\n  run() {\n    console.log('hello world');\n  }\n}\n\nclass MyServiceA {\n  @dependency\n  myService: MyService;\n\n  foo() {\n    this.myService.run();\n  }\n}\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: Circular dependencies are not supported. In most cases, when two services are dependent on each other, the creation of a third service containing the functionalities required by both services solves the dependency problem.")),Object(a.b)("h2",{id:"testing-services"},"Testing services"),Object(a.b)("p",null,"Services are classes and so can be tested as is."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// calculator.service.ts\nexport class CalculatorService {\n  sum(a: number, b: number): number {\n    return a + b;\n  }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// calculator.service.spec.ts\nimport { strictEqual } from 'assert';\nimport { CalculatorService } from './calculator.service';\n\nit('CalculatorService', () => {\n  const service = new CalculatorService();\n  strictEqual(service.sum(1, 2), 3);\n});\n")),Object(a.b)("h3",{id:"services-or-controllers-with-dependencies"},"Services (or Controllers) with Dependencies"),Object(a.b)("p",null,"If your service has dependencies, you can use the ",Object(a.b)("inlineCode",{parentName:"p"},"createService")," function to instantiate the service with them."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// weather.service.ts\nimport { dependency } from '@foal/core';\n\nclass ConversionService {\n  celsiusToFahrenheit(temperature: number): number {\n    return temperature * 9/5 + 32;\n  }\n}\n\nclass WeatherService {\n  temp = 14;\n\n  @dependency\n  conversion: ConversionService;\n\n  getWeather(): string {\n    const temp = this.conversion.celsiusToFahrenheit(this.temp);\n    return `The outside temperature is ${temp} \xb0F.`;\n  }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// weather.service.spec.ts\nimport { strictEqual } from 'assert';\nimport { createService } from '@foal/core';\nimport { WeatherService } from './weather.service';\n\nit('WeatherService', () => {\n  const service = createService(WeatherService);\n\n  const expected = 'The outside temperature is 57.2 \xb0F.';\n  const actual = service.getWeather();\n\n  strictEqual(actual, expected);\n});\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"A similar function exists to instantiate controllers with their dependencies: ",Object(a.b)("inlineCode",{parentName:"p"},"createController"),".")),Object(a.b)("p",null,"In many situations, it is necessary to mock the dependencies to truly write ",Object(a.b)("em",{parentName:"p"},"unit")," tests. This can be done by passing a second argument to ",Object(a.b)("inlineCode",{parentName:"p"},"createService")," (or ",Object(a.b)("inlineCode",{parentName:"p"},"createController"),")."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// detector.service.ts\nimport { dependency } from '@foal/core';\n\nclass TwitterService {\n  fetchLastTweets() {\n    // Make a call to the Twitter API to get the last tweets.\n  }\n}\n\nclass DetectorService {\n  @dependency\n  twitter: TwitterService;\n\n  isFoalTSMentionedInTheLastTweets() {\n    const tweets = this.twitter.fetchLastTweets();\n    if (tweets.find(tweet => tweet.msg.includes('FoalTS'))) {\n      return true;\n    }\n    return false;\n  }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// detector.service.spec.ts\nimport { strictEqual } from 'assert';\nimport { createService } from '@foal/core';\nimport { DetectorService } from './weather.service';\n\nit('DetectorService', () => {\n  const twitterMock = {\n    fetchLastTweets() {\n      return [\n        { message: 'Hello world!' },\n        { message: 'I LOVE FoalTS' },\n      ]\n    }\n  }\n  const service = createService(DetectorService, {\n    twitter: twitterMock\n  });\n\n  const actual = service.isFoalTSMentionedInTheLastTweets();\n\n  strictEqual(actual, true);\n});\n")),Object(a.b)("h2",{id:"injecting-other-instances"},"Injecting other Instances"),Object(a.b)("p",null,"To manually inject instances into the identity mapper, you can also provide your own ",Object(a.b)("inlineCode",{parentName:"p"},"ServiceManager")," to the ",Object(a.b)("inlineCode",{parentName:"p"},"createApp")," function (usually located at ",Object(a.b)("inlineCode",{parentName:"p"},"src/index.ts"),")."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"src/index.ts (example)")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { createApp, ServiceManager } from '@foal/core';\nimport { Connection, createConnection } from 'typeorm';\n\nimport { AppController } from './app/app.controller';\n\nasync function main() {\n  const connection = await createConnection();\n\n  const serviceManager = new ServiceManager();\n  serviceManager.set(Connection, connection);\n\n  const app = createApp(AppController, {\n    serviceManager\n  });\n\n  // ...\n}\n\n// ...\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: Interfaces cannot be passed to the ",Object(a.b)("inlineCode",{parentName:"p"},"set")," method.")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"src/controllers/api.controller.ts (example)")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency, Get, HttpResponseOK } from '@foal/core';\nimport { Connection } from 'typeorm';\n\nimport { Product } from '../entities';\n\nclass ApiController {\n\n  @dependency\n  connection: Connection;\n\n  @Get('/products')\n  async readProducts()\xa0{\n    const products = await this.connection.getRepository(Product).find();\n    return new HttpResponseOK(products);\n  }\n\n}\n\n")),Object(a.b)("h2",{id:"abstract-services"},"Abstract Services"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Abstract services are available in Foal v1.11 onwards.")),Object(a.b)("p",null,"If you want to use a different service implementation depending on your environment (production, development, etc.), you can use an abstract service for this."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"logger.service.ts")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export abstract class Logger {\n  static concreteClassConfigPath = 'logger.driver';\n  static concreteClassName = 'ConcreteLogger';\n\n  abstract log(str: string);\n}\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Warning:")," the two properties must be static.")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"console-logger.service.ts (concrete service)")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export class ConsoleLogger extends Logger {\n  log(str: string) {\n    console.log(str);\n  }\n}\n\nexport { ConsoleLogger as ConcreteLogger };\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"config/development.json")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "logger": {\n    "driver": "./app/services/console-logger.service"\n  }\n}\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The configuration value can be a package name or a path relative to the ",Object(a.b)("inlineCode",{parentName:"p"},"src/")," directory. If it is a path, it ",Object(a.b)("strong",{parentName:"p"},"must")," start with ",Object(a.b)("inlineCode",{parentName:"p"},"./")," and ",Object(a.b)("strong",{parentName:"p"},"must not")," have an extension (",Object(a.b)("inlineCode",{parentName:"p"},".js"),", ",Object(a.b)("inlineCode",{parentName:"p"},".ts"),", etc).")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"a random service")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export class Service {\n  @dependency\n  logger: Logger;\n\n  // ...\n}\n")),Object(a.b)("h3",{id:"default-concrete-services"},"Default Concrete Services"),Object(a.b)("p",null,"An abstract service can have a default concrete service that is used when no configuration value is specified or when the configuration value is ",Object(a.b)("inlineCode",{parentName:"p"},"local"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { join } from 'path';\n\nexport abstract class Logger {\n  static concreteClassConfigPath = 'logger.driver';\n  static concreteClassName = 'ConcreteLogger';\n  static defaultConcreteClassPath = join(__dirname, './console-logger.service');\n\n  abstract log(str: string);\n}\n")),Object(a.b)("h2",{id:"usage-with-interfaces-and-generic-classes"},"Usage with Interfaces and Generic Classes"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Interface and generic class injection is available in Foal v1.8 onwards.")),Object(a.b)("p",null,"Interfaces and generic classes can be injected using strings as IDs. To do this, you will need the ",Object(a.b)("inlineCode",{parentName:"p"},"@Dependency")," decorator."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"src/services/logger.interface.ts")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export interface ILogger {\n  log(message: any): void;\n}\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"src/services/logger.service.ts")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { ILogger } from './logger.interface';\n\nexport class ConsoleLogger implements ILogger {\n  log(message: any): void {\n    console.log(message);\n  }\n}\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"src/index.ts (example)")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { createApp, ServiceManager } from '@foal/core';\nimport { createConnection } from 'typeorm';\n\nimport { AppController } from './app/app.controller';\nimport { Product } from './app/entities';\nimport { Logger } from './app/services';\n\nasync function main() {\n  const connection = await createConnection();\n  const productRepository = connection.getRepository(Product);\n\n  const serviceManager = new ServiceManager()\n    .set('product', productRepository)\n    .set('logger', new ConsoleLogger());\n\n  const app = createApp(AppController, {\n    serviceManager\n  });\n\n  // ...\n}\n\n// ...\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"src/controllers/api.controller.ts (example)")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Dependency, Get, HttpResponseOK } from '@foal/core';\nimport { Repository } from 'typeorm';\n\nimport { Product } from '../entities';\nimport { ILogger } from '../services';\n\nexport class ApiController {\n\n  @Dependency('product')\n  productRepository: Repository<Product>;\n\n  @Dependency('logger')\n  logger: ILogger;\n\n  @Get('/products')\n  async readProducts()\xa0{\n    const products = await this.productRepository.find();\n    this.logger.log(products);\n    return new HttpResponseOK(products);\n  }\n\n}\n\n")),Object(a.b)("h2",{id:"accessing-the-servicemanager"},"Accessing the ",Object(a.b)("inlineCode",{parentName:"h2"},"ServiceManager")),Object(a.b)("p",null,"In very rare situations, you may want to access the ",Object(a.b)("inlineCode",{parentName:"p"},"ServiceManager")," which is the identity mapper that contains all the service instances."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency, ServiceManager } from '@foal/core';\n\nclass MyService {\n  foo() {\n    return 'foo';\n  }\n}\n\nclass MyController {\n  @dependency\n  services: ServiceManager;\n\n  bar() {\n    return this.services.get(MyService).foo();\n  }\n}\n")))}p.isMDXComponent=!0},250:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),c=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var l=c.a.createContext({}),p=function(e){var n=c.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},b=function(e){var n=p(e.components);return c.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},d=c.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(t),d=r,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||a;return t?c.a.createElement(m,s(s({ref:n},l),{},{components:t})):c.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);