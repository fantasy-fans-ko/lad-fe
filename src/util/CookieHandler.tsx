import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getCookie = (name: string) => {
  if (cookies.get(name) != undefined)
    return cookies.get(name);
};

export const setCookie = (name: string, value: string, options: any) => {
  return cookies.set(name, value, { ...options });
};

export const removeCookie = (name: string) => {
  return cookies.remove(name);
};

export const setExpiresTime = (hour: number) => {
  const date = new Date();
  date.setHours(date.getHours() + hour);
  return date;
};
