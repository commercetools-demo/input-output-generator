import { QueryDropdownControl } from '../controls/QueryDropdownControl';

export function QueryDropdownElement(props: { data: QueryDropdownControl }) {
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.data.entity = event.target.value;
    props.data.onChange(event.target.value);
  };
  return (
    <select onChange={onChange}>
      <option></option>
      <option value="customer">Customer</option>
      <option value="product">Product</option>
    </select>
  );
}
