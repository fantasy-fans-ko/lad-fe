import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginHome from '../components/LoginHome';
import OAuth2RedirectHandler from '../util/OAuth2RedirectHandler';
import NotFound from '../components/NotFound';
import PrivateRoute from './PrivateRoute';
import Layout from '../components/Layout';

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path={'/'}
               element={<PrivateRoute />}
        >
          <Route path={'/'}
                 element={<Layout />} />
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
