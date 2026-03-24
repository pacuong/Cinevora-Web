import { Metadata } from "next";
import NowShowingWrapper from "@/src/components/NowShowingWrapper";

export const metadata: Metadata = {
  title: "Phim Đang Chiếu",
  description: "Metiz Cinema website",
};

export default function NowShowingPage() {
  return <NowShowingWrapper />;
}