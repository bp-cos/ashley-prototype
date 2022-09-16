import { parse } from 'node-html-parser';
import { readdir, readFileSync } from 'fs';
import { join } from 'path';

/**
 * The Parser class
 */
export class Parser {
  /**
   * The constructor
   */
  constructor(private directories: string[]) {}

  /**
   * parseDirectories
   *
   * @description Runs the script and parses the directories
   */
  public parseDirectories(): void {
    this.directories.forEach((directory: string) => {
      readdir(directory, (error, files) => {
        if (error) {
          throw error;
        } else {
          files.forEach((file: string) => {
            if (file.match(/\.hbs$/)) {
              const root = parse(readFileSync(join(directory, file)).toString());
              /* tslint:disable-next-line */
              console.log(root);
              /** TODO */
            }
          });
        }
      });
    });
  }
}
