import { ClassicPreset } from 'rete';
import { INITIAL_HEIGHT, INITIAL_WIDTH } from '../constants';
import { EditorExtraOptions, TProductNode } from '../types';

const socket = new ClassicPreset.Socket('socket');

export class FinalNode extends ClassicPreset.Node<
  {
    inputData: ClassicPreset.Socket;
  },
  {},
  {}
> {
  height = INITIAL_HEIGHT;
  width = INITIAL_WIDTH;
  options?: EditorExtraOptions;
  returningObject: Record<string, any> = {};
  change?: () => void;

  constructor(options?: EditorExtraOptions, change?: () => void) {
    super('OUTPUT');

    const inputData = new ClassicPreset.Input(socket, 'Input data');

    inputData.addControl(
      new ClassicPreset.InputControl('text', { initial: '', change })
    );

    this.addInput('inputData', inputData);
    this.options = options;
  }

  async data(inputs: { inputData: any[] }): any {
    const { inputData } = inputs;
    if (!inputData?.[0]) {
      return {};
    }

    return inputData[0];
  }
}
