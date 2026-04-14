'use client';

import React, { useState } from 'react';
import { Button, Form, Input, Typography, theme, App } from 'antd';
import { MailOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { forgotPassword } from '../actions/auth';

const { Title, Text } = Typography;

export default function ForgotPasswordPage() {
  const { message } = App.useApp();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { token: antdToken } = theme.useToken();

  const onFinish = async (values: { email: string }) => {
    setLoading(true);
    try {
      const res = await forgotPassword(values.email);
      if (res.error) {
        message.error(res.error);
      } else {
        setSubmitted(true);
        message.success('Reset link sent to your email');
      }
    } catch (err) {
      message.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#020617] relative overflow-hidden font-sans p-6">
      {/* Space & Animated Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] opacity-20 animate-grid-slow"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>
      
      {/* The Moon */}
      <div className="absolute top-[5%] right-[10%] w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] moon animate-float pointer-events-none z-0">
        <div className="moon-crater top-[20%] left-[15%] w-[15%] h-[15%]"></div>
        <div className="moon-crater top-[45%] left-[40%] w-[25%] h-[25%] opacity-60"></div>
        <div className="moon-crater top-[70%] left-[20%] w-[10%] h-[10%]"></div>
        <div className="moon-crater top-[30%] left-[65%] w-[12%] h-[12%] opacity-40"></div>
      </div>

      <div className="w-full max-w-[420px] relative z-10 animate-in fade-in zoom-in duration-700">
        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-slate-200">
          <div className="text-center mb-10 pt-4">
            <Title level={1} style={{ margin: 0, fontSize: '28px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.5px' }}>
              Reset Password
            </Title>
            <Text style={{ fontSize: '15px', color: '#64748b', fontWeight: 500 }}>
              Enter your email to recover your account
            </Text>
          </div>

          {!submitted ? (
            <Form
              name="forgot_password"
              layout="vertical"
              onFinish={onFinish}
              size="middle"
              className="mt-8"
              requiredMark={false}
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Please enter a valid email!' }
                ]}
                className="mb-8"
              >
                <Input 
                  prefix={<MailOutlined className="text-slate-400 mr-2" />} 
                  placeholder="Email Address" 
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
                  SEND RESET LINK
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <div className="text-center py-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-blue-50 p-6 rounded-[24px] border border-blue-100 mb-8 px-8">
                 <Text style={{ color: '#1e40af', fontSize: '15px', fontWeight: 600, lineHeight: '1.6', display: 'block' }}>
                    Recovery email sent. Please check your inbox.
                 </Text>
              </div>
              <Button 
                type="default" 
                className="h-11 rounded-xl text-slate-600 font-bold border-slate-200 hover:border-blue-500 hover:text-blue-600"
                onClick={() => setSubmitted(false)}
              >
                Resend link
              </Button>
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
