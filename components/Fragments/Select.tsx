import React from "react";

const Select = (props: {
  title: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled: boolean;
  value: string;
  error: string;
  onCloseError?: () => void;
  className?: string;
  data: { value: string; caption: string }[];
}) => {
  return (
    <div>
      <div className="text-sm">{props.title}</div>
      <select
        className={`px-3 py-2 text-sm w-full border ${
          props.error !== "" ? "border-red-600" : ""
        } rounded-md ${
          props.className === undefined ? "bg-gray-100" : props.className
        }`}
        disabled={props.disabled}
        value={props.value}
        onChange={props.onChange}
      >
        {props.data.find((itm) => itm.value === "") === undefined && (
          <option value=""></option>
        )}
        {props.data.map((item, i) => (
          <option key={i + 1} value={item.value}>
            {item.caption}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
