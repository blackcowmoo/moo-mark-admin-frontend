import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
const UserProfile: React.FC<any> = ({ setIsLoggedIn }) => {
  console.log(typeof setIsLoggedIn);
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <Card>
      <Card.Meta avatar={<Avatar>admin</Avatar>} title="admin" />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
