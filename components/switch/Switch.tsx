import React from "react";

interface SwitchProps {
  value: boolean;
  onChange: () => void;
}

const Switch = (props: SwitchProps) => {
  const toggleClass = " transform translate-x-6";
  return (
    <div
      onClick={props.onChange}
      className={`md:w-14 md:h-7 w-12 h-6 flex items-center ${
        props.value === true ? "bg-primary-100" : "bg-gray-300"
      } rounded-full p-1 cursor-pointer`}
    >
      {/* Switch */}
      <div
        className={`${
          props.value === true ? "bg-primary-700" : "bg-white"
        } md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transition transform${
          props.value ? toggleClass : null
        }`}
      ></div>
    </div>
  );
};

export default Switch;
