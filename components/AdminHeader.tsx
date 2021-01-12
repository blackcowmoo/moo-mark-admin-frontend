import { useState } from 'react';
import { Layout } from 'antd';
import style from '@styles/header.module.scss';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const { Header } = Layout;

const AdminHeader: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <Header className={style.header} >
      {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
    </Header>
  );
};

export default AdminHeader;
