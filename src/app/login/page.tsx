'use client';

import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Typography, App } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { login } from '@/app/actions/auth';

const { Title, Text } = Typography;

export default function LoginPage() {
  const { message } = App.useApp();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const appName = "Tea on Tech";
  const appTitle = "The Fix is Brewing";
  const appCopyright = "IT - Harbarindo Baharitama";

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const res = await login(values);
      if (res?.error) {
        message.error(res.error);
      } else {
        message.success('Login successful! Redirecting...');
        router.push('/dashboard');
      }
    } catch (err) {
      console.error(err);
      message.error('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#020617] relative overflow-hidden font-sans p-6">
      {/* Space & Animated Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] opacity-20 animate-grid-slow"></div>
        {/* Stars */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>
      
      {/* The Moon */}
      <div className="absolute top-[5%] right-[10%] w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] moon animate-float pointer-events-none z-0">
        {/* Craters */}
        <div className="moon-crater top-[20%] left-[15%] w-[15%] h-[15%]"></div>
        <div className="moon-crater top-[45%] left-[40%] w-[25%] h-[25%] opacity-60"></div>
        <div className="moon-crater top-[70%] left-[20%] w-[10%] h-[10%]"></div>
        <div className="moon-crater top-[30%] left-[65%] w-[12%] h-[12%] opacity-40"></div>
        <div className="moon-crater top-[60%] left-[75%] w-[8%] h-[8%]"></div>
      </div>

      {/* Earth Glow from bottom */}
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="w-full max-w-[420px] relative z-20 animate-in fade-in zoom-in duration-1000">
        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-slate-200">
          <div className="text-center mb-10 pt-4">
            <Title level={1} style={{ margin: 0, fontSize: '32px', fontWeight: 900, color: '#0f172a', letterSpacing: '-1.5px' }}>
              {appName}
            </Title>
            <div className="mt-3 inline-block px-4 py-1 bg-slate-100 rounded-full">
              <Text style={{ fontSize: '11px', color: '#64748b', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px' }}>
                {appTitle}
              </Text>
            </div>
          </div>

          <Form
            name="login_form"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            size="middle"
            autoComplete="off"
            requiredMark={false}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username or Email!' }]}
              className="mb-4"
            >
              <Input 
                prefix={<UserOutlined className="text-slate-400 mr-2" />} 
                placeholder="Username or Email" 
                className="rounded-xl h-11 border-slate-200 hover:border-blue-400 focus:border-blue-500 transition-all font-medium"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
              className="mb-4"
            >
              <Input.Password 
                prefix={<LockOutlined className="text-slate-400 mr-2" />} 
                placeholder="Password" 
                className="rounded-xl h-11 border-slate-200 hover:border-blue-400 focus:border-blue-500 transition-all font-medium"
              />
            </Form.Item>

            <div className="flex justify-between items-center mb-6 px-1">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox className="text-slate-600 font-semibold text-sm">Remember me</Checkbox>
              </Form.Item>
              <Link 
                href="/forgot-password"
                className="text-blue-600 hover:text-indigo-600 font-bold text-sm transition-all"
              >
                Forgot password?
              </Link>
            </div>

            <Form.Item className="mb-0">
              <Button 
                type="primary" 
                htmlType="submit" 
                className="w-full h-11 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 border-none text-sm font-black shadow-lg shadow-blue-600/20 hover:shadow-xl hover:scale-[1.01] transition-all" 
                loading={loading}
              >
                LOG IN
              </Button>
            </Form.Item>
          </Form>
        </div>
        
        <div className="text-center mt-12 bg-white/10 backdrop-blur-md py-1.5 px-6 rounded-full inline-block left-1/2 -translate-x-1/2 relative">
          <Text style={{ color: '#94a3b8', fontSize: '10px', fontWeight: 600, letterSpacing: '1px' }}>
            {appCopyright} &copy; {new Date().getFullYear()}
          </Text>
        </div>
      </div>
    </div>
  );
}
