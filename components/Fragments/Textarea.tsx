import React from "react";

const Textarea = (props: {
  title: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled: boolean;
  value: string;
  error: string;
  onCloseError?: () => void;
  className?: string;
}) => {
  return (
    <div>
      <div className="text-sm">{props.title}</div>
      <textarea
        className={`px-3 py-2 text-sm w-full border  ${
          props.error !== "" ? "border-red-600" : ""
        } rounded-md ${
          props.className !== undefined ? props.className : "bg-gray-100"
        }`}
        disabled={props.disabled}
        value={props.value}
        onChange={props.onChange}
      />

    </div>
  );
};

export default Textarea;
