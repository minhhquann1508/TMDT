import React from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const SignInForm = () => (

    <Form
        name="basic"
        layout='vertical'
        style={{
            width: '100%'
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item
            label={<h3 className='font-semibold'>Email</h3>}
            name="email"
            rules={[
                {
                    required: true,
                    type: 'email',
                    message: 'Please input your email'
                }
            ]}
        >
            <Input size='large' className='text-[14px]' placeholder='Email' />
        </Form.Item>

        <Form.Item
            label={<h3 className='font-semibold'>Password</h3>}
            name="password"
            rules={[
                {
                    required: true,
                    message: 'Please input your password'
                }
            ]}
        >
            <Input.Password size='large' className='text-[14px]' placeholder='Password' />
        </Form.Item>

        <Form.Item
            label={<h3 className='font-semibold'>Confirm Password</h3>}
            name="confirm-password"
            dependencies={['password']}
            rules={[
                {
                    required: true,
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('The new password that you entered do not match!'));
                    },
                }),
            ]}
        >
            <Input.Password size='large' className='text-[14px]' placeholder='Confirm your password' />
        </Form.Item>

        <Form.Item>
            <Button className='w-full font-semibold' size='large' type="primary" htmlType="submit">
                Sign In
            </Button>
        </Form.Item>

        <Link className='underline text-xs font-semibold' to={'/forgot-password'}>Forgot Your Password?</Link>
    </Form>
);
export default SignInForm;