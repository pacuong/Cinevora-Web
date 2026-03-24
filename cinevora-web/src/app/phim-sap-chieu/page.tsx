import { Metadata } from "next";
import UpComingWrapper from "@/src/components/UpComingWrapper";

export const metadata: Metadata = {
  title: "Phim Sắp Chiếu",
  description: "Metiz Cinema website",
};

export default function UpComingPage() {
  return <UpComingWrapper />;
}