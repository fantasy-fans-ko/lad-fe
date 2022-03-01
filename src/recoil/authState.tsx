import { atom, selector } from 'recoil';
import { Auth } from './types/auth';
import { getUserSelector } from './userState';
import { User } from './types/user';

export const authState = atom<Auth>({
  key: 'authState',
  default: {
    isLogin: false
  }
});

export const getAuthSelector = selector<User | undefined>({
  key: 'getAuth',
  get: ({ get }) => {
    get(authState);
    return get<User | undefined>(getUserSelector);
  }
});
