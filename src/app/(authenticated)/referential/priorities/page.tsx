'use client';

import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, Space, Popconfirm, message, Typography, Switch } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { getPriorities, deletePriority } from '@/app/actions/master';
import { getPriorityIcon } from '@/lib/icons';

const { Title, Text } = Typography;

export default function PrioritiesPage() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await getPriorities();
      setData(result as any);
    } catch {
      message.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData() }, []);

  const handleAdd = () => {
    router.push('/referential/priorities/create');
  };

  const handleEdit = (record: any) => {
    router.push(`/referential/priorities/${record.ticket_priority_id}/edit`);
  };

  const handleDelete = async (id: number) => {
    try {
      await deletePriority(id);
      message.success('Deleted successfully');
      fetchData();
    } catch {
      message.error('Failed to delete.');
    }
  };



  const columns = [
    { title: 'Priority Name', dataIndex: 'ticket_priority_name' },
    { 
      title: 'Icon', 
      dataIndex: 'icon', 
      render: (iconName: string, record: any) => (
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-sm border border-slate-50" 
          style={{ backgroundColor: `${record.color}15`, color: record.color }}
        >
          {getPriorityIcon(iconName)}
        </div>
      )
    },
    { 
      title: 'Default', 
      dataIndex: 'is_default', 
      render: (val: any) => (!!val ? <Text type="success">Yes</Text> : <Text type="secondary">No</Text>)
    },
    {
      title: 'Action',
      key: 'action',
      width: 120,
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button type="text" icon={<EditOutlined className="text-blue-600" style={{ fontSize: '16px' }} />} onClick={() => handleEdit(record)} />
          <Popconfirm title="Delete?" onConfirm={() => handleDelete(record.ticket_priority_id)}>
            <Button type="text" danger icon={<DeleteOutlined style={{ fontSize: '16px' }} />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      {/* Module Header */}
      <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/30">
        <div>
          <Title level={4} style={{ margin: 0, fontWeight: 700 }} className="text-slate-800">Ticket Priorities</Title>
          <Text className="text-slate-500 text-sm">Define response levels and urgency ranking for service requests.</Text>
        </div>
        <Button 
          type="primary" 
          icon={<PlusOutlined />} 
          onClick={handleAdd}
          className="rounded-lg h-10 font-semibold px-6 shadow-md shadow-blue-500/20"
        >
          Add Priority
        </Button>
      </div>

      {/* Table Section */}
      <div className="p-2">
        <Table 
          columns={columns} 
          dataSource={data} 
          rowKey="ticket_priority_id" 
          loading={loading} 
          className="px-2"
          pagination={{ 
            defaultPageSize: 10, 
            showSizeChanger: true, 
            pageSizeOptions: ['10', '20', '50'],
            showTotal: (total) => <span className="text-slate-500 text-xs font-medium">Total {total} priorities</span>,
            className: "px-6 pb-6",
          }}
        />
      </div>
    </div>
  );
}
