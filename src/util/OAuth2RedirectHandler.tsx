import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { User } from '../recoil/types/user';
import { Auth } from '../recoil/types/auth';
import { ACCESS_TOKEN } from '../lib/constants';
import { getUserSelector, userState } from '../recoil/UserState';
// import { removeCookie } from './CookieHandler';
import { authState } from '../recoil/AuthState';
import { removeStorage, setStorage } from './StorageHandler';

const OAuth2RedirectHandler = () => {
  const token: string | null = new URLSearchParams(window.location.search).get('token');
  if (token)
    // setCookie(ACCESS_TOKEN, token, {
    //   path: '/',
    //   sameSite: 'strict',
    //   secure: true,
    //   expires: setExpiresTime(6),
    // });
    setStorage(ACCESS_TOKEN, token);
  else removeStorage(ACCESS_TOKEN);

  const setAuth = useSetRecoilState<Auth>(authState); // TODO : 하나의 Atom 내에서 관리하는 것으로
  const setUserInfo = useSetRecoilState<User | undefined>(userState);
  const user = useRecoilValue<User | undefined>(getUserSelector);

  useEffect(() => {
    setAuth({ isLogin: true });
    setUserInfo(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (user !== undefined) {
    return (
      <Navigate replace to='/' />
    );
  }
  return (
    <Navigate replace to='/login' />
  )
};

export default OAuth2RedirectHandler;

