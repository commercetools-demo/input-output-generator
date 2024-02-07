import { ClassicPreset } from 'rete';
import { EditorExtraOptions } from '../types';
import { BasicNode } from './basic-node';

const socket = new ClassicPreset.Socket('socket');

export class ArrayNode extends BasicNode<
  {
    array: ClassicPreset.Socket;
  },
  Record<string, ClassicPreset.Socket>,
  {
    index: ClassicPreset.InputControl<'number'>;
  }
> {
  index = 0;

  constructor(options?: EditorExtraOptions, change?: () => void) {
    super('ARRAY', options, change);

    const arrayItem = new ClassicPreset.Input(socket, 'array');
    this.addInput('array', arrayItem);

    this.addControl(
      'index',
      new ClassicPreset.InputControl('number', {
        initial: 0,
        change: this.updateIndex,
      })
    );
  }

  updateIndex = (value: number) => {
    if (value < 0) {
      this.index = 0;
    } else {
      this.index = value;
    }
    this.change?.();
    this.updateNode();
  };

  async data(inputs: {
    array: [Record<string, string | number | object>[]];
  }): Promise<Record<string, string | number | object>> {
    this.updateInputs();

    const { array } = inputs;

    if (!array?.[0] || array?.[0]?.length === 0) {
      return { [this.path]: {} };
    }

    this.updateOutputs(array);
    this.updateNode();

    return { [this.path]: array[0][this.index] };
  }

  private updateOutputs(array: [Record<string, string | number | object>[]]) {
    if (Object.keys(this.outputs).length) {
      Object.keys(this.outputs).forEach((key) => {
        this.removeOutput(key);
      });
    }
    if (Object.keys(this.outputs).length === 0) {
      const output = new ClassicPreset.Output(socket, this.path);
      output.label = `ID: ${
        array[0][this.index]?.id
          ? array[0][this.index]?.id.toString().substring(0, 6) + '...'
          : ''
      }`;
      this.addOutput(this.path, output);
    }
  }

  private updateInputs() {
    const connections = this.options?.editor?.getConnections();

    const connectionToThisNode = connections?.find((connection) => {
      return connection?.target === this.id;
    });

    if (connectionToThisNode && this.inputs.array) {
      this.inputs.array.label = connectionToThisNode.sourceOutput.toString();
      this.path = this.inputs.array.label;
    }
  }
}
