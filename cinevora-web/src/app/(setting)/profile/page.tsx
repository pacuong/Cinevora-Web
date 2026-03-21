import ProfileWrapper from "@/src/components/ProfileWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thông tin tài khoản | Cinevora",
  description:
    "Quản lý thông tin cá nhân, lịch sử đặt vé và cập nhật tài khoản Cinevora của bạn một cách dễ dàng.",
};

const Profile = () => <ProfileWrapper />;
export default Profile;
