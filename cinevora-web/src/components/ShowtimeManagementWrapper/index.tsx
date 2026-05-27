"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ShowtimeFromBE } from "@/src/services/showtimeService";
import ShowtimeStatusBadge from "@/src/components/ShowtimeStatusBadge";
import ShowtimeProgressBar from "@/src/components/ShowtimeProgressBar";
import AgeBadge from "@/src/components/AgeBadge";
import AddShowtimeModal from "../AddShowtimeModal";
import { AddShowtimeFormValues } from "@/src/interfaces/movieSchedule";
import { useShowtimeManagement } from "@/src/hooks/useShowtimeManagement";

const ITEMS_PER_PAGE = 5;

const ShowtimeManagementWrapper = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAddShowtimeModalOpen, setIsAddShowtimeModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"create" | "edit">("create");
  const [selectedShowtime, setSelectedShowtime] =
    useState<ShowtimeFromBE | null>(null);

  const {
    showtimeList,
    isLoading,
    getShowtimeDetailMutation,
    createShowtimeMutation,
    updateShowtimeMutation,
    deleteShowtimeMutation,
  } = useShowtimeManagement();

  const handleAddShowtime = async (data: AddShowtimeFormValues) => {
    if (modalMode === "edit" && selectedShowtime) {
      await updateShowtimeMutation.mutateAsync({
        id: selectedShowtime.id,
        data,
      });
    } else {
      await createShowtimeMutation.mutateAsync(data);
    }

    setSelectedShowtime(null);
    setModalMode("create");
    setIsAddShowtimeModalOpen(false);
  };

  const handleOpenCreateModal = () => {
    setModalMode("create");
    setSelectedShowtime(null);
    setIsAddShowtimeModalOpen(true);
  };

  const handleEditShowtime = async (id: string) => {
    try {
      const showtime = await getShowtimeDetailMutation.mutateAsync(id);

      setSelectedShowtime(showtime);
      setModalMode("edit");
      setIsAddShowtimeModalOpen(true);
    } catch (error) {
      console.error("Lỗi lấy chi tiết lịch chiếu:", error);
    }
  };

  const handleDeleteShowtime = async (id: string) => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xóa lịch chiếu này?");
    if (!confirmDelete) return;

    try {
      await deleteShowtimeMutation.mutateAsync(id);
    } catch (error: any) {
      const message =
        error?.response?.data?.message || "Xóa lịch chiếu thất bại";

      alert(Array.isArray(message) ? message.join("\n") : message);
    }
  };

  const totalPages = Math.ceil(showtimeList.length / ITEMS_PER_PAGE);

  const paginatedShowtimeList = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return showtimeList.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [showtimeList, currentPage]);

  const paddedShowtimeList = useMemo(() => {
    const emptyRows = Array.from({
      length: Math.max(0, ITEMS_PER_PAGE - paginatedShowtimeList.length),
    }).map((_, index) => ({
      id: `empty-${index}`,
      isEmpty: true as const,
    }));

    return [...paginatedShowtimeList, ...emptyRows];
  }, [paginatedShowtimeList]);

  return (
    <div className="bg-[#f7f8fc] p-7">
      <div className="mx-auto max-w-[1250px]">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-[44px] font-bold leading-tight text-slate-900">
              Quản Lý Lịch Chiếu
            </h1>
            <p className="mt-2 text-lg text-slate-500">
              Quản lý lịch chiếu theo phim, rạp và thời gian
            </p>
          </div>

          <button
            onClick={handleOpenCreateModal}
            className="rounded-xl bg-violet-600 px-6 py-3 text-base font-semibold text-white-100 shadow-sm transition hover:bg-violet-700"
          >
            + Thêm Lịch Chiếu
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#eef0f6] bg-white shadow-[0_2px_10px_rgba(15,23,42,0.03)]">
          {/* <div className="border-b border-[#eef0f6] p-4">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Tìm theo tên phim, phòng..."
                  className="h-12 w-full rounded-xl border border-slate-200 pl-12 pr-4 text-sm outline-none transition focus:border-violet-500"
                />
              </div>

              <select className="h-12 min-w-[140px] rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none focus:border-violet-500">
                <option>Chọn phim</option>
              </select>

              <select className="h-12 min-w-[140px] rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none focus:border-violet-500">
                <option>Chọn phòng</option>
              </select>

              <input
                type="text"
                placeholder="DD/MM/YYYY"
                className="h-12 min-w-[150px] rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-violet-500"
              />

              <button className="rounded-xl bg-violet-600 px-6 py-2 text-sm font-semibold text-white-100 transition hover:bg-violet-700">
                Lọc
              </button>

              <button className="border-0 px-6 py-2 text-sm font-semibold text-violet-600 hover:border-0 hover:text-red-70">
                Xóa lọc
              </button>
            </div>
          </div> */}

          <div className="overflow-x-auto">
            <table className="min-w-full table-fixed">
              <thead className="bg-[#fafbfe]">
                <tr className="text-left text-sm font-semibold uppercase text-slate-500">
                  <th className="w-[32%] px-5 py-5">Phim</th>
                  <th className="w-[14%] px-5 py-5">Phòng</th>
                  <th className="w-[14%] px-5 py-5">Ngày chiếu</th>
                  <th className="w-[14%] px-5 py-5">Giờ chiếu</th>
                  <th className="w-[14%] px-5 py-5">Vé đã bán</th>
                  <th className="w-[12%] px-5 py-5">Trạng thái</th>
                  <th className="w-[14%] px-5 py-5 text-center">Thao tác</th>
                </tr>
              </thead>

              <tbody>
                {isLoading ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-5 py-8 text-center text-slate-500"
                    >
                      Đang tải dữ liệu...
                    </td>
                  </tr>
                ) : showtimeList.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-5 py-8 text-center text-slate-500"
                    >
                      Không có lịch chiếu
                    </td>
                  </tr>
                ) : (
                  paddedShowtimeList.map((item) => {
                    if ("isEmpty" in item) {
                      return (
                        <tr
                          key={item.id}
                          className="border-t border-[#eef0f6]"
                        >
                          <td colSpan={7} className="px-5 py-4" />
                        </tr>
                      );
                    }

                    return (
                      <tr
                        key={item.id}
                        className="border-t border-[#eef0f6] text-sm text-slate-700"
                      >
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-4">
                            <Image src={item.image} alt={item.movieTitle} width={44} height={56} sizes="44px" className="h-14 w-11 shrink-0 rounded-lg object-cover" />

                            <div className="min-w-0 overflow-hidden">
                              <div className="flex items-center gap-2 overflow-hidden">
                                <h3 className="truncate text-[15px] font-semibold text-slate-900">
                                  {item.movieTitle}
                                </h3>
                                <div className="shrink-0">
                                  <AgeBadge label={item.ageLabel} />
                                </div>
                              </div>
                              <p className="mt-1 truncate text-sm text-slate-400">
                                {item.duration}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-5 py-4">
                          <div className="truncate whitespace-nowrap font-medium text-slate-900">
                            {item.room}
                          </div>
                          <div className="mt-1 truncate whitespace-nowrap text-sm text-slate-400">
                            {item.seats}
                          </div>
                        </td>

                        <td className="px-5 py-4">
                          <div className="whitespace-nowrap font-medium text-slate-900">
                            {item.date}
                          </div>
                          <div className="mt-1 truncate whitespace-nowrap text-sm text-slate-400">
                            {item.day}
                          </div>
                        </td>

                        <td className="px-5 py-4 whitespace-nowrap text-[15px] font-medium text-slate-900">
                          {item.time}
                        </td>

                        <td className="px-5 py-4">
                          <div className="whitespace-nowrap text-[15px] font-medium text-slate-900">
                            {item.sold}
                          </div>
                          <div className="mt-2">
                            <ShowtimeProgressBar value={item.soldPercent} />
                          </div>
                        </td>

                        <td className="px-5 py-4 whitespace-nowrap">
                          <ShowtimeStatusBadge status={item.status} />
                        </td>

                        <td className="px-5 py-4 whitespace-nowrap">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => handleEditShowtime(item.id)}
                              className="flex h-9 items-center justify-center rounded-lg bg-violet-100 px-3 text-violet-600 transition hover:bg-violet-200"
                            >
                              Sửa
                            </button>

                            <button
                              onClick={() => handleDeleteShowtime(item.id)}
                              className="flex h-9 items-center justify-center rounded-lg bg-rose-100 px-3 text-rose-500 transition hover:bg-rose-200"
                            >
                              Xóa
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col justify-between gap-4 border-t border-[#eef0f6] px-5 py-4 text-sm text-slate-500 md:flex-row md:items-center">
            <p>
              Hiển thị {paginatedShowtimeList.length} / {showtimeList.length} lịch
              chiếu
            </p>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;

                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`flex h-10 w-10 items-center justify-center rounded-lg font-semibold ${currentPage === page
                      ? "bg-violet-600 text-white-100"
                      : "border border-slate-200 text-slate-700"
                      }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <AddShowtimeModal
        isModalOpen={isAddShowtimeModalOpen}
        setIsModalOpen={(open) => {
          setIsAddShowtimeModalOpen(open);

          if (!open) {
            setSelectedShowtime(null);
            setModalMode("create");
          }
        }}
        onAddShowtime={handleAddShowtime}
        mode={modalMode}
        initialShowtime={selectedShowtime}
      />
    </div>
  );
};

export default ShowtimeManagementWrapper;