import React from 'react';
import { Layout } from 'antd';
import AdminSider from './AdminSider';
import { GithubOutlined } from '@ant-design/icons';
const { Footer, Content, Header } = Layout;

import style from './adminSider.module.scss';

const AdminLayout: React.FunctionComponent = ({ children }) => {
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Layout className={style.appLayout}>
      <AdminSider />
      <Layout className="site-layout" style={{ marginLeft: 200, backgroundColor: '#DCCEAC' }}>
        <Header className="site-layout-background" style={{ padding: '5px', backgroundColor: '#FCFEFC' }}>
          {' '}
          currentPAge{' '}
        </Header>
        <Content style={{padding: '5px', margin: '16px 16px', overflow: 'initial', backgroundColor: '#FCFEFC' }}> {children}</Content>
        <Footer>
          mooMarkAdmin |{' '}
          <a href="https://github.com/blackcowmoo/moo-mark" target="_blank" rel="noreferer noopener">
            <GithubOutlined />
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
