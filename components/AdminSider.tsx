import { useState } from 'react';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { Layout, Menu } from 'antd';

import { BarChartOutlined, UserOutlined, HomeOutlined, SettingOutlined, DashboardOutlined, ApiOutlined } from '@ant-design/icons';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

import style from '@styles/adminSider.module.scss';

const { Sider } = Layout;
const { Item } = Menu;
const AdminSider: React.FC = () => {
  const router: NextRouter = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <Layout className={style.customlayout}>
      <Sider className={style.sider}>
        <div className="logo" />
        {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
        <Menu theme="dark" className={style.menuContainer} mode="inline" selectedKeys={[router.pathname]}>
          <Item key="/" className={style.item} icon={<HomeOutlined />}>
            <Link href="/">Home</Link>
          </Item>

          <Item key="/dashboard" className={style.item} icon={<DashboardOutlined />}>
            <Link href="/dashboard">DashBoard</Link>
          </Item>

          <Item key="/user" className={style.item} icon={<UserOutlined />}>
            <Link href="/user">User</Link>
          </Item>

          <Item key="/request" className={style.item} icon={<ApiOutlined />}>
            <Link href="/request">API request</Link>
          </Item>

          <Item key="/charts" className={style.item} icon={<BarChartOutlined />}>
            <Link href="/charts">Charts</Link>
          </Item>

          <Item key="/setting" className={style.item}icon={<SettingOutlined />}>
            <Link href="/setting">Setting</Link>
          </Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default AdminSider;
