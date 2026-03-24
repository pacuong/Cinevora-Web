"use client";

import Link from "next/link";
import { useAuthSlice } from "@/src/stores/useAuth";
import PAGEURL from "@/src/constants/pageUrl";
import { navItems } from "@/src/constants/header";
import NavBarComponent from "@/src/components/Navbar";
import Image from "next/image";

const Header = () => {
  const userAuthentication = useAuthSlice((state) => state.userAuthentication);
  const logout = useAuthSlice((state) => state.logout);

  return (
    <div className="py-16 lg:pt-[28px] lg:pb-8 bg-blue-100">
      <div className="flex justify-center">
        <div className="flex justify-end py-[3px] md:w-[720] lg:w-[1140px]">
          <p className="text-white-100 uppercase text-sm lg:text-md font-saira mr-[15px]">
            hotline: 0123 456 789
          </p>
          <p className="text-white-100 uppercase text-sm lg:text-md font-saira">
            giờ mở cửa: 9:00 - 22:00
          </p>
        </div>
      </div>

      <div className="bg-black-40 flex justify-center">
        <div className="md:w-[720px] lg:w-[1440px] relative">
          <div className="flex items-center md:justify-end lg:mx-[145px]">
            <NavBarComponent navList={navItems} />

            <div className="flex items-center ml-2 lg:p-0">
              {!userAuthentication ? (
                <>
                  <Link
                    href={"/dang-nhap"}
                    className="header-btn uppercase font-saira text-blue-50 p-0 bg-black-40 md:text-sm lg:text-md hover:text-orange-90 active:text-orange-90"
                  >
                    đăng nhập
                  </Link>
                  <span className="text-blue-50 mr-1">/</span>
                  <Link
                    href={"/dang-ky"}
                    className="header-btn uppercase font-saira text-blue-50 p-0 bg-black-40 md:text-sm lg:text-md hover:text-orange-90 active:text-orange-90"
                  >
                    đăng ký
                  </Link>
                </>
              ) : (
                <div className="flex items-center gap-3">
                  <Link
                    href={PAGEURL.ACCOUNT_INFORMATION_PAGE}
                    className="text-blue-50 md:max-w-[50px] lg:max-w-[100px] truncate font-saira text-sm uppercase hover:text-orange-90"
                  >
                    {userAuthentication?.user?.fullName && (
                      <span>{userAuthentication.user.fullName}</span>
                    )}
                  </Link>
                  <span className="text-blue-50">/</span>
                  <Link
                    href="/"
                    onClick={logout}
                    className="header-btn uppercase font-saira text-blue-50 p-0 bg-black-40 md:text-sm lg:text-md hover:text-orange-90 active:text-orange-90"
                  >
                    đăng xuất
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="bg-black-40 w-[100px] h-23 lg:w-[133px] lg:h-[146px] absolute top-[-20px] lg:top-[-49px] lg:left-[150px]">
            <Link href={PAGEURL.HOME} >
              <Image
                fill
                src="/assets/images/logo_header.png"
                alt="logo-metiz"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
