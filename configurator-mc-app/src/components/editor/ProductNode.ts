import { ClassicPreset } from 'rete';
import { Product } from '@commercetools/platform-sdk';
import { TProductNode, EditorExtraOptions } from '.';

const socket = new ClassicPreset.Socket('socket');

// TODO: make a generic class for all CT entities
export class ProductNode extends ClassicPreset.Node<
  {
    productId: ClassicPreset.Socket;
  },
  TProductNode,
  {}
> {
    // TODO: make height adjustable by number of outputs
  height = 280;
  width = 180;
  options: EditorExtraOptions;
  change?: () => void;

  constructor(options: EditorExtraOptions, change?: () => void) {
    super('PRODUCT');

    const productId = new ClassicPreset.Input(socket, 'sample product ID');

    productId.addControl(
      new ClassicPreset.InputControl('text', { initial: '', change })
    );

    this.addInput('productId', productId);
    this.options = options;
  }

  async data(): any {
    // call customer endpoint with customerId
    const productdata = await this.options.getProductData(
      this.inputs.productId?.control?.value
    );
    console.log({ productdata });

    (Object.keys(productdata) as Array<keyof Product>).forEach((key) => {
      this.addOutput(key, new ClassicPreset.Output(socket, key));
    });
    return productdata;
  }
}
