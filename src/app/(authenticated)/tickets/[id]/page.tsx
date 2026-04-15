'use client';

import React, { useState, useEffect, use } from 'react';
import { 
  Typography, Card, Space, Tag, Button, Row, Col, 
  Divider, Input, Form, message, Skeleton, Avatar,
  Empty, Select, Upload, App, Popconfirm
} from 'antd';
import { 
  ArrowLeftOutlined, 
  PaperClipOutlined, 
  SendOutlined, 
  UserOutlined,
  ClockCircleOutlined,
  FilePdfOutlined,
  FileImageOutlined,
  FileWordOutlined,
  FileExcelOutlined,
  FileUnknownOutlined,
  MessageOutlined,
  InfoCircleOutlined,
  DownloadOutlined,
  CheckCircleOutlined,
  LockOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { getTicketDetail, saveTicketReply, getTicketFormData, closeTicket } from '@/app/actions/tickets';
import { getPriorityIcon, getCategoryIcon } from '@/lib/icons';

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

const globalStyles = `
  .reply-upload .ant-upload-list {
    margin-top: 8px;
    max-width: 300px;
  }
  .reply-upload .ant-upload-list-item {
    border-radius: 12px !important;
    font-size: 12px !important;
  }
  .custom-select .ant-select-selector {
    background-color: var(--app-bg) !important;
    border-color: var(--card-border) !important;
    color: var(--text-primary) !important;
  }
  .custom-select .ant-select-selection-placeholder {
    color: var(--text-secondary) !important;
    opacity: 0.5;
  }
`;

// Helper for file icons
const getFileIcon = (fileName: string) => {
  const ext = fileName.split('.').pop()?.toLowerCase();
  if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext || '')) return <FileImageOutlined className="text-blue-500" />;
  if (ext === 'pdf') return <FilePdfOutlined className="text-red-500" />;
  if (['doc', 'docx'].includes(ext || '')) return <FileWordOutlined className="text-blue-600" />;
  if (['xls', 'xlsx', 'csv'].includes(ext || '')) return <FileExcelOutlined className="text-green-600" />;
  return <FileUnknownOutlined className="text-slate-400" />;
};

export default function TicketDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const [form] = Form.useForm();
  
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [closing, setClosing] = useState(false);
  const [ticket, setTicket] = useState<any>(null);
  const [masterData, setMasterData] = useState<any>(null);

  // Determine if ticket is already in a terminal state
  const isClosed = ticket ? 
    ['close', 'closed', 'cancel', 'cancelled'].some(w => ticket.status_name?.toLowerCase().includes(w))
    : false;

  const fetchDetail = async () => {
    try {
      const [detail, formData] = await Promise.all([
        getTicketDetail(id),
        getTicketFormData()
      ]);
      setTicket(detail);
      setMasterData(formData);
      form.setFieldsValue({ ticket_status_id: detail.ticket_status_id });
    } catch (error) {
      message.error('Failed to load ticket details');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [id]);

  const onReply = async (values: any) => {
    setSubmitting(true);
    try {
      const fileList = values.attachments?.fileList || [];
      const processedFiles = await Promise.all(fileList.map(async (file: any) => {
        const base64 = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(file.originFileObj);
          reader.onload = () => resolve(reader.result);
        });
        return { name: file.name, type: file.type, size: file.size, base64 };
      }));

      await saveTicketReply({
        ...values,
        ticket_id: id,
        pic_user_id: 1, // Hardware pic_user_id mapping for active session
        files: processedFiles
      });
      message.success('Reply posted successfully');
      form.resetFields(['reply_description', 'attachments']);
      fetchDetail();
    } catch (error) {
      console.error(error);
      message.error('Failed to post reply');
    } finally {
      setSubmitting(false);
    }
  };

  const onCloseTicket = async () => {
    setClosing(true);
    try {
      await closeTicket(id);
      message.success('Ticket has been closed successfully.');
      fetchDetail();
    } catch (error: any) {
      message.error(error.message || 'Failed to close ticket.');
    } finally {
      setClosing(false);
    }
  };

  if (loading) return (
    <div className="p-10 max-w-6xl mx-auto">
      <Form form={form} component={false} />
      <Skeleton active paragraph={{ rows: 12 }} />
    </div>
  );
  if (!ticket) return (
    <div className="p-10">
      <Form form={form} component={false} />
      <Empty description="Ticket not found" />
    </div>
  );

  return (
    <App>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <div className="w-full pb-20 transition-colors">
        
        {/* Header Bar */}
        <div className="mb-6 flex flex-wrap gap-3 items-center justify-between">
          <Button 
            icon={<ArrowLeftOutlined />} 
            onClick={() => router.push('/tickets')}
            className="rounded-full shadow-sm bg-card-bg border-card-border text-text-secondary hover:text-text-primary font-medium"
          >
            Back to Tickets
          </Button>

          {/* Close Ticket — only visible when ticket is not yet closed */}
          {!isClosed && (
            <Popconfirm
              title="Close this ticket?"
              description={
                <div className="pt-1">
                  <p className="text-text-secondary text-sm m-0">This will mark the ticket as <strong>Closed</strong> and stop further replies.</p>
                  <p className="text-text-secondary/60 text-xs mt-1 m-0">This action can be reversed by updating the status in a reply.</p>
                </div>
              }
              icon={<ExclamationCircleOutlined className="text-amber-500" />}
              okText="Yes, Close Ticket"
              cancelText="Cancel"
              okButtonProps={{ danger: false, className: 'rounded-lg font-semibold', loading: closing }}
              cancelButtonProps={{ className: 'rounded-lg' }}
              onConfirm={onCloseTicket}
              placement="bottomRight"
            >
              <Button
                icon={<LockOutlined />}
                loading={closing}
                className="rounded-xl h-10 px-5 font-semibold border-rose-200/20 text-rose-500 bg-rose-500/10 hover:bg-rose-500/20 hover:border-rose-500/30 transition-all"
              >
                Close Ticket
              </Button>
            </Popconfirm>
          )}

          {/* Already closed badge */}
          {isClosed && (
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-app-bg border border-card-border">
              <CheckCircleOutlined className="text-text-secondary" />
              <span className="text-text-secondary text-sm font-medium">Ticket Closed</span>
            </div>
          )}
        </div>

        {/* Title Header Card */}
        <Card className="rounded-3xl border border-card-border shadow-sm mb-10 overflow-hidden bg-card-bg">
           <div className="p-8 md:p-10 flex items-start justify-between flex-wrap gap-8">
              <div className="flex-1 min-w-[300px]">
                <div className="flex items-center gap-3 mb-3 text-text-secondary">
                  <Text strong className="text-primary font-mono text-sm tracking-widest uppercase">
                    Ticket #{ticket.ticket_number}
                  </Text>
                  <Divider orientation="vertical" className="bg-card-border h-4" />
                  <Text className="text-text-secondary text-xs font-medium">Internal System Record</Text>
                  <Divider orientation="vertical" className="bg-card-border h-4" />
                  <Tag color={ticket.status_color} className="px-4 py-1.5 m-0 text-sm font-bold border rounded" style={{ color: ticket.status_color }}>
                    {ticket.status_name}
                  </Tag>
                </div>
                <Title level={2} className="m-0 text-text-primary tracking-tight leading-[1.2] mb-6 font-bold">
                  {ticket.ticket_subject}
                </Title>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-2">
                  <div className="flex items-center gap-3">
                    <Avatar size="small" icon={<UserOutlined />} className="bg-app-bg text-text-secondary" />
                    <div className="flex flex-col">
                      <Text type="secondary" className="text-[10px] uppercase font-bold tracking-widest leading-none mb-1 text-text-secondary">Reporter</Text>
                      <Text strong className="text-text-primary text-sm leading-none">{ticket.requestor_name}</Text>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-l pl-8 border-card-border">
                    <ClockCircleOutlined className="text-text-secondary opacity-50 text-lg" />
                    <div className="flex flex-col">
                      <Text type="secondary" className="text-[10px] uppercase font-bold tracking-widest leading-none mb-1 text-text-secondary">Reported On</Text>
                      <Text strong className="text-text-primary text-sm leading-none">
                        {new Date(ticket.created_at).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
           </div>
        </Card>

        <Row gutter={[32, 32]}>
          {/* Main Feed Column */}
          <Col xs={24} lg={16} className="space-y-10">
            
            {/* Original Problem Statement */}
            <div className="group">
              <div className="flex items-center gap-3 mt-5 mb-5 pl-1 transition-transform group-hover:translate-x-1">
                <div className="w-8 h-8 rounded-lg bg-card-bg border border-card-border flex items-center justify-center">
                  <InfoCircleOutlined className="text-text-primary text-base" />
                </div>
                <Title level={5} className="m-0 text-text-primary uppercase tracking-widest text-[11px] font-bold">Issue Brief</Title>
              </div>
              <div className="bg-card-bg rounded-3xl p-8 shadow-sm border border-card-border hover:shadow-md transition-shadow">
                
                <Paragraph className="text-text-primary text-[16px] leading-[1.8] whitespace-pre-wrap m-0 font-normal">
                  {ticket.ticket_detail || <span className="italic text-text-secondary">No detailed description provided by the user.</span>}
                </Paragraph>

                {/* Evidence Panel */}
                {ticket.documents?.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-card-border">
                    <Text strong className="block text-xs uppercase tracking-widest text-text-secondary mb-4 flex items-center gap-2">
                      <PaperClipOutlined /> Uploaded Evidence
                    </Text>
                    <div className="grid grid-cols-2 gap-4">
                      {ticket.documents.map((doc: any) => (
                        <a 
                          key={doc.ticket_document_id} 
                          href={doc.file_path} 
                          target="_blank" 
                          rel="noreferrer"
                          className="group flex items-center gap-4 p-3 rounded-2xl border border-card-border hover:border-primary hover:shadow-md hover:bg-app-bg transition-all"
                        >
                          <div className="w-12 h-12 rounded-xl bg-app-bg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                            {getFileIcon(doc.file_name)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <Text strong ellipsis className="block text-sm text-text-primary mb-0.5 group-hover:text-primary transition-colors">
                              {doc.file_name}
                            </Text>
                            <Text type="secondary" className="text-[11px] uppercase tracking-wider block text-text-secondary">
                              {(doc.file_size / 1024).toFixed(1)} KB • {doc.file_extension}
                            </Text>
                          </div>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity px-2">
                            <DownloadOutlined className="text-primary text-lg" />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Communication Thread */}
            <div>
              <div className="flex items-center gap-3 mb-6 pl-2">
                <MessageOutlined className="text-primary text-lg" />
                <Title level={5} className="m-0 text-text-primary uppercase tracking-widest text-xs whitespace-nowrap">Activity & Interaction</Title>
              </div>
              
              <div className="pl-4 md:pl-8">
                {ticket.replies?.length > 0 ? (
                  <div className="space-y-8 relative">
                    {/* Continuous Timeline Track */}
                    <div className="absolute left-[20px] top-4 bottom-[-40px] w-0.5 bg-card-border z-0"></div>

                    {ticket.replies.map((reply: any) => (
                      <div key={reply.ticket_reply_id} className="relative flex gap-6">
                        {/* Timeline Node */}
                        <div className="w-10 h-10 rounded-full bg-card-bg border-2 border-card-border shadow-sm flex items-center justify-center flex-shrink-0 mt-1 z-10">
                          <Avatar size={34} className="bg-primary text-white font-bold border-none">
                            {reply.user_name.charAt(0).toUpperCase()}
                          </Avatar>
                        </div>
                        
                        {/* Reply Bubble */}
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                             <div className="flex gap-2 items-center flex-wrap">
                               <Text strong className="text-text-primary">{reply.user_name}</Text>
                               {reply.status_name && (
                                 <Tag color={reply.status_color} className="text-[10px] uppercase font-bold py-0.5 rounded-md border-none">
                                   → Status: {reply.status_name}
                                 </Tag>
                               )}
                             </div>
                             <Text type="secondary" className="text-xs text-text-secondary">
                               {new Date(reply.created_at).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}
                             </Text>
                          </div>
                          
                          <div className="bg-card-bg p-6 rounded-2xl rounded-tl-sm border border-card-border shadow-sm group-hover:shadow-md transition-shadow">
                             <Paragraph className="m-0 text-text-primary text-[15px] leading-relaxed whitespace-pre-wrap">
                               {reply.reply_description}
                             </Paragraph>

                             {/* Reply Attachments */}
                             {reply.documents?.length > 0 && (
                               <div className="mt-4 pt-4 border-t border-card-border grid grid-cols-2 gap-3">
                                 {reply.documents.map((doc: any) => (
                                   <a 
                                     key={doc.ticket_reply_document_id} 
                                     href={doc.file_path} 
                                     target="_blank" 
                                     rel="noreferrer"
                                     className="flex items-center gap-3 p-2.5 rounded-xl border border-card-border hover:border-primary hover:bg-app-bg transition-all group/file"
                                   >
                                     <div className="w-8 h-8 rounded-lg bg-app-bg flex items-center justify-center text-lg">
                                       {getFileIcon(doc.file_name)}
                                     </div>
                                     <div className="flex-1 min-w-0">
                                       <Text strong ellipsis className="block text-[13px] text-text-primary group-hover/file:text-primary">
                                         {doc.file_name}
                                       </Text>
                                     </div>
                                   </a>
                                 ))}
                               </div>
                             )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 px-6 border border-dashed border-card-border rounded-3xl bg-card-bg/50">
                    <Empty 
                      image={Empty.PRESENTED_IMAGE_SIMPLE} 
                      description={<span className="text-text-secondary font-medium">No interaction history yet.</span>} 
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Reply Composer */}
            <div className="pt-4 relative z-10">
              <Card className="rounded-3xl border-card-border shadow-xl shadow-black/20 bg-card-bg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-primary"></div>
                <Form form={form} layout="vertical" onFinish={onReply} className="px-2">
                  <Form.Item name="reply_description" rules={[{ required: true, message: 'Reply cannot be empty' }]} className="mb-2">
                    <TextArea 
                      placeholder="Write your response here..." 
                      autoSize={{ minRows: 4, maxRows: 10 }}
                      className="rounded-xl border-none text-[15px] p-4 bg-app-bg text-text-primary focus:bg-app-bg transition-colors"
                      style={{ resize: 'none' }}
                    />
                  </Form.Item>
                  
                  <div className="flex flex-wrap items-center justify-between gap-6 pt-4 border-t border-card-border mt-4 pb-2">
                    <div className="flex flex-wrap items-center gap-6">
                        <Form.Item name="ticket_status_id" label={<span className="text-[11px] font-bold text-text-secondary uppercase tracking-widest block mb-1">Status Update</span>} className="mb-0">
                           <Select className="w-44 h-10 custom-select" placeholder="Select Status">
                              {masterData?.statuses.map((s: any) => (
                                <Select.Option key={s.ticket_status_id} value={s.ticket_status_id}>
                                  <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }}></span>
                                    <span className="font-medium text-text-primary">{s.ticket_name}</span>
                                  </div>
                                </Select.Option>
                              ))}
                           </Select>
                        </Form.Item>
                        
                        <Form.Item 
                          name="attachments" 
                          label={<span className="text-[11px] font-bold text-text-secondary uppercase tracking-widest block mb-1">Attachments</span>} 
                          className="mb-0"
                          valuePropName="fileList"
                          getValueFromEvent={(e: any) => {
                            if (Array.isArray(e)) return e;
                            return e?.fileList;
                          }}
                        >
                           <Upload beforeUpload={() => false} multiple listType="picture" className="reply-upload">
                              <Button icon={<PaperClipOutlined />} className="h-10 rounded-xl text-text-secondary hover:text-primary hover:border-primary border-card-border bg-app-bg transition-all">
                                Add Files
                              </Button>
                           </Upload>
                        </Form.Item>
                    </div>
                    
                    <Button 
                      type="primary" 
                      htmlType="submit" 
                      loading={submitting} 
                      icon={<SendOutlined />}
                      className="h-12 px-10 rounded-2xl font-bold tracking-wide shadow-lg shadow-primary/30 transition-all hover:scale-[1.02] active:scale-[0.98] bg-primary border-none"
                    >
                      Post Response
                    </Button>
                  </div>
                </Form>
              </Card>
            </div>

          </Col>

          {/* Right Column: Properties Data Sidebar */}
          <Col xs={24} lg={8}>
            <div className="sticky mt-5 top-6 space-y-6">
              
              <Card className="rounded-3xl border-card-border shadow-sm bg-card-bg" styles={{ body: { padding: '24px' } }}>           
                <div className="space-y-6">
                  {/* Category & Priority Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-app-bg rounded-2xl p-4 border border-card-border">
                      <Text type="secondary" className="text-[10px] uppercase font-bold tracking-widest block mb-2 text-text-secondary">Category</Text>
                      <Space size="small" className="font-medium text-sm">
                        <span style={{ color: ticket.category_color }}>{getCategoryIcon(ticket.category_icon)}</span>
                        <Text strong className="text-text-primary leading-tight">{ticket.category_name}</Text>
                      </Space>
                    </div>
                    
                    <div className="bg-app-bg rounded-2xl p-4 border border-card-border">
                      <Text type="secondary" className="text-[10px] uppercase font-bold tracking-widest block mb-2 text-text-secondary">Priorities</Text>
                      <Space size="small" className="font-medium text-sm">
                        <span style={{ color: ticket.priority_color }}>{getPriorityIcon(ticket.priority_icon)}</span>
                        <Text strong style={{ color: ticket.priority_color }} className="leading-tight">{ticket.ticket_priority_name}</Text>
                      </Space>
                    </div>
                  </div>

                  {/* Standard Meta List */}
                  <div className="px-2 space-y-5">
                    <div>
                      <Text type="secondary" className="text-[10px] uppercase font-bold tracking-widest block mb-1 text-text-secondary">Ticket Type</Text>
                      <Tag className="rounded-md px-3 py-0.5 border border-card-border bg-app-bg font-medium text-text-primary m-0">
                        {ticket.ticket_type_name}
                      </Tag>
                    </div>

                    <Divider className="my-2 border-card-border" />

                    <div>
                      <Text type="secondary" className="text-[10px] uppercase font-bold tracking-widest block mb-1 text-text-secondary">Division</Text>
                      <Text strong className="text-text-primary text-[14px]">
                        {ticket.division_name}
                      </Text>
                    </div>

                    <div>
                      <Text type="secondary" className="text-[10px] uppercase font-bold tracking-widest block mb-1 text-text-secondary">Issuer Account</Text>
                      <Text strong className="text-text-primary flex items-center gap-2">
                        <Avatar size="small" icon={<UserOutlined />} className="bg-app-bg text-text-secondary" />
                        &nbsp; {ticket.creator_name}
                      </Text>
                    </div>

                    <Divider className="my-2 border-card-border" />

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Text type="secondary" className="text-[10px] uppercase font-bold tracking-widest block mb-1 text-emerald-500">Plan Start</Text>
                        <Text strong className="text-[13px] text-text-primary">{ticket.ticket_start_date ? new Date(ticket.ticket_start_date).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' }) : 'Unscheduled'}</Text>
                      </div>
                      <div>
                        <Text type="secondary" className="text-[10px] uppercase font-bold tracking-widest block mb-1 text-rose-500">Target Finish</Text>
                        <Text strong className="text-[13px] text-text-primary">{ticket.ticket_end_date ? new Date(ticket.ticket_end_date).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' }) : 'Unscheduled'}</Text>
                      </div>
                    </div>
                  </div>

                </div>
              </Card>

            </div>
          </Col>
        </Row>

      </div>
    </App>
  );
}
