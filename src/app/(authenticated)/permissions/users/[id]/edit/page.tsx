'use client';

import React, { useState, useEffect, use } from 'react';
import { Form, Input, Button, Card, Typography, message, Space, Select, Switch, Skeleton } from 'antd';
import { ArrowLeftOutlined, SaveOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { saveUser, getUserById, getRoles } from '@/app/actions/master';

const { Title, Text } = Typography;

export default function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [roles, setRoles] = useState<any[]>([]);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userData, rolesData] = await Promise.all([
          getUserById(id),
          getRoles()
        ]);
        
        setRoles(rolesData);
        
        if (userData) {
          form.setFieldsValue(userData);
        } else {
          message.error('User not found');
          router.push('/permissions/users');
        }
      } catch (error) {
        message.error('Failed to load data');
      } finally {
        setFetching(false);
      }
    };
    fetchData();
  }, [id, form, router]);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      await saveUser({ ...values, user_id: id });
      message.success('User account updated successfully');
      router.push('/permissions/users');
    } catch (error: any) {
      message.error(error.message || 'Failed to update user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <Space direction="vertical" size={0}>
          <div className="flex items-center gap-2 mb-1">
            <Button 
                type="text" 
                icon={<ArrowLeftOutlined />} 
                onClick={() => router.back()} 
                className="hover:bg-slate-100 rounded-full"
            />
            <Title level={4} style={{ margin: 0, fontWeight: 700 }}>Modify User Account</Title>
          </div>
          <Text className="text-slate-500 ml-10">Adjust account details, roles, and security settings for this user.</Text>
        </Space>
      </div>

      <Card className="shadow-sm border-slate-100 rounded-2xl overflow-hidden p-6">
        {fetching ? (
          <Skeleton active paragraph={{ rows: 6 }} />
        ) : (
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <Form.Item
                name="full_name"
                label={<span className="font-semibold text-slate-700">Full Name</span>}
                rules={[{ required: true, message: 'Please enter full name' }]}
                className="md:col-span-2"
              >
                <Input placeholder="e.g. John Doe" className="h-10 rounded-lg text-base" />
              </Form.Item>

              <Form.Item
                name="user_name"
                label={<span className="font-semibold text-slate-700">Username</span>}
                rules={[{ required: true, message: 'Please enter username' }]}
              >
                <Input placeholder="johndoe" className="h-10 rounded-lg text-base bg-slate-50" />
              </Form.Item>

              <Form.Item
                name="email"
                label={<span className="font-semibold text-slate-700">Email Address</span>}
                rules={[
                  { required: true, message: 'Please enter email' },
                  { type: 'email', message: 'Please enter a valid email' }
                ]}
              >
                <Input placeholder="john@example.com" className="h-10 rounded-lg text-base" />
              </Form.Item>

              <Form.Item
                name="role_id"
                label={<span className="font-semibold text-slate-700">Assign Role</span>}
                rules={[{ required: true, message: 'Please select a role' }]}
              >
                <Select placeholder="Select user role" className="h-10">
                  {roles.map(role => (
                    <Select.Option key={role.role_id} value={role.role_id}>
                      {role.role_name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                name="password"
                label={<span className="font-semibold text-slate-700">Reset Password</span>}
                extra={<span className="text-slate-400 italic text-xs">Leave blank to keep the current password</span>}
              >
                <Input.Password placeholder="••••••••" className="h-10 rounded-lg text-base" />
              </Form.Item>

              <Form.Item
                name="is_active"
                label={<span className="font-semibold text-slate-700">Account Status</span>}
                valuePropName="checked"
              >
                <Switch checkedChildren="Active" unCheckedChildren="Inactive" />
              </Form.Item>
            </div>

            <div className="border-t border-slate-50 mt-8 pt-6 flex justify-end gap-3">
              <Button 
                onClick={() => router.back()} 
                className="h-10 px-6 rounded-lg font-medium"
              >
                Discard
              </Button>
              <Button 
                type="primary" 
                htmlType="submit" 
                loading={loading} 
                icon={<SaveOutlined />}
                className="h-10 px-8 rounded-lg font-semibold shadow-md shadow-blue-500/20"
              >
                Update Account
              </Button>
            </div>
          </Form>
        )}
      </Card>
    </div>
  );
}
