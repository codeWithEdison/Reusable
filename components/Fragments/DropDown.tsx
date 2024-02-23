// Dropdown.tsx
import React, { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

//dropdown options
export interface Option {
  OptionName: string;
  value?: number | string;
}
 export interface dropdownStyle{
  buttonStyle: string;
  optionStyle: string;
}

// drop dwon interfacwe props
export interface DropdownProps {
  options: Option[];
  style ?: dropdownStyle;
  tag?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, tag ,style }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    options.length > 0 ? options[0] : null
  );
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const filteredOptions = options.filter((option) =>
    option.OptionName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative inline-block text-left ">
      <div>
        <button
          type="button"
          onClick={handleToggle}
          className={style ? style.buttonStyle :`flex items-center w-96 rounded-md bg-blue-white shadow-sm px-4 py-2 text-xl font-medium text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 `}
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >

          {selectedOption ? (
            <div className='flex flex-row justify-between items-center w-full '>
            <div className=' flex flex-row items-center gap-2'>
                <FaCheckCircle className='font-bold text-my-blue mr-2'/>
              <span className="mr-3 font-bold">{selectedOption.OptionName} </span><span>{ tag && `- ${tag}`} </span>
              </div>
              <div>

              <span><FaAngleDown  className=' text-my-blue font-bold right-2 top-3 absolute items-center'/></span>
              </div>
            </div>
          ) : (
            'Select an option'
          )}
        </button>
      </div>

      {isOpen && ( 
        <div className=" origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50  ">
          <div className="p-2">
            <input
              type="text"
              placeholder="Search options"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <button
                  key={option.OptionName}
                  onClick={() => handleSelect(option)}
                  className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
                    option === selectedOption ? 'bg-gray-200' : ''
                  }`}
                  role="menuitem"
                >
                  <div className={style ? style.optionStyle :`flex w-80 mx-2 justify-between items-center`}>
                    <span className="mr-2 text-lg">{option.OptionName}</span>
                   {option.value &&  
                   <span className='text-my-blue bg-blue-white rounded-lg px-2 py-1 '>{option.value} </span> 
                  }
                   </div>
                </button>
              ))
            ) : (
              <div className="p-2 text-gray-500">No matching options found</div>
              
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
