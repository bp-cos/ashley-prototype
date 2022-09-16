import { Logger } from './logger';

/**
 * The Help class
 */
export class Help {
  /**
   * The logger
   */
  private logger = new Logger();

  /**
   * displayHelp
   *
   * @description displays the help
   */
  displayHelp(): void {
    /* tslint:disable */
    this.logger.info('\n\nPrototype help.');
    this.logger.info('\n\nUsage:');
    this.logger.info('\n\t--h|-h|h|help|--help|? \t Displays this help message');
    this.logger.info('\n\t--directories|-d <\'["dir1", "dir2", "dirn"]\'> \t The list of directories to parse.');
    this.logger.info('\n\n');
    /* tslint:enable */
  }
}
