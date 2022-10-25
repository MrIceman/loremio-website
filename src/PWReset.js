import React from 'react';
import { LockOutlined, UnlockOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';


const PWReset = (props) => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    console.log(props);
  };

  console.log(props);

  return (
    <div className='password_reset__form'>
      <div className='lock__icon'>
        <LockOutlined style={{ fontSize: '72px' }} />
      </div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <div style={{ margin: '30px 0', textAlign: 'center' }}>
          Erstell ein neues Passwort und bestätige es um dein Passwort zu ändern.
        </div>

        <Form.Item
          hasFeedback
          name="password"
          rules={[{ required: true, message: 'Bitte Passwort eingeben' }]}
        >
          <Input.Password prefix={<div style={{ marginRight: '5px' }}><UnlockOutlined className="site-form-item-icon" /></div>} placeholder="Passwort eingeben" />
        </Form.Item>

        <Form.Item
          hasFeedback
          name="repeat"
          dependencies={['password']}
          rules={[
            {
              required: true,
              message: 'Bitte Passwort wiederholen',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Passwörter müssen identisch sein'));
              },
            }),
          ]}
        >
          <Input.Password prefix={<div style={{ marginRight: '5px' }}><UnlockOutlined className="site-form-item-icon" /></div>} placeholder="Passwort widerholen" />
        </Form.Item>

        <div style={{ margin: '40px 0 0 0' }}>
          <Form.Item>
            <Button block type="primary" htmlType="submit" className="login-form-button">
              Passwort ändern
            </Button>
          </Form.Item>
        </div>

      </Form>
    </div>
  );
};

export default PWReset;