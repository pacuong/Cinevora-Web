import GuideWrapper from "@/src/components/GuideWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hướng dẫn | Cinevora",
  description:
    "Bạn cần đăng nhập để sử dụng các chức năng như đặt vé, hồ sơ cá nhân và đổi mật khẩu.",
};

const GuidePage = () => <GuideWrapper />;
export default GuidePage;
