import { ClassicPreset } from 'rete';
import { Control } from 'rete/_types/presets/classic';
import { EditorExtraOptions, StoredNode } from '../types';
import { INITIAL_HEIGHT, INITIAL_WIDTH } from '../constants';

export class BasicNode<
  Inputs extends Record<string, ClassicPreset.Socket>,
  Outputs extends Record<string, ClassicPreset.Socket>,
  Controls extends Record<string, Control>
> extends ClassicPreset.Node<Inputs, Outputs, Controls> {
  path: string = '';
  height = INITIAL_HEIGHT;
  width = INITIAL_WIDTH;
  options?: EditorExtraOptions;
  change?: () => void;
  returningObject: Record<string, string | number | object> = {};

  constructor(
    label: string,
    options?: EditorExtraOptions,
    change?: () => void
  ) {
    super(label);
    this.change = change;
    this.options = options;

    if (options?.id) {
      this.id = options?.id;
    }
  }

  async updateNode() {
    return this.options?.area?.update('node', this.id);
  }

  getExportData(): StoredNode {
    return {
      id: this.id,
      label: this.label,
      path: this.path,
      returningObject: this.returningObject,
      width: this.width,
      height: this.height,
      outputs: Object.keys(this.outputs).reduce(
        (prev, curr) => ({
          ...prev,
          [curr]: {
            id: this.outputs[curr]?.id,
            label: this.outputs[curr]?.label,
          },
        }),
        {}
      ),
      controls: Object.keys(this.controls).reduce(
        (prev, curr) => ({
          ...prev,
          [curr]: {
            id: this.controls[curr]?.id,
            label: this.controls[curr]?.label,
          },
        }),
        {}
      ),
      inputs: Object.keys(this.inputs).reduce(
        (prev, curr) => ({
          ...prev,
          [curr]: {
            id: this.inputs[curr]?.id,
            label: this.inputs[curr]?.label,
          },
        }),
        {}
      ),
    };
  }
}
