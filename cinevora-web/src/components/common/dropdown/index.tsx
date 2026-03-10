import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";

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
  isPlacement?: "bottomLeft";
}

const DropdownComponent = ({
  itemLink,
  textLink,
  isPlacement = "bottomLeft",
}: LinkItemProps) => {
  const items: MenuProps["items"] = itemLink.map((item) => ({
    key: item.key,
    label: (
      <a
        href={item.href}
        {...(item.idExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {item.text}
      </a>
    ),
    disabled: item.isDisabled,
    danger: item.isDanger,
  }));
  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown menu={{ items }} placement={isPlacement}>
          <Button className="dropdown-trigger">{textLink}</Button>
        </Dropdown>
      </Space>
    </Space>
  );
};

export default DropdownComponent;
