import HistoryIcon from "@/src/icons/historyIcon";
import IdCardIcon from "@/src/icons/idCard";
import LockIcon from "@/src/icons/lock";
import UserIcons from "@/src/icons/userIcon";
import { NavProps } from "@/src/interfaces/accountUser";

export const accountMenuItems: NavProps[] = [
  {
    icon: <UserIcons width={14} height={14} />,
    label: "Thông tin tài khoản",
    to: "/thong-tin-tai-khoan",
  },
  {
    icon: <LockIcon size={14} />,
    label: "Thay đổi mật khẩu",
    to: "/thay-doi-mat-khau",
  },
  {
    icon: <IdCardIcon size={14} />,
    label: "Thông tin thẻ thành viên",
    to: "/accounts",
  },
  {
    icon: <HistoryIcon size={14} />,
    label: "Lịch sử giao dich online",
    to: "/settings",
  },
];
