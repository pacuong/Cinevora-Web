import { DATE_FORMAT } from "@/src/constants/date";
import { parseDate } from "@/src/helpers/date";
import { DatePicker } from "antd";
import type { Dayjs } from "dayjs";

interface DatePickerCommonProps {
  date: string | null;
  setDate: (value: string) => void;
  onChange?: (value: string) => void;
}

const DatePickerCommon = ({
  date,
  setDate,
  onChange,
}: DatePickerCommonProps) => {
  const handleChange = (_: Dayjs | null, dateString: string | string[]) => {
    const dateValue = Array.isArray(dateString) ? dateString[0] : dateString;
    setDate(dateValue);
    onChange?.(dateValue);
  };

  return (
    <DatePicker
      format={DATE_FORMAT}
      value={parseDate(date)}
      onChange={handleChange}
      className="date-picker-container"
    />
  );
};

export default DatePickerCommon;
