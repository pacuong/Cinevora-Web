export type MovieStatus = "Đang chiếu" | "Sắp chiếu" | "Ngừng chiếu";

export const statusMap: Record<MovieStatus, string> = {
  "Đang chiếu": "bg-emerald-100 text-emerald-600",
  "Sắp chiếu": "bg-amber-100 text-amber-600",
  "Ngừng chiếu": "bg-rose-100 text-rose-500",
};