import React from 'react';
import Timer from './roomItems/Timer';
import SelectedPlayer from './roomItems/selectedPlayer/Layout';
import WishPlayerList from './roomItems/WishPlayerList';
import UserList from './roomItems/UserList';
import MyPlayerList from './roomItems/MyPlayerList';
import PickedPlayer from './roomItems/PickedPlayer';
import PlayerList from './roomItems/playerList/Layout';

const DraftRoom = () => {
  return (
    <div className='flex flex-row h-screen fixed w-screen'>
      <div className='basis-1/6 flex flex-col'>
        <Timer />
        <UserList />
      </div>
      <div className='basis-4/6 flex flex-col'>
        <SelectedPlayer />
        <PlayerList />
      </div>
      <div className='basis-1/6 flex flex-col'>
        <WishPlayerList />
        <MyPlayerList />
        <PickedPlayer />
      </div>
    </div>
  );
};

export default DraftRoom;
