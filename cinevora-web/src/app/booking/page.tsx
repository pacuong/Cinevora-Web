import { Metadata } from "next";
import BookingWrapper from "@/src/components/BookingWrapper";

export const metadata: Metadata = {
  title: "Đặt vé",
  description: "Metiz Cinema website",
};

const BookingPage = () => {
  return <BookingWrapper />;
};

export default BookingPage;