import { Layout } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import AdminSider from './AdminSider';
import AdminHeader from './AdminHeader';

import style from '@styles/adminSider.module.scss';

const { Footer, Content } = Layout;

const AdminLayout: React.FunctionComponent = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Layout className={style.appLayout}>
      <AdminSider />
      <Layout className="site-layout" style={{ marginLeft: 200, backgroundColor: '#DCCEAC' }}>
        <AdminHeader/>
        <Content style={{ display:'flex', padding: '5px', margin: '16px 16px', overflow: 'initial', backgroundColor: '#FCFEFC' }}> {children}</Content>
        <Footer>
          mooMarkAdmin |{' '}
          <a href="https://github.com/blackcowmoo/moo-mark" rel="noreferrer noopener" target="_blank" >
            mooMark<GithubOutlined />
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
