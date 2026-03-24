import { Tabs } from "antd";
import type { ReactNode } from "react";

export interface TabsItems {
  key: string;
  label: ReactNode;
}

interface TabsProps {
  items: TabsItems[];
  activeKey?: string | null;
  onTabClick?: (key: string) => void;
  className?: string;
}

const TabsComponent = ({
  items,
  activeKey,
  onTabClick,
  className,
}: TabsProps) => {
  const handleClick = (key: string) => {
    onTabClick?.(key);
  };

  return (
    <Tabs
      activeKey={activeKey ?? undefined}
      items={items.map((item) => ({
        ...item,
        label: (
          <button
            className={`tab-click-area ${className} ${activeKey === item.key ? "active" : ""}`}
            onClick={() => handleClick(item.key)}
          >
            {item.label}
          </button>
        ),
        children: null,
      }))}
    />
  );
};

export default TabsComponent;
