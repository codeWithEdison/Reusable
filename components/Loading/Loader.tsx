import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loader = (props: { className?: string; title?: string }) => {
  return (
    <div
      className={`flex flex-col items-center gap-2 justify-center w-full border rounded-md py-6 text-center px-4 mt-3 ${
        props.className ?? "bg-gray-100"
      }`}
    >
      <div>
        <AiOutlineLoading3Quarters className="text-5xl text-yellow-500 animate-spin" />
      </div>
      <div className="text-lg font-light">
        {props.title ?? "Loading, please wait..."}
      </div>
    </div>
  );
};

export default Loader;
