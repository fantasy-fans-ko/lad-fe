import { useRecoilState } from 'recoil';
import { toastState } from '../recoil/toastState';
import { Toast } from '../recoil/types/toast';

export const ToastHandle = () => {
  const [toasts, setToasts] = useRecoilState<Toast[]>(toastState);

  const removeToast = (toastId: Toast['id']) => {
    setToasts((prev: Toast[]) => prev.filter((toast: Toast) => toast.id !== toastId));
  }

  const addToast = (toast: Toast) => {
    const toastId = getRandomId();
    setToasts((prev: Toast[]) => [...prev, { ...toast, id: toastId }]);
    setTimeout(() => removeToast(toastId), 1800);
  };

  return { toasts, addToast };
};

const getRandomId = () => new Date().getTime();
