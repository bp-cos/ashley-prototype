import { Color } from './color';
/**
 * Logger Class
 */
export class Logger extends Color {
  /**
   * Constructor
   */
  constructor() {
    super();
  }

  /**
   * prints information to the console
   * @param output the string to display
   */
  info(output: string): void {
    /* tslint:disable-next-line */
    console.info(output);
  }

  /**
   * prints information to the console
   * @param output the string to display
   */
  log(output: string): void {
    /* tslint:disable-next-line */
    console.log(output.replace(/\n/g, ''));
  }

  /**
   * prints information to the console
   * @param output the string to display
   */
  error(output: string): void {
    /* tslint:disable-next-line */
    console.log(this.red(output.replace(/\n/g, '')));
  }
}
