import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React, { useEffect, useState } from 'react';

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

  const fetchPlayer = () => {
    fetch("http://localhost:8080/api/player/all")
    // fetch("http://221.165.6.252:8080/api/player/all")
      .then(function (result) {
        return result.json();
      })
      .then(function (json) {
        setData(json);
        console.log("json->", json);
        // data=json.data;
      });
  };

  // const onChange = (pagination, filters, sorter, extra) => {
  //   console.log("params->", pagination, filters, sorter, extra);
  //   console.log("onclick data ->", data);
  // };

  useEffect(() => {
    fetchPlayer();
  }, []);

  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  )
}

export default PlayerList;
