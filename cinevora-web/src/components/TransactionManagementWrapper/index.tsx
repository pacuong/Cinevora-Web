"use client";

import { transactionList } from "@/src/constants/adminTransaction";
import { ChevronRight } from "lucide-react";
import { FaEye } from "react-icons/fa";
import * as XLSX from "xlsx";

const TransactionManagementWrapper = () => {
  const handleExportExcel = () => {
    const exportData = transactionList.map((item, index) => ({
      STT: index + 1,
      "Mã giao dịch": item.id,
      "Mã đơn": item.orderId,
      "Khách hàng": item.customerName,
      "Số điện thoại": item.phone,
      Phim: item.movie,
      "Lịch chiếu": item.showtime,
      Phòng: item.room,
      Ghế: item.seats,
      "Tổng tiền": item.total,
      "Trạng thái": item.status,
      "Ngày giao dịch": item.date,
      Giờ: item.time,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);

    worksheet["!cols"] = [
      { wch: 6 },
      { wch: 22 },
      { wch: 14 },
      { wch: 24 },
      { wch: 16 },
      { wch: 28 },
      { wch: 24 },
      { wch: 14 },
      { wch: 12 },
      { wch: 16 },
      { wch: 16 },
      { wch: 16 },
      { wch: 10 },
    ];

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Danh sách giao dịch"
    );

    XLSX.writeFile(workbook, "quan-ly-giao-dich.xlsx");

  };

  return (
    <div className="bg-[#f7f8fc] p-7">
      <div className="mx-auto max-w-[1250px]">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-[44px] font-bold leading-tight text-slate-900">
              Quản Lý Giao Dịch
            </h1>

            <p className="mt-2 text-lg text-slate-500">
              Quản lý các giao dịch đặt vé và thanh toán
            </p>
          </div>

          <button
            onClick={handleExportExcel}
            className="rounded-xl bg-violet-600 px-6 py-3 text-base font-semibold text-white-100 shadow-sm transition hover:bg-violet-700"
          >
            Xuất Excel
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#eef0f6] bg-white shadow-[0_2px_10px_rgba(15,23,42,0.03)]">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-white">
                <tr className="text-left text-sm font-semibold uppercase text-slate-500">
                  <th className="px-7 py-5">Mã giao dịch</th>
                  <th className="px-7 py-5">Khách hàng</th>
                  <th className="px-7 py-5">Phim</th>
                  <th className="px-7 py-5">Lịch chiếu</th>
                  <th className="px-7 py-5">Ghế</th>
                  <th className="px-7 py-5 text-center">Tổng tiền</th>
                  <th className="px-7 py-5 text-center">Trạng thái</th>
                  <th className="px-7 py-5">Ngày giao dịch</th>
                  <th className="px-7 py-5 text-center">Thao tác</th>
                </tr>
              </thead>

              <tbody>
                {transactionList.map((item) => (
                  <tr
                    key={item.id}
                    className="border-t border-[#eef0f6] text-[15px] transition hover:bg-slate-50"
                  >
                    <td className="px-7 py-6 align-middle whitespace-nowrap">
                      <div className="font-semibold text-slate-900">
                        {item.id}
                      </div>

                      <div className="mt-2 text-slate-500">
                        {item.orderId}
                      </div>
                    </td>

                    <td className="px-7 py-6 align-middle whitespace-nowrap">
                      <div className="font-semibold text-slate-900">
                        {item.customerName}
                      </div>

                      <div className="mt-2 text-slate-500">
                        {item.phone}
                      </div>
                    </td>

                    <td className="px-7 py-6 align-middle">
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <span className="font-medium text-slate-900">
                          {item.movie}
                        </span>

                        <span className="inline-flex h-5 w-4 shrink-0 items-center justify-center rounded bg-[#08213d] text-[11px] font-bold text-sky-400">
                          P
                        </span>
                      </div>
                    </td>

                    <td className="px-7 py-6 align-middle whitespace-nowrap">
                      <div className="font-semibold text-slate-900">
                        {item.showtime}
                      </div>

                      <div className="mt-2 text-slate-500">
                        {item.room}
                      </div>
                    </td>

                    <td className="px-7 py-6 align-middle whitespace-nowrap font-medium text-slate-900">
                      {item.seats}
                    </td>

                    <td className="px-7 py-6 align-middle whitespace-nowrap text-center font-bold text-violet-600">
                      {item.total}
                    </td>

                    <td className="px-7 py-6 align-middle whitespace-nowrap text-center">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${item.status === "Thành công"
                            ? "bg-emerald-100 text-emerald-600"
                            : "bg-rose-100 text-rose-500"
                          }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="px-7 py-6 align-middle whitespace-nowrap">
                      <div className="font-semibold text-slate-900">
                        {item.date}
                      </div>

                      <div className="mt-2 text-slate-500">
                        {item.time}
                      </div>
                    </td>

                    <td className="px-7 py-6 align-middle">
                      <div className="flex justify-center">
                        <button className="text-slate-500 transition hover:text-slate-700">
                          <FaEye className="h-8 w-8" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col justify-between gap-4 border-t border-[#eef0f6] px-4 py-4 text-sm text-slate-500 md:flex-row md:items-center">
            <p>Hiển thị 5 / 25 giao dịch</p>

            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`flex h-8 w-9 items-center justify-center rounded-lg text-sm font-semibold ${page === 1
                      ? "bg-violet-600 text-white"
                      : "border border-slate-200 text-slate-700"
                    }`}
                >
                  {page}
                </button>
              ))}

              <button className="flex h-8 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default TransactionManagementWrapper;