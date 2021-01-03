import React, { useState } from 'react';
import Link from 'next/link';
import { Layout, Menu } from 'antd';
import { BarChartOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
interface Props {
  setIsLoggedIn: boolean;
}

const { Sider } = Layout;

const AdminSider: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <Layout>
      <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
        <div className="logo" />
        {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']}>
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link href="/">home</Link>
          </Menu.Item>

          <Menu.Item key="dashboard" icon={<BarChartOutlined />}>
            <Link href="/dashboard">dashBoard</Link>
          </Menu.Item>

          <Menu.Item key="userInfo" icon={<UserOutlined />}>
            userInfo
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default AdminSider;
