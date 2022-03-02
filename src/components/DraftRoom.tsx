import React from 'react';
import { useRecoilValue } from 'recoil';
import { authState } from '../recoil/authState';
import { userState } from '../recoil/userState';
import Timer from './RoomItems/Timer';
import SelectedPlayer from './RoomItems/SelectedPlayer';
import WishPlayerList from './RoomItems/WishPlayerList';
import UserList from './RoomItems/UserList';
import PlayerList from './RoomItems/PlayerList';
import MyPlayerList from './RoomItems/MyPlayerList';

const DraftRoom = () => {
  const auth = useRecoilValue(authState);
  const user = useRecoilValue(userState);
  console.log(user);

  return (
    <div className={'flex flex-row h-screen'}>
      <div className={'basis-1/6 flex flex-col border-solid border-black border'}>
        <Timer />
        <UserList />
      </div>
      <div className={'basis-4/6 flex flex-col border-solid border-blue-400 border'}>
        <SelectedPlayer />
        <PlayerList />
      </div>
      <div className={'basis-1/6 flex flex-col border-solid border-green-400 border'}>
        <WishPlayerList />
        <MyPlayerList />
      </div>
    </div>
  );
};

export default DraftRoom;
