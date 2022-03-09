import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { playerState } from '../../../recoil/PlayerState';

const Search = () => {
  const [position, setPosition] = useState('all');
  const players = useRecoilState(playerState);

  const onChangePosition = function(e: any) {
    setPosition(e.target.value);
  };

  return (
    <div className='flex flex-row bg-gray-200 border-b border-gray-600 py-3'>
      <div className='px-5'>
        <select
          className='pl-1 pr-9 py-0.5 rounded font-normal text-sm block w-full text-black m-0 border border-solid border-gray-300'
          onChange={onChangePosition}
        >
          <option defaultValue='all'>All Players</option>
          <option value='G'>G</option>
          <option value='F'>F</option>
          <option value='C'>C</option>
        </select>
      </div>
      <div>
        Search
      </div>
    </div>
  );
};

export default Search;
