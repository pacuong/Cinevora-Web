import { MovieCardProps } from "@/src/components/common/movieCard";

export const MOCK_MOVIES: MovieCardProps[] = [
  {
    title: "Deadpool & Wolverine",
    rating: 1,
    ageRating: "C18",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    duration: 127,
    releaseDate: "26/07/2024",
    genre: "Hành động · Hài",
    onTrailer: () => {
      console.log("Trailer Deadpool & Wolverine");
    },
    onBooking: () => {
      console.log("Booking Deadpool & Wolverine");
    },
  },
  {
    title: "Inside Out 2",
    rating: 2,
    ageRating: "P",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/oxxqiyWrnM0XPnBtVe9TgYWnPxT.jpg",
    duration: 96,
    releaseDate: "14/06/2024",
    genre: "Hoạt hình · Gia đình",
    onTrailer: () => {
      console.log("Trailer Inside Out 2");
    },
    onBooking: () => {
      console.log("Booking Inside Out 2");
    },
  },
  {
    title: "Dune: Part Two",
    rating: 3,
    ageRating: "C16",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
    duration: 166,
    releaseDate: "01/03/2024",
    genre: "Khoa học viễn tưởng",
    onTrailer: () => {
      console.log("Trailer Dune 2");
    },
    onBooking: () => {
      console.log("Booking Dune 2");
    },
  },
  {
    title: "Kung Fu Panda 4",
    ageRating: "P",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
    duration: 94,
    releaseDate: "08/03/2024",
    genre: "Hoạt hình · Phiêu lưu",
    onTrailer: () => {
      console.log("Trailer Kung Fu Panda 4");
    },
    onBooking: () => {
      console.log("Booking Kung Fu Panda 4");
    },
  },
  {
    title: "Godzilla x Kong: The New Empire",
    ageRating: "C13",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
    duration: 115,
    releaseDate: "29/03/2024",
    genre: "Hành động · Viễn tưởng",
    onTrailer: () => {
      console.log("Trailer Godzilla x Kong");
    },
    onBooking: () => {
      console.log("Booking Godzilla x Kong");
    },
  },
];
