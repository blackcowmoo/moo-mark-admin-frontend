import { useState } from 'react';
import { Layout } from 'antd';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

import style from '@styles/header.module.scss'

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
