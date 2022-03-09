import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { ACCESS_TOKEN } from '../lib/constants';
import { useRecoilStateLoadable, useSetRecoilState } from 'recoil';
import { getUserSelector } from '../recoil/UserState';
import { User } from '../recoil/types/user';
import Loading from '../components/Loading';
import { removeCookie, setCookie, setExpiresTime } from './CookieHandler';
import { authState } from '../recoil/AuthState';
import { Auth } from '../recoil/types/auth';

const OAuth2RedirectHandler = () => {
  const token: string | null = new URLSearchParams(location.search).get('token');
  token ? setCookie(ACCESS_TOKEN, token, {
    path: '/',
    sameSite: 'strict',
    secure: true,
    expires: setExpiresTime(6)
  }) : removeCookie(ACCESS_TOKEN);

  const setAuth = useSetRecoilState<Auth>(authState);
  const [userLoadable, setUserLoadable] = useRecoilStateLoadable<User | undefined>(getUserSelector);

  useEffect(() => {
    setAuth({ isLogin: true });
    userLoadable.toPromise().then(data => setUserLoadable(data));
  }, []);

  switch (userLoadable.state) {
    case 'hasValue':
      return (
        <Navigate to={'/'} />
      );
    case 'hasError':
      return (
        <Navigate to={'/login'} />
      );
    case 'loading':
      return (
        <Loading />
      );
  }
};

export default OAuth2RedirectHandler;

