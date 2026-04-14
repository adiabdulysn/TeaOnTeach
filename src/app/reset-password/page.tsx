'use client';

import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Typography, App } from 'antd';
import { LockOutlined, ArrowLeftOutlined, CheckCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { resetPassword } from '../actions/auth';
import { useTheme } from 'next-themes';

const { Title, Text } = Typography;

export default function ResetPasswordPage() {
  const { message } = App.useApp();
  const { resolvedTheme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const router = useRouter();

  useEffect(() => { setMounted(true); }, []);

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

  const isDark = mounted && resolvedTheme === 'dark';

  if (!token) {
    return (
      <div className={`min-h-screen w-full flex items-center justify-center transition-colors duration-500 p-6 ${isDark ? 'bg-[#020617]' : 'bg-slate-50'}`}>
        <div className={`text-center p-10 rounded-[32px] shadow-2xl max-w-sm relative z-10 border transition-colors ${isDark ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-100'}`}>
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
             <LockOutlined className="text-3xl" />
          </div>
          <Title level={3} style={{ fontWeight: 800, margin: 0 }} className={isDark ? 'text-white' : 'text-slate-900'}>Invalid Link</Title>
          <Text className={`block mt-4 font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>This password reset link is invalid or has expired.</Text>
          <div className="mt-8">
            <Link href="/login" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-bold transition-all inline-block shadow-lg shadow-blue-600/20">
              Return to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen w-full flex items-center justify-center transition-colors duration-500 overflow-hidden relative p-6 ${isDark ? 'bg-[#020617]' : 'bg-slate-50'}`}>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-grid-pattern bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] opacity-[0.05] sm:opacity-[0.08] ${isDark ? 'text-white' : 'text-slate-900'} animate-grid-slow`}></div>
      </div>

      {/* Decorative blobs for Light Mode */}
      {!isDark && mounted && (
        <>
          <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-[10%] right-[30%] w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />
        </>
      )}

      {/* The Moon for Dark Mode */}
      {isDark && (
        <div className="absolute top-[15%] left-[10%] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] moon animate-float pointer-events-none z-0 opacity-40">
          <div className="moon-crater top-[20%] left-[15%] w-[15%] h-[15%]"></div>
          <div className="moon-crater top-[45%] left-[40%] w-[25%] h-[25%] opacity-60"></div>
          <div className="moon-crater top-[70%] left-[20%] w-[10%] h-[10%]"></div>
        </div>
      )}

      <div className="w-full max-w-[420px] relative z-10 animate-in fade-in zoom-in duration-700">
        <div className={`p-8 md:p-12 rounded-[40px] shadow-2xl border transition-all duration-300 ${isDark ? 'bg-[#0f172a] border-slate-800 shadow-blue-900/10' : 'bg-white border-slate-100 shadow-slate-200/50'}`}>
          <div className="text-center mb-10 pt-4">
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 shadow-lg border transition-colors ${isDark ? 'bg-slate-900 border-slate-700 text-blue-400 shadow-blue-900/10' : 'bg-blue-50 border-blue-100 text-blue-600 shadow-blue-100/50'}`}>
               <LockOutlined className="text-2xl" />
            </div>
            
            <Title level={1} style={{ margin: 0, fontSize: '28px', fontWeight: 900, letterSpacing: '-0.5px' }} className={isDark ? 'text-white' : 'text-slate-900'}>
              New Password
            </Title>
            <Text className={`text-[14px] font-medium block mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Keep your account secure
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
                  className={`rounded-xl h-11 transition-all font-medium ${isDark ? 'bg-slate-900 border-slate-700 text-white hover:border-blue-500' : 'bg-slate-50 border-slate-200 hover:border-blue-400'}`}
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
                  className={`rounded-xl h-11 transition-all font-medium ${isDark ? 'bg-slate-900 border-slate-700 text-white hover:border-blue-500' : 'bg-slate-50 border-slate-200 hover:border-blue-400'}`}
                />
              </Form.Item>

              <Form.Item className="mb-0">
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  className="w-full h-11 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 border-none text-sm font-black shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:scale-[1.01] transition-all" 
                  loading={loading}
                >
                  SAVE & LOGIN
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <div className="text-center py-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-16 h-16 bg-green-50 dark:bg-green-950/30 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-100 dark:border-green-900">
                <CheckCircleOutlined className="text-3xl" />
              </div>
              <Title level={4} style={{ fontWeight: 800, margin: 0 }} className={isDark ? 'text-white' : 'text-slate-900'}>Password Updated!</Title>
              <Text className={`block mt-3 mb-8 font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Your password has been changed successfully. Redirecting to login...</Text>
              <Link href="/login" className="text-blue-600 font-bold hover:underline">
                Go to Login Now
              </Link>
            </div>
          )}

          <div className="text-center mt-10">
            <Link href="/login" className="text-blue-600 hover:text-indigo-600 font-bold text-sm transition-all flex items-center justify-center gap-2 group">
              <ArrowLeftOutlined className="group-hover:-translate-x-1 transition-transform" /> Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
