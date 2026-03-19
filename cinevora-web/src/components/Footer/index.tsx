import Link from "next/link";
import Image from "next/image";

interface SocialLink {
  icon: React.ComponentType<{ size: number; className?: string }>;
  url: string;
}

interface MetizInfo {
  imageMetiz: string;
  addressMetiz: string;
}

interface MetizMap {
  imageMap: string;
  addressMap: string;
}

interface FooterNavItem {
  text: string;
  url: string;
}

interface FooterNavSection {
  title: string;
  items: FooterNavItem[];
}

interface FooterBrand {
  logo: string;
  label: string;
}

interface CompanyInfoItem {
  text: string;
}

interface NotifyInfo {
  image: string;
}

interface FooterCopyright {
  productionNote: string;
  brandLogoUrl: string;
  copyrightText: string;
}

export interface FooterData {
  socialLinks: SocialLink[];
  metiz: MetizInfo;
  map: MetizMap;
  navigation: FooterNavSection[];
  brand: FooterBrand;
  companyInfo: CompanyInfoItem[];
  notify: NotifyInfo;
  bottomInfo: FooterCopyright;
}

const Footer = ({
  socialLinks,
  metiz,
  map,
  navigation,
  brand,
  companyInfo,
  notify,
  bottomInfo,
}: FooterData) => {
  return (
    <div className="w-full bg-black-40">
      <div className="bg-blue-100 flex justify-center gap-5 py-10">
        {socialLinks.map(({ icon: Icon, url }, i) => (
          <Link
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Icon
              size={60}
              className="p-5 text-white-100 hover:text-orange-90 border border-white-100 rounded-full hover:border-orange-90 cursor-pointer"
            />
          </Link>
        ))}
      </div>
      <div className="bg-blue-80 px-12 md:px-10 py-16 lg:w-[1140px] lg:px-0 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          <div className="flex flex-col items-start md:w-[25%]">
            <div className="w-[150px] m-auto md:m-0">
              <img src={metiz.imageMetiz} alt="metiz logo" />
            </div>
            <h3 className="text-white-100 w-full text-l font-saira uppercase my-9 text-center md:text-left md:text-s lg:text-l">
              {metiz.addressMetiz}
            </h3>
            <div className="flex items-center gap-5">
              <img src={map.imageMap} alt="map icon" />
              <p className="text-blue-50 text-l md:text-base font-bold font-saira uppercase hover:text-orange-90">
                {map.addressMap}
              </p>
            </div>
          </div>
          <div className="flex justify-between my-5 md:my-0 md:w-[50%]">
            {navigation.map((section, index) => (
              <div
                key={index}
                className="uppercase w-[50%] flex flex-col md:gap-10"
              >
                <h2 className="text-white-100 text-md font-bold font-saira uppercase lg:text-2xl">
                  {section.title}
                </h2>
                <ul className="flex flex-col gap-5 pt-10 md:pt-0">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.url}
                        className="text-blue-50 text-s font-bold font-saira uppercase hover:text-orange-90 lg:text-l"
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="w-[80%] md:w-[25%] md:pl-10">
            <div className="w-full bg-white-100 p-4">
              <div className="border border-gray-10">
                <img
                  src={brand.logo}
                  alt={brand.label}
                  className="border-2 border-blue-65 rounded-full"
                />
              </div>
              <p className="text-[#365899] text-l md:text-sm font-saira uppercase font-medium">
                {brand.label}
              </p>
            </div>
          </div>
        </div>
        <div className="md:mt-7 md:flex md:justify-between">
          <div className="mt-10 mb-5 flex flex-col gap-4 md:w-[70%]">
            {companyInfo.map((item, idx) => (
              <p
                key={idx}
                className="text-white-100 text-sm font-bold font-saira"
              >
                {item.text}
              </p>
            ))}
          </div>
          <div className="w-[150px] lg:w-[185px]">
            <Image
              width={185}
              height={185}
              className="w-[150px] lg:w-[185px] h-auto"
              src={notify.image}
              alt="notify"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between bg-blue-80 lg:px-27 py-16 md:px-14 lg:w-[1170px] mx-auto">
        <p className="text-blue-50 text-sm font-bold font-saira uppercase">
          {bottomInfo.productionNote}
        </p>
        <Image
          width={30}
          height={30}
          src={bottomInfo.brandLogoUrl}
          alt="brand logo"
        />
        <p className="text-blue-50 text-sm font-bold font-saira uppercase">
          {bottomInfo.copyrightText}
        </p>
      </div>
    </div>
  );
};

export default Footer;
