"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useBookingStore } from "@/src/stores/bookingStore";
import SeatCinema from "@/src/components/Seat";
import BookingInfoPanel from "@/src/components/BookingInfoPanel";
import Link from "next/link";
import PAGEURL from "@/src/constants/pageUrl";
import { useEffect } from "react";
import BookingInfoPanelSkeleton from "../BookingInfoPanel/BookingInfoPanelSkeleton";
import { useSeatsByShowtimeId } from "@/src/hooks/useSeatsByShowtimeId";
import GuideWrapper from "@/src/components/GuideWrapper";

const BookingWrapper = () => {
  const {
    movie,
    selectedShowtime,
    selectedSeats,
    selectedDate,
    setSelectedSeats,
    clearSeatSelection,
    expiresAt,
  } = useBookingStore((s) => ({
    movie: s.movie,
    selectedShowtime: s.selectedShowtime,
    selectedDate: s.selectedDate,
    selectedSeats: s.selectedSeats,
    setSelectedSeats: s.setSelectedSeats,
    clearSeatSelection: s.clearSeatSelection,

    expiresAt: s.expiresAt,
  }));

  const { seatRows, isLoadingSeat } = useSeatsByShowtimeId(
    selectedShowtime?.showtimeId,
  );

  useEffect(() => {
    if (!expiresAt) return;

    const remainingTime = expiresAt - Date.now();

    if (remainingTime <= 0) {
      clearSeatSelection();
      return;
    }

    const timer = setTimeout(() => {
      clearSeatSelection();
    }, remainingTime);

    return () => clearTimeout(timer);
  }, [expiresAt, clearSeatSelection]);

  const ticketCount = selectedSeats.length;
  const totalPrice = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
  const canContinue = !!movie && !!selectedShowtime && selectedSeats.length > 0;
  if (!movie || !selectedShowtime) {
    return (
      <GuideWrapper
        title='Booking Required'
        subtitle='Bạn chưa chọn suất chiếu'
        description='Vui lòng chọn phim và suất chiếu trước khi đặt ghế.'
        primaryButtonText='Chọn phim'
        primaryButtonHref={PAGEURL.NOW_SHOWING_PAGE}
        secondaryButtonText='Trang chủ'
        secondaryButtonHref={PAGEURL.HOME}
      />
    );
  }
  return (
    <div className='mx-10 lg:!mx-auto mt-10 lg:!w-[1150px]'>
      <h2 className='text-[22px] font-bold'>Chọn ghế</h2>

      <div className='lg:flex lg:gap-5'>
        <div className='lg:w-[68%]'>
          {isLoadingSeat ? (
            <div>Loading seats...</div>
          ) : (
            <SeatCinema
              rows={seatRows}
              selectedSeats={selectedSeats}
              setSelectedSeats={setSelectedSeats}
            />
          )}
        </div>

        <div className='mt-15 lg:m-0'>
          {movie && selectedShowtime ? (
            <BookingInfoPanel
              posterUrl={movie.posterUrl}
              title={movie.title}
              releaseDate={selectedDate ?? ""}
              time={selectedShowtime.time}
              selectedSeats={selectedSeats}
              ticketCount={ticketCount}
              totalPrice={totalPrice}
            />
          ) : (
            <BookingInfoPanelSkeleton />
          )}
        </div>
      </div>

      <div className='my-15 bg-[#d8caa0] px-10 py-6 flex items-center justify-between text-black font-mont'>
        <Link
          href={PAGEURL.NOW_SHOWING_PAGE}
          className='booking-btn text-black-100 hover:text-black-100'
        >
          <FaArrowLeft />
          <span>Đổi suất chiếu</span>
        </Link>

        <Link
          href={canContinue ? PAGEURL.PAYMENT_PAGE : "#"}
          className='booking-btn text-black-100 hover:text-black-100'
        >
          <FaArrowRight />
          <span>Tiếp tục</span>
        </Link>
      </div>
    </div>
  );
};

export default BookingWrapper;
