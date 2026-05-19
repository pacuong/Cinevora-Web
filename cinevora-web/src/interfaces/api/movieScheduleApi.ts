export interface ShowtimeDto {
  id: number;
  movieId: number;
  roomId: number;
  roomName: string;
  startTime: string;
}

export interface MovieScheduleInfoDto {
  id: number;
  title: string;
  ageRating: string;
  posterUrl: string;
}
