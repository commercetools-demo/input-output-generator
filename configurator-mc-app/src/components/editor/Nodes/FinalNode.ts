import { ClassicPreset } from 'rete';
import { INITIAL_HEIGHT, INITIAL_WIDTH } from '../constants';
import { EditorExtraOptions, TProductNode } from '../types';
import { ButtonControl } from '../controls/ButtonControl';

const socket = new ClassicPreset.Socket('socket');

export class FinalNode extends ClassicPreset.Node<
  {
    input0: ClassicPreset.Socket;
  },
  {},
  {
    addButton: ButtonControl;
  }
> {
  height = INITIAL_HEIGHT;
  width = INITIAL_WIDTH;
  options?: EditorExtraOptions;
  returningObject: Record<string, any> = {};
  change?: () => void;

  constructor(options?: EditorExtraOptions, change?: () => void) {
    super('OUTPUT');

    const input0 = new ClassicPreset.Input(socket, 'Input data');
    const addButton = new ButtonControl(() => this.onAddClick(change));
    addButton.label = '+';

    input0.addControl(
      new ClassicPreset.InputControl('text', { initial: '', change })
    );

    this.addInput('input0', input0);
    this.addControl('addButton', addButton);
    // this.addInput('addData', addData);
    this.options = options;
  }

  onAddClick = (change?: () => void) => {
    console.log(this.inputs);
    const currentInputCount = Object.keys(this.inputs).length;
    const key = `input${currentInputCount}`;
    
    const newInput = new ClassicPreset.Input(socket, key);
    const newControl = new ClassicPreset.InputControl('text', { initial: '', change });
    newInput.addControl(
      newControl
    );
    this.addInput(key, newInput);

    this.height = INITIAL_HEIGHT + 30 * currentInputCount;
    this.options?.area?.update('node', this.id );
  };

  async data(inputs: { inputData: any[] }): any {
    // const { inputData } = inputs;
    // if (!inputData?.[0]) {
    //   return {};
    // }

    // return inputData[0];
  }
}
