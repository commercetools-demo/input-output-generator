import { ClassicPreset } from 'rete';

export class ButtonControl extends ClassicPreset.Control {
  private _label: string = '';

  constructor(public onClick: () => void) {
    super();
  }
  get label(): string {
    return this._label;
  }
  set label(value: string) {
    this._label = value;
  }
}
