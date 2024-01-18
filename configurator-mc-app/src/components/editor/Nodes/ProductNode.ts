import { ClassicPreset } from 'rete';
import { Product } from '@commercetools/platform-sdk';
import { INITIAL_HEIGHT, INITIAL_WIDTH } from '../constants';
import { EditorExtraOptions, TProductNode } from '../types';

const socket = new ClassicPreset.Socket('socket');

// TODO: make a generic class for all CT entities
// TODO: generic class can also accept graph ql query
export class ProductNode extends ClassicPreset.Node<
  {
    product: ClassicPreset.Socket;
  },
  TProductNode,
  {}
> {
  height = INITIAL_HEIGHT;
  width = INITIAL_WIDTH;
  options?: EditorExtraOptions;
  change?: () => void;

  constructor(options?: EditorExtraOptions, change?: () => void) {
    super('PRODUCT');

    const product = new ClassicPreset.Input(socket, 'product data');

    product.addControl(
      new ClassicPreset.InputControl('text', { initial: '', change })
    );

    this.addInput('product', product);
    this.options = options;
  }

  async data(inputs: { product: Product[] }): any {
    // TODO: do not need to call the endpoint every time. store productData on class level
    // const productData = await this.options.getProductData(
    //   this.inputs.productId?.control?.value
    // );

    if (!inputs.product?.[0]) {
      return {};
    }
    const productDataKeys = Object.keys(inputs.product[0]);
    const outputKeys = Object.keys(this.outputs);
    const heightMultiplier = productDataKeys.length;

    this.height = INITIAL_HEIGHT + 20 * heightMultiplier;
    (productDataKeys as Array<keyof Product>)
      .filter((key) => !outputKeys.includes(key))
      .forEach((key) => {
        this.addOutput(key, new ClassicPreset.Output(socket, key));
      });
    return inputs.product[0];
  }
}
