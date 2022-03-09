import axios from 'axios';
import { ACCESS_TOKEN, API_BASE_URL } from '../constants';
import { getCookie } from '../../util/CookieHandler';
import { ToastHandle } from '../../util/ToastHandle';

type Method = 'get' | 'post';

const axiosFetch = async <T>(method: Method, url: string, params?: any, data?: any): Promise<ApiRes<T>> => {
  const token: string = getCookie(ACCESS_TOKEN);
  const { addToast } = ToastHandle();

  let res;
  if (token) {
    res = await axios({
      method,
      url: `${API_BASE_URL}${url}`,
      params,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data,
    }).catch(error => {
      const errorRes = error.response;
      addToast({
        message: errorRes.data.message,
      });
      return errorRes;
    });
  } else {
    res = await axios({
      method,
      url: API_BASE_URL + url,
      params,
    }).catch(error => {
      const errorRes = error.response;
      addToast({
        message: errorRes.data.message,
      });
      return errorRes;
    });
  }
  return res.data;
};

export default axiosFetch;
