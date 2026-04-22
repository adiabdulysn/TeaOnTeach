'use client';

import React, { useEffect, useState, use } from 'react';
import { 
  Form, Input, Button, Card, Typography, message, 
  Space, Select, Divider, Skeleton, DatePicker, Steps,
  Row, Col, App
} from 'antd';
import { 
  ArrowLeftOutlined, 
  IdcardOutlined,
  CalendarOutlined,
  CloudUploadOutlined,
  CheckCircleOutlined,
  DoubleRightOutlined,
  LeftOutlined
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { getTicketDetail, getTicketFormData, updateTicket } from '@/app/actions/tickets';
import { getCategoryIcon, getPriorityIcon } from '@/lib/icons';
import dayjs from 'dayjs';

const { Title, Text } = Typography;
const { TextArea } = Input;

interface TicketMasterData {
  categories: any[];
  priorities: any[];
  statuses: any[];
  types: any[];
  divisions: any[];
}

export default function EditTicketPage({ params }: { params: Promise<{ id: string }> }) {
  const { message } = App.useApp();
  const router = useRouter();
  const [form] = Form.useForm();
  const { id } = use(params);
  
  // State
  const [current, setCurrent] = useState(0);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ticketNumber, setTicketNumber] = useState<string>('');
  const [masterData, setMasterData] = useState<TicketMasterData>({
    categories: [], priorities: [], statuses: [], types: [], divisions: []
  });

  useEffect(() => {
    const initData = async () => {
      setLoading(true);
      try {
        const [detail, rawFormData] = await Promise.all([
          getTicketDetail(id),
          getTicketFormData()
        ]);

        if (!detail) {
          message.error('Ticket not found');
          router.push('/tickets');
          return;
        }

        const formData = rawFormData as TicketMasterData;
        setMasterData(formData);
        setTicketNumber(detail.ticket_number || id);
        
        form.setFieldsValue({
          ticket_subject: detail.ticket_subject,
          ticket_detail: detail.ticket_detail,
          requestor_name: detail.requestor_name,
          ticket_type_id: detail.ticket_type_id,
          category_id: detail.category_id,
          division_id: detail.division_id,
          ticket_priority_id: detail.ticket_priority_id,
          ticket_status_id: detail.ticket_status_id,
          ticket_start_date: detail.ticket_start_date ? dayjs(detail.ticket_start_date) : null,
          ticket_end_date: detail.ticket_end_date ? dayjs(detail.ticket_end_date) : null,
        });
      } catch (error) {
        message.error('Failed to load ticket data');
      } finally {
        setLoading(false);
      }
    };
    initData();
  }, [id, form, router]);

  // Navigation Logic
  const handleNext = async () => {
    try {
      // Validate current step fields
      const stepFields: Record<number, string[]> = {
        0: ['ticket_subject', 'requestor_name', 'category_id', 'division_id'],
        1: ['ticket_type_id', 'ticket_priority_id', 'ticket_status_id'],
      };
      
      if (stepFields[current]) {
        await form.validateFields(stepFields[current]);
      }
      setCurrent(current + 1);
    } catch (err) {
      // Validation failed
    }
  };

  const handlePrev = () => {
    setCurrent(current - 1);
  };

  // --- MANUAL SAVING LOGIC ---
  const handleManualSave = async () => {
    setSaving(true);
    try {
      // Final validation for Step 3 fields + overall consistency
      await form.validateFields(['ticket_detail']);
      
      // Get all values from form
      const values = form.getFieldsValue(true);

      await updateTicket(id, {
        ...values,
        ticket_start_date: values.ticket_start_date ? dayjs(values.ticket_start_date).toISOString() : null,
        ticket_end_date: values.ticket_end_date ? dayjs(values.ticket_end_date).toISOString() : null,
      });
      
      message.success({
        content: `Ticket ${ticketNumber} updated successfully!`,
        icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />
      });
      router.push(`/tickets/${id}`);
    } catch (error: any) {
      if (error.errorFields) {
        message.error('Please complete all required fields');
      } else {
        message.error(error.message || 'Update failed');
      }
    } finally {
      setSaving(false);
    }
  };

  const steps = [
    {
      title: 'Identity',
      icon: <IdcardOutlined className="stepper-icon-style" />,
      content: (
        <div className="space-y-6 animate-in fade-in duration-500">
           <Row gutter={24}>
              <Col xs={24} md={16}>
                <Form.Item
                  name="ticket_subject"
                  label={<span className="font-bold text-text-primary">Subject</span>}
                  rules={[{ required: true, message: 'Please describe the subject' }]}
                >
                  <Input placeholder="Enter subject" className="h-10 rounded-lg border-card-border bg-app-bg text-text-primary" />
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item
                  name="requestor_name"
                  label={<span className="font-bold text-text-primary">Requestor</span>}
                  rules={[{ required: true, message: 'Requestor name required' }]}
                >
                  <Input placeholder="User name" className="h-10 rounded-lg border-card-border bg-app-bg text-text-primary" />
                </Form.Item>
              </Col>
           </Row>
           <Row gutter={24}>
              <Col xs={24} md={12}>
                <Form.Item name="category_id" label={<span className="font-bold text-text-primary">Category</span>} rules={[{ required: true }]}>
                  <Select placeholder="Select category" className="h-10 w-full custom-select">
                    {masterData.categories.map((c: any) => (
                      <Select.Option key={c.category_id} value={c.category_id}>
                        <Space>
                          <span style={{ color: c.color }}>{getCategoryIcon(c.icon)}</span>
                          {c.category_name}
                        </Space>
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item name="division_id" label={<span className="font-bold text-text-primary">Department</span>} rules={[{ required: true }]}>
                   <Select placeholder="Select department" className="h-10">
                      {masterData.divisions.map((d: any) => (
                        <Select.Option key={d.division_id} value={d.division_id}>{d.division_name}</Select.Option>
                      ))}
                   </Select>
                </Form.Item>
              </Col>
           </Row>
        </div>
      )
    },
    {
      title: 'Timeline',
      icon: <CalendarOutlined className="stepper-icon-style" />,
      content: (
        <div className="space-y-6 animate-in fade-in duration-500">
          <Row gutter={24}>
             <Col xs={24} md={8}>
                <Form.Item name="ticket_type_id" label={<span className="font-bold text-text-primary">Type</span>} rules={[{ required: true }]}>
                   <Select className="h-10">
                    {masterData.types.map((t: any) => (
                      <Select.Option key={t.ticket_type_id} value={t.ticket_type_id}>{t.ticket_type_name}</Select.Option>
                    ))}
                  </Select>
                </Form.Item>
             </Col>
             <Col xs={24} md={8}>
                <Form.Item name="ticket_priority_id" label={<span className="font-bold text-text-primary">Priority</span>} rules={[{ required: true }]}>
                   <Select className="h-10">
                     {masterData.priorities.map((p: any) => (
                       <Select.Option key={p.ticket_priority_id} value={p.ticket_priority_id}>
                         <Space>
                           <span style={{ color: p.color }}>{getPriorityIcon(p.icon)}</span>
                           {p.ticket_priority_name}
                         </Space>
                       </Select.Option>
                     ))}
                   </Select>
                </Form.Item>
             </Col>
             <Col xs={24} md={8}>
                <Form.Item name="ticket_status_id" label={<span className="font-bold text-text-primary">Status</span>} rules={[{ required: true }]}>
                   <Select className="h-10">
                      {masterData.statuses.map((s: any) => (
                        <Select.Option key={s.ticket_status_id} value={s.ticket_status_id}>{s.ticket_name}</Select.Option>
                      ))}
                   </Select>
                </Form.Item>
             </Col>
          </Row>
           <Row gutter={24}>
             <Col xs={24} md={12}>
                <Form.Item name="ticket_start_date" label={<span className="font-bold text-text-primary">Start Date</span>}>
                  <DatePicker className="w-full h-10 rounded-lg border-card-border bg-app-bg text-text-primary" />
                </Form.Item>
             </Col>
             <Col xs={24} md={12}>
                <Form.Item name="ticket_end_date" label={<span className="font-bold text-text-primary">Finish Date</span>}>
                  <DatePicker className="w-full h-10 rounded-lg border-card-border bg-app-bg text-text-primary" />
                </Form.Item>
             </Col>
          </Row>
        </div>
      )
    },
    {
      title: 'Details',
      icon: <CloudUploadOutlined className="stepper-icon-style" />,
      content: (
         <div className="space-y-6 animate-in fade-in duration-500">
           <Form.Item name="ticket_detail" label={<span className="font-bold text-text-primary">Description</span>} rules={[{ required: true }]}>
              <TextArea rows={8} placeholder="Describe the issue..." className="rounded-2xl p-4 text-base bg-app-bg text-text-primary border-card-border" />
           </Form.Item>
           <div className="rounded-2xl border border-card-border bg-app-bg/30 p-5 mt-4">
              <Text className="text-xs text-text-secondary">
                Attachments are managed via ticket replies. To add files, save your changes and post a reply to the ticket.
              </Text>
           </div>
        </div>
      )
    }
  ];

  return (
    <App>
      <div className="w-full pb-10 transition-colors">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
         <Space orientation="horizontal" size="middle">
            <Button icon={<ArrowLeftOutlined />} onClick={() => router.push(`/tickets/${id}`)} className="rounded-full shadow-sm bg-card-bg border-card-border text-text-secondary hover:text-primary" />
            <div>
               <Title level={4} className="m-0 text-text-primary">Edit Ticket</Title>
               <Text className="text-text-secondary text-xs">Update ticket information through the steps below</Text>
            </div>
         </Space>
         <div className="px-6 py-2 text-text-primary">
            <Title level={2} className="m-0 font-mono font-bold leading-none text-text-primary">{ticketNumber}</Title>
         </div>
      </div>

      <Card className="rounded-3xl shadow-xl border-card-border overflow-hidden p-0 bg-card-bg" styles={{ body: { padding: 0 } }}>
         {/* Stepper Header */}
         <div className="bg-app-bg/30 border-b border-card-border p-8">
            <Steps 
               current={current} 
               className="custom-stepper"
               items={steps.map(item => ({ title: item.title, icon: item.icon }))}
            />
         </div>

         {/* Form Body */}
         <div className="p-8 lg:p-12 min-h-[400px]">
            {/* NO onFinish here to disable all auto-submit hooks */}
            <Form form={form} layout="vertical" autoComplete="off" preserve={true}>
               {loading ? (
                 <div className="space-y-8">
                    <Skeleton active />
                    <Skeleton active />
                 </div>
               ) : (
                 <>
                   <div className={current === 0 ? 'block animate-in fade-in duration-500' : 'hidden'}>
                     {steps[0].content}
                   </div>
                   <div className={current === 1 ? 'block animate-in fade-in duration-500' : 'hidden'}>
                     {steps[1].content}
                   </div>
                   <div className={current === 2 ? 'block animate-in fade-in duration-500' : 'hidden'}>
                     {steps[2].content}
                   </div>
                   
                   <Divider className="my-10 border-card-border" />

                   <div className="flex items-center justify-between">
                      {current > 0 ? (
                        <Button 
                          icon={<LeftOutlined />} 
                          htmlType="button"
                          onClick={handlePrev} 
                          className="h-10 px-8 rounded-lg font-bold border-card-border text-text-secondary hover:text-text-primary bg-transparent"
                        >
                          Back
                        </Button>
                      ) : <div />}

                      <Space size="middle">
                        <Button 
                          htmlType="button"
                          onClick={() => router.push(`/tickets/${id}`)} 
                          className="h-10 px-6 border-none text-text-secondary hover:text-text-primary bg-transparent"
                        >
                          Cancel
                        </Button>
                        {current < steps.length - 1 ? (
                          <Button 
                            type="primary" 
                            htmlType="button"
                            onClick={handleNext} 
                            className="h-10 px-12 rounded-lg font-bold bg-primary shadow-xl shadow-primary/20 flex items-center"
                          >
                            Next <DoubleRightOutlined className="text-[10px]" />
                          </Button>
                        ) : (
                          <Button 
                            type="primary" 
                            htmlType="button" 
                            onClick={handleManualSave}
                            loading={saving}
                            className="h-10 px-16 rounded-lg font-extrabold bg-primary shadow-xl shadow-primary/30 border-none"
                          >
                            Save Changes
                          </Button>
                        )}
                      </Space>
                   </div>
                 </>
               )}
            </Form>
         </div>
      </Card>

      <style jsx global>{`
        .custom-stepper .ant-steps-item-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px !important;
          height: 40px !important;
          line-height: 40px !important;
          font-size: 18px !important;
          transition: all 0.3s ease;
        }
         /* Definitive icon visibility override */
         .custom-stepper .ant-steps-item-process .ant-steps-item-icon, 
         .custom-stepper .ant-steps-item-finish .ant-steps-item-icon {
           background-color: var(--primary) !important;
           border-color: var(--primary) !important;
           box-shadow: 0 0 15px rgba(22, 119, 255, 0.4);
         }
         
         .custom-stepper .stepper-icon-style,
         .custom-stepper .ant-steps-icon svg,
         .custom-stepper .ant-steps-icon svg path,
         .custom-stepper .ant-steps-icon svg rect,
         .custom-stepper .ant-steps-icon svg circle {
           color: #ffffff !important;
           fill: #ffffff !important;
           stroke: #ffffff !important;
           opacity: 1 !important;
           visibility: visible !important;
         }

         .custom-stepper .ant-steps-item-wait .ant-steps-item-icon {
           background-color: var(--app-bg) !important;
           border-color: var(--card-border) !important;
         }
         
         .custom-stepper .ant-steps-item-wait .stepper-icon-style,
         .custom-stepper .ant-steps-item-wait .ant-steps-icon svg {
           color: var(--text-secondary) !important;
           fill: var(--text-secondary) !important;
           opacity: 0.5;
         }
        .ant-steps-item-finish .ant-steps-item-title {
          color: var(--text-primary) !important;
        }
        .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-tail::after {
          background-color: var(--primary) !important;
        }
        .ant-steps-item-process .ant-steps-item-title {
          color: var(--text-primary) !important;
          font-weight: 700 !important;
        }
        .animate-in {
          animation: fadeIn 0.4s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      </div>
    </App>
  );
}
