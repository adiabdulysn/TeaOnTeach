'use client';

import React from 'react';
import { ConfigProvider, theme, App } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';

// Standard Ant Design Primary Blue
const CORPORATE_BLUE = '#1677ff'; // standard ant blue

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // In a real implementation you would sync this with next-themes or local storage
  // For now we set a default light algorithm, but you can dynamically switch to theme.darkAlgorithm
  const isDarkMode = false; // We can integrate next-themes later if needed

  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
          token: {
            colorPrimary: CORPORATE_BLUE,
            colorInfo: CORPORATE_BLUE,
            borderRadius: 8,
            fontFamily: 'inherit',
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
            },
            Select: {
              controlHeight: 40,
              borderRadius: 8,
            },
            Table: {
              borderRadius: 12,
              headerBg: 'transparent',
              headerColor: '#64748b',
              headerFontWeight: 600,
              footerBg: 'transparent',
              cellPaddingInline: 16,
              cellPaddingBlock: 16, // slightly more padding for room
              borderColor: '#f1f5f9', // very subtle horizontal lines
              headerSortHoverBg: 'transparent',
              headerSortActiveBg: 'transparent',
            },
            Card: {
              borderRadiusLG: 16,
            }
          }
        }}
      >
        <App>
          {children}
        </App>
      </ConfigProvider>
    </AntdRegistry>
  );
}
