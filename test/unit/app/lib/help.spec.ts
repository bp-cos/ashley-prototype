import { Help } from '../../../../app/lib/help';

describe('Command', () => {
  let existingConsoleInfo;
  const consoleInfo = [];
  beforeEach(() => {
    consoleInfo.length = 0;
    existingConsoleInfo = console.log;

    console.info = (info: string) => {
      info = info.replace(/\n/g, '::new-line::');
      consoleInfo.push(info.replace(/\t/g, '::tab::'));
    };
  });

  afterEach(() => {
    console.log = existingConsoleInfo;
  });

  describe('Help', () => {
    it('should display the help', () => {
      const help = new Help();
      help.displayHelp();

      expect(consoleInfo).toEqual([
        '::new-line::::new-line::Prototype help.',
        '::new-line::::new-line::Usage:',
        '::new-line::::tab::--h|-h|h|help|--help|? ::tab:: Displays this help message',
        `::new-line::::tab::--directories|-d <'["dir1", "dir2", "dirn"]'> ::tab:: The list of directories to parse.`,
        '::new-line::::new-line::'
      ]);
    });
  });
});

export {};
