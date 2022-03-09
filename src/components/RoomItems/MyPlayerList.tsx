import React from 'react';

const MyPlayerList = () => {
  return (
    <div className="basis-1/3 flex flex-col border border-solid border-b-indigo-600 h-1/3">
      <div className="flex flex-row">
        <div>
          User Image
        </div>
        <div>
          User Name
        </div>
        <div>
          Pick Count
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div>
            Player Position
          </div>
          <div>
            Player Position List
          </div>
        </div>
        <div>
          <div>
            <div>
              Player Name
            </div>
            <div>
              Player Name List
            </div>
          </div>
          <div>
            <div>
              Player Price
            </div>
            <div>
              Player Price List
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlayerList;
