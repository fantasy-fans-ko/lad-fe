import axios from 'axios';
import { ACCESS_TOKEN, API_BASE_URL } from '../constants';
import { getCookie } from '../../util/CookieHandler';
import { ToastHandle } from '../../util/ToastHandle';

type Method = 'get' | 'post';

const axiosFetch = async <T>(method: Method, url: string, params?: any): Promise<ApiRes<T>> => {
  const token: string = getCookie(ACCESS_TOKEN);
  const { addToast } = ToastHandle();

  let res;
  if (token) {
    res = await axios({
      method: method,
      url: API_BASE_URL + url,
      params: params,
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).catch(error => {
      const errorRes = error.response;
      addToast({
        message: errorRes.data.message
      });
      return errorRes;
    });
  } else {
    res = await axios({
      method: method,
      url: API_BASE_URL + url,
      params: params
    }).catch(error => {
      const errorRes = error.response;
      addToast({
        message: errorRes.data.message
      });
      return errorRes;
    });
  }
  return res.data;
};

export default axiosFetch;
