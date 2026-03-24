import PAGEURL from "@/src/constants/pageUrl";

export const menuItems = [
  { key: "schedule", label: "lịch chiếu" },
  { key: "movies", label: "phim" },
  { key: "promo", label: "ưu đãi" },
  { key: "news", label: "tin tức phim" },
  { key: "member", label: "thành viên" },
];

export const guestUserItems = [
  { key: "login", label: "đăng nhập", path: PAGEURL.LOGIN },
  { key: "register", label: "đăng ký", path: PAGEURL.REGISTER },
];

export const authUserItems = [
  { key: "profile", label: "hồ sơ", path: PAGEURL.ACCOUNT_INFORMATION_PAGE },
  { key: "logout", label: "đăng xuất", action: "logout" },
];
