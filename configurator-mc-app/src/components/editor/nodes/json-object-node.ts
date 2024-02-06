import { ClassicPreset } from 'rete';
import { INITIAL_HEIGHT } from '../constants';
import { EditorExtraOptions } from '../types';
import { CheckboxControl } from '../controls/CheckboxControl';
import { getFullPathExceptRoot, getSamplerRoot } from '../utils';
import { BasicNode } from './basic-node';

const socket = new ClassicPreset.Socket('socket');

export class JSONObejctNode extends BasicNode<
  {
    jsonObject: ClassicPreset.Socket;
  },
  Record<string, ClassicPreset.Socket>,
  {
    expand: CheckboxControl;
  }
> {

  constructor(options?: EditorExtraOptions, change?: () => void) {
    super('JSON object', options, change);
    const jsonObject = new ClassicPreset.Input(socket, 'JSON object');
    const expand = new CheckboxControl(this.onChange);
    expand.label = 'Expand?';

    this.addInput('jsonObject', jsonObject);
    this.addControl('expand', expand);
  }

  async data(inputs: { jsonObject: Record<string, string | number | object>[] }) {
    this.updateInputs();

    const { jsonObject } = inputs;

    this.updateOutputs(jsonObject);
    this.updateControls();
    this.updateNode();

    return this.returningObject;
  }

  onChange = async (checked: boolean) => {
    const root = getSamplerRoot(this.options?.editor!);
    const fullPath = getFullPathExceptRoot(this.id, this.options?.editor!);

    if (root) {
      if (checked) {
        await root.addToExpands(fullPath);
      } else {
        await root.removeFromExpands(fullPath);
      }
    }

    this.change?.();
    this.updateNode();
  };

  private updateOutputs(jsonObject: Record<string, string | number | object>[]) {
    const outputKeys = Object.keys(this.outputs);
    const jsonObjectKeys = Object.keys(jsonObject?.[0] || {});
    const heightMultiplier = jsonObjectKeys.length;
    this.height = INITIAL_HEIGHT + 40 * heightMultiplier;

    jsonObjectKeys
      .filter((key) => !outputKeys.includes(key))
      .forEach((key) => {
        this.addOutput(key, new ClassicPreset.Output(socket, key));
      });
    outputKeys
      .filter((key) => !jsonObjectKeys.includes(key))
      .forEach((key) => {
        this.removeOutput(key);
      });
    jsonObjectKeys.forEach((key) => {
      this.returningObject[key] = jsonObject?.[0]?.[key];
    });
  }

  private updateControls() {
    if (this.returningObject?.id && this.returningObject?.typeId) {
      this.controls.expand.show = true;
    }
  }

  private updateInputs() {
    const connections = this.options?.editor?.getConnections();
    const connectionToThisNode = connections?.find((connection) => {
      return connection?.target === this.id;
    });

    if (connectionToThisNode && this.inputs.jsonObject) {
      this.inputs.jsonObject.label = connectionToThisNode.sourceOutput.toString();
      this.path = this.inputs.jsonObject.label;
    }
  }
}
