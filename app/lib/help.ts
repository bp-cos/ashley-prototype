/**
 * The Help class
 */
export class Help {
  /**
   * displayHelp
   *
   * @description displays the help
   */
  displayHelp(): void {
    /* tslint:disable */
    console.log('\n\nPrototype help.');
    console.log('\n\nUsage:');
    console.log('\n\t--h|-h|h|help|--help|? \t Displays this help message');
    console.log('\n\t--directories <\'["first", "second"]\'> \t The list of directories to parse.');
    console.log('\n\n');
    /* tslint:enable */
  }
}
