"use client";
import TabsComponent from "@/src/components/common/tabs";
import GuideWrapper from "@/src/components/GuideWrapper";
import TransactionCard from "@/src/components/TransactionCard";

import {
  transactionList,
  transactionTabs,
} from "@/src/constants/transactionHistory";
import { useAuthSlice } from "@/src/stores/useAuth";
import { usePathname, useRouter } from "next/navigation";
import { useShallow } from "zustand/react/shallow";

export const TransactionHistory = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [user, isInitialized] = useAuthSlice(
    useShallow((s) => [s.userAuthentication?.user, s.isInitialized]),
  );
  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <GuideWrapper
        title='Access Denied'
        subtitle='Bạn chưa đăng nhập'
        description='Vui lòng đăng nhập để xem lịch sử giao dịch.'
        primaryButtonText='Đăng nhập ngay'
        primaryButtonHref='/dang-nhap'
        secondaryButtonText='Trang chủ'
        secondaryButtonHref='/'
      />
    );
  }
  const activeTabKey = pathname.includes("da-thanh-toan")
    ? "da-thanh-toan"
    : pathname.includes("da-xem")
      ? "da-xem"
      : pathname.includes("da-huy")
        ? "da-huy"
        : "tat-ca";
  const handleTabChange = (key: string) => {
    if (key === activeTabKey) return;

    router.push(`/lich-su-giao-dich/${key}`);
  };
  return (
    <div className='flex flex-col items-center pb-16 lg:py-17'>
      <div className='w-[285px] md:w-[650px]'>
        <h2 className='bg-blue-50 text-white-100 text-l py-5 text-center font-saira uppercase'>
          Lịch sử giao dịch
        </h2>
        <p className='text-blue-50 mt-4 text-sm font-mont'>
          Quản lý tất cả vé phim mà bạn đã đặt trên Cinevora
        </p>
      </div>
      <div className='no-underline-tabs ant-tabs-nav auth-tabs-wrapper mt-8 w-[285px]  md:w-[650px]'>
        <TabsComponent
          activeKey={activeTabKey}
          onTabClick={handleTabChange}
          className='background-btn'
          items={transactionTabs}
        />
      </div>
      <div className='mt-8 flex w-[285px] flex-col gap-7 md:w-[650px]'>
        {transactionList.map((transactionItem) => (
          <TransactionCard
            key={transactionItem.id}
            transaction={transactionItem}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
