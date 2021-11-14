import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import API from '../lib/api';

const UserList = () => {
  const [data, setData] = useState<User[]>([]);

  const fetchUsers = async () => {
    const res = await API.user.getUsers();
    res.data && setData(res.data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {
        data && data.map(user => <Card>{user.name}</Card>)
      }
      <Card>
        User 1
      </Card>
      <Card>
        User 2
      </Card>
      <Card>
        User 3
      </Card>
    </>
  )
}

export default UserList;
