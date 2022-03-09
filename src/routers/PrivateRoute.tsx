import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from '../recoil/AuthState';
import { Auth } from '../recoil/types/auth';

const PrivateRoute = () => {
  const auth = useRecoilValue<Auth>(authState);

  return auth.isLogin ? <Outlet /> : <Navigate to={'/login'} />;
};

export default PrivateRoute;
