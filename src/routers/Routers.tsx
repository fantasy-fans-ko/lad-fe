import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import LoginHome from '../components/LoginHome';
import OAuth2RedirectHandler from '../util/OAuth2RedirectHandler';
import NotFound from '../components/NotFound';
import PrivateRoute from './PrivateRoute';
import DraftRoom from '../components/DraftRoom';
import { Auth } from '../recoil/types/auth';
import { User } from '../recoil/types/user';
import { authState, getAuthSelector } from '../recoil/AuthState';
import { userState } from '../recoil/UserState';
import Loading from '../components/Loading';

const Routers = () => {
  const auth = useRecoilValue<Auth>(authState);
  const userInfoLoadable = useRecoilValueLoadable<User | undefined>(getAuthSelector);
  const setUserInfo = useSetRecoilState<User | undefined>(userState);

  useEffect(() => {
      userInfoLoadable.toPromise().then(data => {
        if (data !== undefined) setUserInfo(data);
        else setUserInfo(undefined);
      });
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.isLogin]);

  return (
    <Routes>
        <Route path='/'
               element={<PrivateRoute />}
        >
          <Route path='/'
                 element={<DraftRoom />} />
        </Route>
        <Route path='/login'
               element={<LoginHome />}
        />
        <Route path='/oauth2/redirect'
               element={
                 <React.Suspense fallback={<Loading />}>
                   <OAuth2RedirectHandler />
                 </React.Suspense>
               }
        />
        <Route element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
