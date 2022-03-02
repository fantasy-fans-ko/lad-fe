import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginHome from '../components/LoginHome';
import OAuth2RedirectHandler from '../util/OAuth2RedirectHandler';
import NotFound from '../components/NotFound';
import PrivateRoute from './PrivateRoute';
import DraftRoom from '../components/DraftRoom';
import { useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { Auth } from '../recoil/types/auth';
import { authState, getAuthSelector } from '../recoil/authState';
import { User } from '../recoil/types/user';
import { getUserSelector } from '../recoil/userState';

const Routers = () => {
  const auth = useRecoilValue<Auth>(authState);

  const userInfoLoadable = useRecoilValueLoadable<User | undefined>(getAuthSelector);
  const setUserInfo = useSetRecoilState<User | undefined>(getUserSelector);

  useEffect(() => {
    auth.isLogin ? userInfoLoadable.toPromise().then(data => setUserInfo(data)) : null;
  }, [auth.isLogin]);

  return (
    <>
      <Routes>
        <Route path={'/'}
               element={<PrivateRoute />}
        >
          <Route path={'/'}
                 element={<DraftRoom />} />
        </Route>
        <Route path={'/login'}
               element={<LoginHome />}
        />
        <Route path={'/oauth2/redirect'}
               element={<OAuth2RedirectHandler />}
        />
        <Route element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Routers;
