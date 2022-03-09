import React from 'react';
import { useRecoilValue } from 'recoil';
import { Player } from '../../../recoil/types/player';
import { playerState } from '../../../recoil/PlayerState';
import TableColumn from './TableColumn';

const PlayerTable = () => {
  const players = useRecoilValue<Player[]>(playerState);

  return (
    <div className='flex flex-col overflow-x-hidden '>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full sm:px-6 lg:px-8'>
          <table className='w-full'>
            <thead className='bg-white border-b sticky top-0'>
            <TableColumn />
            </thead>
            <tbody>
            {
              players.length > 0 && players.map(player => (
                <TableData player={player} key={player.id} />
              ))
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

interface PropParam {
  player: Player;
}

const TableData = ({ player }: PropParam) => {
  const tbody = {
    td: 'text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r text-center',
  };

  const status = function() {
    switch (player.status) {
      case 'OUT' :
        return 'O';
      case 'GAME_TIME_DECISION':
        return 'GTD';
      case 'INJURED':
        return 'INJ';
      default:
        return null;
    }
  };

  const selectPlayer = () => {
    console.log(player.name);
  }

  return (
      <tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer' onClick={selectPlayer}>
        <td className={`${tbody.td}`}>{player.rankCurrent}</td>
        <td className={`${tbody.td}`}>{player.rankPre}</td>
        <td className={`${tbody.td}`}>
          <div className='flex flex-row items-center'>
            <div className=''>{player.name}</div>
            <div className='text-xs text-gray-500'>&nbsp;&nbsp;{player.teamName} - {player.position}</div>
            <div className='text-xs text-red-500 font-extrabold'>&nbsp;&nbsp;{status()}</div>
          </div>
        </td>
        <td className={`${tbody.td}`}>{player.fgPct}</td>
        <td className={`${tbody.td}`}>{player.ftPct}</td>
        <td className={`${tbody.td}`}>{player.threePct}</td>
        <td className={`${tbody.td}`}>{player.points}</td>
        <td className={`${tbody.td}`}>{player.rebounds}</td>
        <td className={`${tbody.td}`}>{player.assists}</td>
        <td className={`${tbody.td}`}>{player.steals}</td>
        <td className={`${tbody.td}`}>{player.blocks}</td>
        <td className={`${tbody.td}`}>{player.turnOvers}</td>
        <td className={`${tbody.td}`}>{player.tripleDoubles}</td>
      </tr>
  );
};

export default PlayerTable;
