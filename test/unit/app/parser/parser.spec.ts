import rewiremock from 'rewiremock';
import { readFileSync } from 'fs';

const goodData = readFileSync(`${__dirname}/../../../../../test/unit/app/parser/data/good-data.hbs`).toString();
let directories = ['.'];
const directoriesRead = [];
const filesRead = [];
let readdirError = undefined;

rewiremock('fs').by(() => {
  return {
    readdir: (directory, callback) => {
      directoriesRead.push(directory);
      return callback(readdirError, directories);
    },

    readFileSync: (filename) => {
      filesRead.push(filename);
      if (filename === 'good-data.hbs') {
        return goodData;
      } else {
        return '';
      }
    }
  };
});

rewiremock.enable();
import { Parser } from '../../../../app/parser/parser';
rewiremock.disable();

describe('Parser', () => {
  beforeEach(() => {
    readdirError = undefined;
    directories = ['.'];
    directoriesRead.length = 0;
    filesRead.length = 0;
  });

  describe('Parse Directories', () => {
    it('should parse the directories', () => {
      directories.push('good-data.hbs');
      const parser = new Parser(['first']);
      parser.parseDirectories();

      expect(directoriesRead).toEqual(['first']);
      expect(filesRead).toEqual(['first/good-data.hbs']);
    });
  });

  describe('Errors', () => {
    it('should not parse any files', () => {
      readdirError = new Error('this is an error');
      const parser = new Parser(['first']);

      try {
        parser.parseDirectories();
        expect('this is an error').toBe('fix me please');
      } catch (error) {
        expect(error.message).toBe('this is an error');
      }
    });

    it('should throw an error on reading a directory', () => {
      const parser = new Parser(['first']);
      parser.parseDirectories();

      expect(directoriesRead).toEqual(['first']);
      expect(filesRead).toEqual([]);
    });
  });
});

export {};
