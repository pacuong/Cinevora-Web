import { IoMdRefresh } from "react-icons/io";
import Image from "next/image";
interface BookingProps {
  posterUrl: string;
  title: string;
  selectedSeats: string[];
  ticketCount: number;
  totalPrice: number;
  releaseDate: string;
  time: string;
  onReset?: () => void;
}
const BookingInfoPanel = ({
  posterUrl,
  title,
  selectedSeats,
  ticketCount,
  totalPrice,
  releaseDate,
  time,
  onReset,
}: BookingProps) => {
  return (
    <div>
      <div className="flex justify-center">
        <Image width={195} height={280} src={posterUrl} alt="posterUrl" />
      </div>

      <div>
        <ul className="mt-5">
          <li className="capitalize text-base font-mont mb-3">
            phim: <span className="booking-title">{title}</span>
          </li>
          <div className="leading-9">
            <li className="capitalize text-base font-mont">
              ngày: <span className="booking-title">{releaseDate}</span>
            </li>
            <li className="capitalize text-base font-mont">
              thời gian: <span className="booking-title">{time}</span>
            </li>
            <li className="capitalize text-base font-mont">
              ghế:{" "}
              <span className="booking-title">{selectedSeats.join(", ")}</span>
            </li>
            <li className="capitalize text-base font-mont">
              số vé: <span className="booking-title">{ticketCount}</span>
            </li>
            <li className="capitalize text-base font-mont">
              tổng tiền: <span className="booking-title">{totalPrice}</span> VNĐ
            </li>
          </div>
        </ul>

        <div className="leading-10 grid grid-cols-2 gap-y-4 gap-x-10 text-sm text-white mt-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-sm md:w-[25px] md:h-[25px] border-2 border-white-50 bg-white-50 flex items-center justify-center opacity-60">
              <span className="text-xs text-gray-70">✕</span>
            </div>
            <span>Ghế đã đặt</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-sm md:w-[25px] md:h-[25px] border-2 border-green-70 bg-green-70" />
            <span>Ghế đang chọn</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-sm md:w-[25px] md:h-[25px] md:my-[30px] border-2 border-gray-10" />
            <span>Ghế thường</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-sm md:w-[25px] md:h-[25px] md:my-[30px] border-2 border-yellow-100" />
            <span>Ghế VIP</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-sm md:w-[25px] md:h-[25px] border-2 border-purple-70" />
            <span>Ghế cao cấp</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-11 h-6 rounded-sm md:w-[56px] md:h-[25px] border-2 border-pink-100" />
            <span>Ghế couple</span>
          </div>
        </div>

        <button
          onClick={onReset}
          className="mt-5 text-[20px] flex items-center p-0 bg-white-100"
        >
          <IoMdRefresh />
          <span className="ml-1">Làm lại</span>
        </button>
      </div>
    </div>
  );
};

export default BookingInfoPanel;
