import Image from "next/image";

import { statusConfig } from "@/src/constants/transactionHistory";
import { TransactionCardProps } from "@/src/interfaces/transaction";
import InfoBox from "@/src/components/InfoBox";

const TransactionCard = ({ transaction }: TransactionCardProps) => {
  const { status: statusKey } = transaction;
  const status = statusConfig[statusKey];
  const Icon = status.icon;
  const statusStyle =
    statusKey === "paid"
      ? "border border-emerald-500/20 bg-emerald-500/15 text-emerald-400"
      : "border border-red-500/20 bg-red-500/10 text-red-400";
  return (
    <div
      className="
        border-blue-50 bg-blue-100
        rounded-[20px] border p-4
        transition-all duration-300 hover:border-primary
      "
    >
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="relative h-[300px] w-full overflow-hidden rounded-2xl md:h-[260px] md:w-[180px] md:flex-shrink-0">
          <Image
            src={transaction.image}
            alt={transaction.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-white-100 text-2xl font-saira uppercase">
                  {transaction.title}
                </h3>
                <p className="text-blue-50 mt-2 text-sm font-mont">
                  {transaction.subtitle}
                </p>
              </div>
              <div
                className={`flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold ${statusStyle}`}
              >
                <Icon />
                {status.label}
              </div>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
              <InfoBox title="Ngày chiếu" value={transaction.showDate} />
              <InfoBox title="Suất chiếu" value={transaction.showTime} />
              <InfoBox title="Ghế ngồi" value={transaction.seats.join(", ")} />
              <InfoBox
                title="Thời gian thanh toán"
                value={transaction.paymentTime}
              />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <h2 className="text-yellow-100 text-3xl font-bold font-saira">
              {transaction.totalPrice}
            </h2>
            <p className="text-blue-50 mt-2 text-sm font-mont">
              {transaction.ticketCount} vé đã đặt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
