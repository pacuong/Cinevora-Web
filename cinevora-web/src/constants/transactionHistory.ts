import { TabsItems } from "@/src/components/common/tabs";
import CheckCircleFill from "@/src/icons/CheckCircle";
import ErrorCircleFill from "@/src/icons/ErrorCircleFill";
import {
  TransactionItem,
  TransactionStatus,
  TransactionStatusConfig,
} from "@/src/interfaces/transaction";

export const transactionTabs: TabsItems[] = [
  {
    key: "tat-ca",
    label: "Tất cả",
  },
  {
    key: "da-thanh-toan",
    label: "Đã thanh toán",
  },
  {
    key: "da-xem",
    label: "Đã xem",
  },
  {
    key: "da-huy",
    label: "Đã hủy",
  },
];

export const statusConfig: Record<TransactionStatus, TransactionStatusConfig> =
  {
    paid: {
      label: "ĐÃ THANH TOÁN",
      icon: CheckCircleFill,
    },

    cancel: {
      label: "ĐÃ HỦY",
      icon: ErrorCircleFill,
    },
  };

export const transactionList: TransactionItem[] = [
  {
    id: 1,
    title: "Bóng Đêm Sài Gòn",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200",
    subtitle: "Vé điện tử • Phụ đề tiếng Việt",
    status: "paid",
    showDate: "19/05/2026",
    showTime: "16:00",
    seats: ["D5", "D6", "E10"],
    paymentTime: "18/05/2026 - 21:10",
    totalPrice: "225.000đ",
    ticketCount: 3,
  },

  {
    id: 2,
    title: "Avengers: Endgame",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200",
    subtitle: "IMAX • English Subtitle",
    status: "cancel",
    showDate: "15/05/2026",
    showTime: "20:30",
    seats: ["A1", "A2"],
    paymentTime: "14/05/2026 - 19:45",
    totalPrice: "180.000đ",
    ticketCount: 2,
  },
];
