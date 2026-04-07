"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useBookingStore } from "@/src/stores/bookingStore";
import SeatCinema from "@/src/components/Seat";
import { rows } from "@/src/constants/seat";
import BookingInfoPanel from "@/src/components/BookingInfoPanel";
import Link from "next/link";
import PAGEURL from "@/src/constants/pageUrl";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PRICE_PER_TICKET = 75000;

const BookingWrapper = () => {
  const {
    movie,
    selectedShowtime,
    selectedSeats,
    setSelectedSeats,
    resetBooking,
    expiresAt,
  } = useBookingStore((s) => ({
    movie: s.movie,
    selectedShowtime: s.selectedShowtime,
    selectedSeats: s.selectedSeats,
    setSelectedSeats: s.setSelectedSeats,
    resetBooking: s.resetBooking,
    expiresAt: s.expiresAt,
  }));

  const router = useRouter();

  useEffect(() => {
    if (!expiresAt) return;

    const remainingTime = expiresAt - Date.now();

    if (remainingTime <= 0) {
      resetBooking();
      router.replace(PAGEURL.HOME);
      return;
    }

    const timer = setTimeout(() => {
      resetBooking();
      router.replace(PAGEURL.HOME);
    }, remainingTime);

    return () => clearTimeout(timer);
  }, [expiresAt, resetBooking, router]);

  const ticketCount = selectedSeats.length;
  const totalPrice = ticketCount * PRICE_PER_TICKET;
  const canContinue = !!movie && !!selectedShowtime && selectedSeats.length > 0;
  return (
    <div className="px-auto mt-10">
      <h2 className="text-[22px] font-bold">Chọn ghế</h2>

      <div className="lg:flex lg:gap-5">
        <div className="lg:w-[68%]">
          <SeatCinema
            rows={rows}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
          />
        </div>

        <div className="mt-15 lg:m-0">
          {movie && selectedShowtime && (
            <BookingInfoPanel
              posterUrl={movie.posterUrl}
              title={movie.title}
              releaseDate={movie.releaseDate}
              time={selectedShowtime.time}
              selectedSeats={selectedSeats}
              ticketCount={ticketCount}
              totalPrice={totalPrice}
              onReset={resetBooking}
            />
          )}
        </div>
      </div>

      <div className="my-15 bg-[#d8caa0] px-10 py-6 flex items-center justify-between text-black font-mont">
        <Link href={PAGEURL.NOW_SHOWING_PAGE} className="booking-btn text-black-100 hover:text-black-100">
          <FaArrowLeft />
          <span>Đổi suất chiếu</span>
        </Link>

        <Link href={canContinue ? PAGEURL.PAYMENT_PAGE : "#"} className="booking-btn text-black-100 hover:text-black-100">
          <FaArrowRight />
          <span>Tiếp tục</span>
        </Link>
      </div>
    </div>
  );
};

export default BookingWrapper;