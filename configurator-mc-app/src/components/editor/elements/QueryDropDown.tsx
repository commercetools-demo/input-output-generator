import { useEffect } from 'react';
import { QueryDropdownControl } from '../controls/QueryDropdownControl';

export function QueryDropdownElement(props: { data: QueryDropdownControl }) {
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.data.entity = event.target.value;
    props.data.onChange(event.target.value);
  };
  useEffect(() => {
    if (props.data.entity) {
      props.data.onChange(props.data.entity);
    }
  }, []);
  return (
    <select onChange={onChange}>
      <option value="products">Products</option>
      <option value="orders">Orders</option>
      <option value="payments">Payments</option>
    </select>
  );
}
