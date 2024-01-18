import { ClassicPreset } from 'rete';
import { INITIAL_HEIGHT, INITIAL_WIDTH } from '../constants';
import { EditorExtraOptions, TProductNode } from '../types';

const socket = new ClassicPreset.Socket('socket');

export class ArrayNode extends ClassicPreset.Node<
  {
    array: ClassicPreset.Socket;
  },
  {
    item: ClassicPreset.Socket;
  },
  {}
> {
  height = INITIAL_HEIGHT;
  width = INITIAL_WIDTH;
  options?: EditorExtraOptions;
  returningObject: Record<string, any> = {};
  change?: () => void;

  constructor(options?: EditorExtraOptions, change?: () => void) {
    super('ARRAY');

    const arrayItem = new ClassicPreset.Input(socket, 'An array');
    arrayItem.addControl(
      new ClassicPreset.InputControl('text', { initial: '', change })
    );
    this.addInput('array', arrayItem);

    const output = new ClassicPreset.Output(socket, 'Item');
    this.addOutput('item', output);

    this.options = options;
  }

  async data(inputs: { array: any[] }): any {
    const { array } = inputs;

    if (!array?.[0] || array?.[0]?.length === 0) {
      return {};
    }
    console.log(this.outputs.item);

    return { item: array[0][0] };
  }
}
