import rewiremock from 'rewiremock';

let callHelp = false;
let displayHelpCalled = false;
let directories = [];
let parseDirectories = [];
let originalLog;
const log = [];
const parseDirectoriesCalled = [];

rewiremock('./color').by(() => {
  return require('../mocks/color-mock');
});

rewiremock('./lib/help').by(() => {
  return {
    Help: class HelpMockClass {
      displayHelp() {
        displayHelpCalled = true;
      }
    }
  };
});

rewiremock('./lib/options').by(() => {
  return {
    Options: class OptionsMockClass {
      getHelp() {
        return callHelp;
      }

      getDirectories() {
        if (directories.length) {
          return directories;
        } else {
          throw new Error('This is a directory error');
        }
      }
    }
  };
});

rewiremock('./parser/parser').by(() => {
  return {
    Parser: class ParserMockClass {
      constructor(directories) {
        parseDirectories = directories;
      }

      parseDirectories() {
        parseDirectoriesCalled.push(true);
      }
    }
  };
});

rewiremock.enable();
import { Spira } from '../../../app/index';
rewiremock.disable();

describe('Spira', () => {
  beforeEach(() => {
    displayHelpCalled = false;
    callHelp = false;
    directories.length = 0;
    parseDirectories.length = 0;

    /* tslint:disable */
    originalLog = console.log;
    console.log = (input) => {
      log.push(input);
    };
    /* tslint:enable */
  });

  afterEach(() => {
    /* tslint:disable */
    console.log = originalLog;
    /* tslint:enable */
  });

  describe('DisplayHelp', () => {
    it('should display the help', () => {
      spyOn(process, 'exit');
      callHelp = true;

      new Spira();

      expect(displayHelpCalled).toBeTrue();
      expect(process.exit).toHaveBeenCalledWith(1);
    });
  });

  describe('Run Script', () => {
    it('should run the script', () => {
      spyOn(process, 'exit');
      directories = ['first'];

      const spira = new Spira();
      spira.runScript();

      expect(parseDirectories).toEqual(['first']);
      expect(parseDirectoriesCalled).toEqual([true]);
      expect(process.exit).not.toHaveBeenCalled();
    });

    describe('Errors', () => {
      it('should handle an error getting the directrories', () => {
        const spira = new Spira();

        spira.runScript();

        expect(log).toEqual(['red(There is an error: This is a directory error)']);
      });
    });
  });
});

export {};
