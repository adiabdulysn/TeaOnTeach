'use client';

import React, { useState, useEffect, use } from 'react';
import { Form, Input, Button, Card, Typography, message, Space, Skeleton } from 'antd';
import { ArrowLeftOutlined, SaveOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { saveDivision, getDivisionById } from '@/app/actions/master';

const { Title, Text } = Typography;

export default function EditDivisionPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDivisionById(parseInt(id));
        if (data) {
          form.setFieldsValue(data);
        } else {
          message.error('Division not found');
          router.push('/referential/divisions');
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
      await saveDivision({ ...values, division_id: parseInt(id) });
      message.success('Division updated successfully');
      router.push('/referential/divisions');
    } catch (error) {
      message.error('Failed to update division');
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
            <Title level={4} style={{ margin: 0, fontWeight: 700 }}>Edit Division</Title>
          </div>
          <Text className="text-slate-500 ml-10">Updating organizational unit details.</Text>
        </Space>
      </div>

      <Card className="shadow-sm border-slate-100 rounded-2xl overflow-hidden p-4">
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
                name="division_name"
                label={<span className="font-semibold text-slate-700">Division Name</span>}
                rules={[{ required: true, message: 'Please enter division name' }]}
              >
                <Input placeholder="e.g. Finance, Human Resources" className="h-10 rounded-lg text-base" />
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
                Update Division
              </Button>
            </div>
          </Form>
        )}
      </Card>
    </div>
  );
}
