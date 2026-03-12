import type { ReactNode } from 'react';

export interface NavProps {
  icon: ReactNode;
  label: string;
  to: string;
}
export interface AccountSidebarProps {
  accountMenuItems: NavProps[];
}