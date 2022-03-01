import axiosFetch from './axios';
import { User } from '../../recoil/types/user';

const user = {
  getUser: () => {
    return axiosFetch<User>('get', '/api/users/auth');
  }
}

export default user;
