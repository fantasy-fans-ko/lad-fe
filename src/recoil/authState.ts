import { atom, selector } from 'recoil';
import { Auth } from './types/auth';
import { getUserSelector } from './UserState';
import { User } from './types/user';
// import { getCookie } from '../util/CookieHandler';
import { ACCESS_TOKEN } from '../lib/constants';
import { getStorage } from '../util/StorageHandler';

export const authState = atom<Auth>({
  key: 'authState',
  // default: getCookie(ACCESS_TOKEN) ? { isLogin: true } : { isLogin: false }
  default: getStorage(ACCESS_TOKEN) ? { isLogin: true } : { isLogin: false }
});

export const getAuthSelector = selector<User | undefined>({
  key: 'getAuth',
  get: ({ get }) => {
    return get(authState).isLogin ? get<User | undefined>(getUserSelector) : undefined;
  }
});
