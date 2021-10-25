import React from 'react';
import {
  Typography,
  Space,
  Divider,
  Table,
} from 'antd';
import './App.less';

const {Title} = Typography;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name)
  },
  {
    title: 'Pos.',
    dataIndex: 'position',
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
    onFilter: (value, record) => record.position.indexOf(value) > -1,
    sorter: (a, b) => a.position.localeCompare(b.position),
  },
  {
    title: 'Pts.',
    dataIndex: 'points',
    sorter: (a, b) => a.points - b.points
  },
];

const data = [
  {
    key: '1',
    name: 'LeBron James',
    position: 'G,F',
    points: 25.1,
  },
  {
    key: '2',
    name: 'Russell Westbrook',
    position: 'G',
    points: 20.0,
  },
  {
    key: '3',
    name: 'Anthony Davis',
    position: 'F',
    points: 24.5,
  },
]

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
}

const App = () => (
  <>
    <section style={{textAlign: 'center', marginTop: 48, marginBottom: 40}}>
      <Space align="start">
        <img
          style={{width: 40, height: 40}}
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          alt="Ant Design"
        />
        <Title level={2} style={{marginBottom: 0}}>
          Example - Player List
        </Title>
      </Space>
    </section>
    <Divider style={{marginBottom: 60}}>Form</Divider>
    <Table columns={columns} dataSource={data} onChange={onChange}/>
  </>
);

export default App;
