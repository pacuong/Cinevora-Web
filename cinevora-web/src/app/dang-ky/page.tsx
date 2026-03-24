import RegisterWrapper from "@/src/components/RegisterWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng ký tài khoản | Cinevora",
  description:
    "Tạo tài khoản Cinevora để đặt vé xem phim nhanh chóng, lưu thông tin và nhận nhiều ưu đãi hấp dẫn.",
};

const Register = () => <RegisterWrapper />;
export default Register;
