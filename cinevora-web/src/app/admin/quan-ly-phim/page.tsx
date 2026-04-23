import MovieManagementWrapper from "@/src/components/MovieManagementWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quản Lý Phim",
  description: "Metiz Cinema website",
};

const MovieManagementPage = () => {
  return <MovieManagementWrapper />;
};

export default MovieManagementPage;