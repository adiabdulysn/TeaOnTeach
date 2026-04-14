'use client';

import React, { useState } from 'react';
import { Layout, Menu, Avatar, Dropdown, Button, theme, Breadcrumb, ConfigProvider } from 'antd';
import { 
  DashboardOutlined, 
  ContainerOutlined, 
  SettingOutlined, 
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CoffeeOutlined,
  DatabaseOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { useRouter, usePathname } from 'next/navigation';
import { logout, getCurrentUser } from '../actions/auth';
import { useEffect } from 'react';

const { Header, Sider, Content } = Layout;

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getCurrentUser();
      if (userData) setUser(userData);
    };
    fetchUser();
  }, []);
  const pathname = usePathname();
  const { token } = theme.useToken();

  const handleMenuClick = async ({ key }: { key: string }) => {
    if (key === 'logout') {
      await logout();
      return;
    }
    router.push(key);
  };

  const currentPathKey = pathname === '/dashboard' ? '/dashboard' : pathname;

  const pathLabels: Record<string, string> = {
    'referential': 'Referential',
    'permissions': 'Permissions',
    'tickets': 'Tickets',
    'dashboard': 'Dashboard',
    'categories': 'Categories',
    'divisions': 'Divisions',
    'priorities': 'Priorities',
    'statuses': 'Statuses',
    'types': 'Ticket Types',
    'users': 'Users',
    'roles': 'Roles & Permissions',
    'create': 'Create',
    'edit': 'Edit',
    'profile': 'My Profile'
  };

  const menuItems = [
    {
      key: '/dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
    },
    {
      key: 'ticketsGroup',
      icon: <ContainerOutlined />,
      label: 'Tickets',
      children: [
        { key: '/tickets', label: 'All Tickets' },
        { key: '/tickets/create', label: 'Create Ticket' },
      ],
    },
    {
      key: 'masterGroup',
      icon: <DatabaseOutlined />,
      label: 'Referential',
      children: [
        { key: '/referential/categories', label: 'Categories' },
        { key: '/referential/divisions', label: 'Divisions' },
        { key: '/referential/priorities', label: 'Priorities' },
        { key: '/referential/statuses', label: 'Statuses' },
        { key: '/referential/types', label: 'Ticket Types' },
      ],
    },
    {
      key: 'settingsGroup',
      icon: <SettingOutlined />,
      label: 'Permissions',
      children: [
        { key: '/permissions/users', label: 'Users' },
        { key: '/permissions/roles', label: 'Roles & Permissions' },
      ],
    },
  ];

  return (
    <Layout className="min-h-screen bg-slate-50">
      <Sider 
        trigger={null} 
        collapsible 
        collapsed={collapsed}
        theme="light"
        width={260}
        className="border-r border-slate-200 shadow-sm z-20"
        style={{ overflow: 'auto', height: '100vh', position: 'sticky', top: 0, left: 0 }}
      >
        <div className="flex h-[72px] items-center px-6 border-b border-transparent transition-all mt-2">
          {!collapsed && (
            <span className="font-black text-[20px] tracking-tighter whitespace-nowrap">
              {process.env.NEXT_PUBLIC_APP_NAME || 'Tea on Tech'}
            </span>
          )}
        </div>
        
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                itemBorderRadius: 8,
                itemMarginInline: 16,
                itemHeight: 44,
                darkItemBg: 'transparent',
              },
            },
          }}
        >
          <Menu
            mode="inline"
            selectedKeys={[currentPathKey]}
            defaultOpenKeys={['ticketsGroup', 'masterGroup']}
            items={menuItems}
            onClick={handleMenuClick}
            className="border-none mt-6 font-medium text-slate-600"
          />
        </ConfigProvider>
      </Sider>
      
      <Layout>
        <Header 
          className="flex items-center justify-between px-6 shadow-sm z-10 sticky top-0 border-b border-slate-200/60 transition-all"
          style={{ background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)', height: '72px', lineHeight: '72px' }}
        >
          <div className="flex items-center gap-6">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />
          </div>

          <div className="flex items-center gap-4">
            <Dropdown
              menu={{
                items: [
                  { key: '/profile', icon: <UserOutlined />, label: 'Profile' },
                  { type: 'divider' },
                  { key: 'logout', label: 'Logout', danger: true },
                ],
                onClick: handleMenuClick
              }}
              placement="bottomRight"
              trigger={['click']}
            >
              <div className="flex items-center gap-3 cursor-pointer hover:bg-slate-100 py-1.5 px-3 rounded-full transition-all border border-transparent hover:border-slate-200">
                <Avatar 
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(user?.full_name || 'User')}&radius=50&backgroundColor=1677ff`}
                  className="shadow-sm" 
                />
                <div className="hidden sm:flex flex-col leading-tight mr-1">
                   <span className="text-[13px] font-semibold text-slate-700">{user?.full_name || 'Administrator'}</span>
                   <span className="text-[11px] text-slate-500 font-medium">{user?.role_name || 'User'}</span>
                </div>
              </div>
            </Dropdown>
          </div>
        </Header>
        
        <Content className="m-6 sm:m-8">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
