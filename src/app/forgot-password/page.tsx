'use client';

import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Typography, App } from 'antd';
import { MailOutlined, ArrowLeftOutlined, KeyOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import { forgotPassword } from '../actions/auth';
import { useTheme } from 'next-themes';

const { Title, Text } = Typography;

export default function ForgotPasswordPage() {
  const { message } = App.useApp();
  const { resolvedTheme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

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

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <div className={`min-h-screen w-full flex items-center justify-center transition-colors duration-500 overflow-hidden relative p-6 ${isDark ? 'bg-[#09090b]' : 'bg-zinc-50'}`}>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-grid-zinc-500/[0.05] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]`}></div>
      </div>

      {/* Decorative blobs */}
      <div className={`absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none transition-opacity duration-1000 ${isDark ? 'bg-primary/5 opacity-100' : 'bg-primary/5 opacity-50'}`} />
      <div className={`absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none transition-opacity duration-1000 ${isDark ? 'bg-indigo-500/5 opacity-100' : 'bg-indigo-500/5 opacity-50'}`} />

      <div className="w-full max-w-[440px] relative z-10 animate-in fade-in zoom-in duration-700">
        <div className={`p-8 md:p-12 rounded-[48px] shadow-2xl border transition-all duration-300 ${isDark ? 'bg-[#18181b] border-zinc-800 shadow-black/50' : 'bg-white border-zinc-100 shadow-zinc-200/50'}`}>
          
          <div className="text-center mb-10 pt-4">
            <div className={`inline-flex items-center justify-center w-20 h-20 mb-8 transform hover:rotate-2 transition-transform`}>
                <img 
                  src={isDark ? "/logoapp.jpg" : "/logoapplight.jpg"} 
                  alt="Tea on Tech Logo" 
                  className="object-contain rounded-[10px]"
                />
             </div>
            
            <Title level={1} style={{ margin: 0, fontSize: '30px', fontWeight: 900, letterSpacing: '-0.5px' }} className={isDark ? 'text-zinc-50' : 'text-zinc-900'}>
              Recovery
            </Title>
            <Text className={`text-[14px] font-medium block mt-2 ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
              Recover your secure account access
            </Text>
          </div>

          {!submitted ? (
            <Form
              name="forgot_password"
              layout="vertical"
              onFinish={onFinish}
              size="large"
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
                  prefix={<MailOutlined className="text-zinc-500 mr-2" />} 
                  placeholder="Email Address" 
                  className={`rounded-[18px] h-12 transition-all font-medium border-2 ${isDark ? 'bg-zinc-900/50 border-zinc-800 text-zinc-100 hover:border-primary focus:border-primary' : 'bg-zinc-50 border-zinc-200 hover:border-primary focus:border-primary'}`}
                />
              </Form.Item>

              <Form.Item className="mb-0">
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  className="w-full h-14 rounded-[20px] bg-primary border-none text-sm font-black shadow-xl shadow-primary/20 hover:shadow-2xl hover:scale-[1.01] transition-all uppercase tracking-widest" 
                  loading={loading}
                >
                  SEND RECOVERY LINK
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <div className="text-center py-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className={`p-6 rounded-[24px] border mb-8 px-8 ${isDark ? 'bg-primary/10 border-primary/20' : 'bg-blue-50 border-blue-100'}`}>
                 <Text className={`text-[15px] font-semibold leading-relaxed block ${isDark ? 'text-primary' : 'text-blue-800'}`}>
                    Check your inbox. We've sent a recovery link to your email.
                 </Text>
              </div>
              <Button 
                type="default" 
                className={`h-11 px-8 rounded-xl font-bold transition-all ${isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-primary hover:border-primary' : 'bg-white border-zinc-200 text-zinc-600 hover:text-primary hover:border-primary'}`}
                onClick={() => setSubmitted(false)}
              >
                Resend link
              </Button>
            </div>
          )}

          <div className="text-center mt-10">
            <Link href="/login" className="text-primary hover:opacity-80 font-bold text-sm transition-all flex items-center justify-center gap-2 group">
              <ArrowLeftOutlined className="group-hover:-translate-x-1 transition-transform" /> Back to Login
            </Link>
          </div>
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
