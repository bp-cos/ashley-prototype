import { Help } from './lib/help';
import { Options } from './lib/options';

/**
 * The spira class
 */
export class Spira {
  /**
   * The options
   */
  private options = new Options();
  /**
   * The directories
   */
  public directories: string[] = [];

  /**
   * The constructor
   */
  constructor() {
    if (this.options.getHelp()) {
      new Help().displayHelp();
      process.exit(1);
    } else {
      this.determineDirectories();
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
    // console.log('script is running');
    // console.log('\n\nAdd appears to be working');
  }
}
