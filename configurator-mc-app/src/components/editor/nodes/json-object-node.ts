import { ClassicPreset } from 'rete';
import { INITIAL_HEIGHT } from '../constants';
import { EditorExtraOptions, StoredNode } from '../types';
import { CheckboxControl } from '../controls/CheckboxControl';
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
  isExpanded = false;
  constructor(
    options?: EditorExtraOptions,
    isExpanded?: boolean,
    change?: () => void
  ) {
    super('JSON object', options, change);
    const jsonObject = new ClassicPreset.Input(socket, 'JSON object');
    const expand = new CheckboxControl(this.onChange);
    expand.label = 'Expand?';

    this.addInput('jsonObject', jsonObject);
    this.addControl('expand', expand);

    if (isExpanded) {
      this.isExpanded = isExpanded;
      this.controls.expand.show = true;
      this.onChange(isExpanded);
    }
  }

  async data(inputs: {
    jsonObject: Record<string, string | number | object>[];
  }) {
    this.updateInputs();

    const { jsonObject } = inputs;

    this.updateOutputs(jsonObject);
    this.updateControls();
    this.updateNode();

    return this.returningObject;
  }

  onChange = async (checked: boolean) => {
    this.isExpanded = checked;
    this.controls.expand.checked = checked;
    const root = this.options?.editor?.getRoot();
    const fullPath = this.options?.editor?.getFullPath(this.id);

    if (root && fullPath) {
      const list = fullPath.split('.').filter(Boolean);
      list.splice(0, 1);
      const fullPathExceptRoot = list.join('.');

      if (checked) {
        await root.addToExpands(fullPathExceptRoot);
      } else {
        await root.removeFromExpands(fullPathExceptRoot);
      }
    }

    await this.updateNode();
    this.change?.();
  };

  getExportData(): StoredNode {
    const storedNode = super.getExportData();
    return {
      ...storedNode,
      isExpanded: this.isExpanded,
    };
  }

  private updateOutputs(
    jsonObject: Record<string, string | number | object>[]
  ) {
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
      this.inputs.jsonObject.label =
        connectionToThisNode.sourceOutput.toString();
      this.path = this.inputs.jsonObject.label;
    }
  }
}
