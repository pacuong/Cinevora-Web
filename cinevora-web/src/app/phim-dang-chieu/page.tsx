import { Metadata } from "next";
import NowShowingWrapper from "@/src/components/NowShowingWrapper";

export const metadata: Metadata = {
  title: "Phim Đang Chiếu",
  description: "Metiz Cinema website",
};

const NowShowingPage = () => {
  return <NowShowingWrapper />;
};

export default NowShowingPage;