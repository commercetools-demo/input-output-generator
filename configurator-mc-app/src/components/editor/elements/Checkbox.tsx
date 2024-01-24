import { useEffect } from 'react';
import { CheckboxControl } from '../controls/CheckboxControl';

export function CheckboxElement(props: { data: CheckboxControl }) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    props.data.checked = checked;
    props.data.onChange(checked);
  };
  useEffect(() => {
    if (props.data.checked) {
      props.data.onChange(props.data.checked);
    }
  }, []);
  return (
    <div style={{ display: props.data.show ? 'flex' : 'none' }}>
      <input
        onPointerDown={(e) => e.stopPropagation()}
        onDoubleClick={(e) => e.stopPropagation()}
        id={props.data.id}
        type="checkbox"
        onChange={onChange}
      ></input>
      <label
        onPointerDown={(e) => e.stopPropagation()}
        onDoubleClick={(e) => e.stopPropagation()}
        htmlFor={props.data.id}
      >
        {props.data.label}
      </label>
    </div>
  );
}
