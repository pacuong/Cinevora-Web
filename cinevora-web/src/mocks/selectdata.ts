import { SelectOption } from "@/src/components/Select";

export const cityOptions = [
  { label: "Đà Nẵng", value: "danang" },
  { label: "Hà Nội", value: "hanoi" },
  { label: "Hồ Chí Minh", value: "hcm" },
  { label: "Khác", value: "other" },
];

export const districtOptions: Record<string, SelectOption[]> = {
  danang: [
    { label: "Cẩm Lệ", value: "camle" },
    { label: "Hải Châu", value: "haichau" },
    { label: "Thanh Khê", value: "thanhkhe" },
  ],
  hanoi: [
    { label: "Ba Đình", value: "badinh" },
    { label: "Hoàn Kiếm", value: "hoankiem" },
  ],
  hcm: [
    { label: "Quận 1", value: "q1" },
    { label: "Quận 3", value: "q3" },
  ],
  other: [],
};
