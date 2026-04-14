'use client';

import React, { useState, useEffect } from 'react';
import { Table, Button, Space, Popconfirm, message, Typography, Tag } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const { Title, Text } = Typography;

export default function RolesPage() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRoles = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/roles');
      if (!res.ok) throw new Error('Failed to fetch');
      const json = await res.json();
      setData(json);
    } catch (error) {
      message.error('Error fetching roles');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const handleAdd = () => {
    router.push('/permissions/roles/create');
  };

  const handleEdit = (record: any) => {
    router.push(`/permissions/roles/${record.role_id}/edit`);
  };

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`/api/roles/${id}`, { method: 'DELETE' });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to delete');
      }
      message.success('Role deleted successfully');
      fetchRoles();
    } catch (error: any) {
      message.error(error.message);
    }
  };

  const columns = [
    { title: 'Role Name', dataIndex: 'role_name', key: 'role_name', width: 250 },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    { 
      title: 'Permissions', 
      dataIndex: 'permissions', 
      key: 'permissions',
      render: (permissions: string) => {
        try {
           const parsed = JSON.parse(permissions || '[]');
           if (parsed.length === 0) return <Text type="secondary">No Permissions</Text>;
           return (
             <div className="flex flex-wrap gap-1 max-w-sm">
               {parsed.slice(0, 4).map((p: string) => (
                  <Tag color="blue" key={p} className="capitalize">{p.replace(/_/g, ' ')}</Tag>
               ))}
               {parsed.length > 4 && <Tag>+{parsed.length - 4} more</Tag>}
             </div>
           );
        } catch (e) { return <Text type="secondary">Invalid Format</Text> }
      }
    },
    {
      title: 'Action',
      key: 'action',
      width: 150,
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button type="text" icon={<EditOutlined className="text-blue-600" style={{ fontSize: '16px' }} />} onClick={() => handleEdit(record)} />
          <Popconfirm title="Are you sure to delete this role?" onConfirm={() => handleDelete(record.role_id)}>
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
          <Title level={4} style={{ margin: 0, fontWeight: 700 }} className="text-slate-800">Roles & Permissions</Title>
          <Text className="text-slate-500 text-sm">Define system access levels and manage detailed feature permissions for users.</Text>
        </div>
        <Button 
          type="primary" 
          icon={<PlusOutlined />} 
          onClick={handleAdd}
          className="rounded-lg h-10 font-semibold px-6 shadow-md shadow-blue-500/20"
        >
          Add New Role
        </Button>
      </div>

      {/* Table Section */}
      <div className="p-2">
        <Table 
          columns={columns} 
          dataSource={data} 
          rowKey="role_id" 
          loading={loading} 
          className="px-2"
          pagination={{ 
            defaultPageSize: 10, 
            showSizeChanger: true, 
            pageSizeOptions: ['10', '20', '50', '100'],
            showTotal: (total) => <span className="text-slate-500 text-xs font-medium">Total {total} roles defined</span>,
            className: "px-6 pb-6",
          }}
        />
      </div>
    </div>
  );
}
