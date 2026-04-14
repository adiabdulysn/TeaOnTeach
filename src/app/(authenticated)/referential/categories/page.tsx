'use client';

import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, Space, Popconfirm, message, Typography } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { getCategories, deleteCategory } from '@/app/actions/master';
import { getCategoryIcon } from '@/lib/icons';

const { Title, Text } = Typography;

export default function CategoriesPage() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await getCategories();
      setData(result as any);
    } catch (error) {
      message.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData() }, []);

  const handleAdd = () => {
    router.push('/referential/categories/create');
  };

  const handleEdit = (record: any) => {
    router.push(`/referential/categories/${record.category_id}/edit`);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteCategory(id);
      message.success('Deleted successfully');
      fetchData();
    } catch {
      message.error('Failed to delete. It might be referenced by other records.');
    }
  };



  const columns = [
    { title: 'Category Name', dataIndex: 'category_name' },
    { 
      title: 'Icon', 
      dataIndex: 'icon',
      render: (iconName: string, record: any) => (
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-sm border border-card-border" 
          style={{ backgroundColor: `${record.color}15`, color: record.color }}
        >
          {getCategoryIcon(iconName)}
        </div>
      )
    },
    {
      title: 'Action',
      key: 'action',
      width: 120,
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button type="text" icon={<EditOutlined className="text-blue-600" style={{ fontSize: '16px' }} />} onClick={() => handleEdit(record)} />
          <Popconfirm title="Delete?" onConfirm={() => handleDelete(record.category_id)}>
            <Button type="text" danger icon={<DeleteOutlined style={{ fontSize: '16px' }} />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="bg-card-bg rounded-2xl shadow-sm border border-card-border overflow-hidden transition-colors">
      {/* Module Header */}
      <div className="p-6 border-b border-card-border flex flex-col md:flex-row md:items-center justify-between gap-4 bg-app-bg/10">
        <div>
          <Title level={4} style={{ margin: 0, fontWeight: 700 }} className="text-text-primary">Ticket Categories</Title>
          <Text className="text-text-secondary text-sm">Organize tickets by technical domains like Hardware, Network, etc.</Text>
        </div>
        <Button 
          type="primary" 
          icon={<PlusOutlined />} 
          onClick={handleAdd}
          className="rounded-lg h-10 font-semibold px-6 shadow-md shadow-blue-500/20"
        >
          Add Category
        </Button>
      </div>

      {/* Table Section */}
      <div className="p-2">
        <Table 
          columns={columns} 
          dataSource={data} 
          rowKey="category_id" 
          loading={loading} 
          className="px-2"
          pagination={{ 
            defaultPageSize: 10, 
            showSizeChanger: true, 
            pageSizeOptions: ['10', '20', '50'],
            showTotal: (total) => <span className="text-text-secondary text-xs font-medium">Total {total} categories</span>,
            className: "px-6 pb-6",
          }}
        />
      </div>
    </div>
  );
}
