import { ClassicPreset } from 'rete';
import { Product } from '@commercetools/platform-sdk';
import { INITIAL_HEIGHT } from '../constants';
import { EditorExtraOptions } from '../types';
import { QueryDropdownControl } from '../controls/QueryDropdownControl';
import { SampleDataResult } from '../../../hooks/sampler-connection/types';
import { BasicNode } from './basic-node';
import { retryOperation } from '../utils';

const socket = new ClassicPreset.Socket('socket');

const SAMPLE_INITIAL_HEIGHT = INITIAL_HEIGHT + 50;

// TODO: make a generic class for all CT entities
// TODO: generic class can also accept graph ql query
export class SamplerNode extends BasicNode<
  {
    entity: ClassicPreset.Socket;
  },
  Record<string, ClassicPreset.Socket>,
  {}
> {
  height = SAMPLE_INITIAL_HEIGHT + 50;
  expands: string[] = [];
  selectedEntity: string = '';

  constructor(options?: EditorExtraOptions, change?: () => void) {
    super('Sampler', options, change);
    const entity = new ClassicPreset.Input(socket, 'Entity name');
    const dropdownControl = new QueryDropdownControl(this.onDropdownChange);
    dropdownControl.entity = options?.initial;

    entity.addControl(dropdownControl);

    this.addInput('entity', entity);
  }

  addToExpands(expand: string) {
    this.expands.push(expand);
    return this.onChangeExpands();
  }

  removeFromExpands(expand: string) {
    this.expands = this.expands.filter((e) => e !== expand);
    return this.onChangeExpands();
  }

  async checkRoot() {
    return retryOperation(async () => {
      if (Object.keys(this.returningObject).length) {
        return true;
      }
      throw new Error('not filled yet');
    })
      .then(() => {})
      .catch((e) => {
        console.log('error: not filled at the end', e);
      });
  }

  private onDropdownChange = async (value: string) => {
    this.selectedEntity = value;
    await this.getData(value, { limit: 5 });
  };

  private onChangeExpands = async () => {
    if (this.selectedEntity) {
      let body: Record<string, number | string | string[]> = { limit: 5 };
      if (this.expands.length > 0) {
        body = {
          ...body,
          expand: this.expands,
        };
      }
      return this.getData(this.selectedEntity, body);
    }
  };

  private getData = async (value: string, body?: object) => {
    const queryResult = await this.options?.getSampleData?.(value, body);
    if (!queryResult || queryResult.results.length === 0) {
      console.log('no results');
      return;
    }

    this.updateOutputs(queryResult);

    this.updateNode();
  };

  async data(): Promise<Record<string, string | number | object>> {
    return this.returningObject;
  }

  async updateNode() {
    await this.options?.area?.update('node', this.id);

    this.options?.engine?.reset();
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
