import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadingCircle = (props: { className?: string; title?: string; subTitle?:string }) => {
  return (
    <div
      className={`flex flex-col items-center gap-2 justify-center w-96 h-56 shadow-lg rounded-lg py-6 text-center px-8 mt-3 ${
        props.className ?? "bg-gray-100" 
      }`} 
    >
      <div>
        <AiOutlineLoading3Quarters className="text-7xl text-yellow-500 animate-spin font-bold" />
      </div>
      <div className="">
        <h3 className="text-lg font-bold"> {props.title ?? "Loading "}</h3>
        <h5 className="text-md font-light">{props.subTitle ?? "please wait..."} </h5>
       
      </div>
    </div>
  );
};

export default LoadingCircle;
