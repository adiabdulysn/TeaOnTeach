'use client';

import React, { useState, useEffect } from 'react';
import { Card, Form, Input, Button, Typography, Space, Avatar, Divider, message, Tabs, Row, Col, Alert } from 'antd';
import { 
  UserOutlined, 
  LockOutlined, 
  MailOutlined, 
  IdcardOutlined, 
  SafetyCertificateOutlined,
  SaveOutlined,
  KeyOutlined
} from '@ant-design/icons';
import { getCurrentUser, updateUserProfile, changeUserPassword } from '@/app/actions/auth';

const { Title, Text } = Typography;

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [pwSubmitting, setPwSubmitting] = useState(false);
  const [form] = Form.useForm();
  const [pwForm] = Form.useForm();

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const userData = await getCurrentUser();
        if (userData) {
          setUser(userData);
          form.setFieldsValue({
            full_name: userData.full_name,
            email: userData.email,
            user_name: userData.user_name,
          });
        }
      } catch (err) {
        message.error('Failed to load user profile');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [form]);

  const onUpdateProfile = async (values: any) => {
    setSubmitting(true);
    try {
      const result = await updateUserProfile(values);
      if (result.success) {
        message.success('Profile updated successfully');
        // Update local state
        setUser({ ...user, ...values });
      } else {
        message.error(result.error || 'Failed to update profile');
      }
    } catch (err) {
      message.error('An unexpected error occurred');
    } finally {
      setSubmitting(false);
    }
  };

  const onChangePassword = async (values: any) => {
    setPwSubmitting(true);
    try {
      const result = await changeUserPassword(values);
      if (result.success) {
        message.success('Password changed successfully');
        pwForm.resetFields();
      } else {
        message.error(result.error || 'Failed to change password');
      }
    } catch (err) {
      message.error('An unexpected error occurred');
    } finally {
      setPwSubmitting(false);
    }
  };

  if (loading) {
    return (
      <Card className="rounded-3xl shadow-sm border-slate-100 p-8">
        <Space direction="vertical" align="center" style={{ width: '100%' }}>
          <Avatar size={80} icon={<UserOutlined />} />
          <div className="h-4 w-32 bg-slate-100 rounded animate-pulse mt-4" />
          <div className="h-3 w-48 bg-slate-50 rounded animate-pulse mt-2" />
        </Space>
      </Card>
    );
  }

  return (
    <div className="mx-auto space-y-6">
      <Title level={3} className="font-bold text-slate-800 tracking-tight mb-0">
        Account Settings
      </Title>
      
      <Row gutter={[24, 24]}>
        {/* Left Panel: Profile Overview */}
        <Col xs={24} md={8}>
          <Card className="rounded-3xl shadow-sm border-slate-100 text-center py-6">
            <Avatar 
              size={100} 
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(user?.full_name || 'User')}&radius=50&backgroundColor=1677ff`}
              className="border-4 mb-2"
            />
            <Title level={4} style={{ margin: '16px 0 0' }} className="font-bold text-slate-800">
              {user?.full_name}
            </Title>
            <Text type="secondary" className="block text-sm font-medium mb-4">
              {user?.role_name}
            </Text>
            
            <Divider className="my-4" />
            
            <div className="text-left space-y-3 px-2">
              <div className="flex items-center gap-3">
                <SafetyCertificateOutlined className="text-slate-400" />
                <div className="flex flex-col">
                  <Text className="text-[10px] uppercase font-bold text-slate-400 tracking-widest leading-none">Role Access</Text>
                  <Text className="font-medium text-slate-700">{user?.role_name}</Text>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MailOutlined className="text-slate-400" />
                <div className="flex flex-col">
                  <Text className="text-[10px] uppercase font-bold text-slate-400 tracking-widest leading-none">Email Address</Text>
                  <Text className="font-medium text-slate-700">{user?.email}</Text>
                </div>
              </div>
            </div>
          </Card>
        </Col>

        {/* Right Panel: Forms */}
        <Col xs={24} md={16}>
          <Card className="rounded-3xl shadow-sm border-slate-100 overflow-hidden">
            <Tabs
              defaultActiveKey="general"
              className="custom-tabs px-2"
              items={[
                {
                  key: 'general',
                  label: (
                    <span className="flex items-center gap-2 px-2 py-1">
                      <UserOutlined /> General Info
                    </span>
                  ),
                  children: (
                    <div className="p-4">
                      <Form
                        form={form}
                        layout="vertical"
                        onFinish={onUpdateProfile}
                        requiredMark={false}
                      >
                         <Form.Item
                          label="Username"
                          name="user_name"
                          rules={[{ required: true, message: 'Please enter your username' }]}
                        >
                          <Input 
                            prefix={<IdcardOutlined className="text-slate-300" />} 
                            placeholder="Your username" 
                            className="h-11 rounded-xl"
                          />
                        </Form.Item>

                        <Form.Item
                          label="Full Name"
                          name="full_name"
                          rules={[{ required: true, message: 'Please enter your full name' }]}
                        >
                          <Input 
                            prefix={<UserOutlined className="text-slate-300" />} 
                            placeholder="Your full name" 
                            className="h-11 rounded-xl"
                          />
                        </Form.Item>

                        <Form.Item
                          label="Email Address"
                          name="email"
                          rules={[
                            { required: true, message: 'Please enter your email' },
                            { type: 'email', message: 'Please enter a valid email' }
                          ]}
                        >
                          <Input 
                            prefix={<MailOutlined className="text-slate-300" />} 
                            placeholder="your.email@example.com" 
                            className="h-11 rounded-xl"
                          />
                        </Form.Item>

                        <div className="mt-4 pt-4 border-t border-slate-50 flex justify-end">
                          <Button 
                            type="primary" 
                            htmlType="submit" 
                            loading={submitting}
                            icon={<SaveOutlined />}
                            className="h-11 px-8 rounded-xl font-bold shadow-lg shadow-blue-500/20"
                          >
                            Save Changes
                          </Button>
                        </div>
                      </Form>
                    </div>
                  )
                },
                {
                  key: 'security',
                  label: (
                    <span className="flex items-center gap-2 px-2 py-1">
                      <LockOutlined /> Change Password
                    </span>
                  ),
                  children: (
                    <div className="p-4">
                      <Alert
                        message="Password Requirements"
                        description="Ensure your new password is at least 8 characters long and includes numbers or special characters for better security."
                        type="info"
                        showIcon
                        className="mb-6 rounded-xl border-blue-50 bg-blue-50/30"
                      />

                      <Form
                        form={pwForm}
                        layout="vertical"
                        onFinish={onChangePassword}
                        requiredMark={false}
                      >
                        <Form.Item
                          label="Current Password"
                          name="currentPassword"
                          rules={[{ required: true, message: 'Please enter current password' }]}
                        >
                          <Input.Password 
                            prefix={<LockOutlined className="text-slate-300" />} 
                            placeholder="Confirm current password" 
                            className="h-11 rounded-xl"
                          />
                        </Form.Item>

                        <Divider className="my-6" />

                        <Form.Item
                          label="New Password"
                          name="newPassword"
                          rules={[
                            { required: true, message: 'Please enter new password' },
                            { min: 6, message: 'Password must be at least 6 characters' }
                          ]}
                        >
                          <Input.Password 
                            prefix={<KeyOutlined className="text-slate-300" />} 
                            placeholder="Enter new password" 
                            className="h-11 rounded-xl"
                          />
                        </Form.Item>

                        <Form.Item
                          label="Confirm New Password"
                          name="confirmPassword"
                          dependencies={['newPassword']}
                          rules={[
                            { required: true, message: 'Please confirm new password' },
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                if (!value || getFieldValue('newPassword') === value) {
                                  return Promise.resolve();
                                }
                                return Promise.reject(new Error('Passwords do not match'));
                              },
                            }),
                          ]}
                        >
                          <Input.Password 
                            prefix={<KeyOutlined className="text-slate-300" />} 
                            placeholder="Confirm new password" 
                            className="h-11 rounded-xl"
                          />
                        </Form.Item>

                        <div className="mt-4 pt-4 border-t border-slate-50 flex justify-end">
                          <Button 
                            type="primary" 
                            htmlType="submit" 
                            loading={pwSubmitting}
                            icon={<LockOutlined />}
                            className="h-11 px-8 rounded-xl font-bold shadow-lg shadow-blue-500/20"
                          >
                            Update Password
                          </Button>
                        </div>
                      </Form>
                    </div>
                  )
                }
              ]}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
