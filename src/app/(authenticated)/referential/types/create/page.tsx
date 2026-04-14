'use client';

import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography, message, Space } from 'antd';
import { ArrowLeftOutlined, SaveOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { saveType } from '@/app/actions/master';

const { Title, Text } = Typography;

export default function CreateTypePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      await saveType(values);
      message.success('Ticket type created successfully');
      router.push('/referential/types');
    } catch (error) {
      message.error('Failed to create ticket type');
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
            <Title level={4} style={{ margin: 0, fontWeight: 700 }}>Add New Ticket Type</Title>
          </div>
          <Text className="text-slate-500 ml-10">Define a new category of service request (e.g. Incident, Request).</Text>
        </Space>
      </div>

      <Card className="shadow-sm border-slate-100 rounded-2xl overflow-hidden p-4">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <div className="p-2">
            <Form.Item
              name="ticket_type_name"
              label={<span className="font-semibold text-slate-700">Type Name</span>}
              rules={[{ required: true, message: 'Please enter type name' }]}
            >
              <Input placeholder="e.g. Incident, Service Request, Enhancement" className="h-10 rounded-lg text-base" />
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
              Save Ticket Type
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}
