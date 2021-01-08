import { Layout } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import AdminSider from './AdminSider';

import style from '@styles/adminSider.module.scss';

const { Footer, Content, Header } = Layout;

const AdminLayout: React.FunctionComponent = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Layout className={style.appLayout}>
      <AdminSider />
      <Layout className="site-layout" style={{ marginLeft: 200, backgroundColor: '#DCCEAC' }}>
        <Header className="site-layout-background" style={{ padding: '5px', backgroundColor: '#FCFEFC' }}>
          {' '}
          currentPage{' '}
        </Header>
        <Content style={{ padding: '5px', margin: '16px 16px', overflow: 'initial', backgroundColor: '#FCFEFC' }}> {children}</Content>
        <Footer>
          mooMarkAdmin |{' '}
          <a href="https://github.com/blackcowmoo/moo-mark" rel="noreferrer noopener" target="_blank" >
            <GithubOutlined />
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
