import { Help } from '../../../../app/lib/help';

describe('Command', () => {
  let existingConsoleLog;
  const consoleLogs = [];
  beforeEach(() => {
    consoleLogs.length = 0;
    existingConsoleLog = console.log;

    console.log = (log: string) => {
      log = log.replace(/\n/g, '::new-line::');
      consoleLogs.push(log.replace(/\t/g, '::tab::'));
    };
  });

  afterEach(() => {
    console.log = existingConsoleLog;
  });

  describe('Help', () => {
    it('should display the help', () => {
      const help = new Help();
      help.displayHelp();

      expect(consoleLogs).toEqual([
        '::new-line::::new-line::Prototype help.',
        '::new-line::::new-line::Usage:',
        '::new-line::::tab::--h|-h|h|help|--help|? ::tab:: Displays this help message',
        `::new-line::::tab::--directories <'["first", "second"]'> ::tab:: The list of directories to parse.`,
        '::new-line::::new-line::'
      ]);
    });
  });
});

export {};
