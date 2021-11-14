import axiosFetch from './axios';

const user = {
  getUsers: () => {
    return axiosFetch<User[]>('get', '/api/user/all');
  }
}

export default user;
