import rewiremock from 'rewiremock';

let callHelp = false;
let displayHelpCalled = false;
let directories = [];

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
        return directories;
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

      expect(spira.directories).toEqual(['first']);
      expect(process.exit).not.toHaveBeenCalled();
    });
  });
});

export {};
