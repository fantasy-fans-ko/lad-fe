import React, { useEffect } from 'react';
import Routers from './routers/Routers';
import { BrowserRouter } from 'react-router-dom';
import { useRecoilState, useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { authState, getAuthSelector } from './recoil/authState';
import { getUserSelector } from './recoil/userState';
import { User } from './recoil/types/user';
import { Auth } from './recoil/types/auth';
import { getCookie } from './util/CookieHandler';
import { ACCESS_TOKEN } from './lib/constants';

function App() {
  const [auth, setAuth] = useRecoilState<Auth>(authState);
  const token = getCookie(ACCESS_TOKEN);

  const userInfoLoadable = useRecoilValueLoadable<User | undefined>(getAuthSelector);
  const setUserInfo = useSetRecoilState<User | undefined>(getUserSelector);

  useEffect(() => {
    token ? setAuth({ isLogin: true }) : setAuth({ isLogin: false });
    userInfoLoadable.toPromise().then(data => setUserInfo(data));
  }, [auth.isLogin]);

  switch (userInfoLoadable.state) {
    case 'hasValue':
      return (
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      );
    case 'loading':
      return (
        <>
          Loading...
        </>
      );
    case 'hasError':
      return (
        <>
          Error
        </>
      );
  }
}

export default App;
