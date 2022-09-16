import rewiremock from 'rewiremock';

let loggerCommand;
let originalInfo;
let originalLog;
const info = [];
const log = [];

rewiremock('./color').by(() => {
  return require('../../mocks/color-mock');
});

rewiremock.enable();
import { Logger } from '../../../../app/lib/logger';
rewiremock.disable();

describe('Logger Command', () => {
  beforeEach(() => {
    info.length = 0;
    log.length = 0;
    /* tslint:disable */
    originalInfo = console.info;
    console.info = (input) => {
      info.push(input);
    };

    originalLog = console.log;
    console.log = (input) => {
      log.push(input);
    };
    /* tslint:enable */

    loggerCommand = new Logger();
  });

  afterEach(() => {
    /* tslint:disable */
    console.info = originalInfo;
    console.log = originalLog;
    /* tslint:enable */
  });

  it('should test the info command', async () => {
    loggerCommand.info('info');
    expect(info).toEqual(['info']);
  });

  it('should test the log command', async () => {
    loggerCommand.log('log');
    expect(log).toEqual(['log']);
  });

  it('should test the error command', async () => {
    loggerCommand.error('error');
    expect(log).toEqual(['red(error)']);
  });
});
