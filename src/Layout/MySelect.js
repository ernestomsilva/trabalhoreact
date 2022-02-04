const MySelect = ({ selectedValue, values, onChange }) => {
    return (
    <select value={selectedValue} onChange={onChange}>
      {[
        <option key={-1} value="-1">
          NOT SELECTED
        </option>,
        ...values.map((product, index) => {
          return (
            <option key={index} value={product?.id}>
              {product?.id}
            </option>
          );
        }),
      ]}
    </select>
  );
};

export default MySelect;
