import React, { useState, useCallback, useMemo } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';

import PropTypes from 'prop-types';

const LoginForm: React.FC = () => {
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
  return (
    <Form onFinish={submit}>
      <div>
        <label htmlFor='user-id'>아이디</label>
        <br />
        <div>
          <Input name='user-id' value={id} onChange={onChangeId} required />
        </div>
      </div>
      <div>
        <label htmlFor='user-password'>비밀번호</label>
        <br />
        <Input name='user-password' type='password' value={password} onChange={onChangePassword} required />
      </div>

      <Button type='primary' htmlType='submit' loading={false}>
        로그인
      </Button>
    </Form>
  );
};

export default LoginForm;
