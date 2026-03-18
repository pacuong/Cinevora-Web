import ButtonComponent from "@/src/components/common/button";
import { DATE_FORMAT } from "@/src/constants/date";
import dayjs from "dayjs";

export interface ShowDate {
  label: string;
  day: number;
  month: number;
  fullDate: string;
}

interface ScheduleDateSelectorProps {
  dates: ShowDate[];
  selected: string;
  onSelect: (date: string) => void;
}
const ScheduleDateSelector = ({
  dates,
  selected,
  onSelect,
}: ScheduleDateSelectorProps) => {
  const today = dayjs().format(DATE_FORMAT);
  const handleSelectDate = (date: string) => {
    onSelect(date);
  };

  return (
    <div className="bg-white-80 py-17 border-t border-t-red-100">
      <h3 className="font-saira text-black-100 text-2xl font-medium px-10">
        Chọn ngày chiếu
      </h3>
      <div className="font-saira text-center text-xl text-blue-100 mt-2 mb-10">
        Tháng {dates[0]?.month}
      </div>
      <div className="flex flex-wrap justify-center md:flex md:flex-nowrap lg:flex lg:justify-between gap-5 m-auto w-[300px] md:w-[600px] lg:w-[700px]">
        {dates.map((d) => {
          const isActive = selected
            ? d.fullDate === selected
            : d.fullDate === today;
          return (
            <div
              key={d.fullDate}
              role="button"
              tabIndex={0}
              onClick={() => handleSelectDate(d.fullDate)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleSelectDate(d.fullDate);
                }
              }}
              className="flex flex-col items-center w-[80px] md:w-[100px]"
            >
              <span className="font-saira text-l text-center capitalize text-blue-100">
                {d.label}
              </span>
              <ButtonComponent
                variant="badge"
                name={d.day}
                className={`
                  background-badge-btn
                  shadow-none
                  ${isActive ? "is-active" : ""}
                `}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScheduleDateSelector;
