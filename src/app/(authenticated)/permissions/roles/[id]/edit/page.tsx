'use client';

import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Checkbox, Row, Col, Space, Typography, Card, message, Spin } from 'antd';
import { ArrowLeftOutlined, SaveOutlined } from '@ant-design/icons';
import { useRouter, useParams } from 'next/navigation';

const { Title, Text } = Typography;

const PERMISSION_MODULES = [
  { title: 'Dashboard', key: 'dashboard', actions: ['view_dashboard', 'view_analytics'] },
  { title: 'Ticket', key: 'tickets', actions: ['view_tickets', 'create_tickets', 'edit_tickets', 'delete_tickets', 'reply_tickets', 'close_tickets', 'manage_own_tickets'] },
  { title: 'Category', key: 'categories', actions: ['view_categories', 'create_categories', 'edit_categories', 'delete_categories'] },
  { title: 'Division', key: 'divisions', actions: ['view_divisions', 'create_divisions', 'edit_divisions', 'delete_divisions'] },
  { title: 'Priority', key: 'priorities', actions: ['view_priorities', 'create_priorities', 'edit_priorities', 'delete_priorities'] },
  { title: 'Status', key: 'statuses', actions: ['view_statuses', 'create_statuses', 'edit_statuses', 'delete_statuses'] },
  { title: 'Ticket Type', key: 'types', actions: ['view_types', 'create_types', 'edit_types', 'delete_types'] },
  { title: 'User Account', key: 'users', actions: ['view_users', 'create_users', 'edit_users', 'delete_users'] },
  { title: 'Role & Permission', key: 'roles', actions: ['view_roles', 'create_roles', 'edit_roles', 'delete_roles'] }
];
const ALL_PERMISSIONS = PERMISSION_MODULES.flatMap(m => m.actions);

export default function EditRolePage() {
  const router = useRouter();
  const params = useParams();
  const roleId = params.id;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const res = await fetch(`/api/roles/${roleId}`);
        if (!res.ok) throw new Error('Role not found');
        const role = await res.json();
        
        let parsedPermissions: string[] = [];
        if (role.permissions) {
          try {
            parsedPermissions = JSON.parse(role.permissions);
          } catch (e) {
            console.error("Failed to parse", e);
          }
        }
    
        form.setFieldsValue({
          role_name: role.role_name,
          description: role.description,
          permissions: parsedPermissions,
        });
      } catch (error: any) {
        message.error(error.message);
        router.push('/permissions/roles');
      } finally {
        setFetching(false);
      }
    };
    if (roleId) fetchRole();
  }, [roleId, form, router]);

  const handleFinish = async (values: any) => {
    setLoading(true);
    try {
      const formattedValues = {
        ...values,
        permissions: values.permissions ? JSON.stringify(values.permissions) : null,
      };
      
      const res = await fetch(`/api/roles/${roleId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formattedValues),
      });
      
      if (!res.ok) {
         const errorData = await res.json();
         throw new Error(errorData.error || 'Failed to save role');
      }
      
      message.success('Role updated successfully');
      router.push('/permissions/roles');
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
     return <div className="flex h-64 items-center justify-center bg-app-bg min-h-screen"><Spin size="large" /></div>;
  }

  return (
    <div className="max-w-[1200px] mx-auto space-y-6 pb-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Button 
            type="text"
            icon={<ArrowLeftOutlined />} 
            onClick={() => router.push('/permissions/roles')} 
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-card-border/50 text-text-secondary transition-colors"
          />
          <div>
            <Title level={3} style={{ margin: 0, fontWeight: 700 }} className="text-text-primary">Edit Role</Title>
            <Text type="secondary" className="text-sm">Manage access control and privileges for this designation.</Text>
          </div>
        </div>
      </div>

      <Card className="shadow-sm border-card-border rounded-2xl overflow-hidden bg-card-bg" styles={{ body: { padding: 0 } }}>
        <Form 
          form={form} 
          layout="vertical" 
          onFinish={handleFinish}
          requiredMark={false}
          className="bg-transparent"
        >
          <div className="p-6 md:p-10 space-y-10">
             {/* General Info Section */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-card-border">
               <div className="md:col-span-1">
                 <h3 className="text-base font-semibold text-text-primary">Role Details</h3>
                 <p className="text-sm text-text-secondary mt-1">Provide a designation name and purpose for this role.</p>
               </div>
               <div className="md:col-span-2 space-y-5 max-w-lg">
                  <Form.Item name="role_name" label="Role Name" rules={[{ required: true }]}>
                    <Input placeholder="e.g. Administrator, IT Support" size="large" className="rounded-lg bg-app-bg border-card-border text-text-primary placeholder:text-text-secondary/50" />
                  </Form.Item>
                  <Form.Item name="description" label="Description">
                    <Input.TextArea rows={4} placeholder="Brief description about the scope of this role..." className="rounded-lg bg-app-bg border-card-border text-text-primary placeholder:text-text-secondary/50" />
                  </Form.Item>
               </div>
             </div>

             {/* Permissions Section */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="md:col-span-1">
                 <h3 className="text-base font-semibold text-text-primary">Feature Access</h3>
                 <p className="text-sm text-text-secondary mt-1">Select the specific actions this role is allowed to perform across the system.</p>
                 <div className="mt-6 flex flex-col gap-3">
                   <Button 
                     onClick={() => form.setFieldValue('permissions', ALL_PERMISSIONS)} 
                     className="w-full text-primary border-primary/20 hover:bg-primary/5 bg-transparent font-medium rounded-lg"
                   >
                     Select All Permissions
                   </Button>
                   <Button 
                     onClick={() => form.setFieldValue('permissions', [])} 
                     className="w-full text-text-secondary border-card-border hover:bg-card-border/30 bg-transparent rounded-lg"
                   >
                     Deselect All
                   </Button>
                 </div>
               </div>
               <div className="md:col-span-2">
                  <Form.Item name="permissions" className="mb-0">
                    <Checkbox.Group className="w-full">
                      <Row gutter={[32, 48]}>
                        {PERMISSION_MODULES.map(module => (
                          <Col xs={24} sm={12} lg={8} key={module.key}>
                            <div className="text-[11px] font-bold text-text-secondary/50 uppercase tracking-widest mb-4">
                              {module.title}
                            </div>
                            <div className="flex flex-col gap-3">
                              {module.actions.map(action => {
                                const label = action.replace(/_/g, ' ');
                                return (
                                  <Checkbox value={action} key={action} className="m-0 font-medium text-text-secondary hover:text-primary transition-colors">
                                    <span className="capitalize">{label}</span>
                                  </Checkbox>
                                );
                              })}
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Checkbox.Group>
                  </Form.Item>
               </div>
             </div>
          </div>
          
          <div className="p-6 md:px-10 bg-app-bg/50 border-t border-card-border flex justify-end gap-3">
            <Button className="rounded-lg font-medium border-card-border bg-card-bg text-text-secondary hover:text-text-primary" onClick={() => router.push('/permissions/roles')}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit" icon={<SaveOutlined />} loading={loading} className="rounded-lg font-medium px-6 bg-primary border-none text-white shadow-lg shadow-primary/20">
              Save Changes
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}
