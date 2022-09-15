import rewiremock from 'rewiremock';

rewiremock.enable();
import { Parser } from '../../../../app/parser';
rewiremock.disable();

describe('Parser', () => {
  describe('Parse Directories', () => {
    it('should parse the directories', () => {
      const parser = new Parser(['first']);
      parser.parseDirectories();

      expect(parser.directories).toEqual(['first']);
    });
  });
});

export {};
