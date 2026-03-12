import { DATE_FORMAT } from "@/src/constants/date";
import dayjs from "dayjs";

export const parseDate = (date?: string | Date | null) => {
  return date ? dayjs(date, DATE_FORMAT) : null;
};
