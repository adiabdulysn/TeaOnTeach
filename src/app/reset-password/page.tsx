'use client';

import React, { useState } from 'react';
import { Button, Form, Input, Typography, theme, App } from 'antd';
import { LockOutlined, ArrowLeftOutlined, CheckCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { resetPassword } from '../actions/auth';

const { Title, Text } = Typography;

export default function ResetPasswordPage() {
  const { message } = App.useApp();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const router = useRouter();
  const { token: antdToken } = theme.useToken();

  const onFinish = async (values: any) => {
    if (!token) {
      message.error('Invalid reset token');
      return;
    }

    setLoading(true);
    try {
      const res = await resetPassword(token, values.password);
      if (res.error) {
        message.error(res.error);
      } else {
        setSuccess(true);
        message.success('Password reset successful!');
        setTimeout(() => router.push('/login'), 3000);
      }
    } catch (err) {
      message.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#020617] relative overflow-hidden font-sans p-6">
        <div className="text-center p-8 bg-white rounded-[32px] shadow-2xl max-w-sm relative z-10 border border-slate-200">
          <Title level={3} type="danger" style={{ fontWeight: 800 }}>Invalid Link</Title>
          <Text className="text-slate-500 font-medium">This password reset link is invalid or has expired.</Text>
          <div className="mt-8">
            <Link href="/login" className="px-6 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-blue-600 font-bold transition-all inline-block">
              Return to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#020617] relative overflow-hidden font-sans p-6">
      {/* Space & Animated Grid */}
      <div className="absolute inset-0 z-0 text-white">
        <div className="absolute inset-0 bg-grid-white bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] opacity-20 animate-grid-slow"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>
      
      {/* The Moon */}
      <div className="absolute top-[5%] left-[10%] w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] moon animate-float pointer-events-none z-0 opacity-40">
        <div className="moon-crater top-[20%] left-[15%] w-[15%] h-[15%]"></div>
        <div className="moon-crater top-[45%] left-[40%] w-[25%] h-[25%] opacity-60"></div>
      </div>

      <div className="w-full max-w-[420px] relative z-10 animate-in fade-in zoom-in duration-700">
        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-slate-200">
          <div className="text-center mb-10 pt-4">
            <Title level={1} style={{ margin: 0, fontSize: '28px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.5px' }}>
              Reset Password
            </Title>
            <Text style={{ fontSize: '15px', color: '#64748b', fontWeight: 500 }}>
              Secure your account with a new password
            </Text>
          </div>

          {!success ? (
            <Form
              name="reset_password"
              layout="vertical"
              onFinish={onFinish}
              size="middle"
              className="mt-8"
              requiredMark={false}
            >
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: 'Please input your new password!' },
                  { min: 6, message: 'Password must be at least 6 characters!' }
                ]}
                hasFeedback
                className="mb-5"
              >
                <Input.Password 
                  prefix={<LockOutlined className="text-slate-400 mr-2" />} 
                  placeholder="New Password" 
                  className="rounded-xl h-11 border-slate-200 hover:border-blue-400 focus:border-blue-500 transition-all font-medium"
                />
              </Form.Item>

              <Form.Item
                name="confirm"
                dependencies={['password']}
                hasFeedback
                rules={[
                  { required: true, message: 'Please confirm your password!' },
                  (({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Passwords do not match!'));
                    },
                  })),
                ]}
                className="mb-8"
              >
                <Input.Password 
                  prefix={<LockOutlined className="text-slate-400 mr-2" />} 
                  placeholder="Confirm New Password" 
                  className="rounded-xl h-11 border-slate-200 hover:border-blue-400 focus:border-blue-500 transition-all font-medium"
                />
              </Form.Item>

              <Form.Item className="mb-0">
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  className="w-full h-11 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 border-none text-sm font-black shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:scale-[1.01] transition-all" 
                  loading={loading}
                >
                  SAVE NEW PASSWORD
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <div className="text-center py-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <CheckCircleOutlined className="text-6xl text-green-500 mb-4" />
              <Title level={4} style={{ fontWeight: 800 }}>Password Updated!</Title>
              <Text className="text-slate-500 block mb-8 font-medium">Your password has been changed. Redirecting to login...</Text>
              <Link href="/login" className="text-blue-600 font-bold hover:underline">
                Manual Login
              </Link>
            </div>
          )}

          <div className="text-center mt-10">
            <Link href="/login" className="text-blue-600 hover:text-indigo-600 font-bold text-sm transition-all flex items-center justify-center gap-2">
              <ArrowLeftOutlined /> Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
