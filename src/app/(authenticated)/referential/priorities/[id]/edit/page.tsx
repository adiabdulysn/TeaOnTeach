'use client';

import React, { useState, useEffect, use } from 'react';
import { Form, Input, Button, Card, Typography, message, Space, Skeleton, Switch, Select } from 'antd';
import { ArrowLeftOutlined, SaveOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { savePriority, getPriorityById } from '@/app/actions/master';
import { PRIORITY_ICONS } from '@/lib/icons';

const { Title, Text } = Typography;

export default function EditPriorityPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPriorityById(parseInt(id));
        if (data) {
          form.setFieldsValue(data);
        } else {
          message.error('Priority not found');
          router.push('/referential/priorities');
        }
      } catch (error) {
        message.error('Error fetching data');
      } finally {
        setFetching(false);
      }
    };
    fetchData();
  }, [id, form, router]);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      await savePriority({ ...values, ticket_priority_id: parseInt(id) });
      message.success('Priority updated successfully');
      router.push('/referential/priorities');
    } catch (error) {
      message.error('Failed to update priority');
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
                className="hover:bg-card-border/50 rounded-full"
            />
            <Title level={4} style={{ margin: 0, fontWeight: 700 }} className="text-text-primary">Edit Priority</Title>
          </div>
          <Text type="secondary" className="ml-10">Updating urgency level classification details.</Text>
        </Space>
      </div>

      <Card className="shadow-sm border-card-border rounded-2xl overflow-hidden p-4 bg-card-bg">
        {fetching ? (
          <Skeleton active paragraph={{ rows: 4 }} />
        ) : (
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
              <Form.Item
                name="ticket_priority_name"
                label="Priority Name"
                rules={[{ required: true, message: 'Please enter priority name' }]}
              >
                <Input placeholder="e.g. High, Medium, Low" className="h-10 rounded-lg text-base bg-app-bg border-card-border text-text-primary" />
              </Form.Item>

              <Form.Item
                name="icon"
                label="Priority Icon"
                rules={[{ required: true, message: 'Please select an icon' }]}
              >
                <Select className="h-10 custom-select" placeholder="Select an icon">
                  {PRIORITY_ICONS.map(item => (
                    <Select.Option key={item.name} value={item.name}>
                      <Space>
                        <span className="text-primary">{item.icon}</span>
                        <span className="text-text-primary">{item.label}</span>
                      </Space>
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                name="color"
                label="Urgency Color"
                rules={[{ required: true }]}
                extra={<Text type="secondary" italic className="text-xs">Used for visual urgency cues</Text>}
              >
                <Input type="color" className="w-16 h-10 p-1 rounded-lg border-card-border bg-app-bg" />
              </Form.Item>
            </div>

            <div className="p-2">
              <Form.Item
                name="is_default"
                label="Set as System Default?"
                valuePropName="checked"
              >
                <Switch checkedChildren="Yes" unCheckedChildren="No" />
              </Form.Item>
            </div>

            <div className="border-t border-card-border mt-8 pt-6 flex justify-end gap-3 px-2">
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
                Update Priority
              </Button>
            </div>
          </Form>
        )}
      </Card>
    </div>
  );
}
