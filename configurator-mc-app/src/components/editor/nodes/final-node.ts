import { ClassicPreset } from 'rete';
import { INITIAL_HEIGHT } from '../constants';
import { ConnProps, EditorExtraOptions } from '../types';
import { ButtonControl } from '../controls/ButtonControl';
import { Socket } from 'rete/_types/presets/classic';
import { BasicNode } from './basic-node';

const socket = new ClassicPreset.Socket('socket');

export class FinalNode extends BasicNode<
  Record<string, Socket>,
  {},
  {
    addButton: ButtonControl;
  }
> {
  connections: Record<string, ConnProps | undefined> = {};
  constructor(options?: EditorExtraOptions, change?: () => void) {
    super('OUTPUT', options, change);

    const input0 = new ClassicPreset.Input(socket, 'input0');
    const addButton = new ButtonControl(() => this.addInputControl(change));
    addButton.label = '+';

    this.addInput('input0', input0);
    this.addControl('addButton', addButton);
  }

  connectionAdded = (connection: ConnProps) => {
    Object.keys(this.inputs).forEach((key) => {
      const connectionIdentifier = connection.targetInput.toString();
      if (
        this.inputs[key] &&
        connectionIdentifier === key &&
        !this.connections[connectionIdentifier]
      ) {
        this.connections[connectionIdentifier] = connection;
        this.inputs[key]!.label = connection.sourceOutput.toString();
      }
    });
  };
  connectionRemoved = (connection: ConnProps) => {
    const connectionIdentifier = connection.targetInput.toString();

    if (this.inputs[connectionIdentifier]) {
      this.connections[connectionIdentifier] = undefined;
    }
  };

  addInputControl = (change?: () => void) => {
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

  createBulkInputs = (count: number) => {
    for (let index = 1; index < count; index++) {
      this.addInputControl();
    }
  };

  async data(): Promise<string> {
    return 'data';
  }
}
