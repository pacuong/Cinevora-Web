"use client"

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import { useBookingStore } from '@/src/stores/bookingStore';
import SeatCinema from '@/src/components/Seat';
import { rows } from '@/src/constants/seat';
import BookingInfoPanel from '@/src/components/BookingInfoPanel';

const BookingWrapper = () => {
  //TODO: Lấy danh sách ghế đã chọn từ store
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const { movie, selectedShowtime, resetBooking } = useBookingStore((s) => ({
    movie: s.movie,
    selectedShowtime: s.selectedShowtime,
    resetBooking: s.resetBooking,
  }));

  const ticketCount = selectedSeats.length;
  // TODO: Lấy giá vé từ backend hoặc cấu hình
  const pricePerTicket = 75000;
  const totalPrice = ticketCount * pricePerTicket;

  return (
      <div className='px-auto mt-10'>
        <h2 className='text-[22px] font-bold'>Chọn ghế</h2>

        <div className='lg:flex lg:gap-5'>
          <div className='lg:w-[68%]'>
            <SeatCinema
              rows={rows}
              selectedSeats={selectedSeats}
              setSelectedSeats={setSelectedSeats}
            />
          </div>

          <div className='mt-15 lg:m-0'>
            {movie && selectedShowtime && (
              <BookingInfoPanel
                posterUrl={movie.posterUrl}
                title={movie.title}
                releaseDate={movie.releaseDate}
                time={selectedShowtime.time}
                selectedSeats={selectedSeats}
                ticketCount={ticketCount}
                totalPrice={totalPrice}
                onReset={() => {
                  setSelectedSeats([]);
                  resetBooking();
                }}
              />
            )}
          </div>
        </div>

        <div className='my-15 bg-[#d8caa0] px-10 py-6 flex items-center justify-between text-black font-mont'>
          <button className='booking-btn'>
            <FaArrowLeft />
            <span>Đổi suất chiếu</span>
          </button>

          <button className='booking-btn'>
            <FaArrowRight />
            <span>Tiếp tục</span>
          </button>
        </div>
      </div>
  );
};

export default BookingWrapper;
