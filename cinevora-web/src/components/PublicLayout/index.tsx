"use client";

import ReactQueryProvider from "@/src/providers/ReactQueryProvider";
import Header from "../Header";
import Footer from "../Footer";
import { footerDataMock } from "@/src/mocks/footerDataMock";
import { useCustomDevice } from "@/src/hooks/deviceDetect";
import HeaderMobile from "@/src/components/HeaderMobile";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const { isMobile } = useCustomDevice();
  return (
    <ReactQueryProvider>
      <div>
        <div className="md:pb-[18px] bg-blue-100">
          {isMobile ? <HeaderMobile /> : <Header />}
        </div>
        <div>{children}</div>
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
      </div>
    </ReactQueryProvider>
  );
};

export default PublicLayout;
