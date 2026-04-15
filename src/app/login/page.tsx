'use client';

import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input, Typography, App } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { login } from '@/app/actions/auth';
import { useTheme } from 'next-themes';

const { Title, Text } = Typography;

export default function LoginPage() {
  const { message } = App.useApp();
  const { resolvedTheme } = useTheme();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const appName = "Tea on Tech";
  const appSubtitle = "The Fix is Brewing";
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

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <div className={`min-h-screen w-full flex items-center justify-center transition-colors duration-500 overflow-hidden relative p-6 ${isDark ? 'bg-[#09090b]' : 'bg-zinc-50'}`}>
      
      {/* Background Pattern - Modern Grid */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-grid-zinc-500/[0.05] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]`}></div>
      </div>

      {/* Corporate Aesthetics - Zinc Blobs */}
      <div className={`absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none transition-opacity duration-1000 ${isDark ? 'bg-primary/5 opacity-100' : 'bg-primary/5 opacity-50'}`} />
      <div className={`absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none transition-opacity duration-1000 ${isDark ? 'bg-indigo-500/5 opacity-100' : 'bg-indigo-500/5 opacity-50'}`} />

      <div className="w-full max-w-[440px] relative z-20 animate-in fade-in zoom-in duration-700">
        <div className={`p-8 md:p-12 rounded-[48px] shadow-2xl border transition-all duration-300 ${isDark ? 'bg-[#18181b] border-zinc-800 shadow-black/50' : 'bg-white border-zinc-100 shadow-zinc-200/50'}`}>
          
          <div className="text-center mb-10">
             <div className={`inline-flex items-center justify-center w-20 h-20 mb-8 transform hover:rotate-2 transition-transform`}>
                <img 
                  src={isDark ? "/logoapp.jpg" : "/logoapplight.jpg"} 
                  alt="Tea on Tech Logo" 
                  className="object-contain rounded-[10px]"
                />
             </div>
            
            <Title level={1} style={{ margin: 0, fontSize: '32px', fontWeight: 900, letterSpacing: '-1px' }} className={isDark ? 'text-zinc-50' : 'text-zinc-900'}>
              {appName}
            </Title>
            <div className={`mt-3 inline-block px-5 py-1.5 rounded-full border ${isDark ? 'bg-zinc-900/50 border-zinc-800' : 'bg-zinc-100 border-zinc-200'}`}>
              <Text className={`text-[11px] font-bold uppercase tracking-[0.25em] ${isDark ? 'text-primary' : 'text-zinc-500'}`}>
                {appSubtitle}
              </Text>
            </div>
          </div>

          <Form
            name="login_form"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            size="large"
            autoComplete="off"
            requiredMark={false}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username or Email!' }]}
              className="mb-5"
            >
              <Input 
                prefix={<UserOutlined className="text-zinc-500 mr-2" />} 
                placeholder="Username or Email" 
                className={`rounded-[18px] h-12 transition-all font-medium border-2 ${isDark ? 'bg-zinc-900/50 border-zinc-800 text-zinc-100 hover:border-primary focus:border-primary' : 'bg-zinc-50 border-zinc-200 hover:border-primary focus:border-primary'}`}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
              className="mb-5"
            >
              <Input.Password 
                prefix={<LockOutlined className="text-zinc-500 mr-2" />} 
                placeholder="Password" 
                className={`rounded-[18px] h-12 transition-all font-medium border-2 ${isDark ? 'bg-zinc-900/50 border-zinc-800 text-zinc-100 hover:border-primary focus:border-primary' : 'bg-zinc-50 border-zinc-200 hover:border-primary focus:border-primary'}`}
              />
            </Form.Item>

            <div className="flex justify-between items-center mb-8 px-2">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox className={`font-semibold text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Remember me</Checkbox>
              </Form.Item>
              <Link 
                href="/forgot-password"
                className="text-primary hover:opacity-80 font-bold text-sm transition-all"
              >
                Forgot password?
              </Link>
            </div>

            <Form.Item className="mb-0">
              <Button 
                type="primary" 
                htmlType="submit" 
                className="w-full h-14 rounded-[20px] bg-primary border-none text-sm font-black shadow-xl shadow-primary/20 hover:shadow-2xl hover:scale-[1.02] transition-all group overflow-hidden relative" 
                loading={loading}
              >
                <span className="relative z-10 uppercase tracking-widest">Login</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full hover:translate-y-0 transition-transform duration-300" />
              </Button>
            </Form.Item>
          </Form>
        </div>
        
        <div className="text-center mt-12">
            <Text className={`text-[8px] tracking-[0.3em] uppercase ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
                {appCopyright} &copy; {new Date().getFullYear()}
            </Text>
        </div>
      </div>

      <style jsx global>{`
        .bg-grid-zinc-500 {
          background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
        }
      `}</style>
    </div>
  );
}
