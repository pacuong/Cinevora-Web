import { ShowDate } from "@/src/components/ScheduleDateSelector";
import dayjs from "dayjs";
import "dayjs/locale/vi";

dayjs.locale("vi");

export const generateShowDates = (count: number = 7): ShowDate[] => {
  return Array.from({ length: count }, (_, i) => {
    const date = dayjs().add(i, "day");
    return {
      label: date.format("dddd"),
      day: date.date(),
      month: date.month() + 1,
      fullDate: date.format("YYYY-MM-DD"),
    };
  });
};
