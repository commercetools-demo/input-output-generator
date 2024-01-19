import { ClassicPreset } from 'rete';
import { INITIAL_HEIGHT, INITIAL_WIDTH } from '../constants';
import { ConnProps, EditorExtraOptions, TProductNode } from '../types';
import { ButtonControl } from '../controls/ButtonControl';
import { Socket } from 'rete/_types/presets/classic';

const socket = new ClassicPreset.Socket('socket');


export class FinalNode extends ClassicPreset.Node<
  Record<string, Socket>,
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

    const input0 = new ClassicPreset.Input(socket, 'input0');
    const addButton = new ButtonControl(() => this.onAddClick(change));
    addButton.label = '+';

    this.addInput('input0', input0);
    this.addControl('addButton', addButton);
    // this.addInput('addData', addData);
    this.options = options;
  }

  connectionAdded = (connection: ConnProps) => {
    Object.keys(this.inputs).forEach((key) => {
      if (this.inputs[key] && !(this.inputs[key] as any)?.connection && connection.targetInput === key) {
        
        (this.inputs[key] as any).connection = connection;
        this.inputs[key]!.label = connection.sourceOutput;
      }
    });
  };
  connectionRemoved = (connection: ConnProps) => {
    if (this.inputs[connection.targetInput]){
      (this.inputs[connection.targetInput] as any).connection = undefined;
    }    
  };

  onAddClick = (change?: () => void) => {
    const currentInputCount = Object.keys(this.inputs).length;
    const key = `input${currentInputCount}`;

    const newInput = new ClassicPreset.Input(socket, key);
    const newControl = new ClassicPreset.InputControl('text', {
      initial: '',
      change,
    });
    newInput.addControl(newControl);
    this.addInput(key, newInput);

    this.height = INITIAL_HEIGHT + 30 * currentInputCount;
    this.options?.area?.update('node', this.id);
  };

  async data(inputs: { inputData: any[] }): any {
    return 'data';
    // const { inputData } = inputs;
    // if (!inputData?.[0]) {
    //   return {};
    // }

    // return inputData[0];
  }
}
