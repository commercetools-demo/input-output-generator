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
  {
    index: ClassicPreset.InputControl<'number'>;
  }
> {
  path: string = '';
  height = INITIAL_HEIGHT;
  width = INITIAL_WIDTH;
  options?: EditorExtraOptions;
  returningObject: Record<string, any> = {};
  index = 0;
  change?: () => void;

  constructor(options?: EditorExtraOptions, change?: () => void) {
    super('ARRAY');
    this.change = change;

    const arrayItem = new ClassicPreset.Input(socket, 'array');
    this.addInput('array', arrayItem);

    this.addControl(
      'index',
      new ClassicPreset.InputControl('number', {
        initial: 0,
        change: this.updateIndex,
      })
    );

    const output = new ClassicPreset.Output(socket, 'Item');
    this.addOutput('item', output);

    this.options = options;
  }

  updateIndex = (value: number) => {
    if (value < 0) {
      this.index = 0;
    } else {
      this.index = value;
    }
    this.change?.();
    this.options?.area?.update('node', this.id);
  };

  async data(inputs: { array: any[] }): any {
    const connections = this.options?.editor?.getConnections();

    const connectionToThisNode = connections?.find((connection) => {
      return connection?.target === this.id;
    });

    if (connectionToThisNode && this.inputs.array) {
      this.inputs.array.label = connectionToThisNode.sourceOutput;
      this.path = this.inputs.array.label;
    }

    const { array } = inputs;

    if (!array?.[0] || array?.[0]?.length === 0) {
      return { item: {} };
    }
    if (this.outputs.item) {
      this.outputs.item.label = `ID: ${
        array[0][this.index]?.id
          ? array[0][this.index]?.id.toString().substring(0, 6) + '...'
          : ''
      }`;
    }
    this.options?.area?.update('node', this.id);

    return { item: array[0][this.index] };
  }
}
