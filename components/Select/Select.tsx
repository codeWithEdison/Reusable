import React from 'react';

interface Option {
  value: string;
  label: string;
}

const Select = (props: {
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
}) => {
  return (
    <select
      value={props.selectedValue}
      onChange={(e) => props.onChange(e.target.value)}
      className="border p-2 rounded"
    >
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
