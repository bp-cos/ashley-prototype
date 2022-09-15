import { Help } from '../../../../app/lib/help';

describe('Command', () => {
  let existingConsoleLog;
  const consoleLogs = [];
  beforeEach(() => {
    consoleLogs.length = 0;
    existingConsoleLog = console.log;

    console.log = (log: string) => {
      consoleLogs.push(log.replace(/\n/g, '::new-line::'));
    };
  });

  afterEach(() => {
    console.log = existingConsoleLog;
  });

  describe('Help', () => {
    it('should display the help', () => {
      const help = new Help();
      help.displayHelp();

      expect(consoleLogs).toEqual(['::new-line::::new-line::This is the prototype help.::new-line::::new-line::']);
    });
  });
});

export {};
