'use client';

import React, { useState, useEffect, use } from 'react';
import { Form, Input, Button, Card, Typography, message, Space, Skeleton } from 'antd';
import { ArrowLeftOutlined, SaveOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { saveCategory, getCategoryById } from '@/app/actions/master';
import { CATEGORY_ICONS } from '@/lib/icons';
import { Select } from 'antd';

const { Title, Text } = Typography;

export default function EditCategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategoryById(parseInt(id));
        if (data) {
          form.setFieldsValue(data);
        } else {
          message.error('Category not found');
          router.push('/referential/categories');
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
      await saveCategory({ ...values, category_id: parseInt(id) });
      message.success('Category updated successfully');
      router.push('/referential/categories');
    } catch (error) {
      message.error('Failed to update category');
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
            <Title level={4} style={{ margin: 0, fontWeight: 700 }} className="text-text-primary">Edit Category</Title>
          </div>
          <Text type="secondary" className="ml-10">Updating category classification details.</Text>
        </Space>
      </div>

      <Card className="shadow-sm border-slate-100 rounded-2xl overflow-hidden p-4">
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
                name="category_name"
                label="Category Name"
                rules={[{ required: true, message: 'Please enter category name' }]}
              >
                <Input placeholder="e.g. Hardware Support" className="h-10 rounded-lg text-base" />
              </Form.Item>

              <Form.Item
                name="icon"
                label="Category Icon"
                rules={[{ required: true, message: 'Please select an icon' }]}
              >
                <Select className="h-10" placeholder="Select an icon">
                  {CATEGORY_ICONS.map(item => (
                    <Select.Option key={item.name} value={item.name}>
                      <Space>
                        <span className="text-primary">{item.icon}</span>
                        {item.label}
                      </Space>
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                name="color"
                label="Identification Color"
                rules={[{ required: true }]}
                extra={<Text type="secondary" italic className="text-xs">Used for icons and labels</Text>}
              >
                <Input type="color" className="w-16 h-10 p-1 rounded-lg border-card-border bg-app-bg" />
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
                Update Category
              </Button>
            </div>
          </Form>
        )}
      </Card>
    </div>
  );
}
