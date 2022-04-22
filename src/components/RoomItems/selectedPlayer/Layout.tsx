import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectPlayerState } from '../../../recoil/PlayerState';
import { Player } from '../../../recoil/types/player';

const SelectedPlayer = () => {
  const player = useRecoilValue<Player | null>(selectPlayerState);

  console.log(player);

  return (
    <div className='basis-1/6 flex flex-col h-1/6'>
      <div className='pt-4 pl-5'>
        <div className='flex flex-row'>
            {player ? <img src={`${player.imagePath}`} alt='' className='h-28 w-30' /> : null}
          <div className=''>
            <div className=''>
              {player ? player.name : null}
            </div>
            <div className=''>
              Player Position
            </div>
          </div>
        </div>
        <div className=''>
          Player Stats
        </div>
      </div>
    </div>
  );
};

export default SelectedPlayer;
