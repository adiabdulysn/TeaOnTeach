'use client';

import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, Space, Popconfirm, message, Typography, Switch } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { getStatuses, deleteStatus } from '@/app/actions/master';

const { Title, Text } = Typography;

export default function StatusesPage() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await getStatuses();
      setData(result as any);
    } catch {
      message.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData() }, []);

  const handleAdd = () => {
    router.push('/referential/statuses/create');
  };

  const handleEdit = (record: any) => {
    router.push(`/referential/statuses/${record.ticket_status_id}/edit`);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteStatus(id);
      message.success('Deleted successfully');
      fetchData();
    } catch {
      message.error('Failed to delete.');
    }
  };



  const columns = [
    { title: 'Status Name', dataIndex: 'ticket_name' },
    { title: 'Color', dataIndex: 'color', render: (color: string) => <div className="w-6 h-6 rounded border" style={{ backgroundColor: color }}></div> },
    { title: 'Default', dataIndex: 'is_default', render: (val: boolean) => (val ? "Yes" : "No" )},
    {
      title: 'Action',
      key: 'action',
      width: 120,
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button type="text" icon={<EditOutlined className="text-blue-600" style={{ fontSize: '16px' }} />} onClick={() => handleEdit(record)} />
          <Popconfirm title="Delete?" onConfirm={() => handleDelete(record.ticket_status_id)}>
            <Button type="text" danger icon={<DeleteOutlined style={{ fontSize: '16px' }} />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="bg-card-bg rounded-2xl shadow-sm border border-card-border overflow-hidden transition-colors">
      {/* Module Header Container */}
      <div className="p-6 border-b border-card-border flex flex-col md:flex-row md:items-center justify-between gap-4 bg-app-bg/10">
        <div>
          <Title level={4} style={{ margin: 0, fontWeight: 700 }} className="text-text-primary">Ticket Statuses</Title>
          <Text className="text-text-secondary text-sm">Monitor lifecycle stages of support tickets from Open to Resolved.</Text>
        </div>
        <Button 
          type="primary" 
          icon={<PlusOutlined />} 
          onClick={handleAdd}
          className="rounded-lg h-10 font-semibold px-6 shadow-md shadow-blue-500/20"
        >
          Add Status
        </Button>
      </div>

      {/* Table Section */}
      <div className="p-2">
        <Table 
          columns={columns} 
          dataSource={data} 
          rowKey="ticket_status_id" 
          loading={loading} 
          className="px-2"
          pagination={{ 
            defaultPageSize: 10, 
            showSizeChanger: true, 
            pageSizeOptions: ['10', '20', '50'],
            showTotal: (total) => <span className="text-text-secondary text-xs font-medium">Total {total} statuses defined</span>,
            className: "px-6 pb-6",
          }}
        />
      </div>
    </div>
  );
}
