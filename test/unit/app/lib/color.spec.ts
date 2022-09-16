import rewiremock from 'rewiremock';

let colorCommand;
let cyan = [];
let green = [];
let red = [];

rewiremock('cli-color').by(() => {
  return {
    cyan: (input) => {
      cyan.push(input);
    },
    red: (input) => {
      red.push(input);
    },
    green: (input) => {
      green.push(input);
    }
  };
});

rewiremock.enable();
import { Color } from '../../../../app/lib/color';
rewiremock.disable();

describe('Color Command', () => {
  beforeEach(() => {
    cyan = [];
    green = [];
    red = [];
    colorCommand = new Color();
  });

  it('should test the cyan method', async () => {
    colorCommand.cyan('cyan');
    expect(cyan).toEqual(['cyan']);
  });

  it('should test the red method', async () => {
    colorCommand.red('red');
    expect(red).toEqual(['red']);
  });

  it('should test the green method', async () => {
    colorCommand.green('green');
    expect(green).toEqual(['green']);
  });
});
