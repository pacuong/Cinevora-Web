import Link from "next/link";
import { useAuthSlice } from "@/src/stores/useAuth";
import PAGEURL from "@/src/constants/pageUrl";
import { navItems } from "@/src/constants/header";
import NavBarComponent from "@/src/components/Navbar";
import Image from "next/image";

interface HeaderProps {
  onLogin?: () => void;
  onRegister?: () => void;
}
const Header = ({ onLogin, onRegister }: HeaderProps) => {
  const userAuthentication = useAuthSlice((state) => state.userAuthentication);
  const logout = useAuthSlice((state) => state.logout);
  return (
    <div className="pt-16 lg:pt-[28px] lg:pb-8 bg-blue-100">
      <div className="flex justify-end py-[3px] pr-[15px] lg:mx-27">
        <p className="text-white-100 uppercase text-sm lg:text-md font-saira mr-[15px]">
          hotline: 0123 456 789
        </p>
        <p className="text-white-100 uppercase text-sm lg:text-md font-saira">
          giờ mở cửa: 9:00 - 22:00
        </p>
      </div>

      <div className="bg-black-40">
        <div className="flex items-center md:justify-end lg:mx-27 px-[15px]">
          <NavBarComponent navList={navItems} />

          <div className="flex items-center ml-2 lg:p-0">
            {!userAuthentication ? (
              <>
                <button
                  onClick={onLogin}
                  className="header-btn uppercase font-saira text-blue-50 p-0 bg-black-40 md:text-sm lg:text-md hover:text-orange-90 active:text-orange-90"
                >
                  đăng nhập
                </button>
                <span className="text-blue-50 mr-1">/</span>
                <button
                  onClick={onRegister}
                  className="header-btn uppercase font-saira text-blue-50 p-0 bg-black-40 md:text-sm lg:text-md hover:text-orange-90 active:text-orange-90"
                >
                  đăng ký
                </button>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/thong-tin-tai-khoan"
                  className="text-blue-50 font-saira text-sm uppercase hover:text-orange-90"
                >
                  {userAuthentication?.user.fullName}
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

        <Link href={PAGEURL.HOME}>
          <div className="bg-black-40 w-[100px] h-23 lg:w-[133px] lg:h-[155px] absolute top-17 lg:top-0 left-10 lg:left-[150px]">
            <Image fill src="/assets/images/logo_header.png" alt="logo-metiz" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
