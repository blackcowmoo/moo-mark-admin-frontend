import React, { useState } from 'react';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { Layout, Menu } from 'antd';

import { BarChartOutlined, UserOutlined, HomeOutlined, SettingOutlined, DashboardOutlined, ApiOutlined } from '@ant-design/icons';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

import style from './adminSider.module.scss';

const { Sider } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  left: 0,
};

const AdminSider: React.FC = ({}) => {
  const router: NextRouter = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  console.log(router.pathname.split('/')[1]);
  return (
    <Layout className={style.customlayout}>
      {/* <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}> */}
      <Sider className={style.adminSider} style={siderStyle}>
        <div className="logo" />
        {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
        <Menu theme="dark" className="sider-menu" style={{ backgroundColor: 'transparent' }} mode="inline" selectedKeys={[router.pathname.split('/')[1]]}>
          <Menu.Item className="custom" key="" icon={<HomeOutlined />}>
            <Link href="/">Home</Link>
          </Menu.Item>

          <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
            <Link href="/dashboard">DashBoard</Link>
          </Menu.Item>

          <Menu.Item key="userInfo" icon={<UserOutlined />}>
            UserInfo
          </Menu.Item>

          <Menu.Item key="api" icon={<ApiOutlined />}>
            <Link href="/request">API request</Link>
          </Menu.Item>
          <Menu.Item key="chart" icon={<BarChartOutlined />}>
            Chart
          </Menu.Item>

          <Menu.Item key="setting" icon={<SettingOutlined />}>
            Setting
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default AdminSider;
