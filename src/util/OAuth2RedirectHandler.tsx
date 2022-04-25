import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilStateLoadable, useSetRecoilState } from 'recoil';
import { User } from '../recoil/types/user';
import { Auth } from '../recoil/types/auth';
import { ACCESS_TOKEN } from '../lib/constants';
import { getUserSelector } from '../recoil/UserState';
import Loading from '../components/Loading';
import { removeCookie, setCookie, setExpiresTime } from './CookieHandler';
import { authState } from '../recoil/AuthState';

const OAuth2RedirectHandler = () => {
  const token: string | null = new URLSearchParams(window.location.search).get('token');
  if (token)
    setCookie(ACCESS_TOKEN, token, {
      path: '/',
      sameSite: 'strict',
      secure: true,
      expires: setExpiresTime(6),
    });
  else removeCookie(ACCESS_TOKEN);

  const setAuth = useSetRecoilState<Auth>(authState);
  const [userLoadable, setUserLoadable] = useRecoilStateLoadable<User | undefined>(getUserSelector);

  useEffect(() => {
    setAuth({ isLogin: true });
    userLoadable.toPromise().then(data => {
      console.log(data);
      setUserLoadable(data);
    });
  }, []);

  switch (userLoadable.state) {
    case 'hasValue':
      return (
        <Navigate to='/' />
      );
    case 'loading':
      return (
        <Loading />
      );
    default:
      return (
        <Navigate to='/login' />
      );
  }
};

export default OAuth2RedirectHandler;

