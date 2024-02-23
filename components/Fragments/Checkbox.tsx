import React from 'react';

const Checkbox = (
    props:{ label:string,
          checked:boolean,
          onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
         }) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
        className="form-checkbox text-indigo-600 focus:ring-indigo-500 h-4 w-4"
      />
      <span className="text-sm">{props.label}</span>
    </label>
  );
};

export default Checkbox;
