import React, { useState, useCallback, useMemo } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';

import style from './loginForm.module.scss';

const LoginForm: React.FC<any> = ({ setIsLoggedIn }) => {
  const submit = () => {
    console.log('submit');
  };
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  // const style = useMemo(() => ({ marginTop: 10 }), []);
  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);
  return (
    <Form className={style.loginForm} onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <div>
          <Input name="user-id" value={id} onChange={onChangeId} required />
        </div>
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
      </div>

      <Button className={style.loginButton} type="primary" htmlType="submit" loading={false}>
        로그인
      </Button>
    </Form>
  );
};

export default LoginForm;
