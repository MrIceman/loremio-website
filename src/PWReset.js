import React from 'react';
import { LockOutlined, UnlockOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Spin } from 'antd';
import { resetPw } from './data/resetPw';


const PWReset = (props) => {
  const [loading, setLoading] = React.useState(false)
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values) => {
    setLoading(true)
    resetPw(values.password, props.data.oobCode)
      .then((resp) => {
        console.log(resp.message);
        messageApi.info(resp.message);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err.message);
        messageApi.error(err.message);
        setLoading(false)
      })
  };

  return (
    <>
      {contextHolder}
      {loading ?
        <div style={{ textAlign: 'center' }}>
          <Spin size="large" />
        </div>
        :
        <div>
          <div className='password_reset__form content__body__element'>
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
                <Input.Password
                  prefix={<div style={{ marginRight: '5px' }}><UnlockOutlined className="site-form-item-icon" />
                  </div>} placeholder="Passwort eingeben" />
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
                      if (getFieldValue('password') !== value) {
                        return Promise.reject(new Error('Passwörter müssen identisch sein'));
                      } else {
                        return Promise.resolve();
                      }
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<div style={{ marginRight: '5px' }}><UnlockOutlined className="site-form-item-icon" />
                  </div>} placeholder="Passwort wiederholen" />
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
        </div>
      }
    </>
  );
};

export default PWReset;