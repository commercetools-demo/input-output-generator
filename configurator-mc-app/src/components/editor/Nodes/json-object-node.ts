import { ClassicPreset } from 'rete';
import { INITIAL_HEIGHT, INITIAL_WIDTH } from '../constants';
import { ConnProps, EditorExtraOptions, TProductNode } from '../types';
import { CheckboxControl } from '../controls/CheckboxControl';
import { ArrayNode } from './array-node';
import { SamplerNode } from './sample-node';
import { getFullPath, getSamplerRoot } from '../utils';

const socket = new ClassicPreset.Socket('socket');

export class JSONObejctNode extends ClassicPreset.Node<
  {
    jsonObject: ClassicPreset.Socket;
  },
  TProductNode,
  {
    expand: CheckboxControl;
  }
> {
  path: string = '';
  height = INITIAL_HEIGHT;
  width = INITIAL_WIDTH;
  options?: EditorExtraOptions;
  returningObject: Record<string, any> = {};
  change?: () => void;

  constructor(options?: EditorExtraOptions, change?: () => void) {
    super('JSON object');

    const jsonObject = new ClassicPreset.Input(socket, 'JSON object');
    const expand = new CheckboxControl(this.onChange);
    expand.label = 'Expand?';

    this.addInput('jsonObject', jsonObject);
    this.addControl('expand', expand);

    this.options = options;
    this.change = change;
  }

  async data(inputs: { jsonObject: any[] }): any {
    this.updateInputs();

    const { jsonObject } = inputs;

    this.updateOutputs(jsonObject);
    this.updateControls();
    this.updateNode();

    return this.returningObject;
  }

  onChange = async (checked: boolean) => {
    const root = getSamplerRoot(this.options?.editor!);
    const fullPath = getFullPath(this.id, this.options?.editor!);

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

  private updateNode() {
    this.options?.area?.update('node', this.id);
  }

  private updateOutputs(jsonObject: any[]) {
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
      this.inputs.jsonObject.label = connectionToThisNode.sourceOutput;
      this.path = this.inputs.jsonObject.label;
    }
  }
}
