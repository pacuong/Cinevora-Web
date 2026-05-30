import { TransactionHistory } from "@/src/components/TransactionHistory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lịch sử giao dịch | Cinevora",
  description: "Xem lại lịch sử giao dịch của bạn trên Cinevora.",
};

const TransactionHistoryPage = () => <TransactionHistory />;
export default TransactionHistoryPage;
