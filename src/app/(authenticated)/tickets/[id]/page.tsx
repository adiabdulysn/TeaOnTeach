'use client';

import React, { useState, useEffect, use } from 'react';
import { 
  Typography, Card, Space, Tag, Button, Row, Col, 
  Divider, Input, Form, message, Skeleton, Avatar,
  Empty, Select, Upload, App, Tooltip, Popconfirm
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
  CalendarOutlined,
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

  if (loading) return <div className="p-10 max-w-6xl mx-auto"><Skeleton active paragraph={{ rows: 12 }} /></div>;
  if (!ticket) return <div className="p-10"><Empty description="Ticket not found" /></div>;

  return (
    <App>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <div className="max-w-[1240px] mx-auto pb-20 px-4 sm:px-8">
        
        {/* Header Bar */}
        <div className="mb-6 flex flex-wrap gap-3 items-center justify-between">
          <Button 
            icon={<ArrowLeftOutlined />} 
            onClick={() => router.push('/tickets')}
            className="rounded-full shadow-sm bg-white border-slate-200 text-slate-500 hover:text-blue-600 font-medium"
          >
            Back to Tickets
          </Button>

          {/* Close Ticket — only visible when ticket is not yet closed */}
          {!isClosed && (
            <Popconfirm
              title="Close this ticket?"
              description={
                <div className="pt-1">
                  <p className="text-slate-600 text-sm m-0">This will mark the ticket as <strong>Closed</strong> and stop further replies.</p>
                  <p className="text-slate-400 text-xs mt-1 m-0">This action can be reversed by updating the status in a reply.</p>
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
                className="rounded-xl h-10 px-5 font-semibold border-rose-200 text-rose-500 bg-rose-50 hover:bg-rose-100 hover:border-rose-300 hover:text-rose-600 shadow-sm transition-all"
              >
                Close Ticket
              </Button>
            </Popconfirm>
          )}

          {/* Already closed badge */}
          {isClosed && (
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200">
              <CheckCircleOutlined className="text-slate-400" />
              <span className="text-slate-500 text-sm font-medium">Ticket Closed</span>
            </div>
          )}
        </div>

        {/* Title Header Card */}
        <Card className="rounded-3xl border-none shadow-sm mb-10 overflow-hidden bg-white">
           <div className="p-8 md:p-10 flex items-start justify-between flex-wrap gap-8">
              <div className="flex-1 min-w-[300px]">
                <div className="flex items-center gap-3 mb-3">
                  <Text strong className="text-blue-600 font-mono text-sm tracking-widest uppercase">
                    Ticket #{ticket.ticket_number}
                  </Text>
                  <Divider type="vertical" className="bg-slate-200 h-4" />
                  <Text className="text-slate-400 text-xs font-medium">Internal System Record</Text>
                  <Divider type="vertical" className="bg-slate-200 h-4" />
                  <Tag color={ticket.status_color} className="px-4 py-1.5 m-0 text-sm font-bold border rounded" style={{ color: ticket.status_color }}>
                    {ticket.status_name}
                  </Tag>
                </div>
                <Title level={2} className="m-0 text-slate-900 tracking-tight leading-[1.2] mb-6 font-bold">
                  {ticket.ticket_subject}
                </Title>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-2">
                  <div className="flex items-center gap-3">
                    <Avatar size="small" icon={<UserOutlined />} className="bg-blue-50 text-blue-500" />
                    <div className="flex flex-col">
                      <Text type="secondary" className="text-[10px] uppercase font-bold tracking-widest leading-none mb-1">Reporter</Text>
                      <Text strong className="text-slate-800 text-sm leading-none">{ticket.requestor_name}</Text>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-l pl-8 border-slate-100">
                    <ClockCircleOutlined className="text-slate-300 text-lg" />
                    <div className="flex flex-col">
                      <Text type="secondary" className="text-[10px] uppercase font-bold tracking-widest leading-none mb-1">Reported On</Text>
                      <Text strong className="text-slate-800 text-sm leading-none">
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
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                  <InfoCircleOutlined className="text-blue-500 text-base" />
                </div>
                <Title level={5} className="m-0 text-slate-800 uppercase tracking-widest text-[11px] font-bold">Issue Brief</Title>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100/60 hover:shadow-md transition-shadow">
                
                <Paragraph className="text-slate-700 text-[16px] leading-[1.8] whitespace-pre-wrap m-0 font-normal">
                  {ticket.ticket_detail || <span className="italic text-slate-400">No detailed description provided by the user.</span>}
                </Paragraph>

                {/* Evidence Panel */}
                {ticket.documents?.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <Text strong className="block text-xs uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                      <PaperClipOutlined /> Uploaded Evidence
                    </Text>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {ticket.documents.map((doc: any) => (
                        <a 
                          key={doc.ticket_document_id} 
                          href={doc.file_path} 
                          target="_blank" 
                          rel="noreferrer"
                          className="group flex items-center gap-4 p-3 rounded-2xl border border-slate-100 hover:border-blue-300 hover:shadow-md hover:bg-blue-50/50 transition-all"
                        >
                          <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                            {getFileIcon(doc.file_name)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <Text strong ellipsis className="block text-sm text-slate-700 mb-0.5 group-hover:text-blue-700 transition-colors">
                              {doc.file_name}
                            </Text>
                            <Text type="secondary" className="text-[11px] uppercase tracking-wider block">
                              {(doc.file_size / 1024).toFixed(1)} KB • {doc.file_extension}
                            </Text>
                          </div>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity px-2">
                            <DownloadOutlined className="text-blue-500 text-lg" />
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
                <MessageOutlined className="text-indigo-500 text-lg" />
                <Title level={5} className="m-0 text-slate-700 uppercase tracking-widest text-xs whitespace-nowrap">Activity & Interaction</Title>
              </div>
              
              <div className="pl-4 md:pl-8">
                {ticket.replies?.length > 0 ? (
                  <div className="space-y-8 relative">
                    {/* Continuous Timeline Track */}
                    <div className="absolute left-[20px] top-4 bottom-[-40px] w-0.5 bg-slate-200/80 z-0"></div>

                    {ticket.replies.map((reply: any) => (
                      <div key={reply.ticket_reply_id} className="relative flex gap-6">
                        {/* Timeline Node */}
                        <div className="w-10 h-10 rounded-full bg-white border-2 border-indigo-100 shadow-sm flex items-center justify-center flex-shrink-0 mt-1">
                          <Avatar size={34} className="bg-indigo-50 text-indigo-600 font-bold">
                            {reply.user_name.charAt(0).toUpperCase()}
                          </Avatar>
                        </div>
                        
                        {/* Reply Bubble */}
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                             <div className="flex gap-2 items-center flex-wrap">
                               <Text strong className="text-slate-800">{reply.user_name}</Text>
                               {reply.status_name && (
                                 <Tag color={reply.status_color} className="text-[10px] uppercase font-bold py-0.5 rounded-md border-none">
                                   → Status: {reply.status_name}
                                 </Tag>
                               )}
                             </div>
                             <Text type="secondary" className="text-xs">
                               {new Date(reply.created_at).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}
                             </Text>
                          </div>
                          
                          <div className="bg-white p-6 rounded-2xl rounded-tl-sm border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow">
                             <Paragraph className="m-0 text-slate-700 text-[15px] leading-relaxed whitespace-pre-wrap">
                               {reply.reply_description}
                             </Paragraph>

                             {/* Reply Attachments */}
                             {reply.documents?.length > 0 && (
                               <div className="mt-4 pt-4 border-t border-slate-50 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                 {reply.documents.map((doc: any) => (
                                   <a 
                                     key={doc.ticket_reply_document_id} 
                                     href={doc.file_path} 
                                     target="_blank" 
                                     rel="noreferrer"
                                     className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/20 transition-all group/file"
                                   >
                                     <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-lg">
                                       {getFileIcon(doc.file_name)}
                                     </div>
                                     <div className="flex-1 min-w-0">
                                       <Text strong ellipsis className="block text-[13px] text-slate-700 group-hover/file:text-blue-600">
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
                  <div className="text-center py-16 px-6 border border-dashed border-slate-200 rounded-3xl bg-slate-50/30">
                    <Empty 
                      image={Empty.PRESENTED_IMAGE_SIMPLE} 
                      description={<span className="text-slate-400 font-medium">No interaction history yet.</span>} 
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Reply Composer */}
            <div className="pt-4 relative z-10">
              <Card className="rounded-3xl border-slate-100 shadow-xl shadow-blue-900/5 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500"></div>
                <Form form={form} layout="vertical" onFinish={onReply} className="px-2">
                  <Form.Item name="reply_description" rules={[{ required: true, message: 'Reply cannot be empty' }]} className="mb-2">
                    <TextArea 
                      placeholder="Write your response here..." 
                      autoSize={{ minRows: 4, maxRows: 10 }}
                      className="rounded-xl border-none text-[15px] p-4 bg-slate-50/30 focus:bg-white transition-colors"
                      style={{ resize: 'none' }}
                    />
                  </Form.Item>
                  
                  <div className="flex flex-wrap items-center justify-between gap-6 pt-4 border-t border-slate-50 mt-4 pb-2">
                    <div className="flex flex-wrap items-center gap-6">
                        <Form.Item name="ticket_status_id" label={<span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Status Update</span>} className="mb-0">
                           <Select className="w-44 h-10 custom-select" placeholder="Select Status">
                              {masterData?.statuses.map((s: any) => (
                                <Select.Option key={s.ticket_status_id} value={s.ticket_status_id}>
                                  <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }}></span>
                                    <span className="font-medium text-slate-700">{s.ticket_name}</span>
                                  </div>
                                </Select.Option>
                              ))}
                           </Select>
                        </Form.Item>
                        
                        <Form.Item 
                          name="attachments" 
                          label={<span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Attachments</span>} 
                          className="mb-0"
                          valuePropName="fileList"
                          getValueFromEvent={(e: any) => {
                            if (Array.isArray(e)) return e;
                            return e?.fileList;
                          }}
                        >
                           <Upload beforeUpload={() => false} multiple listType="picture" className="reply-upload">
                              <Button icon={<PaperClipOutlined />} className="h-10 rounded-xl text-slate-600 hover:text-blue-600 hover:border-blue-400 border-slate-200 bg-white">
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
                      className="h-12 px-10 rounded-2xl font-bold tracking-wide shadow-lg shadow-blue-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
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
              
              <Card className="rounded-3xl border-slate-100 shadow-sm" styles={{ body: { padding: '24px' } }}>           
                <div className="space-y-6">
                  {/* Category & Priority Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100/50">
                      <Text type="secondary" className="text-[10px] uppercase font-bold tracking-widest block mb-2">Category</Text>
                      <Space size="small" className="font-medium text-sm">
                        <span style={{ color: ticket.category_color }}>{getCategoryIcon(ticket.category_icon)}</span>
                        <Text strong className="text-slate-700 leading-tight">{ticket.category_name}</Text>
                      </Space>
                    </div>
                    
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100/50">
                      <Text type="secondary" className="text-[10px] uppercase font-bold tracking-widest block mb-2">Priorities</Text>
                      <Space size="small" className="font-medium text-sm">
                        <span style={{ color: ticket.priority_color }}>{getPriorityIcon(ticket.priority_icon)}</span>
                        <Text strong style={{ color: ticket.priority_color }} className="leading-tight">{ticket.ticket_priority_name}</Text>
                      </Space>
                    </div>
                  </div>

                  {/* Standard Meta List */}
                  <div className="px-2 space-y-5">
                    <div>
                      <Text type="secondary" className="text-[10px] uppercase font-bold tracking-widest block mb-1">Ticket Type</Text>
                      <Tag className="rounded-md px-3 py-0.5 border border-slate-200 bg-white font-medium text-slate-600 m-0">
                        {ticket.ticket_type_name}
                      </Tag>
                    </div>

                    <Divider className="my-2 border-slate-100" />

                    <div>
                      <Text type="secondary" className="text-[10px] uppercase font-bold tracking-widest block mb-1">Division</Text>
                      <Text strong className="text-slate-800 text-[14px]">
                        {ticket.division_name}
                      </Text>
                    </div>

                    <div>
                      <Text type="secondary" className="text-[10px] uppercase font-bold tracking-widest block mb-1">Issuer Account</Text>
                      <Text strong className="text-slate-800 flex items-center gap-2">
                        <Avatar size="small" icon={<UserOutlined />} className="bg-slate-200 text-slate-500" />
                        &nbsp; {ticket.creator_name}
                      </Text>
                    </div>

                    <Divider className="my-2 border-slate-100" />

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Text type="secondary" className="text-[10px] uppercase font-bold tracking-widest block mb-1 text-emerald-600">Plan Start</Text>
                        <Text strong className="text-[13px]">{ticket.ticket_start_date ? new Date(ticket.ticket_start_date).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' }) : 'Unscheduled'}</Text>
                      </div>
                      <div>
                        <Text type="secondary" className="text-[10px] uppercase font-bold tracking-widest block mb-1 text-rose-500">Target Finish</Text>
                        <Text strong className="text-[13px]">{ticket.ticket_end_date ? new Date(ticket.ticket_end_date).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' }) : 'Unscheduled'}</Text>
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
