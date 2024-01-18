import { ClassicPreset } from 'rete';
import { Product } from '@commercetools/platform-sdk';
import { INITIAL_HEIGHT, INITIAL_WIDTH } from '../constants';
import { EditorExtraOptions, TProductNode } from '../types';
import { QueryDropdownControl } from '../controls/QueryDropdownControl';

const socket = new ClassicPreset.Socket('socket');

// TODO: make a generic class for all CT entities
// TODO: generic class can also accept graph ql query
export class QueryNode extends ClassicPreset.Node<
  {
    entity: ClassicPreset.Socket;
  },
  {},
  {}
> {
  height = INITIAL_HEIGHT;
  width = INITIAL_WIDTH;
  options?: EditorExtraOptions;
  returningObject: Record<string, any> = {};
  change?: () => void;

  constructor(options?: EditorExtraOptions, change?: () => void) {
    super('Query');
    const entity = new ClassicPreset.Input(socket, 'Entity name');
    const dropdownControl = new QueryDropdownControl(this.onChange);
    dropdownControl.entity = options?.initial

    entity.addControl(dropdownControl);

    this.addInput('entity', entity);
    // this.addControl('dropdownControl', dropdownControl);
    this.options = options;
  }

  private onChange = async (value: string) => {
    const queryResult = await this.options?.getSampleData(value);
    if (!queryResult || queryResult.results.length === 0) {
      console.log('no results');

      return;
    }

    const queryResultKeys = Object.keys(queryResult);
    const outputKeys = Object.keys(this.outputs);
    const heightMultiplier = queryResultKeys.length;

    this.height = INITIAL_HEIGHT + 20 * heightMultiplier;
    (queryResultKeys as Array<keyof Product>)
      .filter((key) => !outputKeys.includes(key))
      .forEach((key) => {
        this.returningObject[key] = queryResult[key];

        this.addOutput(key, new ClassicPreset.Output(socket, key));
      });

    this.options?.area?.update('node', this.id);
  };

  async data(): Promise<Record<string, any>> {
    return this.returningObject;
  }
}
