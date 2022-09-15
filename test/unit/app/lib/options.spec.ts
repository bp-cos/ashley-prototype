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

  describe('displayHelp', () => {
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
});

export {};
