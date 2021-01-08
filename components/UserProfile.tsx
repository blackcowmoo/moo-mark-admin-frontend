import { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import style from '@styles/userProfile.module.scss';

const UserProfile: React.FC<any> = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <Card className={style.userProfile}>
      <Card.Meta
        className={style.profileMeta}
        avatar={
          <Avatar shape="square" icon={<UserOutlined />}>
            admin
          </Avatar>
        }
        title={<div className={style.profileName}>admin</div>}
      />
      <Button className={style.profileButton} onClick={onLogOut}>
        로그아웃
      </Button>
    </Card>
  );
};

export default UserProfile;
