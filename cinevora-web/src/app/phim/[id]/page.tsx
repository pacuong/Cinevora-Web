import type { Metadata } from "next";
import DetailWrapper from "@/src/components/DetailWrapper";
import { getMovieById } from "@/src/services/movieService";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const toTitleCase = (str: string) =>
  str
    .toLowerCase()
    .replace(/\p{L}+/gu, (word: string) =>
      word.charAt(0).toUpperCase() + word.slice(1)
    );

export const generateMetadata = async (
  { params }: Props
): Promise<Metadata> => {
  const { id } = await params;
  const movie = await getMovieById(id);

  return {
    title: toTitleCase(movie?.title || "Chi tiết phim"),
    description: movie?.description || "Metiz Cinema website",
  };
};

const DetailPage = async () => {
  return <DetailWrapper />;
};

export default DetailPage;