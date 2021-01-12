import { useCallback, Fragment } from 'react';
import { Avatar, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import style from '@styles/userProfile.module.scss';

const { SubMenu } = Menu;

const UserProfile: React.FC<any> = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const handleClickMenu = () => {
    console.log('menu!');
  };
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
          <Menu.Item className={style.logOut} key="LogOut" onClick={onLogOut}>
            Log out
          </Menu.Item>
        </SubMenu>
      </Menu>
  );
};

export default UserProfile;
