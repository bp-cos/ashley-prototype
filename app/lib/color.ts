/**
 * cli-color dependency
 */
import { cyan, red, green } from 'cli-color';

/**
 * Color Class
 */
export class Color {
  /**
   * prints text in cyan
   * @param output the string to display
   */
  cyan(output: string): string {
    return cyan(output);
  }

  /**
   * prints text in red
   * @param output the string to display
   */
  red(output: string): string {
    return red(output);
  }

  /**
   * prints text in green
   * @param output the string to display
   */
  green(output: string): string {
    return green(output);
  }
}
