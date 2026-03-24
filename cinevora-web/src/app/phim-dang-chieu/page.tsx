import { Metadata } from "next";
import NowShowingClient from "./NowShowingClient";

export const metadata: Metadata = {
  title: "Phim Đang Chiếu",
  description: "Metiz Cinema website",
};

export default function NowShowingPage() {
  return <NowShowingClient />;
}