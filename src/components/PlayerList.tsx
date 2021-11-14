import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React, { useEffect, useState } from 'react';
import API from '../lib/api';

const columns: ColumnsType<Player> = [
  {
    title: "Name",
    dataIndex: "playerName",
    // sorter: (a, b) => a.playerName.localeCompare(b.playerName),
  },
  {
    title: 'Pos.',
    dataIndex: 'playerPosition',
    filters: [
      {
        text: 'C',
        value: 'C',
      },
      {
        text: 'F',
        value: 'F',
      },
      {
        text: 'G',
        value: 'G',
      },
    ],
    // onFilter: (value, record) => record.position.indexOf(value) > -1,
    // sorter: (a, b) => a.playerPosition.localeCompare(b.playerPosition),
  },
  {
    title: 'Pts.',
    dataIndex: 'playerPTS',
    // sorter: (a, b) => a.playerPTS - b.playerPTS
  },
];

const PlayerList = () => {
  const [data, setData] = useState<Player[]>([]);

  const fetchPlayers = async () => {
    const res = await API.player.getPlayers();
    res.data && setData(res.data);
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  )
}

export default PlayerList;
