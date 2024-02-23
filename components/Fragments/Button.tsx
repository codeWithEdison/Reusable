import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, style }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      style={style}
    >
      {label}
    </button>
  );
};

export default Button;
