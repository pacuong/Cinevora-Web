import { Metadata } from "next";
import UpComingWrapper from "@/src/components/UpComingWrapper";

export const metadata: Metadata = {
  title: "Phim Sắp Chiếu",
  description: "Metiz Cinema website",
};

const UpComingPage = () => {
  return <UpComingWrapper />;
}

export default UpComingPage;