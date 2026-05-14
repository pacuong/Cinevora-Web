import ShowtimeManagementWrapper from "@/src/components/ShowtimeManagementWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quản Lý Lịch Chiếu",
  description: "Metiz Cinema website",
};

const ShowtimeManagementPage = () => {
  return <ShowtimeManagementWrapper />;
};

export default ShowtimeManagementPage;