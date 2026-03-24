import { Metadata } from "next";
import NowShowingWrapper from "./NowShowingWrapper";

export const metadata: Metadata = {
  title: "Phim Đang Chiếu",
  description: "Metiz Cinema website",
};

export default function NowShowingPage() {
  return <NowShowingWrapper />;
}