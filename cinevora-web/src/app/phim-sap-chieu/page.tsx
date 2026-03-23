import { Metadata } from "next";
import UpComingClient from "./UpComingClient";

export const metadata: Metadata = {
  title: "Phim Sắp Chiếu",
  description: "Metiz Cinema website",
};

export default function UpComingPage() {
  return <UpComingClient />;
}