'use client';

import React, { useState, useEffect } from 'react';
import { Card, Form, Input, Button, Typography, Space, Avatar, Divider, message, Tabs, Row, Col, Alert, Skeleton } from 'antd';
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
      <div className="mx-auto max-w-6xl">
        <Skeleton active avatar paragraph={{ rows: 10 }} />
      </div>
    );
  }

  return (
    <div className="mx-auto space-y-6 max-w-6xl">
      <Title level={3} style={{ fontWeight: 700 }} className="text-text-primary tracking-tight mb-0">
        Account Settings
      </Title>
      
      <Row gutter={[24, 24]}>
        {/* Left Panel: Profile Overview */}
        <Col xs={24} md={8}>
          <Card className="rounded-3xl shadow-sm border-card-border bg-card-bg text-center py-6">
            <Avatar 
              size={100} 
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(user?.full_name || 'User')}&radius=50&backgroundColor=1677ff`}
              className="border-4 border-app-bg mb-2"
            />
            <Title level={4} style={{ margin: '16px 0 0', fontWeight: 700 }} className="text-text-primary">
              {user?.full_name}
            </Title>
            <Text type="secondary" className="block text-sm font-medium mb-4 uppercase tracking-wider">
              {user?.role_name}
            </Text>
            
            <Divider className="border-card-border my-4" />
            
            <div className="text-left space-y-4 px-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <SafetyCertificateOutlined />
                </div>
                <div className="flex flex-col">
                  <Text className="text-[10px] uppercase font-bold text-text-secondary/50 tracking-widest leading-none">Role Access</Text>
                  <Text className="font-medium text-text-primary mt-1">{user?.role_name}</Text>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <MailOutlined />
                </div>
                <div className="flex flex-col">
                  <Text className="text-[10px] uppercase font-bold text-text-secondary/50 tracking-widest leading-none">Email Address</Text>
                  <Text className="font-medium text-text-primary mt-1">{user?.email}</Text>
                </div>
              </div>
            </div>
          </Card>
        </Col>

        {/* Right Panel: Forms */}
        <Col xs={24} md={16}>
          <Card className="rounded-3xl shadow-sm border-card-border bg-card-bg overflow-hidden p-0" styles={{ body: { padding: 0 } }}>
            <Tabs
              defaultActiveKey="general"
              className="custom-tabs"
              items={[
                {
                  key: 'general',
                  label: (
                    <span className="flex items-center gap-2 px-6 py-4">
                      <UserOutlined /> General Info
                    </span>
                  ),
                  children: (
                    <div className="p-8">
                      <Form
                        form={form}
                        layout="vertical"
                        onFinish={onUpdateProfile}
                        requiredMark={false}
                        className="bg-transparent"
                      >
                         <Form.Item
                          label="Username"
                          name="user_name"
                          rules={[{ required: true, message: 'Please enter your username' }]}
                        >
                          <Input 
                            prefix={<IdcardOutlined className="text-text-secondary/50" />} 
                            placeholder="Your username" 
                            className="h-11 rounded-xl bg-app-bg border-card-border text-text-primary"
                            disabled
                          />
                        </Form.Item>

                        <Form.Item
                          label="Full Name"
                          name="full_name"
                          rules={[{ required: true, message: 'Please enter your full name' }]}
                        >
                          <Input 
                            prefix={<UserOutlined className="text-text-secondary/50" />} 
                            placeholder="Your full name" 
                            className="h-11 rounded-xl bg-app-bg border-card-border text-text-primary"
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
                            prefix={<MailOutlined className="text-text-secondary/50" />} 
                            placeholder="your.email@example.com" 
                            className="h-11 rounded-xl bg-app-bg border-card-border text-text-primary"
                          />
                        </Form.Item>

                        <div className="mt-8 pt-6 border-t border-card-border flex justify-end">
                          <Button 
                            type="primary" 
                            htmlType="submit" 
                            loading={submitting}
                            icon={<SaveOutlined />}
                            className="h-11 px-10 rounded-xl font-bold bg-primary border-none shadow-lg shadow-primary/20"
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
                    <span className="flex items-center gap-2 px-6 py-4">
                      <LockOutlined /> Change Password
                    </span>
                  ),
                  children: (
                    <div className="p-8">
                      <Alert
                        message={<span className="font-bold text-blue-900 dark:text-blue-200">Password Requirements</span>}
                        description={<span className="text-blue-800 dark:text-blue-300">Ensure your new password is at least 8 characters long and includes numbers or special characters for better security.</span>}
                        type="info"
                        showIcon
                        className="mb-8 rounded-xl border-blue-200 bg-blue-500/10"
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
                            prefix={<LockOutlined className="text-text-secondary/50" />} 
                            placeholder="Confirm current password" 
                            className="h-11 rounded-xl bg-app-bg border-card-border text-text-primary"
                          />
                        </Form.Item>

                        <Divider className="border-card-border my-8" />

                        <Form.Item
                          label="New Password"
                          name="newPassword"
                          rules={[
                            { required: true, message: 'Please enter new password' },
                            { min: 6, message: 'Password must be at least 6 characters' }
                          ]}
                        >
                          <Input.Password 
                            prefix={<KeyOutlined className="text-text-secondary/50" />} 
                            placeholder="Enter new password" 
                            className="h-11 rounded-xl bg-app-bg border-card-border text-text-primary"
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
                            prefix={<KeyOutlined className="text-text-secondary/50" />} 
                            placeholder="Confirm new password" 
                            className="h-11 rounded-xl bg-app-bg border-card-border text-text-primary"
                          />
                        </Form.Item>

                        <div className="mt-8 pt-6 border-t border-card-border flex justify-end">
                          <Button 
                            type="primary" 
                            htmlType="submit" 
                            loading={pwSubmitting}
                            icon={<LockOutlined />}
                            className="h-11 px-10 rounded-xl font-bold bg-primary border-none shadow-lg shadow-primary/20"
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
