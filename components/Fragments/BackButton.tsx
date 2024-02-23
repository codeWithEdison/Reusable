import React from "react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

const BackButton = (props: {
  onClick?: () => void;
  className?: string;
  title: string;
}) => {
  return (
    <div
      className={`px-3 pl-2 py-2 rounded flex flex-row items-center justify-center gap-1 cursor-pointer animate__animated animate__fadeIn ${props.className}`}
      onClick={props.onClick}
    >
      <div>
        <HiOutlineArrowSmLeft className="text-2xl" />
      </div>
      <span>{props.title}</span>
    </div>
  );
};

export default BackButton;
