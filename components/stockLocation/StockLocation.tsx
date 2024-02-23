import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Location.css';
import Alert, { AlertType } from '../Alert/Alert';
interface PopupProps {
  onClose: () => void;
}

const StockLocation: React.FC<PopupProps> = ({ onClose }) => {
  const [stockName, setStockName] = useState('');
  const [stockLocation, setStockLocation] = useState('');
  const [isAlert, setAlert] = useState(false)

  const handleStockNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStockName(e.target.value);
  };

  const handleStockLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStockLocation(e.target.value);
  };
  const [error, setError] = useState('');
 
 const closeAlert = () => {
  setAlert(false);
 }

  const handleCreate = () => {
    if(stockName.trim() == "")
    {
      setError('Enter stock Name Please!');
    }
    else if(stockLocation.trim() == "")
    {
      setError('Enter Stock Location please!');
    }
    else
    {
    setError( `Stock "${stockName}" created successfully!`);
    setTimeout(() => {
      onClose();
    }, 3000);
    }

  
  //   // onClose();
  setAlert(true);
  };

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

  return (
    <div className="popup-container " onClick={handleOverlayClick}>
      <div className="popup animate__animated animate__zoomIn animate__faster rounded-lg">
        <div className="popup-header">
          <button className="back-button rounded-lg bg-blue-white px-4 text-xl" onClick={onClose}>
            &#8592; Back
          </button>
          <h4 className='font-bold'>Create new stock location</h4>
        </div>
      {isAlert && <Alert alertType= {AlertType.WARNING} title={error} close={closeAlert}  timeOut={2000} />}
        {/* <hr className="hr"></hr> */}
        <div className="popup-body">
          <label className='text-black text-lg'>
            Stock name:
            <input 
            className='bg-my-gray outline-none'
            type="text" value={stockName} onChange={handleStockNameChange} />
          </label>
          <label className='text-black text-lg'>
            Stock location:
            <input
            className=' bg-my-gray outline-none'
            type="text" value={stockLocation} onChange={handleStockLocationChange} />
          </label>
          <button className="create-button" onClick={handleCreate}>
            Create - <span className="create-button-stock-name">{stockName ? stockName : "New"}</span> - Store
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default StockLocation;