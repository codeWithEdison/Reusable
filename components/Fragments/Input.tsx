// Input.tsx
import React, { ReactNode, useState } from "react";
import Alert,{AlertType} from "../Alert/Alert";

interface InputProps {
  title?: string;
  min?: string;
  max?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  value?: string;
  error?: string | null;
  onCloseError: () => void;
  type: React.HTMLInputTypeAttribute;
  className?: string;
  icon?: ReactNode;
}


const Input: React.FC<InputProps> = ({
  title,
  min,
  max,
  onChange,
  disabled,
  value,
  error,
  onCloseError,
  type,
  className,
  icon,
}) => {
    //   const [showAlert, setShowAlert] = useState(true); 
    // const closeAlert = () =>{
    //   setShowAlert(true);
    //   error = '';
    // }
  return (
    <div className="w-full">
      {title && <div className="text-xl">{title}</div>}
      <div className="relative">
        <input
          type={type}
          className={`px-3 py-2 text-sm w-full border font-bold focus:outline-2 ${
            error ? "border-red-600" : " outline-my-blue border-my-blue"
          } rounded-md ${
            className === undefined ? "bg-gray-100" : className
          }`}
          disabled={disabled}
          value={value}
          onChange={onChange}
          min={type === "date" ? min : undefined}
          max={type === "date" ? max : undefined}
        />
        {icon && (
          <div className="absolute top-2 right-2 text-xl font-bold">
            {icon}
          </div>
        )}
      </div>
      {error && 
        <div className="text-red-600 mt-1 bg-red-100 rounded-lg">
          
         <Alert title={error} alertType={AlertType.DANGER} close={onCloseError} timeOut={7000}/>
           {/* {error}
          {onCloseError && (
            <button className="ml-2 text-sm" onClick={onCloseError}>
              Close
            </button>
          )} */}
        </div>
      }
    </div>
  );
};

export default Input;
