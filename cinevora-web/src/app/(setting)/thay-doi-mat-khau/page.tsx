import ChangePasswordWrapper from "@/src/components/ChangePasswordWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đổi mật khẩu | Cinevora",
  description:
    "Cập nhật mật khẩu tài khoản Cinevora để tăng cường bảo mật và bảo vệ thông tin cá nhân của bạn.",
};

const ChangePassword = () => <ChangePasswordWrapper />;
export default ChangePassword;
