import { atom, selector } from 'recoil';
import { User } from './types/user';
import API from '../lib/api';

export const userState = atom<User | undefined>({
  key: 'userState',
  default: undefined
});

export const getUserSelector = selector<User | undefined>({
  key: 'getUserApi',
  get: async () => {
    const response = await API.user.getUser().then(data => data);
    return response.data;
  },
  set: ({ set }, newValue) => {
    return newValue ? set<User | undefined>(userState, newValue) : userState;
  }
});
