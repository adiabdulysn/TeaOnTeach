'use client';

import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography, message, Space, Switch } from 'antd';
import { ArrowLeftOutlined, SaveOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { savePriority } from '@/app/actions/master';
import { PRIORITY_ICONS } from '@/lib/icons';
import { Select } from 'antd';

const { Title, Text } = Typography;

export default function CreatePriorityPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      await savePriority(values);
      message.success('Priority created successfully');
      router.push('/referential/priorities');
    } catch (error) {
      message.error('Failed to create priority');
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
            <Title level={4} style={{ margin: 0, fontWeight: 700 }}>Add New Priority</Title>
          </div>
          <Text className="text-slate-500 ml-10">Define a new urgency level for ticket classification.</Text>
        </Space>
      </div>

      <Card className="shadow-sm border-slate-100 rounded-2xl overflow-hidden p-4">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ color: '#ff4d4f', is_default: false }}
          autoComplete="off"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
            <Form.Item
              name="ticket_priority_name"
              label={<span className="font-semibold text-slate-700">Priority Name</span>}
              rules={[{ required: true, message: 'Please enter priority name' }]}
            >
              <Input placeholder="e.g. Critical, High, Normal, Low" className="h-10 rounded-lg text-base" />
            </Form.Item>

            <Form.Item
              name="icon"
              label={<span className="font-semibold text-slate-700">Priority Icon</span>}
              rules={[{ required: true, message: 'Please select an icon' }]}
              initialValue="ArrowUpOutlined"
            >
              <Select className="h-10" placeholder="Select an icon">
                {PRIORITY_ICONS.map(item => (
                  <Select.Option key={item.name} value={item.name}>
                    <Space>
                      <span className="text-blue-600">{item.icon}</span>
                      {item.label}
                    </Space>
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="color"
              label={<span className="font-semibold text-slate-700">Urgency Color</span>}
              rules={[{ required: true }]}
              extra={<Text className="text-slate-400 italic text-xs">Used for visual urgency cues</Text>}
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
              Save Priority
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}
