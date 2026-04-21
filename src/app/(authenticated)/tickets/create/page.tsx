'use client';

import React, { useState, useEffect } from 'react';
import { 
  Form, Input, Button, Card, Typography, message, 
  Space, Select, Divider, Skeleton, Upload, DatePicker, Steps,
  Row, Col, App
} from 'antd';
import { 
  ArrowLeftOutlined, 
  SendOutlined, 
  InfoCircleOutlined, 
  PlusOutlined, 
  PaperClipOutlined,
  IdcardOutlined,
  CalendarOutlined,
  CloudUploadOutlined,
  CheckCircleOutlined,
  DoubleRightOutlined,
  LeftOutlined
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { getTicketFormData, saveTicket, generateTicketNumber } from '@/app/actions/tickets';
import { getCategoryIcon, getPriorityIcon } from '@/lib/icons';

const { Title, Text } = Typography;
const { TextArea } = Input;

interface TicketMasterData {
  categories: any[];
  priorities: any[];
  statuses: any[];
  types: any[];
  divisions: any[];
}

export default function CreateTicketPage() {
  const router = useRouter();
  const [form] = Form.useForm();
  
  // State
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [ticketNumber, setTicketNumber] = useState<string>('Generating...');
  const [masterData, setMasterData] = useState<TicketMasterData>({
    categories: [], priorities: [], statuses: [], types: [], divisions: []
  });

  useEffect(() => {
    const initData = async () => {
      try {
        const [rawFormData, nextNum] = await Promise.all([
          getTicketFormData(),
          generateTicketNumber()
        ]);
        const formData = rawFormData as TicketMasterData;
        setMasterData(formData);
        setTicketNumber(nextNum);
        
        const defaultStatus = formData.statuses.find((s: any) => s.is_default === '1');
        const defaultPriority = formData.priorities.find((p: any) => p.is_default === '1');
        
        form.setFieldsValue({
          ticket_status_id: defaultStatus?.ticket_status_id,
          ticket_priority_id: defaultPriority?.ticket_priority_id,
        });
      } catch (error) {
        message.error('Failed to load form data');
      } finally {
        setFetching(false);
      }
    };
    initData();
  }, [form]);

  // Navigation Logic
  const next = async () => {
    try {
      // Validate only current step fields
      const stepFields: Record<number, string[]> = {
        0: ['ticket_subject', 'requestor_name', 'category_id', 'division_id'],
        1: ['ticket_type_id', 'ticket_priority_id', 'ticket_status_id'],
        2: ['ticket_detail']
      };
      
      await form.validateFields(stepFields[current]);
      setCurrent(current + 1);
    } catch (err) {
      // Validation failed, scroll to error
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      // Correctly access fileList from values.attachments
      const fileList = values.attachments || [];
      const processedFiles = await Promise.all(fileList.map(async (file: any) => {
        const base64 = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(file.originFileObj);
          reader.onload = () => resolve(reader.result);
        });
        return { name: file.name, type: file.type, size: file.size, base64 };
      }));

      await saveTicket({ 
        ...values, 
        ticket_number: ticketNumber,
        files: processedFiles
      });
      
      message.success({
        content: `Ticket ${ticketNumber} created successfully!`,
        icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />
      });
      router.push('/tickets');
    } catch (error: any) {
      message.error(error.message || 'Submission failed');
    } finally {
      setLoading(false);
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
                <Form.Item name="ticket_status_id" label={<span className="font-bold text-text-primary">Initial Status</span>} rules={[{ required: true }]}>
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
           <Form.Item 
              name="attachments" 
              label={<span className="font-bold text-text-primary">Attachments</span>}
              valuePropName="fileList"
              getValueFromEvent={(e: any) => {
                if (Array.isArray(e)) return e;
                return e?.fileList;
              }}
           >
              <Upload.Dragger multiple beforeUpload={() => false} listType="picture" className="rounded-2xl bg-app-bg border-dashed border-card-border overflow-hidden">
                <p className="ant-upload-drag-icon pt-6"><PaperClipOutlined className="text-primary" /></p>
                <p className="ant-upload-text font-bold text-text-primary">Files and Images</p>
                <p className="ant-upload-hint pb-6 text-xs text-text-secondary">Drag files here to upload (Max 10MB)</p>
              </Upload.Dragger>
           </Form.Item>
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
            <Button icon={<ArrowLeftOutlined />} onClick={() => router.push('/tickets')} className="rounded-full shadow-sm bg-card-bg border-card-border text-text-secondary hover:text-primary" />
            <div>
               <Title level={4} className="m-0 text-text-primary">Ticket Registration</Title>
               <Text className="text-text-secondary text-xs">Follow the steps to submit your request</Text>
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
            <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off" preserve={true}>
               {fetching ? (
                 <div className="space-y-8">
                    <Form form={form} component={false} />
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
                          onClick={prev} 
                          className="h-10 px-8 rounded-lg font-bold border-card-border text-text-secondary hover:text-text-primary bg-transparent"
                        >
                          Back
                        </Button>
                      ) : <div />}

                      <Space size="middle">
                        <Button 
                          onClick={() => router.push('/tickets')} 
                          className="h-10 px-6 border-none text-text-secondary hover:text-text-primary bg-transparent"
                        >
                          Discard
                        </Button>
                        {current < steps.length - 1 ? (
                          <Button 
                            type="primary" 
                            onClick={next} 
                            className="h-10 px-12 rounded-lg font-bold bg-primary shadow-xl shadow-primary/20 flex items-center"
                          >
                            Next <DoubleRightOutlined className="text-[10px]" />
                          </Button>
                        ) : (
                          <Button 
                            type="primary" 
                            htmlType="submit" 
                            loading={loading}
                            className="h-10 px-16 rounded-lg font-extrabold bg-primary shadow-xl shadow-primary/30 border-none"
                          >
                            Submit Ticket
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
