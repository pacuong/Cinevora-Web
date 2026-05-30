"use client";

import ButtonComponent from "@/src/components/common/button";
import GuideWrapper from "@/src/components/GuideWrapper";
import PAGEURL from "@/src/constants/pageUrl";
import { useCreateBooking } from "@/src/hooks/booking/useBookingCreate";
import { useMomoPayment } from "@/src/hooks/payment/useMomoPayment";
import { useBookingStore } from "@/src/stores/bookingStore";

const PaymentWrapper = () => {
  const { movie, selectedDate, selectedShowtime, selectedSeats } =
    useBookingStore((s) => ({
      movie: s.movie,
      selectedDate: s.selectedDate,
      selectedShowtime: s.selectedShowtime,
      selectedSeats: s.selectedSeats,
    }));

  const { createBooking, isCreatingBooking } = useCreateBooking();
  const { createMomoPayment, isCreatingMomoPayment } = useMomoPayment();

  const ticketCount = selectedSeats.length;

  const totalPrice = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
  if (
    !movie ||
    !selectedShowtime ||
    !selectedDate ||
    selectedSeats.length === 0
  ) {
    return (
      <GuideWrapper
        title='Payment Required'
        subtitle='Bạn chưa hoàn tất bước đặt vé'
        description='Vui lòng chọn suất chiếu và ghế trước khi thanh toán.'
        primaryButtonText='Đặt vé ngay'
        primaryButtonHref={PAGEURL.NOW_SHOWING_PAGE}
        secondaryButtonText='Trang chủ'
        secondaryButtonHref={PAGEURL.HOME}
      />
    );
  }
  const handlePayment = () => {
    const payload = {
      showtimeId: selectedShowtime!.showtimeId,
      seatIds: selectedSeats.map((seat) => seat.id),
    };

    createBooking(payload, {
      onSuccess: (bookingRes) => {
        createMomoPayment(bookingRes.id, {
          onSuccess: (momoRes) => {
            window.location.href = momoRes.payUrl;
          },
        });
      },
    });
  };
  return (
    <div className='!mx-10 lg:!mx-auto lg:!w-[1150px]'>
      <div className='flex items-center justify-center my-6 md:mt-[35px] bg-[#7e8daa] h-[41px]'>
        <h2 className='uppercase text-white-100 font-saira font-semibold'>
          Phương thức thanh toán
        </h2>
      </div>

      <div className='p-2 my-12 md:flex md:items-center md:justify-center md:gap-6 lg:gap-16'>
        <label className='payment-label'>
          <input
            type='radio'
            name='payment'
            className='payment-input'
            defaultChecked
          />
          <span className='payment-span font-saira'>
            Thanh toán bằng thẻ Metiz
          </span>
        </label>

        <label className='payment-label my-2'>
          <input type='radio' name='payment' className='payment-input' />
          <span className='payment-span font-saira'>
            Thanh toán bằng thẻ Helio
          </span>
        </label>

        <label className='payment-label'>
          <input type='radio' name='payment' className='payment-input' />
          <span className='payment-span font-saira leading-snug'>
            Thanh toán qua Internet
          </span>
        </label>
      </div>

      <fieldset className='flex flex-col items-center md:items-start border border-[#7e8daa]'>
        <legend className='mx-auto md:mx-12 px-4 text-xl font-bold text-[#1f2a44]'>
          Nội dung thanh toán
        </legend>

        <div className='space-y-4 md:ml-16 md:leading-6 text-[#1f2a44]'>
          <div className='grid grid-cols-[120px_1fr] mt-[12px]'>
            <span className='payment-span font-saira'>Phim:</span>
            <span className='text-[15px] capitalize'>{movie?.title ?? ""}</span>
          </div>

          <div className='grid grid-cols-[120px_1fr] font-saira'>
            <span className='payment-span'>Ngày:</span>
            <span className='text-[15px]'>{selectedDate ?? ""}</span>
          </div>

          <div className='grid grid-cols-[120px_1fr] font-saira'>
            <span className='payment-span'>Thời gian:</span>
            <span className='text-[15px]'>{selectedShowtime?.time ?? ""}</span>
          </div>

          <div className='grid grid-cols-[120px_1fr] font-saira'>
            <span className='payment-span'>Ghế:</span>
            <span className='text-[15px]'>
              {selectedSeats.map((seat) => seat.key).join(", ")}
            </span>
          </div>

          <div className='grid grid-cols-[120px_1fr] font-saira'>
            <span className='payment-span'>Số vé:</span>
            <span className='text-[15px]'>{ticketCount}</span>
          </div>

          <div className='grid grid-cols-[120px_1fr] font-saira'>
            <span className='payment-span'>Tổng tiền:</span>
            <span className='text-[15px] mb-8'>
              {totalPrice.toLocaleString("vi-VN")} VNĐ
            </span>
          </div>
        </div>
      </fieldset>

      <div className='flex justify-center my-[35px]'>
        <ButtonComponent
          onClick={handlePayment}
          disabled={isCreatingBooking || isCreatingMomoPayment}
          className='text-[14px] active:bg-orange-70 active:border-inherit active:border-none font-saira font-semibold uppercase rounded-md text-white-100 bg-[#7e8eaa] px-6 py-4'
          name={
            isCreatingBooking || isCreatingMomoPayment
              ? "Đang xử lý..."
              : "Tiếp tục"
          }
        />
      </div>
    </div>
  );
};

export default PaymentWrapper;
