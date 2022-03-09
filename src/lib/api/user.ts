import axiosFetch from './axios';
import { User } from '../../recoil/types/user';

const user = {
  getUser: () => axiosFetch<User>('get', '/api/users/auth'),
  getUserAll: (auctionId: number) => axiosFetch('get', `/api/users/${auctionId}`),
}

export default user;
