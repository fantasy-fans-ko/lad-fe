import { atom } from 'recoil';
import { Toast } from './types/toast';

export const toastState = atom<Toast[]>({
  key: 'toastState',
  default: [],
})
