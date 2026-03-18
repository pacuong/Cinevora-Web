import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import Link from "next/link";

export interface LinkItem {
  key: string;
  text: string;
  href: string;
  isDisabled?: boolean;
  isDanger?: boolean;
  idExternal?: boolean;
}

export interface LinkItemProps {
  itemLink: LinkItem[];
  textLink: string;
  placement?: "bottomLeft" | "bottomRight" | "bottom";
  className?: string;
}

const DropdownComponent = ({
  itemLink,
  textLink,
  placement = "bottomLeft",
  className,
}: LinkItemProps) => {
  const items: MenuProps["items"] = itemLink.map((item) => ({
    key: item.key,
    label: (
      <Link
        href={item.href}
        {...(item.idExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {item.text}
      </Link>
    ),
    disabled: item.isDisabled,
    danger: item.isDanger,
  }));
  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown menu={{ items }} placement={placement}>
          <Button className={`dropdown-trigger ${className}`}>
            {textLink}
          </Button>
        </Dropdown>
      </Space>
    </Space>
  );
};

export default DropdownComponent;
