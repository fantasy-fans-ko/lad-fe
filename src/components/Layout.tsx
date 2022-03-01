import React from 'react';
import { useRecoilValue } from 'recoil';
import { authState } from '../recoil/authState';
import { userState } from '../recoil/userState';

const Layout = () => {
  const auth = useRecoilValue(authState);
  const user = useRecoilValue(userState);

  console.log(user);

  return (
    <>
      Layout
    </>
  )
}

export default Layout
