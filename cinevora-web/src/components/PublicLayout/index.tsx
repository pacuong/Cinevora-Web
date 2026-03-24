import ReactQueryProvider from "@/src/providers/ReactQueryProvider"
import HeaderMobile from '@/src/components/HeaderMobile'
import Header from "../Header"
import Footer from "../Footer"
import { footerDataMock } from "@/src/mocks/footerDataMock"

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <div className="flex min-h-screen flex-col">
        <div className="md:hidden lg:hidden">
          <HeaderMobile />
        </div>

        <div className="hidden md:block">
          <Header />
        </div>
        <div className="flex-1 mx-auto">{children}</div>
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
