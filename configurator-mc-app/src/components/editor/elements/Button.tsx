import { ButtonControl } from '../controls/ButtonControl';

export function ButtonElement(props: { data: ButtonControl }) {
  return (
    <button
      onPointerDown={(e) => e.stopPropagation()}
      onDoubleClick={(e) => e.stopPropagation()}
      onClick={props.data.onClick}
      type="button"
    >
      {props.data.label}
    </button>
  );
}
