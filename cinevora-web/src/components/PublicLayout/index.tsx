'use client'

import ReactQueryProvider from "@/src/providers/ReactQueryProvider"
import Header from "../Header"
import Footer from "../Footer"
import { footerDataMock } from "@/src/mocks/footerDataMock"

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <div >
        <Header />
        <div className="">{children}</div>
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
  )
}

export default PublicLayout;