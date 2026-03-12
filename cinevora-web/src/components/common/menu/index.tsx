import ButtonComponent from "@/src/components/common/button";
import { Menu, type MenuProps } from "antd";
import { useState, type ReactNode } from "react";
import Link from "next/link";

interface MenuLink {
  key: string | number;
  value: {
    label: string;
    link: string;
  };
}

interface MenuComponentProps {
  itemsData: MenuLink[];
  title: string | ReactNode;
  variant?: "link" | "default" | "outline" | "badge" | "circle";
}

type MenuItem = Required<MenuProps>["items"][number];

const MenuComponent = ({ itemsData, title, variant }: MenuComponentProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const menuItems: MenuItem[] = itemsData.map((item) => ({
    key: item.key,
    label: (
      <Link href={item.value.link} target="_blank" rel="noopener noreferrer">
        {item.value.label}
      </Link>
    ),
  }));

  const handleToggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full border border-y-blue-50">
      <ButtonComponent
        variant={variant}
        name={title}
        onClick={handleToggleOpen}
      />
      {!isOpen && (
        <div>
          <Menu
            mode="inline"
            className="dropdown-menu"
            items={menuItems}
          />{" "}
        </div>
      )}
    </div>
  );
};

export default MenuComponent;
