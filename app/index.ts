import { Help } from './lib/help';
import { Logger } from './lib/logger';
import { Options } from './lib/options';
import { Parser } from './parser/parser';

/**
 * The spira class
 */
export class Spira {
  /**
   * The logger
   */
  private logger = new Logger();
  /**
   * The options
   */
  private options = new Options();
  /**
   * The directories
   */
  private directories: string[] = [];

  /**
   * The constructor
   */
  constructor() {
    if (this.options.getHelp()) {
      new Help().displayHelp();
      process.exit(1);
    } else {
      try {
        this.determineDirectories();
      } catch (error) {
        this.logger.error(`\n\nThere is an error: ${error.message}\n\n`);
      }
    }
  }

  /**
   * determineDirectories
   *
   * @description determines the directories to be used in traversing the tree
   */
  private determineDirectories(): void {
    this.directories = this.options.getDirectories();
  }

  /**
   * runScript
   *
   * @description Runs the script
   */
  public runScript(): void {
    const parse = new Parser(this.directories);
    parse.parseDirectories();
  }
}
