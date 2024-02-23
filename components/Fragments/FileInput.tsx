import React from "react";

const FileInput = (props: {
  title: string;
  onChange: (file: File) => void;
  disabled: boolean;
  error: string;
  onCloseError?: () => void;
  accept?: string | undefined;
  className?: string;
}) => {
  return (
    <div>
      <div className="text-sm">{props.title}</div>
      <input
        type={"file"}
        className={`px-3 py-2 text-sm w-full border ${
          props.error !== "" ? "border-red-600" : ""
        } rounded-md ${
          props.className === undefined ? "bg-gray-100" : props.className
        }`}
        disabled={props.disabled}
        onChange={(e) => {
          if (e.target.files !== null && e.target.files.length > 0) {
            props.onChange(e.target.files[0]);
          }
        }}
        accept={props.accept}
      />
    </div>
  );
};

export default FileInput;
