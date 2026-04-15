'use client';

import React, { useEffect, useState } from 'react';
import { ConfigProvider, theme, App } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';

const CORPORATE_BLUE = '#1677ff';

function AntdThemeProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Set to true after first client-side mount to safely use client-only logic
  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR (server-side), we MUST use a consistent initial state.
  // We'll use the 'dark' algorithm if the document is actually dark via class (client-side only trick)
  // But wait! to avoid hydration error, if !mounted we use false, but suppressed by suppressHydrationWarning.
  const isDarkMode = mounted ? resolvedTheme === 'dark' : false;

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: CORPORATE_BLUE,
          colorInfo: CORPORATE_BLUE,
          borderRadius: 8,
          fontFamily: 'inherit',
          colorBgContainer: isDarkMode ? '#18181b' : '#ffffff',
          colorBgLayout: isDarkMode ? '#09090b' : '#f8fafc',
          colorBorderSecondary: isDarkMode ? '#27272a' : '#e2e8f0',
        },
        components: {
          Button: {
            controlHeight: 40,
            controlHeightLG: 48,
            borderRadius: 8,
            fontWeight: 600,
          },
          Input: {
            controlHeight: 40,
            controlHeightLG: 48,
            borderRadius: 8,
            colorBgContainer: isDarkMode ? '#18181b' : '#ffffff',
          },
          Select: {
            controlHeight: 40,
            borderRadius: 8,
            colorBgContainer: isDarkMode ? '#18181b' : '#ffffff',
          },
          DatePicker: {
            controlHeight: 40,
            borderRadius: 8,
            colorBgContainer: isDarkMode ? '#18181b' : '#ffffff',
          },
          Table: {
            borderRadius: 12,
            headerBg: 'transparent',
            headerColor: isDarkMode ? '#a1a1aa' : '#64748b',
            footerBg: 'transparent',
            cellPaddingInline: 16,
            cellPaddingBlock: 16,
            borderColor: isDarkMode ? '#27272a' : '#f1f5f9',
            headerSortHoverBg: 'transparent',
            headerSortActiveBg: 'transparent',
            rowHoverBg: isDarkMode ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.02)',
          },
          Card: {
            borderRadiusLG: 16,
            colorBgContainer: isDarkMode ? '#18181b' : '#ffffff',
            colorBorderSecondary: isDarkMode ? '#27272a' : '#f1f5f9',
          },
          Menu: {
            itemBg: 'transparent',
            itemColor: isDarkMode ? '#94a3b8' : '#64748b',
            itemSelectedColor: CORPORATE_BLUE,
            itemHoverColor: CORPORATE_BLUE,
            itemSelectedBg: isDarkMode ? 'rgba(22, 119, 255, 0.1)' : 'rgba(22, 119, 255, 0.05)',
          },
          Collapse: {
            headerBg: 'transparent',
            contentBg: 'transparent',
            borderRadiusLG: 16,
          },
          Tabs: {
            itemColor: isDarkMode ? '#94a3b8' : '#64748b',
            titleFontSize: 14,
          }
        }
      }}
    >
      <App>
        {children}
      </App>
    </ConfigProvider>
  );
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <AntdRegistry>
        <AntdThemeProvider>
          {children}
        </AntdThemeProvider>
      </AntdRegistry>
    </NextThemesProvider>
  );
}
