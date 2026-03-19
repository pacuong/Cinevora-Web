import { FooterData } from "@/src/components/Footer";
import FacebookIcon from "@/src/icons/facebook";
import InstagramIcon from "@/src/icons/instagram";
import YoutubeIcon from "@/src/icons/youtube";

export const footerDataMock: FooterData = {
  socialLinks: [
    { icon: FacebookIcon, url: "https://facebook.com/yourpage" },
    { icon: InstagramIcon, url: "https://www.instagram.com/" },
    { icon: YoutubeIcon, url: "https://www.youtube.com/" },
  ],
  metiz: {
    imageMetiz: "/assets/images/logo_footer.png",
    addressMetiz: "Tầng 1 Helio Center, Đường 2/9, Hải Châu, Đà Nẵng",
  },
  map: {
    imageMap: "/assets/images/map.png",
    addressMap: "xem bản đồ",
  },
  navigation: [
    {
      title: "METIZ CINEMA",
      items: [
        { text: "giới thiệu", url: "/gioi-thieu" },
        { text: "tuyển dụng", url: "/tuyen-dung" },
        { text: "liên hệ", url: "/lien-he" },
      ],
    },
    {
      title: "thông tin chung",
      items: [
        { text: "điều khoản chung", url: "/dieu-khoan-chung" },
        { text: "câu hỏi thường gặp", url: "/cau-hoi-thuong-gap" },
        { text: "điều khiển giao dịch", url: "/dieu-khoan-giao-dich" },
      ],
    },
  ],
  brand: {
    logo: "/assets/images/logo_metiz.jpg",
    label: "Metiz Cinema",
  },
  companyInfo: [
    { text: "Tên Doanh Nghiệp: Công Ty TNHH KHỞI PHÁT." },
    {
      text: "Giấy CNĐKKD: 0400668112 - Ngày cấp: 05/11/2008. Đăng ký thay đổi lần thứ 11 ngày 21/12/2016",
    },
    {
      text: "Cơ quan cấp: Phòng Đăng ký kinh doanh - Sở kế hoạch và đầu tư Thành phố Đà Nẵng",
    },
    {
      text: "Địa chỉ đăng ký kinh doanh: 22 đường 2/9, Phường Bình Hiên, Q.Hải Châu, Tp.Đà Nẵng, Việt Nam.",
    },
    { text: "Điện thoại: 0236 3630 689" },
  ],

  notify: {
    image: "/assets/images/icon-notify.png",
  },
  bottomInfo: {
    productionNote: "một sản phẩm đến từ khởi phát, ltd.",
    brandLogoUrl: "/assets/images/logo_bottom.png",
    copyrightText: "bản quyền © 2017 metiz cinema",
  },
};
