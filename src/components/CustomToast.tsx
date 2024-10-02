// components/CustomToast.js
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

interface TProps {
  type: string;
  message: string;
}

function CustomToast({ type, message }: TProps) {
  useEffect(() => {
    const showToast = () => {
      switch (type) {
        case 'error':
          toast.error(message);
          break;
        case 'info':
          toast.info(message);
          break;
        default:
          toast(message);
      }
    };

    if (message) {
      showToast();
    }
  }, [type, message]); // type과 message가 변경될 때마다 호출

  return (
    <ToastContainer />
  );
}

export default CustomToast;
