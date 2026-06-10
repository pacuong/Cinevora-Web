"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuthSlice } from "@/src/stores/useAuth";
import { useAdminAuthSlice } from "@/src/stores/useAdminAuth";
import PAGEURL from "@/src/constants/pageUrl";
import { userNavItems, adminNavItems } from "@/src/constants/header";
import NavBarComponent from "@/src/components/Navbar";

const Header = () => {
  const userAuthentication = useAuthSlice((state) => state.userAuthentication);
  const logoutUser = useAuthSlice((state) => state.logout);
  const isInitialized = useAuthSlice((s) => s.isInitialized);

  const adminAuthentication = useAdminAuthSlice(
    (state) => state.adminAuthentication,
  );
  const logoutAdmin = useAdminAuthSlice((state) => state.logoutAdmin);

  const isAdminLoggedIn = adminAuthentication?.user?.role === "admin";

  const navList = isAdminLoggedIn ? adminNavItems : userNavItems;

  const displayName = isAdminLoggedIn
    ? adminAuthentication?.user?.fullName
    : userAuthentication?.user?.fullName;

  const handleLogout = () => {
    if (isAdminLoggedIn) {
      logoutAdmin();
      return;
    }

    logoutUser();
  };

  return (
    <div className='py-16 lg:pt-[28px] lg:pb-8 bg-blue-100'>
      <div className='flex justify-center'>
        <div className='flex justify-end py-[3px] md:w-[720] lg:w-[1140px]'>
          <p className='text-white-100 uppercase text-sm lg:text-md font-saira mr-[15px]'>
            hotline: 123 123 123
          </p>
          <p className='text-white-100 uppercase text-sm lg:text-md font-saira'>
            giờ mở cửa: 9:00 - 22:00
          </p>
        </div>
      </div>

      <div className='bg-black-40 flex justify-center'>
        <div className='md:w-[720px] lg:w-[1440px] relative'>
          <div className='flex items-center md:justify-end lg:mx-[145px]'>
            <NavBarComponent navList={navList} />

            <div className='flex items-center ml-2 lg:p-0'>
              {!isInitialized ? (
                <div className='w-[120px] h-[24px]' />
              ) : !userAuthentication && !adminAuthentication ? (
                <>
                  <Link
                    href={"/dang-nhap"}
                    className='header-btn uppercase font-saira text-blue-50 p-0 bg-black-40 md:text-sm lg:text-md hover:text-orange-90 active:text-orange-90'
                  >
                    đăng nhập
                  </Link>
                  <span className='text-blue-50 mr-1'>/</span>
                  <Link
                    href={"/dang-ky"}
                    className='header-btn uppercase font-saira text-blue-50 p-0 bg-black-40 md:text-sm lg:text-md hover:text-orange-90 active:text-orange-90'
                  >
                    đăng ký
                  </Link>
                </>
              ) : (
                <div className='flex items-center gap-3'>
                  <Link
                    href={
                      isAdminLoggedIn
                        ? "/admin"
                        : PAGEURL.ACCOUNT_INFORMATION_PAGE
                    }
                    className='text-blue-50 md:max-w-[50px] lg:max-w-[100px] truncate font-saira text-sm uppercase hover:text-orange-90'
                  >
                    {displayName && <span>{displayName}</span>}
                  </Link>

                  <span className='text-blue-50'>/</span>

                  <Link
                    href={isAdminLoggedIn ? "/admin/login" : "/"}
                    onClick={handleLogout}
                    className='header-btn uppercase font-saira text-blue-50 p-0 bg-black-40 md:text-sm lg:text-md hover:text-orange-90 active:text-orange-90'
                  >
                    đăng xuất
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className='bg-black-40 w-[100px] h-23 lg:w-[133px] lg:h-[146px] absolute top-[-20px] lg:top-[-49px] lg:left-[150px]'>
            <Link href={isAdminLoggedIn ? "/admin" : PAGEURL.HOME}>
              <Image
                fill
                src='/assets/images/logo_header.png'
                alt='logo-cinevora'
                className='object-contain'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
