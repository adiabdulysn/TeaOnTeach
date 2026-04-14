'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Table, Button, Space, Typography, Tag, Card, message, Input, Popover, Checkbox, Tooltip, Collapse, Select, DatePicker, Row, Col } from 'antd';
import { 
  PlusOutlined, 
  SearchOutlined, 
  ClockCircleOutlined, 
  CheckCircleOutlined, 
  SyncOutlined,
  InboxOutlined,
  SettingOutlined,
  ReloadOutlined,
  HolderOutlined,
  AppstoreOutlined,
  FilterOutlined,
  ClearOutlined,
  CalendarOutlined,
  UserOutlined,
  FileSearchOutlined
} from '@ant-design/icons';
import { Skeleton } from 'antd';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { getTickets, getTicketSummary, getTicketFilterData } from '@/app/actions/tickets';
import { getPriorityIcon, getCategoryIcon } from '@/lib/icons';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;
const { Title, Text } = Typography;

// ── Simple Statistic Mini Card ──────────────────────────────────────────────
function StatMiniCard({ title, value, color, icon, loading, onClick, active }: any) {
  if (loading) return <Skeleton.Button active style={{ height: 100, width: '100%', borderRadius: 20 }} />;
  
  return (
    <div 
      onClick={onClick}
      className={`flex-1 min-w-[160px] rounded-2xl p-5 border shadow-sm hover:shadow-md transition-all group cursor-pointer ${active ? 'bg-blue-500/10 border-blue-500/30' : 'bg-card-bg border-card-border'}`}
    >
      <div className="flex items-center gap-4">
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-sm group-hover:scale-110 transition-transform"
          style={{ backgroundColor: `${color}25`, color }}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <Text className="text-text-secondary text-[10px] font-bold block leading-none mb-1.5 truncate">
            {title}
          </Text>
          <div className="text-2xl font-black text-text-primary leading-none">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}

// All column definitions (each must have a stable `key`)
const ALL_COLUMNS = [
  { key: 'ticket_number',   label: 'Ticket No' },
  { key: 'status',          label: 'Status' },
  { key: 'ticket_subject',  label: 'Subject' },
  { key: 'category',        label: 'Category' },
  { key: 'requestor',       label: 'Requestor' },
  { key: 'priority',        label: 'Priority' },
  { key: 'division',        label: 'Division' },
  { key: 'start_date',      label: 'Start Date' },
  { key: 'end_date',        label: 'End Date' },
  { key: 'created_by',      label: 'Created By' },
  { key: 'updated_by',      label: 'Updated By' },
  { key: 'created_at',      label: 'Created At' },
  { key: 'updated_at',      label: 'Updated At' },
];

const DEFAULT_VISIBLE = ['ticket_number', 'status', 'ticket_subject', 'category', 'requestor', 'priority', 'division', 'created_by', 'created_at'];

export default function TicketsDashboard() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const router = useRouter();
  const [data, setData] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [summary, setSummary] = useState<any>({ total: 0, statuses: [] });
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [visibleCols, setVisibleCols] = useState<string[]>(DEFAULT_VISIBLE);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [filterStats, setFilterStats] = useState<any>(null);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // Form Filter State
  const [filters, setFilters] = useState({
    ticket_number: '',
    status_id: null as number | null,
    subject: '',
    category_id: null as number | null,
    requestor: '',
    priority_id: null as number | null,
    division_id: null as number | null,
    user_id: null as number | null,
    ticket_date_range: null as any,
    created_at_range: null as any,
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const [tickets, stats, filterData] = await Promise.all([
        getTickets(), 
        getTicketSummary(),
        getTicketFilterData()
      ]);
      setData(tickets as any[]);
      setSummary(stats as any);
      setFilterStats(filterData);
    } catch {
      message.error('Failed to load tickets');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  // Combined search and status filter
  useEffect(() => {
    let result = data;
    
    // 1. Status Mini Card Click Filter
    if (statusFilter) {
      result = result.filter(r => r.ticket_status_name === statusFilter);
    }

    // 2. Global Search Filter
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(r =>
        r.ticket_number?.toLowerCase().includes(q) ||
        r.ticket_subject?.toLowerCase().includes(q) ||
        r.requestor_name?.toLowerCase().includes(q) ||
        r.category_name?.toLowerCase().includes(q) ||
        r.division_name?.toLowerCase().includes(q)
      );
    }

    // 3. Advanced Form Filters
    if (filters.ticket_number) {
      result = result.filter(r => r.ticket_number?.toLowerCase().includes(filters.ticket_number.toLowerCase()));
    }
    if (filters.status_id) {
      result = result.filter(r => r.ticket_status_id === filters.status_id);
    }
    if (filters.subject) {
      result = result.filter(r => r.ticket_subject?.toLowerCase().includes(filters.subject.toLowerCase()));
    }
    if (filters.category_id) {
      result = result.filter(r => r.category_id === filters.category_id);
    }
    if (filters.requestor) {
      result = result.filter(r => r.requestor_name?.toLowerCase().includes(filters.requestor.toLowerCase()));
    }
    if (filters.priority_id) {
      result = result.filter(r => r.ticket_priority_id === filters.priority_id);
    }
    if (filters.division_id) {
      result = result.filter(r => r.division_id === filters.division_id);
    }
    if (filters.user_id) {
      result = result.filter(r => r.created_user_id === filters.user_id || r.updated_user_id === filters.user_id);
    }
    if (filters.ticket_date_range) {
      const [start, end] = filters.ticket_date_range;
      result = result.filter(r => {
        const tStart = r.ticket_start_date ? dayjs(r.ticket_start_date) : null;
        const tEnd = r.ticket_end_date ? dayjs(r.ticket_end_date) : null;
        return (tStart && tStart.isAfter(start.startOf('day')) && tStart.isBefore(end.endOf('day'))) ||
               (tEnd && tEnd.isAfter(start.startOf('day')) && tEnd.isBefore(end.endOf('day')));
      });
    }
    if (filters.created_at_range) {
      const [start, end] = filters.created_at_range;
      result = result.filter(r => {
        const cAt = dayjs(r.created_at);
        return cAt.isAfter(start.startOf('day')) && cAt.isBefore(end.endOf('day'));
      });
    }
    
    setFiltered(result);
  }, [search, data, statusFilter, filters]);

  const resetFilters = () => {
    setFilters({
      ticket_number: '',
      status_id: null,
      subject: '',
      category_id: null,
      requestor: '',
      priority_id: null,
      division_id: null,
      user_id: null,
      ticket_date_range: null,
      created_at_range: null,
    });
    setSearch('');
    setStatusFilter(null);
  };

  const toggleStatusFilter = (statusName: string | null) => {
    setStatusFilter(prev => prev === statusName ? null : statusName);
  };

  const toggleCol = (key: string) => {
    setVisibleCols(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  const resetCols = () => setVisibleCols(DEFAULT_VISIBLE);

  const getStatusIcon = (name: string, size = 18) => {
    const s = { fontSize: `${size}px` };
    const n = name.toLowerCase();
    if (n.includes('open') || n.includes('new')) return <InboxOutlined style={s} />;
    if (n.includes('progress')) return <ReloadOutlined spin style={s} />;
    if (n.includes('resolve') || n.includes('done') || n.includes('close')) return <AppstoreOutlined style={s} />;
    return <AppstoreOutlined style={s} />;
  };

  // Full column map
  const columnMap: Record<string, any> = {
    ticket_number: {
      title: 'Ticket #',
      dataIndex: 'ticket_number',
      key: 'ticket_number',
      width: 150,
      render: (text: string, record: any) => (
        <Text
          strong
          className="text-blue-600 font-mono cursor-pointer hover:underline"
          onClick={() => router.push(`/tickets/${record.ticket_id}`)}
        >
          {text}
        </Text>
      ),
    },
    status: {
      title: 'Status',
      dataIndex: 'ticket_status_name',
      key: 'status',
      width: 130,
      render: (status: string, record: any) => (
        <Tag
          className="rounded-full px-3 border-none font-semibold text-[11px] m-0"
          color={record.status_color}
        >
          {status}
        </Tag>
      ),
    },
    ticket_subject: {
      title: 'Subject',
      dataIndex: 'ticket_subject',
      key: 'ticket_subject',
      render: (text: string, record: any) => (
        <div className="cursor-pointer" onClick={() => router.push(`/tickets/${record.ticket_id}`)}>
          <Text strong className="block text-text-primary hover:text-blue-600 transition-colors leading-tight mb-0.5">{text}</Text>
          <Text type="secondary" className="text-[11px] uppercase tracking-tight font-medium">
            {record.ticket_type_name}
          </Text>
        </div>
      ),
    },
    category: {
      title: 'Category',
      dataIndex: 'category_name',
      key: 'category',
      width: 140,
      render: (text: string, record: any) => (
        <div className="flex items-center gap-2">
          <span className="text-base" style={{ color: record.category_color }}>{getCategoryIcon(record.category_icon)}</span>
          <Text className="text-text-secondary text-sm">{text}</Text>
        </div>
      ),
    },
    requestor: {
      title: 'Requestor',
      dataIndex: 'requestor_name',
      key: 'requestor',
      width: 140,
      render: (text: string) => <Text className="text-text-primary font-medium">{text}</Text>,
    },
    priority: {
      title: 'Priority',
      dataIndex: 'ticket_priority_name',
      key: 'priority',
      width: 120,
      render: (priority: string, record: any) => (
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-sm"
            style={{ backgroundColor: `${record.priority_color}15`, color: record.priority_color, border: `1px solid ${record.priority_color}25` }}
          >
            {getPriorityIcon(record.priority_icon)}
          </div>
          <Text className="text-xs font-bold" style={{ color: record.priority_color }}>{priority}</Text>
        </div>
      ),
    },
    division: {
      title: 'Division',
      dataIndex: 'division_name',
      key: 'division',
      width: 140,
      render: (text: string) => <Text className="text-text-secondary text-sm">{text}</Text>,
    },
    start_date: {
      title: 'Start Date',
      dataIndex: 'ticket_start_date',
      key: 'start_date',
      width: 120,
      render: (date: any) => (
        <Text type="secondary" className="text-xs">
          {date ? new Date(date).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' }) : <span className="text-slate-300">—</span>}
        </Text>
      ),
    },
    end_date: {
      title: 'End Date',
      dataIndex: 'ticket_end_date',
      key: 'end_date',
      width: 120,
      render: (date: any) => (
        <Text type="secondary" className="text-xs">
          {date ? new Date(date).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' }) : <span className="text-slate-300">—</span>}
        </Text>
      ),
    },
    created_by: {
      title: 'Created By',
      dataIndex: 'creator_name',
      key: 'created_by',
      width: 150,
      render: (text: string) => (
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${isDark ? 'bg-blue-900/40 text-blue-400' : 'bg-blue-50 text-blue-500'}`}>
            {text ? text.charAt(0).toUpperCase() : '?'}
          </div>
          <Text className="text-text-secondary text-sm">{text || <span className="text-text-secondary opacity-30">—</span>}</Text>
        </div>
      ),
    },
    updated_by: {
      title: 'Updated By',
      dataIndex: 'updated_user_name',
      key: 'updated_by',
      width: 150,
      render: (text: string) => (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 text-[10px] font-bold flex-shrink-0">
            {text ? text.charAt(0).toUpperCase() : '—'}
          </div>
          <Text className="text-slate-500 text-sm">{text || <span className="text-slate-300">—</span>}</Text>
        </div>
      ),
    },
    created_at: {
      title: 'Created At',
      dataIndex: 'created_at',
      key: 'created_at',
      width: 160,
      render: (date: Date) => (
        <Text type="secondary" className="text-[11px]">
          {date ? new Date(date).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' }) : '—'}
        </Text>
      ),
    },
    updated_at: {
      title: 'Updated At',
      dataIndex: 'updated_at',
      key: 'updated_at',
      width: 160,
      render: (date: Date) => (
        <Text type="secondary" className="text-[11px]">
          {date ? new Date(date).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' }) : <span className="text-slate-300">—</span>}
        </Text>
      ),
    },
  };

  // Build ordered columns based on visibleCols
  const activeColumns = ALL_COLUMNS.filter(c => visibleCols.includes(c.key)).map(c => columnMap[c.key]);

  // Table Settings popover content
  const settingsContent = (
    <div className="w-52">
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <Checkbox
            checked={visibleCols.length === ALL_COLUMNS.length}
            indeterminate={visibleCols.length > 0 && visibleCols.length < ALL_COLUMNS.length}
            onChange={e => setVisibleCols(e.target.checked ? ALL_COLUMNS.map(c => c.key) : [])}
          />
          <Text strong className="text-sm">Column Display</Text>
        </div>
        <Button type="link" size="small" className="text-red-500 font-bold p-0 h-auto" onClick={resetCols}>
          Reset
        </Button>
      </div>
      <div className="space-y-1.5 mt-2">
        {ALL_COLUMNS.map(col => (
          <div key={col.key} className="flex items-center gap-3 px-1 py-1.5 rounded-lg hover:bg-app-bg transition-colors cursor-pointer" onClick={() => toggleCol(col.key)}>
            <HolderOutlined className="text-text-secondary opacity-30 cursor-grab" />
            <Checkbox checked={visibleCols.includes(col.key)} onChange={() => toggleCol(col.key)} />
            <Text className="text-sm text-text-primary flex-1 select-none">{col.label}</Text>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* ── Summary Card Group (Single Row) ── */}
      <div className="flex flex-nowrap overflow-x-auto gap-4 pt-2 pb-2 scrollbar-none">
        {/* Total Stat */}
        <StatMiniCard 
          title="Total Tickets" 
          value={summary.total ?? 0} 
          color="#3b82f6" 
          icon={<InboxOutlined />} 
          loading={loading}
          onClick={() => setStatusFilter(null)}
          active={statusFilter === null}
        />
        
        {/* Dynamic Status Stats from Master Data */}
        {!loading && summary.statuses?.map((status: any) => (
          <StatMiniCard 
            key={status.name}
            title={status.name}
            value={status.count}
            color={status.color || '#64748b'}
            icon={getStatusIcon(status.name)}
            loading={loading}
            onClick={() => toggleStatusFilter(status.name)}
            active={statusFilter === status.name}
          />
        ))}
        
        {/* Skeleton for Statuses during loading */}
        {loading && [1,2,3,4].map(i => (
          <div key={i} className="flex-1 min-w-[160px]">
            <Skeleton.Button active block style={{ height: 80, borderRadius: 16 }} />
          </div>
        ))}
      </div>

      {/* ── Advanced Filter Panel ── */}
      {isFilterVisible && (
        <Card className="rounded-3xl shadow-sm border-card-border bg-card-bg overflow-visible mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                <FilterOutlined style={{ fontSize: '18px' }} />
              </div>
              <div>
                <Text strong className="text-text-primary block leading-none mb-1">Advanced Filtering</Text>
              </div>
            </div>
            <Button 
              type="text" 
              danger 
              icon={<ClearOutlined />} 
              onClick={resetFilters}
              className="font-bold flex items-center gap-2"
            >
              Reset All
            </Button>
          </div>

          <Row gutter={[20, 20]}>
            <Col xs={24} sm={12} md={6}>
              <Text className="text-[11px] font-bold text-text-secondary uppercase tracking-widest block mb-2 px-1 opacity-60">Ticket Number</Text>
              <Input 
                placeholder="Ex: 202404..." 
                prefix={<FileSearchOutlined className="text-slate-300" />}
                value={filters.ticket_number}
                onChange={e => setFilters({...filters, ticket_number: e.target.value})}
                className="h-10 rounded-xl border-slate-200 bg-slate-50/50"
              />
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Text className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2 px-1">Status</Text>
              <Select 
                showSearch
                placeholder="Choose status"
                className="w-full h-10 custom-select"
                allowClear
                value={filters.status_id}
                onChange={val => setFilters({...filters, status_id: val})}
                options={filterStats?.statuses.map((s: any) => ({ value: s.ticket_status_id, label: s.ticket_name }))}
              />
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Text className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2 px-1">Subject</Text>
              <Input 
                placeholder="Search subject..." 
                value={filters.subject}
                onChange={e => setFilters({...filters, subject: e.target.value})}
                className="h-10 rounded-xl border-slate-200 bg-slate-50/50"
              />
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Text className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2 px-1">Category</Text>
              <Select 
                placeholder="Service type"
                className="w-full h-10 custom-select"
                allowClear
                value={filters.category_id}
                onChange={val => setFilters({...filters, category_id: val})}
                options={filterStats?.categories.map((c: any) => ({ value: c.category_id, label: c.category_name }))}
              />
            </Col>

            <Col xs={24} sm={12} md={6}>
              <Text className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2 px-1">Requestor</Text>
              <Input 
                placeholder="Name..." 
                value={filters.requestor}
                onChange={e => setFilters({...filters, requestor: e.target.value})}
                className="h-10 rounded-xl border-slate-200 bg-slate-50/50"
              />
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Text className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2 px-1">Priority</Text>
              <Select 
                placeholder="Urgency"
                className="w-full h-10 custom-select"
                allowClear
                value={filters.priority_id}
                onChange={val => setFilters({...filters, priority_id: val})}
                options={filterStats?.priorities.map((p: any) => ({ value: p.ticket_priority_id, label: p.ticket_priority_name }))}
              />
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Text className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2 px-1">Division</Text>
              <Select 
                placeholder="Department"
                className="w-full h-10 custom-select"
                allowClear
                value={filters.division_id}
                onChange={val => setFilters({...filters, division_id: val})}
                options={filterStats?.divisions.map((d: any) => ({ value: d.division_id, label: d.division_name }))}
              />
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Text className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2 px-1">PIC User (Creator/Updater)</Text>
              <Select 
                showSearch
                placeholder="Staff name"
                className="w-full h-10 custom-select"
                allowClear
                value={filters.user_id}
                onChange={val => setFilters({...filters, user_id: val})}
                options={filterStats?.users.map((u: any) => ({ value: u.user_id, label: u.name }))}
                optionFilterProp="label"
              />
            </Col>

            <Col xs={24} md={12}>
              <Text className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2 px-1">Ticket Date Range (Start/End)</Text>
              <RangePicker 
                className="w-full h-10 rounded-xl border-slate-200" 
                value={filters.ticket_date_range}
                onChange={val => setFilters({...filters, ticket_date_range: val})}
              />
            </Col>
            <Col xs={24} md={12}>
              <Text className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2 px-1">Created At Between</Text>
              <RangePicker 
                showTime
                className="w-full h-10 rounded-xl border-slate-200" 
                value={filters.created_at_range}
                onChange={val => setFilters({...filters, created_at_range: val})}
              />
            </Col>
          </Row>
        </Card>
      )}

      {/* ── Table Container ── */}
      <div className="bg-card-bg rounded-3xl shadow-sm border border-card-border overflow-hidden mt-5 transition-colors">
        <div className="p-6 border-b border-card-border flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <Title level={4} style={{ margin: 0, fontWeight: 700 }} className="text-text-primary tracking-tight">
              All Tickets
            </Title>
          </div>

          <Space size="small">
            <Input
              prefix={<SearchOutlined className="text-text-secondary opacity-40" />}
              placeholder="Search tickets..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="h-10 rounded-xl bg-app-bg border-none w-60 text-text-primary"
              allowClear
            />

            <Tooltip title="Advanced Filter">
              <Button
                icon={<FilterOutlined />}
                onClick={() => setIsFilterVisible(!isFilterVisible)}
                type={isFilterVisible ? 'primary' : 'default'}
                className={`h-10 w-10 rounded-xl border-slate-200 ${!isFilterVisible ? 'bg-white text-slate-400' : ''} hover:text-blue-500 hover:border-blue-300 transition-all`}
              />
            </Tooltip>

            {/* Refresh */}
            <Tooltip title="Refresh data">
              <Button
                icon={<ReloadOutlined />}
                onClick={fetchData}
                loading={loading}
                className="h-10 w-10 rounded-xl border-slate-200 bg-white text-slate-400 hover:text-blue-500 hover:border-blue-300"
              />
            </Tooltip>

            {/* Table Settings */}
            <Tooltip title="Table Settings">
              <Popover
                content={settingsContent}
                trigger="click"
                placement="bottomRight"
                open={settingsOpen}
                onOpenChange={setSettingsOpen}
                title={
                  <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest pb-1">
                    <SettingOutlined /> Table Settings
                  </div>
                }
                styles={{ content: { padding: '12px 16px 16px' }, root: { borderRadius: '16px' } }}
                className="rounded-2xl shadow-xl"
              >
                <Button
                  icon={<SettingOutlined />}
                  className="h-10 w-10 rounded-xl border-slate-200 bg-white text-slate-400 hover:text-blue-500 hover:border-blue-300"
                />
              </Popover>
            </Tooltip>

            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => router.push('/tickets/create')}
              className="rounded-xl h-10 font-bold px-6 shadow-lg shadow-blue-500/20"
            >
              New Ticket
            </Button>
          </Space>
        </div>

        <div className="p-2">
          <Table
            columns={activeColumns}
            dataSource={filtered}
            rowKey="ticket_id"
            loading={loading}
            scroll={{ x: 'max-content' }}
            onRow={(record) => ({
              className: 'cursor-pointer transition-colors',
            })}
            pagination={{
              pageSize: 10,
              className: 'px-6 pb-4',
              showTotal: (total) => (
                <Text className="text-xs text-text-secondary opacity-60">Total {total} tickets trackable in this sequence</Text>
              ),
            }}
            className="px-2"
          />
        </div>
      </div>
    </div>
  );
}
