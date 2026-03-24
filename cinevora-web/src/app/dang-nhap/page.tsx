import LoginWrapper from "@/src/components/LoginWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng nhập | Cinevora",
  description:
    "Đăng nhập Cinevora để đặt vé xem phim nhanh hơn, theo dõi lịch sử đặt vé và nhận nhiều ưu đãi độc quyền.",
};

const Login = () => <LoginWrapper />;
export default Login;
