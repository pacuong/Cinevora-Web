'use client'

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HamburgerMenu from "@/src/icons/hamburgerMenu";
import ButtonComponent from "@/src/components/common/button";
import { AccountSidebarProps } from "@/src/interfaces/accountUser";

const AccountSidebar = ({ accountMenuItems }: AccountSidebarProps) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className=" border bg-sand-80 lg:bg-white-100 border-red-80 md:flex lg:self-start">
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        <h2 className=" font-saira uppercase text-red-70 text-l">Tài khoản</h2>
        <ButtonComponent
          onClick={() => setOpen(!open)}
          className="text-2xl text-blue-100 md:hidden !border !rounded-sm"
          name={<HamburgerMenu />}
        />
      </div>
      <nav
        className={`
          ${open ? "block" : "hidden"}
          md:block
        `}
      >
        <ul className="md:flex md:flex-wrap md:items-center md:gap-10 lg:block">
          <h2
            className="hidden md:flex
  items-center justify-center
  p-4 text-red-70 lg:text-blue-100 font-saira
  text-l uppercase
  lg:py-10"
          >
            Tài khoản
          </h2>
          {accountMenuItems.map((item, index) => {
            const isActive = pathname === item.to;
            return (
              <li key={index}>
                <Link
                  href={item.to}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between p-4 text-sm
                  !text-blue-100 md:gap-2 lg:border-t lg:border-t-red-100 hover:!text-white-100
                  ${isActive ? "font-bold bg-orange-100 !text-white-100" : "hover:bg-orange-100"}`}
                >
                  <span className="uppercase">{item.label}</span>
                  <span className="text-xl hidden md:flex">{item.icon}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default AccountSidebar;
