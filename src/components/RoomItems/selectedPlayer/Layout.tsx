import React from 'react';

const SelectedPlayer = () => {
  return (
    <div className='basis-1/5 flex flex-col h-1/5'>
      <div className='flex flex-row'>
        Player Image
        <div className=''>
          <div className=''>
            Player Name
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
  );
};

export default SelectedPlayer;
