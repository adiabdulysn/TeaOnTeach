'use client';

import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography, message, Space, Switch } from 'antd';
import { ArrowLeftOutlined, SaveOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { saveStatus } from '@/app/actions/master';

const { Title, Text } = Typography;

export default function CreateStatusPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      await saveStatus(values);
      message.success('Status created successfully');
      router.push('/referential/statuses');
    } catch (error) {
      message.error('Failed to create status');
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
            <Title level={4} style={{ margin: 0, fontWeight: 700 }}>Add New Status</Title>
          </div>
          <Text className="text-slate-500 ml-10">Define a new lifecycle stage for support tickets.</Text>
        </Space>
      </div>

      <Card className="shadow-sm border-slate-100 rounded-2xl overflow-hidden p-4">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ color: '#d9d9d9', is_default: false }}
          autoComplete="off"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
            <Form.Item
              name="ticket_name"
              label={<span className="font-semibold text-slate-700">Status Name</span>}
              rules={[{ required: true, message: 'Please enter status name' }]}
            >
              <Input placeholder="e.g. Open, In Progress, Resolved" className="h-10 rounded-lg text-base" />
            </Form.Item>

            <Form.Item
              name="color"
              label={<span className="font-semibold text-slate-700">Label Color</span>}
              rules={[{ required: true }]}
              extra={<Text className="text-slate-400 italic text-xs">Used for status badges</Text>}
            >
              <Input type="color" className="w-16 h-10 p-1 rounded-lg border-slate-200" />
            </Form.Item>
          </div>

          <div className="p-2">
            <Form.Item
              name="is_default"
              label={<span className="font-semibold text-slate-700">Set as System Default?</span>}
              valuePropName="checked"
            >
              <Switch checkedChildren="Yes" unCheckedChildren="No" />
            </Form.Item>
          </div>

          <div className="border-t border-slate-50 mt-8 pt-6 flex justify-end gap-3 px-2">
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
              Save Status
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}
