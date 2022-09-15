import rewiremock from 'rewiremock';

let commandLineOptions = {};

rewiremock('minimist').by(() => {
  return () => {
    return commandLineOptions;
  };
});

describe('Options', () => {
  beforeEach(() => {
    commandLineOptions = {};
  });

  describe('getHelp', () => {
    it('should test the commands for help with the -help option', () => {
      commandLineOptions = { _: [], h: true, e: true, l: true, p: true };
      rewiremock.enable();
      const Options = require('../../../../app/lib/options').Options;
      const options = new Options();
      rewiremock.disable();

      expect(options.getHelp()).toBeTrue();
    });

    it('should test the commands for help with the --help option', () => {
      commandLineOptions = { _: [], help: true };
      rewiremock.enable();
      const Options = require('../../../../app/lib/options').Options;
      const options = new Options();
      rewiremock.disable();

      expect(options.getHelp()).toBeTrue();
    });

    it('should test the commands for help with the help option', () => {
      commandLineOptions = { _: ['help'] };
      rewiremock.enable();
      const Options = require('../../../../app/lib/options').Options;
      const options = new Options();
      rewiremock.disable();

      expect(options.getHelp()).toBeTrue();
    });

    it('should test the commands for help with the --h option', () => {
      commandLineOptions = { _: [], h: true };
      rewiremock.enable();
      const Options = require('../../../../app/lib/options').Options;
      const options = new Options();
      rewiremock.disable();

      expect(options.getHelp()).toBeTrue();
    });

    it('should test the commands for help with the -h option', () => {
      commandLineOptions = { _: [], h: true };
      rewiremock.enable();
      const Options = require('../../../../app/lib/options').Options;
      const options = new Options();
      rewiremock.disable();

      expect(options.getHelp()).toBeTrue();
    });

    it('should test the commands for help with the h option', () => {
      commandLineOptions = { _: ['h'] };
      rewiremock.enable();
      const Options = require('../../../../app/lib/options').Options;
      const options = new Options();
      rewiremock.disable();

      expect(options.getHelp()).toBeTrue();
    });

    it('should test the commands for help with the ? option', () => {
      commandLineOptions = { _: ['?'] };
      rewiremock.enable();
      const Options = require('../../../../app/lib/options').Options;
      const options = new Options();
      rewiremock.disable();

      expect(options.getHelp()).toBeTrue();
    });
  });

  describe('getDirectories', () => {
    it('should test the command to get the --directories', () => {
      commandLineOptions = { _: [], directories: '["first", "second"]' };
      rewiremock.enable();
      const Options = require('../../../../app/lib/options').Options;
      const options = new Options();
      rewiremock.disable();

      expect(options.getDirectories()).toEqual(['first', 'second']);
    });

    it('should test the command to get the -d', () => {
      commandLineOptions = { _: [], directories: '["first", "second"]' };
      rewiremock.enable();
      const Options = require('../../../../app/lib/options').Options;
      const options = new Options();
      rewiremock.disable();

      expect(options.getDirectories()).toEqual(['first', 'second']);
    });

    describe('errors', () => {
      it('should handle an error with no directories', () => {
        commandLineOptions = { _: [], directories: '' };
        rewiremock.enable();
        const Options = require('../../../../app/lib/options').Options;
        const options = new Options();
        rewiremock.disable();

        try {
          options.getDirectories();
          expect('this is an error').toBe('fix me please');
        } catch (error) {
          expect(error.message).toBe(
            `The input directories format is invalid. Please try: <--directories|-d> '["dir1", "dir2", "dirn"]'`
          );
        }
      });
    });
  });
});

export {};
