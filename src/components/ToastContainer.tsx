import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { toastState } from '../recoil/toastState';
import { Toast } from '../recoil/types/toast';

const ToastContainer = () => {
  const toasts = useRecoilValue<Toast[]>(toastState);

  return (
    <div className={'top-20 right-5 w-80 absolute z-99'}>
      {
        toasts.map((toast: Toast) => (
          <ToastItems key={toast.id} {...toast} />))
      }
    </div>
  );
};

const ToastItems = (props: Toast) => {
  const { message } = props;
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const setExistTimeOut = setTimeout(() => {
      setIsShow(true);
      clearTimeout(setExistTimeOut);
    }, 0);
  });

  const styles = {
    divClass: 'flex flex-row-reverse items-center h-16'
  };

  return (
    <div className={`${styles.divClass} ${isShow ? 'block' : 'hidden'}`}>
      <div
        className={'flex flex-col justify-items-center justify-center rounded-lg w-full min-h-50 mr-2 mb-2 p-3 text-center text-base bg-tb text-white transition-all duration-300 ease animate-slide'}>
        {message}
      </div>
    </div>
  );
};

export default ToastContainer;
