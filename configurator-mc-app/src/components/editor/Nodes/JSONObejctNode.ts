import { ClassicPreset } from 'rete';
import { INITIAL_HEIGHT, INITIAL_WIDTH } from '../constants';
import { ConnProps, EditorExtraOptions, TProductNode } from '../types';

const socket = new ClassicPreset.Socket('socket');

export class JSONObejctNode extends ClassicPreset.Node<
  {
    jsonObject: ClassicPreset.Socket;
  },
  TProductNode,
  {}
> {
  path: string = '';
  height = INITIAL_HEIGHT;
  width = INITIAL_WIDTH;
  options?: EditorExtraOptions;
  returningObject: Record<string, any> = {};
  change?: () => void;

  constructor(options?: EditorExtraOptions, change?: () => void) {
    super('JSON OBJECT');

    const jsonObject = new ClassicPreset.Input(socket, 'JSON object');

    this.addInput('jsonObject', jsonObject);
    this.options = options;
  }

  async data(inputs: { jsonObject: any[] }): any {
    const connections = this.options?.editor?.getConnections();
    const connectionToThisNode = connections?.find((connection) => {
      return connection?.target === this.id;
    });
    
    if (connectionToThisNode && this.inputs.jsonObject) {
      this.inputs.jsonObject.label = connectionToThisNode.sourceOutput;
      this.path = this.inputs.jsonObject.label;
    }

    const { jsonObject } = inputs;

    const outputKeys = Object.keys(this.outputs);
    const jsonObjectKeys = Object.keys(jsonObject?.[0] || {});
    const heightMultiplier = jsonObjectKeys.length;
    this.height = INITIAL_HEIGHT + 40 * heightMultiplier;

    jsonObjectKeys
      .filter((key) => !outputKeys.includes(key))
      .forEach((key) => {
        this.returningObject[key] = jsonObject?.[0]?.[key];
        this.addOutput(key, new ClassicPreset.Output(socket, key));
      });
    this.options?.area?.update('node', this.id);

    return this.returningObject;
  }
}
