import { ClassicPreset } from 'rete';

export class CheckboxControl extends ClassicPreset.Control {
  private _checked: boolean = false;
  private _show: boolean = false;

  private _label: string = '';

  constructor(public onChange: (checked: boolean) => void) {
    super();
  }
  get checked(): boolean {
    return this._checked;
  }
  set checked(value: boolean) {
    this._checked = value;
  }

  get label(): string {
    return this._label;
  }
  set label(value: string) {
    this._label = value;
  }

  get show(): boolean {
    return this._show;
  }
  set show(value: boolean) {
    this._show = value;
  }
}
