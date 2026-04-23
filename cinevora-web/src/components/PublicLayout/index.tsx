"use client";

import ReactQueryProvider from "@/src/providers/ReactQueryProvider";
import HeaderMobile from "@/src/components/HeaderMobile";
import Header from "../Header";
import Footer from "../Footer";
import { footerDataMock } from "@/src/mocks/footerDataMock";
import AuthSessionBridge from "@/src/components/AuthSessionBridge";
import { usePathname } from "next/navigation";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isAdminLogin = pathname === "/admin/login";

  return (
    <ReactQueryProvider>
      <AuthSessionBridge />

      <div className="flex min-h-screen flex-col">
        {!isAdminLogin && (
          <>
            <div className="md:hidden lg:hidden">
              <HeaderMobile />
            </div>

            <div className="hidden md:block">
              <Header />
            </div>
          </>
        )}

        <div>{children}</div>

        {!isAdminLogin && (
          <Footer
            socialLinks={footerDataMock.socialLinks}
            brand={footerDataMock.brand}
            map={footerDataMock.map}
            metiz={footerDataMock.metiz}
            navigation={footerDataMock.navigation}
            bottomInfo={footerDataMock.bottomInfo}
            companyInfo={footerDataMock.companyInfo}
            notify={footerDataMock.notify}
          />
        )}
      </div>
    </ReactQueryProvider>
  );
};

export default PublicLayout;