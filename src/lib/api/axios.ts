import axios from 'axios';

type Method = 'get' | 'post' | 'put' | 'patch' | 'delete';

const baseUrl = 'localhost:8080'

const axiosFetch = (method: Method, url: string, parameter?: any) => {
  const res = axios({
    method: method,
    url: baseUrl + url,
    data: parameter
  });
}

export default axiosFetch;
