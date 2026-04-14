'use client';

import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography, message, Space } from 'antd';
import { ArrowLeftOutlined, SaveOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { saveDivision } from '@/app/actions/master';

const { Title, Text } = Typography;

export default function CreateDivisionPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      await saveDivision(values);
      message.success('Division created successfully');
      router.push('/referential/divisions');
    } catch (error) {
      message.error('Failed to create division');
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
            <Title level={4} style={{ margin: 0, fontWeight: 700 }} className="text-text-primary">Add New Division</Title>
          </div>
          <Text type="secondary" className="ml-10">Define a new organizational unit or branch.</Text>
        </Space>
      </div>

      <Card className="shadow-sm border-card-border rounded-2xl overflow-hidden p-4">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <div className="p-2">
            <Form.Item
              name="division_name"
              label="Division Name"
              rules={[{ required: true, message: 'Please enter division name' }]}
            >
              <Input placeholder="e.g. Finance, Human Resources, IT" className="h-10 rounded-lg text-base" />
            </Form.Item>
          </div>

          <div className="border-t border-card-border mt-8 pt-6 flex justify-end gap-3 px-2">
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
              Save Division
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}
