import React from 'react';
import * as AntIcons from '@ant-design/icons';

export const CATEGORY_ICONS = [
  { name: 'AppstoreOutlined', label: 'Application/System', icon: <AntIcons.AppstoreOutlined /> },
  { name: 'CodeOutlined', label: 'Software/Development', icon: <AntIcons.CodeOutlined /> },
  { name: 'BarChartOutlined', label: 'Reporting/Analytics', icon: <AntIcons.BarChartOutlined /> },
  { name: 'DesktopOutlined', label: 'Hardware/Desktop', icon: <AntIcons.DesktopOutlined /> },
  { name: 'LaptopOutlined', label: 'Hardware/Laptop', icon: <AntIcons.LaptopOutlined /> },
  { name: 'GlobalOutlined', label: 'Network/Internet', icon: <AntIcons.GlobalOutlined /> },
  { name: 'WifiOutlined', label: 'Network/Connectivity', icon: <AntIcons.WifiOutlined /> },
  { name: 'DatabaseOutlined', label: 'Database/Storage', icon: <AntIcons.DatabaseOutlined /> },
  { name: 'CloudOutlined', label: 'Cloud Services', icon: <AntIcons.CloudOutlined /> },
  { name: 'SafetyCertificateOutlined', label: 'Security/Compliance', icon: <AntIcons.SafetyCertificateOutlined /> },
  { name: 'ToolOutlined', label: 'Maintenance/Tools', icon: <AntIcons.ToolOutlined /> },
  { name: 'PrinterOutlined', label: 'Peripherals/Printer', icon: <AntIcons.PrinterOutlined /> },
  { name: 'BugOutlined', label: 'Bug/Error', icon: <AntIcons.BugOutlined /> },
  { name: 'ApiOutlined', label: 'API/Integration', icon: <AntIcons.ApiOutlined /> },
  { name: 'QuestionCircleOutlined', label: 'Others/General', icon: <AntIcons.QuestionCircleOutlined /> },
  { name: 'EllipsisOutlined', label: 'Others/Misc', icon: <AntIcons.EllipsisOutlined /> },
  { name: 'PhoneOutlined', label: 'Telephony', icon: <AntIcons.PhoneOutlined /> },
  { name: 'TeamOutlined', label: 'User Management', icon: <AntIcons.TeamOutlined /> },
  { name: 'FileProtectOutlined', label: 'Policy/Compliance', icon: <AntIcons.FileProtectOutlined /> },
  { name: 'RocketOutlined', label: 'Project/Launch', icon: <AntIcons.RocketOutlined /> },
];

export const PRIORITY_ICONS = [
  { name: 'DoubleRightOutlined', label: 'Critical/Urgent', icon: <AntIcons.DoubleRightOutlined className="rotate-[-90deg]" /> },
  { name: 'ArrowUpOutlined', label: 'High Priority', icon: <AntIcons.ArrowUpOutlined /> },
  { name: 'MinusOutlined', label: 'Normal/Medium', icon: <AntIcons.MinusOutlined /> },
  { name: 'ArrowDownOutlined', label: 'Low/Minor', icon: <AntIcons.ArrowDownOutlined /> },
  { name: 'InfoCircleOutlined', label: 'Informational', icon: <AntIcons.InfoCircleOutlined /> },
  { name: 'WarningOutlined', label: 'Warning/Alert', icon: <AntIcons.WarningOutlined /> },
];

export const getCategoryIcon = (name: string | null) => {
  if (!name) return <AntIcons.TagOutlined />;
  const iconObj = CATEGORY_ICONS.find(i => i.name === name);
  if (iconObj) return iconObj.icon;
  
  const IconComponent = (AntIcons as unknown as Record<string, React.ComponentType>)[name];
  return IconComponent ? <IconComponent /> : <AntIcons.TagOutlined />;
};

export const getPriorityIcon = (name: string | null) => {
  if (!name) return <AntIcons.ThunderboltOutlined />;
  const iconObj = PRIORITY_ICONS.find(i => i.name === name);
  if (iconObj) return iconObj.icon;
  
  const IconComponent = (AntIcons as unknown as Record<string, React.ComponentType>)[name];
  return IconComponent ? <IconComponent /> : <AntIcons.ThunderboltOutlined />;
};
