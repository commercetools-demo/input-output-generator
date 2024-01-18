import { ClassicPreset } from 'rete';

export class QueryDropdownControl extends ClassicPreset.Control {
  private _entity: string = '';

  constructor(public onChange: (value: string) => void) {
    super();
  }
  get entity(): string {
    return this._entity;
  }
  set entity(value: string) {
    this._entity = value;
  }
}
