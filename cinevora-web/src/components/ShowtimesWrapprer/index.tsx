"use client";

import MovieShowtimeCard from "@/src/components/common/movieShowtimeCard";
import ScheduleDateSelector from "@/src/components/ScheduleDateSelector";
import { useMovieSchedules } from "@/src/hooks/Movies/useMovieSchedules";
import { generateShowDates } from "@/src/utils/generateShowDates";
import { useMemo, useState } from "react";

const ShowtimesWrapper = () => {
  const dates = useMemo(() => generateShowDates(7), []);
  const [selected, setSelected] = useState(dates[0].fullDate);

  const { scheduleMovie, isLoadingSchedule, isErrorSchedule } =
    useMovieSchedules();

  const moviesByDate = useMemo(
    () =>
      scheduleMovie.filter(
        (movie) => (movie.schedules[selected]?.length ?? 0) > 0,
      ),
    [scheduleMovie, selected],
  );

  return (
    <div className="lg:w-[1310px] mx-auto">
      <h2 className="text-2xl font-saira text-orange-100 p-10 font-medium">
        Lịch chiếu
      </h2>

      <ScheduleDateSelector
        dates={dates}
        selected={selected}
        onSelect={setSelected}
      />

      <h2 className="text-2xl font-saira text-black-100 font-medium px-10">
        Chọn lịch chiếu
      </h2>

      <div className="px-10 font-saira overflow-y-scroll h-[300px] md:overflow-y-hidden md:h-auto mb-17">
        {isLoadingSchedule && <p>Đang tải...</p>}

        {!isLoadingSchedule &&
          !isErrorSchedule &&
          moviesByDate.length === 0 && (
            <p className="font-saira text-center text-2xl text-blue-100 mt-10">
              Không có suất chiếu cho ngày này
            </p>
          )}

        {!isLoadingSchedule &&
          !isErrorSchedule &&
          moviesByDate.map((movie) => (
            <MovieShowtimeCard
              key={movie.id}
              className="md:!gap-0"
              title={movie.title}
              age={movie.age}
              posterUrl={movie.posterUrl}
              showtimes={movie.schedules[selected]}
            />
          ))}
      </div>
    </div>
  );
};

export default ShowtimesWrapper;
