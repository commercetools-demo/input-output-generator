import { ClassicPreset } from 'rete';
import { Product } from '@commercetools/platform-sdk';
import { INITIAL_HEIGHT, INITIAL_WIDTH } from '../constants';
import { EditorExtraOptions, TProductNode } from '../types';
import { QueryDropdownControl } from '../controls/QueryDropdownControl';
import { SampleDataResult } from '../../../hooks/sampler-connection/types';

const socket = new ClassicPreset.Socket('socket');

const SAMPLE_INITIAL_HEIGHT = INITIAL_HEIGHT + 50;

// TODO: make a generic class for all CT entities
// TODO: generic class can also accept graph ql query
export class SamplerNode extends ClassicPreset.Node<
  {
    entity: ClassicPreset.Socket;
  },
  {},
  {}
> {
  height = SAMPLE_INITIAL_HEIGHT + 50;
  width = INITIAL_WIDTH;
  options?: EditorExtraOptions;
  returningObject: Record<string, any> = {};
  expands: string[] = [];
  change?: () => void;

  constructor(options?: EditorExtraOptions, change?: () => void) {
    super('Sampler');
    const entity = new ClassicPreset.Input(socket, 'Entity name');
    const dropdownControl = new QueryDropdownControl(this.onDropdownChange);
    dropdownControl.entity = options?.initial;

    entity.addControl(dropdownControl);

    this.addInput('entity', entity);
    this.options = options;
  }

  private onDropdownChange = async (value: string) => {
    await this.getData(value);
  };

  private onAddExpand = () => {
    // @ts-ignore
    if (this.inputs['entity']?.control?._entity) {
      // @ts-ignore
      this.getData(this.inputs['entity']?.control._entity, {
        expand: this.expands,
      });
    }
  };

  private getData = async (value: string, body?: any) => {
    const queryResult = await this.options?.getSampleData?.(value, body);
    if (!queryResult || queryResult.results.length === 0) {
      console.log('no results');
      return;
    }

    this.updateOutputs(queryResult);

    this.updateNode();
  };

  async data(): Promise<Record<string, any>> {
    return this.returningObject;
  }

  private updateNode() {
    this.options?.area?.update('node', this.id);
    // const nodes = this.options?.editor?.getNodes();

    // this.options?.engine?.reset();
    // nodes?.forEach((node) => {
    //    this.options?.area?.update('node', node.id);
    // });
  }

  private updateOutputs(queryResult: SampleDataResult) {
    const queryResultKeys = Object.keys(queryResult);
    const outputKeys = Object.keys(this.outputs);
    const heightMultiplier = queryResultKeys.length;

    this.height = SAMPLE_INITIAL_HEIGHT + 20 * heightMultiplier;
    /// TODO: update might have to happen to values so remove all outputs and add new on getData
    (queryResultKeys as Array<keyof Product>)
      .filter((key) => !outputKeys.includes(key))
      .forEach((key) => {
        this.addOutput(key, new ClassicPreset.Output(socket, key));
      });
    (queryResultKeys as Array<keyof Product>).forEach((key) => {
      this.returningObject[key] = queryResult[key];
    });
  }
}
