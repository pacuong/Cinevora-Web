'use client'

import ModalComponent from "@/src/components/common/modal";
import MovieShowtimeCard from "@/src/components/common/movieShowtimeCard";
import ScheduleDateSelector from "@/src/components/ScheduleDateSelector";
import { useMovieSchedule } from "@/src/hooks/Movies/useMovieSchedules";
import { useBookingStore } from "@/src/stores/bookingStore";
import { generateShowDates } from "@/src/utils/generateShowDates";
import { useEffect, useMemo } from "react";

interface ShowtimeScheduleModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  movieId?: string | null;
}

const ShowtimeScheduleModal = ({
  isModalOpen,
  setIsModalOpen,
  movieId,
}: ShowtimeScheduleModalProps) => {
  const dates = generateShowDates(7);

  const [selectedDate, setDate, resetBooking] = useBookingStore((s) => [
    s.selectedDate,
    s.setDate,
    s.resetBooking,
  ]);

  const { data: movieSchedule } = useMovieSchedule(
    movieId ?? null,
    isModalOpen,
  );

  useEffect(() => {
    if (!isModalOpen || !movieSchedule) return;

    const firstAvailableDate =
      dates.find(
        (d) => (movieSchedule.schedules?.[d.fullDate] ?? []).length > 0,
      )?.fullDate ?? dates[0].fullDate;

    if (!selectedDate) {
      setDate(firstAvailableDate);
    }
  }, [isModalOpen, movieSchedule, dates, selectedDate, setDate]);

  const showtimesByDate = useMemo(() => {
    if (!movieSchedule || !selectedDate) return [];
    return movieSchedule.schedules[selectedDate] ?? [];
  }, [movieSchedule, selectedDate]);

  const handleCloseModal = (open: boolean) => {
    setIsModalOpen(open);
    if (!open) resetBooking();
  };

  const hasShowtimes = showtimesByDate.length > 0 && movieSchedule;

  return (
    <ModalComponent
      title="Lịch chiếu"
      className="w-full md:!w-[695px] lg:!w-[1310px] my-modal"
      isModalOpen={isModalOpen}
      setIsModalOpen={handleCloseModal}
      context={
        <div>
          <ScheduleDateSelector
            dates={dates}
            selected={selectedDate ?? ""}
            onSelect={setDate}
          />

          <div className="px-15 md:!px-20 p-10">
            <h2 className="text-2xl font-saira text-blue-100 font-bold">
              Chọn ngày chiếu
            </h2>

            {!hasShowtimes ? (
              <p className="text-center text-gray-400 mt-10">
                Không có suất chiếu cho ngày này
              </p>
            ) : (
              <MovieShowtimeCard
                title={movieSchedule.title}
                age={movieSchedule.age}
                posterUrl={movieSchedule.posterUrl}
                showtimes={showtimesByDate}
              />
            )}
          </div>
        </div>
      }
    />
  );
};

export default ShowtimeScheduleModal;
