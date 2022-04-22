import { atom, selector } from 'recoil';
import { User } from './types/user';
import API from '../lib/api';

export const userState = atom<User | null>({
  key: 'userState',
  default: null
});

export const getUserSelector = selector<User | undefined>({
  key: 'getUserApi',
  get: async () => {
    const response = await API.user.getUser();
    return response.data ? response.data : undefined;
  },
  set: ({ set }, newValue) => {
    return newValue ? set<User | null>(userState, newValue) : userState;
  }
});
