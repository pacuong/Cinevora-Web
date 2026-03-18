import { SeatCinemaProps } from "@/src/constants/seat";

interface SeatCinemaPropsUI {
  rows: SeatCinemaProps[];
  selectedSeats: string[];
  setSelectedSeats: (prop: string[]) => void;
}

const SeatCinema = ({
  rows,
  selectedSeats,
  setSelectedSeats,
}: SeatCinemaPropsUI) => {
  const toggleSeat = (key: string, isPlaced?: boolean) => {
    if (isPlaced) return;

    setSelectedSeats(
      selectedSeats.includes(key)
        ? selectedSeats.filter((s) => s !== key)
        : [...selectedSeats, key],
    );
  };

  return (
    <div className="w-full lg:flex lg:flex-col lg:items-center max-w-7xl mx-auto">
      <div className="front md:w-[682px] lg:w-[652px] text-[12px] md:text-[15px] lg:text-[15px] md:mr-0 md:ml-0 md:mt-10">
        Màn hình
      </div>
      <div className="space-y-3">
        {rows.map((row) => (
          <div key={row.label} className="flex md:justify-center items-center">
            <div className="w-6 text-center font-semibold text-gray-70 md:mr-5">
              {row.label}
            </div>

            <div className="flex gap-6 md:gap-9 ml-4">
              {row.seats.map((seat) => {
                const isSelected = selectedSeats.includes(seat.keys);

                return (
                  <div
                    key={seat.keys}
                    className={`
                      relative border-2
                      ${
                        seat.isPlaced
                          ? "cursor-not-allowed bg-white-50 border-white-50"
                          : isSelected
                            ? "border-green-70"
                            : row.isVip
                              ? "border-yellow-100 hover:bg-green-70 hover:border-green-70"
                              : "border-gray-10 hover:bg-green-70 hover:border-green-70"
                      }
                    `}
                  >
                    <input
                      type="checkbox"
                      disabled={seat.isPlaced}
                      checked={isSelected}
                      onChange={() => toggleSeat(seat.keys, seat.isPlaced)}
                      className="absolute opacity-0 h-full w-full cursor-pointer"
                    />

                    <div
                      className={`
                        text-center text-[8px] md:text-s
                        font-medium flex items-center justify-center
                        h-[18px] w-8
                        md:w-[25px] md:h-[25px]
                        ${isSelected && "bg-green-70"}
                      `}
                    >
                      {seat.keys}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatCinema;
