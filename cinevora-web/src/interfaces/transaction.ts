import { ComponentType } from "react";

export type TransactionStatus = "paid" | "cancel";

export interface TransactionItem {
  id: number;
  title: string;
  image: string;
  subtitle: string;
  status: TransactionStatus;
  showDate: string;
  showTime: string;
  seats: string[];
  paymentTime: string;
  totalPrice: string;
  ticketCount: number;
}

export interface TransactionStatusIconProps {
  size?: number;
  className?: string;
}

export interface TransactionStatusConfig {
  label: string;
  icon: ComponentType<TransactionStatusIconProps>;
}

export interface TransactionCardProps {
  transaction: TransactionItem;
}
