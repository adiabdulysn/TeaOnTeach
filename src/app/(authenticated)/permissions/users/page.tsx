'use client';

import React, { useState, useEffect } from 'react';
import { Table, Button, Space, Popconfirm, message, Typography, Tag } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { getUsers, deleteUser } from '@/app/actions/master';

const { Title, Text } = Typography;

export default function UsersPage() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const result = await getUsers();
      setData(result as any);
    } catch (error) {
      message.error('Error fetching users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAdd = () => {
    router.push('/permissions/users/create');
  };

  const handleEdit = (record: any) => {
    router.push(`/permissions/users/${record.user_id}/edit`);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteUser(id);
      message.success('User deleted successfully');
      fetchUsers();
    } catch (error: any) {
      message.error(error.message || 'Failed to delete');
    }
  };

  const columns = [
    { title: 'Full Name', dataIndex: 'full_name', key: 'full_name' },
    { title: 'Username', dataIndex: 'user_name', key: 'user_name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { 
      title: 'Role', 
      dataIndex: ['roles', 'role_name'], 
      key: 'role',
      render: (role: string) => <Tag color="blue" className="rounded-md px-2">{role}</Tag>
    },
    { 
      title: 'Status', 
      dataIndex: 'is_active', 
      key: 'status',
      render: (active: boolean) => (
        <Tag color={active ? 'green' : 'default'} className="rounded-md px-2">
          {active ? 'Active' : 'Inactive'}
        </Tag>
      )
    },
    {
      title: 'Action',
      key: 'action',
      width: 120,
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button 
            type="text" 
            icon={<EditOutlined className="text-blue-600" style={{ fontSize: '16px' }} />} 
            onClick={() => handleEdit(record)} 
          />
          <Popconfirm title="Are you sure to delete this user?" onConfirm={() => handleDelete(record.user_id)}>
            <Button type="text" danger icon={<DeleteOutlined style={{ fontSize: '16px' }} />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      {/* Module Header Container */}
      <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/30">
        <div>
          <Title level={4} style={{ margin: 0, fontWeight: 700 }} className="text-slate-800">User Management</Title>
          <Text className="text-slate-500 text-sm">Create, manage, and monitor system users and their access levels.</Text>
        </div>
        <Button 
          type="primary" 
          icon={<PlusOutlined />} 
          onClick={handleAdd}
          className="rounded-lg h-10 font-semibold px-6 shadow-md shadow-blue-500/20"
        >
          Add New User
        </Button>
      </div>

      {/* Table Section */}
      <div className="p-2">
        <Table 
          columns={columns} 
          dataSource={data} 
          rowKey="user_id" 
          loading={loading} 
          className="px-2"
          pagination={{ 
            defaultPageSize: 10, 
            showSizeChanger: true, 
            pageSizeOptions: ['10', '20', '50', '100'],
            showTotal: (total) => <span className="text-slate-500 text-xs font-medium">Total {total} users found</span>,
            className: "px-6 pb-6",
          }}
        />
      </div>
    </div>
  );
}
