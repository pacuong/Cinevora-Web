import { NavbarItem } from "@/src/components/Navbar";
import pageUrl from "@/src/constants/pageUrl";

export const userNavItems: NavbarItem[] = [
  { href: `${pageUrl.MOVIE_SHOWTIME_PAGE}`, content: "lịch chiếu" },

  {
    type: "dropdown",
    content: "phim",
    dropdownItems: [
      {
        key: "now",
        text: "phim đang chiếu",
        href: `${pageUrl.NOW_SHOWING_PAGE}`,
      },
      {
        key: "soon",
        text: "phim sắp chiếu",
        href: `${pageUrl.UP_COMING_PAGE}`,
      },
    ],
    placement: "bottomLeft",
  },

  { href: "#uu-dai", content: "ưu đãi" },
  { href: "#tin-tuc-phim", content: "tin tức phim" },
  { href: "#thanh-vien", content: "thành viên" },
];

export const adminNavItems: NavbarItem[] = [
  { href: "/admin/quan-ly-phim", content: "quản lý phim" },
  { href: "/admin/quan-ly-lich-chieu", content: "quản lý lịch chiếu" },
  { href: "/admin/UserManagement", content: "quản lý người dùng" },
];
