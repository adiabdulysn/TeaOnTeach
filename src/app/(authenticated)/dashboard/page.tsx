'use client';

import React, { useState, useEffect } from 'react';
import {
  Row, Col, Skeleton, Typography, Select, Space, Button, Empty, Tooltip as AntTooltip
} from 'antd';
import {
  PlusOutlined, ReloadOutlined, CalendarOutlined, InboxOutlined, RiseOutlined,
  AppstoreOutlined, FireOutlined, TeamOutlined, ArrowRightOutlined, ArrowUpOutlined
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { getDashboardData } from '@/app/actions/tickets';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as ReTooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, BarChart, Bar,
} from 'recharts';

const { Title, Text } = Typography;

// ── Simple Statistic Mini Card ──────────────────────────────────────────────
function StatMiniCard({ title, value, color, icon, loading }: any) {
  if (loading) return <Skeleton.Button active style={{ height: 100, width: '100%', borderRadius: 20 }} />;
  
  return (
    <div 
      className="flex-1 min-w-[160px] bg-card-bg rounded-2xl p-5 border border-card-border shadow-sm hover:shadow-md transition-all group"
    >
      <div className="flex items-center gap-4">
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-sm group-hover:scale-110 transition-transform"
          style={{ backgroundColor: `${color}15`, color }}
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

// ── Icons for Statuses ───────────────────────────────────────────────────────
const getStatusIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('open') || n.includes('new')) return <InboxOutlined />;
  if (n.includes('progress')) return <ReloadOutlined spin />;
  if (n.includes('resolve') || n.includes('done') || n.includes('close')) return <AppstoreOutlined />;
  return <AppstoreOutlined />;
};

// ── Dashboard Components ────────────────────────────────────────────────────
const CustomAreaTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card-bg rounded-2xl shadow-xl border border-card-border px-4 py-3">
      <p className="text-text-secondary text-xs font-medium mb-1">{label}</p>
      <p className="text-blue-600 font-bold text-base">{payload[0].value} tickets</p>
    </div>
  );
};

export default function DashboardPage() {
  const { resolvedTheme } = useTheme();
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [filterMonth, setFilterMonth] = useState<number | undefined>(undefined);
  const [filterYear, setFilterYear] = useState<number | undefined>(undefined);

  const fetchData = (month?: number, year?: number) => {
    setLoading(true);
    getDashboardData(month, year)
      .then(setData)
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchData(); }, []);

  const handleMonthChange = (val: number | undefined) => {
    setFilterMonth(val);
    if (val && filterYear) fetchData(val, filterYear);
    else if (!val) fetchData(undefined, filterYear);
  };

  const handleYearChange = (val: number | undefined) => {
    setFilterYear(val);
    if (filterMonth && val) fetchData(filterMonth, val);
    else if (!val) fetchData(filterMonth, undefined);
  };

  const isFiltered = !!filterMonth && !!filterYear;
  const filterLabel = isFiltered
    ? `${new Date(filterYear!, filterMonth! - 1).toLocaleString('default', { month: 'long' })} ${filterYear}`
    : null;

  return (
    <div className="space-y-8 pb-10">
      {/* ── Page Header ── */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <Title level={3} style={{ margin: 0 }} className="text-text-primary font-black tracking-tight">
            Dashboard Overview
          </Title>
          <Text type="secondary" className="text-sm">
            {isFiltered ? <>Showing data for <strong className="text-blue-600">{filterLabel}</strong></> : null}
          </Text>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Space.Compact>
            <Select
              placeholder="Month"
              value={filterMonth}
              onChange={handleMonthChange}
              allowClear
              style={{ width: 120 }}
              options={[
                { value: 1, label: 'January' }, { value: 2, label: 'February' },
                { value: 3, label: 'March' }, { value: 4, label: 'April' },
                { value: 5, label: 'May' }, { value: 6, label: 'June' },
                { value: 7, label: 'July' }, { value: 8, label: 'August' },
                { value: 9, label: 'September' }, { value: 10, label: 'October' },
                { value: 11, label: 'November' }, { value: 12, label: 'December' },
              ]}
            />
            <Select
              placeholder="Year"
              value={filterYear}
              onChange={handleYearChange}
              allowClear
              style={{ width: 90 }}
              options={Array.from({ length: 5 }, (_, i) => {
                const y = new Date().getFullYear() - i;
                return { value: y, label: String(y) };
              })}
            />
          </Space.Compact>

          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => router.push('/tickets/create')}
            className="rounded-xl font-bold px-6 shadow-lg shadow-blue-500/20"
          >
            New Ticket
          </Button>
        </div>
      </div>

      {/* ── Summary Card Group (Single Row) ── */}
      <div className="flex flex-nowrap overflow-x-auto gap-4 pb-2 scrollbar-none">
        {/* Total Stat */}
        <StatMiniCard 
          title="Total Tickets" 
          value={data?.total ?? 0} 
          color="#3b82f6" 
          icon={<InboxOutlined />} 
          loading={loading}
        />
        
        {/* Dynamic Status Stats from Master Data */}
        {!loading && data?.statusStats?.map((status: any) => (
          <StatMiniCard 
            key={status.name}
            title={status.name}
            value={status.count}
            color={status.color || '#64748b'}
            icon={getStatusIcon(status.name)}
            loading={loading}
          />
        ))}
        
        {/* Skeleton for Statuses during loading */}
        {loading && [1,2,3,4].map(i => (
          <div key={i} className="flex-1 min-w-[160px]">
            <Skeleton.Button active block style={{ height: 80, borderRadius: 16 }} />
          </div>
        ))}
      </div>

      {/* ── Charts & Main Content ── */}
      <Row gutter={[24, 24]}>
        {/* Trend chart */}
        <Col xs={24} lg={16}>
          <CardWithTitle title="Ticket Volume Trend" subtitle={isFiltered ? `Breakdown for ${filterLabel}` : 'Last 14 days activity'} icon={<RiseOutlined className="text-blue-500" />}>
            {loading ? <Skeleton active paragraph={{ rows: 6 }} /> : (
              <ResponsiveContainer width="100%" height={240}>
                <AreaChart data={data?.trend ?? []} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={resolvedTheme === 'dark' ? '#1e293b' : '#f1f5f9'} vertical={false} />
                  <XAxis dataKey="date" tick={{ fontSize: 11, fill: resolvedTheme === 'dark' ? '#64748b' : '#94a3b8' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: resolvedTheme === 'dark' ? '#64748b' : '#94a3b8' }} axisLine={false} tickLine={false} allowDecimals={false} />
                  <ReTooltip content={<CustomAreaTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="count"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    fill="url(#blueGradient)"
                    dot={{ r: 3, fill: '#3b82f6', strokeWidth: 0 }}
                    activeDot={{ r: 6, fill: '#3b82f6', stroke: '#fff', strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </CardWithTitle>
        </Col>

        {/* Status Distribution */}
        <Col xs={24} lg={8}>
          <CardWithTitle title="Distribution" subtitle="By ticket status" icon={<AppstoreOutlined className="text-indigo-500" />}>
            {loading ? <Skeleton active paragraph={{ rows: 6 }} /> : (
              data?.statusStats?.every((s: any) => s.count === 0) ? (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No data" />
              ) : (
                <ResponsiveContainer width="100%" height={240}>
                  <PieChart>
                    <Pie
                      data={data?.statusStats ?? []}
                      dataKey="count"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      innerRadius={50}
                    >
                      {data?.statusStats?.map((entry: any, i: number) => (
                        <Cell key={i} fill={entry.color || `hsl(${i * 60},65%,55%)`} />
                      ))}
                    </Pie>
                    <Legend iconType="circle" iconSize={6} wrapperStyle={{ fontSize: '11px' }} />
                    <ReTooltip />
                  </PieChart>
                </ResponsiveContainer>
              )
            )}
          </CardWithTitle>
        </Col>
      </Row>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <CardWithTitle title="Division Load" icon={<TeamOutlined className="text-violet-500" />}>
            {loading ? <Skeleton active paragraph={{ rows: 5 }} /> : (
              <div className="space-y-4">
                {data?.divisionStats?.map((d: any, i: number) => {
                  const max = Math.max(...data.divisionStats.map((x: any) => x.count), 1);
                  return (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1.5">
                        <Text className="text-text-secondary text-[13px] font-medium truncate">{d.name}</Text>
                        <Text strong className="text-text-primary text-[13px]">{d.count}</Text>
                      </div>
                      <div className="h-1.5 bg-app-bg rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full transition-all duration-700" style={{ width: `${(d.count / max) * 100}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardWithTitle>
        </Col>

        <Col xs={24} md={12}>
          <CardWithTitle title="Priority Stats" icon={<FireOutlined className="text-rose-500" />}>
             {loading ? <Skeleton active paragraph={{ rows: 5 }} /> : (
               <ResponsiveContainer width="100%" height={180}>
                 <BarChart data={data?.priorityStats ?? []} layout="vertical">
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} width={80} />
                    <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={16}>
                       {data?.priorityStats?.map((entry: any, i: number) => (
                         <Cell key={i} fill={entry.color} />
                       ))}
                    </Bar>
                 </BarChart>
               </ResponsiveContainer>
             )}
          </CardWithTitle>
        </Col>
      </Row>

      {/* Recent Tickets */}
      <CardWithTitle 
        title="Recent Activities" 
        icon={<InboxOutlined className="text-emerald-500" />}
        extra={<Button type="link" icon={<ArrowRightOutlined />} onClick={() => router.push('/tickets')}>View All</Button>}
      >
        {loading ? <Skeleton active /> : (
          <div className="divide-y divide-card-border">
            {data?.recentTickets?.map((t: any) => (
                <div 
                key={t.ticket_id} 
                className="flex items-center gap-4 py-4 hover:bg-app-bg/50 transition-colors cursor-pointer group px-2 rounded-xl"
                onClick={() => router.push(`/tickets/${t.ticket_id}`)}
              >
                <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center font-bold text-xs uppercase">
                  {t.requestor_name?.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <Text strong className="block text-sm truncate group-hover:text-blue-600 transition-colors text-text-primary">{t.ticket_subject}</Text>
                  <Text className="text-[11px] font-mono text-text-secondary">{t.ticket_number} • {t.requestor_name}</Text>
                </div>
                <div className="flex items-center gap-3">
                  <span 
                    className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                    style={{ backgroundColor: `${t.status_color}15`, color: t.status_color }}
                  >
                    {t.status_name}
                  </span>
                  <Text type="secondary" className="text-[11px] hidden sm:block">{t.created_at}</Text>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardWithTitle>
    </div>
  );
}

// ── Shared Card Wrapper ─────────────────────────────────────────────────────
function CardWithTitle({ title, subtitle, icon, extra, children }: any) {
  return (
    <div className="bg-card-bg rounded-3xl border border-card-border shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-app-bg flex items-center justify-center text-base">
            {icon}
          </div>
          <div>
            <Title level={5} style={{ margin: 0 }} className="text-text-primary text-sm font-bold uppercase tracking-widest leading-none">
              {title}
            </Title>
            {subtitle && <Text className="text-text-secondary text-[11px] mt-1 block">{subtitle}</Text>}
          </div>
        </div>
        {extra}
      </div>
      {children}
    </div>
  );
}
