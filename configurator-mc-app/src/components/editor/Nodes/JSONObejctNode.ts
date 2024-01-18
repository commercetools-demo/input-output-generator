import { ClassicPreset } from 'rete';
import { INITIAL_HEIGHT, INITIAL_WIDTH } from '../constants';
import { EditorExtraOptions, TProductNode } from '../types';

const socket = new ClassicPreset.Socket('socket');

export class JSONObejctNode extends ClassicPreset.Node<
  {
    jsonObject: ClassicPreset.Socket;
  },
  TProductNode,
  {}
> {
  height = INITIAL_HEIGHT;
  width = INITIAL_WIDTH;
  options?: EditorExtraOptions;
  returningObject: Record<string, any> = {};
  change?: () => void;

  constructor(options?: EditorExtraOptions, change?: () => void) {
    super('JSON OBJECT');

    const jsonObject = new ClassicPreset.Input(socket, 'JSON object');

    jsonObject.addControl(
      new ClassicPreset.InputControl('text', { initial: '', change })
    );

    this.addInput('jsonObject', jsonObject);
    this.options = options;
  }

  async data(inputs: { jsonObject: any[] }): any {
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

    return this.returningObject;
  }
}
