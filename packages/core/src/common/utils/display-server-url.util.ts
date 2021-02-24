export function displayServerURL(port: number, log = console.log) {
  log();
  log('\x1b[32m -------------------------------------- \x1b[0m');
  log('\x1b[32m|                                      |\x1b[0m');
  log('\x1b[32m|                                      |\x1b[0m');
  log('\x1b[32m|            Server started!           |\x1b[0m');
  log('\x1b[32m|                                      |\x1b[0m');
  log(`\x1b[32m|\x1b[0m     Local: http://localhost:${port}     \x1b[32m|\x1b[0m`);
  log('\x1b[32m|                                      |\x1b[0m');
  log('\x1b[32m|                                      |\x1b[0m');
  log('\x1b[32m -------------------------------------- \x1b[0m');
  log();
}
