/* tslint:disable-next-line */
const args = require('minimist')(process.argv.slice(2));

/**
 * The Options class
 */
export class Options {
  /**
   * The arguments
   */
  private arguments: any;

  /**
   * constructor
   */
  constructor() {
    this.arguments = args;
  }

  /**
   * getDashArgument
   *
   * @decripton Gets a specific dashed argument
   *
   * @returns the argument as a string
   */
  private getDashArgument(argument: string): string | boolean {
    return this.arguments[argument];
  }

  /**
   * getNonDashArgument
   * @description determines if a non dash argument exists from the commandline
   *
   * @returns a boolean
   */
  private getNonDashArgument(argument: string): boolean {
    let foundArgument = false;
    Object.keys(this.arguments).map((key: string) => {
      /* tslint:disable-next-line */
      if (key === '_' && this.arguments['_'].indexOf(argument) > -1) {
        foundArgument = true;
      }
    });

    return foundArgument;
  }

  /**
   * getDirectories
   *
   * @description Gets the directores passed from the commandline
   *
   * @returns a collection of strings a directories
   */
  getDirectories(): string[] {
    return JSON.parse(this.getDashArgument('directories') as string) as string[];
  }

  /**
   * getHelp
   *
   * @description determines if the help argument has been passed
   *
   * @returns a boolean
   */
  getHelp(): boolean {
    return (
      this.getNonDashArgument('help') ||
      this.getNonDashArgument('h') ||
      this.getNonDashArgument('?') ||
      this.getDashArgument('help') === true ||
      this.getDashArgument('h') === true
    );
  }
}
