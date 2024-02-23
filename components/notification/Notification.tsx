// Notification.tsx

import React, { useState, useEffect } from 'react';
import Alert, { AlertType } from './../Alert/Alert'; // Adjust the import path based on your project structure

interface NotificationProps {
  alertType: AlertType;
  title: string;
  description?: string;
  duration?: number;
}

const Notification: React.FC<NotificationProps> = ({ alertType, title, description, duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => {
      clearTimeout(timeout);
    };
  }, [duration]);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div className={`fixed top-4 right-4 w-64 z-50 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      {visible && <Alert alertType={alertType} title={title} description={description} close={handleClose} />}
    </div>
  );
};

export default Notification;
