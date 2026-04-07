import { Metadata } from "next";
import PaymentWrapper from "@/src/components/PaymentWrapper";

export const metadata: Metadata = {
  title: "Phương Thức Thanh Toán",
  description: "Metiz Cinema website",
};

const PaymentPage = () => {
  return <PaymentWrapper />;
};

export default PaymentPage;