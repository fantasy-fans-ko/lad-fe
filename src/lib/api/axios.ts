import axios from 'axios';

type Method = 'get' | 'post' | 'put' | 'patch' | 'delete';

const baseUrl = 'localhost:8080'

// TODO: Error Handling
const axiosFetch = async <T>(method: Method, url: string, params?: any): Promise<ApiRes<T>> => {
  const res = await axios({
    method,
    url: baseUrl + url,
    params
  });

  return res.data;
}

export default axiosFetch;
