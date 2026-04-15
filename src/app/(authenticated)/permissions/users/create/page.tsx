'use client';

import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Card, Typography, App, Space, Select, Switch, Skeleton } from 'antd';
import { ArrowLeftOutlined, SaveOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { saveUser, getRoles } from '@/app/actions/master';

const { Title, Text } = Typography;

export default function CreateUserPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [roles, setRoles] = useState<any[]>([]);
  const { message } = App.useApp();
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const data = await getRoles();
        setRoles(data || []);
      } catch (error) {
        message.error('Failed to load roles');
      }
    };
    fetchRoles();
  }, []);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      await saveUser(values);
      message.success('User account created successfully');
      router.push('/permissions/users');
    } catch (error: any) {
      message.error(error.message || 'Failed to create user');
    } finally {
      setLoading(false);
    }
  };

  if (loading && !roles.length) return (
    <div className="max-w-4xl mx-auto">
      <Form form={form} component={false} />
      <Skeleton active paragraph={{ rows: 10 }} />
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <Space orientation="vertical" size={0}>
          <div className="flex items-center gap-2 mb-1">
            <Button 
                type="text" 
                icon={<ArrowLeftOutlined />} 
                onClick={() => router.back()} 
                className="hover:bg-card-border/50 rounded-full"
            />
            <Title level={4} style={{ margin: 0, fontWeight: 700 }} className="text-text-primary">Register New User</Title>
          </div>
          <Text type="secondary" className="ml-10">Provision a new account with specific roles and access permissions.</Text>
        </Space>
      </div>

      <Card className="shadow-sm border-card-border rounded-2xl overflow-hidden p-6 bg-card-bg">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ is_active: true }}
          autoComplete="off"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <Form.Item
              name="full_name"
              label="Full Name"
              rules={[{ required: true, message: 'Please enter full name' }]}
              className="md:col-span-2"
            >
              <Input placeholder="e.g. John Doe" className="h-10 rounded-lg text-base bg-app-bg border-card-border text-text-primary" />
            </Form.Item>

            <Form.Item
              name="user_name"
              label="Username"
              rules={[{ required: true, message: 'Please enter username' }]}
            >
              <Input placeholder="johndoe" className="h-10 rounded-lg text-base bg-app-bg border-card-border text-text-primary" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email Address"
              rules={[
                { required: true, message: 'Please enter email' },
                { type: 'email', message: 'Please enter a valid email' }
              ]}
            >
              <Input placeholder="john@example.com" className="h-10 rounded-lg text-base bg-app-bg border-card-border text-text-primary" />
            </Form.Item>

            <Form.Item
              name="role_id"
              label="Assign Role"
              rules={[{ required: true, message: 'Please select a role' }]}
            >
              <Select placeholder="Select user role" className="h-10 custom-select">
                {roles.map(role => (
                  <Select.Option key={role.role_id} value={role.role_id}>
                    <span className="text-text-primary">{role.role_name}</span>
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="password"
              label="Initial Password"
              rules={[{ required: true, message: 'Please enter password' }]}
            >
              <Input.Password placeholder="••••••••" className="h-10 rounded-lg text-base bg-app-bg border-card-border text-text-primary" />
            </Form.Item>

            <Form.Item
              name="is_active"
              label="Account Status"
              valuePropName="checked"
            >
              <Switch checkedChildren="Active" unCheckedChildren="Inactive" />
            </Form.Item>
          </div>

          <div className="border-t border-card-border mt-8 pt-6 flex justify-end gap-3">
            <Button 
              onClick={() => router.back()} 
              className="h-10 px-6 rounded-lg font-medium border-card-border text-text-secondary hover:text-text-primary bg-card-bg transition-all"
            >
              Discard
            </Button>
            <Button 
              type="primary" 
              htmlType="submit" 
              loading={loading} 
              icon={<SaveOutlined />}
              className="h-10 px-8 rounded-lg font-semibold shadow-md shadow-primary/20 bg-primary border-none"
            >
              Create Account
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}
