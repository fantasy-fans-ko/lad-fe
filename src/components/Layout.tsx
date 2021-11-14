import React from 'react';
import { Col, Row } from 'antd';
import PlayerList from './PlayerList';
import UserList from './UserList';
import MyPlayerList from './MyPlayerList';
import Timer from './Timer';

const Layout = () => {
  return (
    <>
      <Row gutter={16}>
        <Col flex={1}>Timer<Timer /></Col>
        <Col flex={4}>Selected Player Info</Col>
      </Row>
      <Row gutter={16}>
        <Col flex={1}>User List<UserList /></Col>
        <Col flex={3}>Player List<PlayerList /></Col>
        <Col flex={1}>My Player List<MyPlayerList /></Col>
      </Row>
    </>
  );
};

export default Layout;
