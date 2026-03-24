import { Metadata } from "next";
import DetailWrapper from "@/src/components/DetailWrapper";

export const metadata: Metadata = {
  //TODO: WRITE HOOK TO GET MOVIE TITLE
  title: "Phim Đang Chiếu",
  description: "Metiz Cinema website",
};

const DetailPage = () => {
  return <DetailWrapper />;
};

export default DetailPage;