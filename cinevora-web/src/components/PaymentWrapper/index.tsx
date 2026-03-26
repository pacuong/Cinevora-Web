"use client";

import { useBookingStore } from "@/src/stores/bookingStore";

const PRICE_PER_TICKET = 75000;

const PaymentWrapper = () => {
  const { movie, selectedDate, selectedShowtime, selectedSeats } = useBookingStore(
    (s) => ({
      movie: s.movie,
      selectedDate: s.selectedDate,
      selectedShowtime: s.selectedShowtime,
      selectedSeats: s.selectedSeats,
    })
  );

  const ticketCount = selectedSeats.length;
  const totalPrice = ticketCount * PRICE_PER_TICKET;

  return (
    <div>
      <div className="flex items-center justify-center my-6 md:mt-[35px] bg-[#7e8daa] w-[315px] h-[41px] md:w-[708px] lg:w-[980px]">
        <h2 className="uppercase text-white-100 font-saira font-semibold">Phương thức thanh toán</h2>
      </div>

      <div className="p-2 my-12 md:flex md:items-center md:justify-center md:gap-6 lg:gap-16">
        <label className="payment-label">
          <input
            type="radio"
            name="payment"
            className="payment-input"
            defaultChecked
          />
          <span className="payment-span font-saira">
            Thanh toán bằng thẻ Metiz
          </span>
        </label>

        <label className="payment-label my-2">
          <input
            type="radio"
            name="payment"
            className="payment-input"
          />
          <span className="payment-span font-saira">
            Thanh toán bằng thẻ Helio
          </span>
        </label>

        <label className="payment-label">
          <input
            type="radio"
            name="payment"
            className="payment-input"
          />
          <span className="payment-span font-saira leading-snug">
            Thanh toán qua Internet
          </span>
        </label>
      </div>

      <fieldset className="flex flex-col items-center md:items-start border border-[#7e8daa]">
        <legend className="mx-auto md:mx-12 px-4 text-xl font-bold text-[#1f2a44]">
          Nội dung thanh toán
        </legend>

        <div className="space-y-4 md:ml-16 md:leading-6 text-[#1f2a44]">
          <div className="grid grid-cols-[120px_1fr] mt-[12px]">
            <span className="payment-span font-saira">Phim:</span>
            <span className="text-[15px] capitalize">{movie?.title ?? ""}</span>
          </div>

          <div className="grid grid-cols-[120px_1fr] font-saira">
            <span className="payment-span">Ngày:</span>
            <span className="text-[15px]">{selectedDate ?? ""}</span>
          </div>

          <div className="grid grid-cols-[120px_1fr] font-saira">
            <span className="payment-span">Thời gian:</span>
            <span className="text-[15px]">{selectedShowtime?.time ?? ""}</span>
          </div>

          <div className="grid grid-cols-[120px_1fr] font-saira">
            <span className="payment-span">Ghế:</span>
            <span className="text-[15px]">{selectedSeats.join(", ")}</span>
          </div>

          <div className="grid grid-cols-[120px_1fr] font-saira">
            <span className="payment-span">Số vé:</span>
            <span className="text-[15px]">{ticketCount}</span>
          </div>

          <div className="grid grid-cols-[120px_1fr] font-saira">
            <span className="payment-span">Tổng tiền:</span>
            <span className="text-[15px] mb-8">{totalPrice.toLocaleString("vi-VN")} VNĐ</span>
          </div>
        </div>
      </fieldset>

      <div className="flex justify-center my-[35px]">
        <button className="text-[14px] active:bg-orange-70 active:border-inherit active:border-none font-saira font-semibold uppercase rounded-md text-white-100 bg-[#7e8eaa] px-6 py-4">
          tiếp tục
        </button>
      </div>
    </div>
  )
}

export default PaymentWrapper;