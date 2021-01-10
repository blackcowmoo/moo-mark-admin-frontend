import { useCallback, Fragment } from 'react';
import { Card, Avatar, Button, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import style from '@styles/userProfile.module.scss';

const { SubMenu } = Menu;

const UserProfile: React.FC<any> = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const handleClickMenu = () => {
    console.log('menu!');
  }
  return (
    <Menu className = {style.userProfile} key="user" mode="horizontal" onClick={handleClickMenu}>
        <SubMenu
          title={
            <Fragment>
              <span style={{ marginRight: 4 }}>
                Hi,
              </span>
              <span>Admin</span>
              <Avatar style={{ marginLeft: 8 }} icon={<UserOutlined />} />
            </Fragment>
          }
          className = {style.subMenu}
        >
          <Menu.Item key="SignOut" onClick={onLogOut}>
            Sign out
          </Menu.Item>
        </SubMenu>
      </Menu>

    // <Card className={style.userProfile}>
    //   <Card.Meta
    //     className={style.profileMeta}
    //     avatar={
    //       <Avatar shape="square" icon={<UserOutlined />}>
    //         admin
    //       </Avatar>
    //     }
    //     title={<div className={style.profileName}>admin</div>}
    //   />
    //   <Button className={style.profileButton} onClick={onLogOut}>
    //     로그아웃
    //   </Button>
    // </Card>
  );
};

export default UserProfile;
