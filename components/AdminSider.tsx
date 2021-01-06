import { useState } from 'react';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { Layout, Menu } from 'antd';

import { BarChartOutlined, UserOutlined, HomeOutlined, SettingOutlined, DashboardOutlined, ApiOutlined } from '@ant-design/icons';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

import style from './adminSider.module.scss';

const { Sider } = Layout;

const AdminSider: React.FC = () => {
  const router: NextRouter = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <Layout className={style.customlayout}>
      <Sider className={style.sider}>
        <div className="logo" />
        {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
        <Menu theme="dark" className={style.menuContainer} mode="inline" selectedKeys={[router.pathname]}>
          <Menu.Item className="custom" key="/" icon={<HomeOutlined />}>
            <Link href="/">Home</Link>
          </Menu.Item>

          <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
            <Link href="/dashboard">DashBoard</Link>
          </Menu.Item>

          <Menu.Item key="/user" icon={<UserOutlined />}>
          <Link href="/user">User</Link>
          </Menu.Item>

          <Menu.Item key="/request" icon={<ApiOutlined />}>
            <Link href="/request">API request</Link>
          </Menu.Item>

          <Menu.Item key="/charts" icon={<BarChartOutlined />}>
            <Link href="/charts">Charts</Link>
          </Menu.Item>

          <Menu.Item key="/setting" icon={<SettingOutlined />}>
            <Link href="/setting">Setting</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default AdminSider;
