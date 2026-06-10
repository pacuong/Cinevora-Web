import { Metadata } from "next";
import BookingWrapper from "@/src/components/BookingWrapper";

export const metadata: Metadata = {
  title: "Đặt vé",
  description: "Cinevora website",
};

const BookingPage = () => {
  return <BookingWrapper />;
};

export default BookingPage;