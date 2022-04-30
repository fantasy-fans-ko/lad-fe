export const getStorage = (name: string) => {
  if (sessionStorage.getItem(name) !== undefined)
    return sessionStorage.getItem(name);
  return null;
}

export const setStorage = (name: string, value: string) => {
  return sessionStorage.setItem(name, value);
}

export const removeStorage = (name: string) => {
  return sessionStorage.removeItem(name);
}
