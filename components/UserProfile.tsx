import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import style from './userProfile.module.scss';

const UserProfile: React.FC<any> = ({ setIsLoggedIn }) => {
  console.log(typeof setIsLoggedIn);
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <Card className={style.userProfile}>
      <Card.Meta avatar={<Avatar>admin</Avatar>} title={<div className={style.profileName}>admin</div>} />
      <Button className={style.profileButton} onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
