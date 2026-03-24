import type { ReactNode } from "react";
import Link from "next/link";
import DropdownComponent, {
  LinkItem,
} from "@/src/components/DropdownComponent";

export interface NavbarItemBase {
  content: ReactNode;
}

export interface NavbarLinkItem extends NavbarItemBase {
  type?: "link";
  href: string;
}

export interface NavbarDropdownItem extends NavbarItemBase {
  type: "dropdown";
  dropdownItems: LinkItem[];
  placement?: "bottomLeft" | "bottomRight" | "bottom";
}

export type NavbarItem = NavbarLinkItem | NavbarDropdownItem;

interface NavbarProps {
  navList: NavbarItem[];
}

const NavBarComponent = ({ navList }: NavbarProps) => {
  return (
    <nav className="bg-black-40 py-8 md:pt-[25px] md:pb-[22px] md:mr-6 lg:pb-11 lg:mr-auto lg:ml-[170px]">
      <ul className="flex gap-8">
        {navList.map((item, index) => (
          <li key={index}>
            {item.type === "dropdown" ? (
              <DropdownComponent
                className="lg:font-bold md:h-[28px] lg:h-12 lg:mx-9 md:font-normal md:text-base lg:text-l md:p-0"
                textLink={String(item.content)}
                itemLink={item.dropdownItems}
                placement={item.placement ?? "bottomLeft"}
              />
            ) : (
              <Link
                className="text-white-100 active:text-orange-90 lg:mx-9 lg:font-bold lg:hover:border-orange-90 hover:text-orange-90 font-saira md:text-base lg:text-[20px] lg:hover:border-b-2 lg:active:border-b-2 lg:active:pb-5 lg:hover:pb-5 uppercase"
                href={item.href}
              >
                {item.content}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBarComponent;
