import { Metadata } from "next";
import TransactionManagementWrapper from "@/src/components/TransactionManagementWrapper";

export const metadata: Metadata = {
  title: "Quản Lý Giao Dịch",
  description: "Metiz Cinema website",
};

const TransactionManagementPage = () => {
  return <TransactionManagementWrapper />;
};

export default TransactionManagementPage;