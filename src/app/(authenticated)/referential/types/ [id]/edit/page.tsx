'use client';

import React, { useState, useEffect, use } from 'react';
import { Form, Input, Button, Card, Typography, message, Space, Skeleton } from 'antd';
import { ArrowLeftOutlined, SaveOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { saveType, getTypeById } from '@/app/actions/master';

const { Title, Text } = Typography;

export default function EditTypePage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTypeById(parseInt(id));
        if (data) {
          form.setFieldsValue(data);
        } else {
          message.error('Ticket Type not found');
          router.push('/referential/types');
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
      await saveType({ ...values, ticket_type_id: parseInt(id) });
      message.success('Ticket Type updated successfully');
      router.push('/referential/types');
    } catch (error) {
      message.error('Failed to update ticket type');
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
            <Title level={4} style={{ margin: 0, fontWeight: 700 }} className="text-text-primary">Edit Ticket Type</Title>
          </div>
          <Text type="secondary" className="ml-10">Updating service request classification details.</Text>
        </Space>
      </div>

      <Card className="shadow-sm border-card-border rounded-2xl overflow-hidden p-4 bg-card-bg">
        {fetching ? (
          <Skeleton active paragraph={{ rows: 2 }} />
        ) : (
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <div className="p-2">
              <Form.Item
                name="ticket_type_name"
                label="Type Name"
                rules={[{ required: true, message: 'Please enter type name' }]}
              >
                <Input placeholder="e.g. Incident, Service Request" className="h-10 rounded-lg text-base bg-app-bg border-card-border text-text-primary" />
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
                Update Ticket Type
              </Button>
            </div>
          </Form>
        )}
      </Card>
    </div>
  );
}
