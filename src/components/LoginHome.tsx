import React from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { KAKAO_OAUTH_URL } from '../lib/constants';

const LoginHome = () => {
  return (
    <>
      <div className={'flex h-screen'}>
        <button className={'p-6 max-w m-auto bg-white rounded-xl border-2 shadow flex items-center space-x-4'}
                onClick={() => window.location.href = KAKAO_OAUTH_URL}
        >
          <div>
            <BsArrowRightCircleFill className={'h-12 w-12'} />
          </div>
          <div>
            <div className={'font-medium text-2xl text-black'}>
              Yahoo Fantasy Auction Drafts
            </div>
            <div className={'text-gray-500 flex justify-end'}>
              Join Us
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default LoginHome;
