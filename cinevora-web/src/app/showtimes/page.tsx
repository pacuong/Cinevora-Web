import ShowtimesWrapper from "@/src/components/ShowtimesWrapprer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lịch chiếu phim | Cinevora",
  description:
    "Xem lịch chiếu phim mới nhất tại các rạp, chọn suất chiếu phù hợp và đặt vé online dễ dàng cùng Cinevora.",
};

const Showtimes = () => <ShowtimesWrapper />;
export default Showtimes;
