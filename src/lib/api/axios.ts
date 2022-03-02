import axios from 'axios';
import { ACCESS_TOKEN, API_BASE_URL } from '../constants';
import { getCookie } from '../../util/CookieHandler';

type Method = 'get' | 'post';

const axiosFetch = async <T>(method: Method, url: string, params?: any): Promise<ApiRes<T>> => {
  const token: string = getCookie(ACCESS_TOKEN);
  let res;
  if (token) {
    res = await axios({
      method: method,
      url: API_BASE_URL + url,
      params: params,
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  } else {
    res = await axios({
      method: method,
      url: API_BASE_URL + url,
      params: params
    });
  }
  return res.data;
};

export default axiosFetch;
