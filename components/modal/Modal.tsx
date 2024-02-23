

import React, { ReactNode, useEffect, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";


interface ModalProps {
  isOpen? : boolean;
  onClose: () => void;
  children?: ReactNode;
  title?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
  const {
    isOpen,
    onClose,
    children,
    title,
  } = props;
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const modalRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
     className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-white py-4 rounded-lg animate__animated animate__zoomIn animate__faster ">
       
       <div className="flex flex-row gap-5 items-center bold border-blue-white border-b-2 pb-2 mx-0 ">
        <button
          className="flex gap-1 ml-5 items-center text-[#2a82d2] bg-[#e1f3ff] rounded-lg p-2  top-2 left-2 hover:text-gray-800"
          onClick={onClose}
        >
          <FaArrowLeft /> 
          Back
        </button>
        <h2 className="font-bold text-xl pr-5">{title}</h2>
       </div>

       <div className="flex flex-col">
            {children}
       </div>
        

        
      </div>
    </div>
  );
};

export default Modal;
