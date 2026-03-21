"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PAGEURL from "@/src/constants/pageUrl";
import {
  authUserItems,
  guestUserItems,
  menuItems,
} from "@/src/constants/menuMb";
import TabsComponent from "@/src/components/common/tabs";
import UserIcons from "@/src/icons/userIcon";
import HamburgerMenu from "@/src/icons/hamburgerMenu";
import Image from "next/image";
import { useAuthSlice } from "@/src/stores/useAuth";

const HeaderMobile = () => {
  const router = useRouter();
  const [openMovieMenu, setOpenMovieMenu] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);
  const userAuthentication = useAuthSlice((state) => state.userAuthentication);
  const logout = useAuthSlice((state) => state.logout);
  const menuList = userAuthentication ? authUserItems : guestUserItems;
  const handleTabClick = (key: string) => {
    setActiveTab((prev) => (prev === key ? null : key));
  };

  const renderMenu = () => (
    <div>
      {menuItems.map((item) => {
        if (item.key === "movies") {
          return (
            <div key={item.key}>
              <button
                className={`tab-menu-item flex justify-between  ${
                  openMovieMenu ? "!text-orange-70 !bg-white-90" : ""
                }`}
                onClick={() => setOpenMovieMenu((prev) => !prev)}
              >
                {item.label}
              </button>

              {openMovieMenu && (
                <div className="ml-16 mt-2 flex items-start flex-col">
                  <button
                    className="bg-black-50 tracking-tight text-blue-50 uppercase font-saira font-bold px-0 py-[5px]"
                    onClick={() => {
                      router.push(PAGEURL.NOW_SHOWING_PAGE);
                      setActiveTab(null);
                    }}
                  >
                    phim đang chiếu
                  </button>

                  <button
                    className="bg-black-50 tracking-tight text-blue-50 uppercase font-saira font-bold px-0 py-[5px]"
                    onClick={() => {
                      router.push(PAGEURL.UP_COMING_PAGE);
                      setActiveTab(null);
                    }}
                  >
                    phim sắp chiếu
                  </button>
                </div>
              )}
            </div>
          );
        }

        return (
          <button
            key={item.key}
            className={`tab-menu-item ${activeMenuItem === item.key ? "active" : ""}`}
            onClick={() => {
              setActiveMenuItem(item.key);
            }}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );

  const renderUserMenu = () => (
    <div>
      {menuList.map((item) => (
        <button
          key={item.key}
          className={`tab-menu-item ${activeMenuItem === item.key ? "active" : ""}`}
          onClick={() => {
            setActiveMenuItem(item.key);
            setActiveTab(null);

            if (item.path) {
              router.push(item.path);
            }

            if ("action" in item && item.action === "logout") {
              logout();
              router.push(PAGEURL.HOME);
            }

            setActiveMenuItem(null);
          }}
        >
          {item.label}
        </button>
      ))}
    </div>
  );

  const tabItems = [
    {
      key: "menu",
      label: <HamburgerMenu />,
      children: renderMenu(),
    },
    {
      key: "user",
      label: <UserIcons />,
      children: renderUserMenu(),
    },
  ];

  return (
    <div className="bg-blue-100">
      <div className="px-[15px] pb-2">
        <Link href={PAGEURL.HOME}>
          <div className="flex justify-center py-[5px]">
            <Image
              src="/assets/images/logo_header.png"
              alt="Logo Metiz"
              width={70}
              height={77}
            />
          </div>
        </Link>

        <div className="grid justify-end leading-4">
          <p className="text-white-100 uppercase text-[10px] font-saira">
            hotline: 0123 456 789
          </p>
          <p className="text-white-100 uppercase text-[10px] font-saira">
            giờ mở cửa: 9:00 - 22:00
          </p>
        </div>
      </div>

      <div className="tabs-container">
        <TabsComponent
          items={tabItems}
          activeKey={activeTab}
          onTabClick={handleTabClick}
        />
      </div>
    </div>
  );
};

export default HeaderMobile;
