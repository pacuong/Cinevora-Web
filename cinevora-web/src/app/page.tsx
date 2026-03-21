import HomeWrapper from "@/src/components/HomeWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang chủ | Cinevora",
  description:
    "Đặt vé xem phim nhanh chóng tại Cinevora, cập nhật phim mới, lịch chiếu hôm nay và nhiều ưu đãi hấp dẫn.",
};

const Home = () => <HomeWrapper />;
export default Home;
