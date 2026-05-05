"use client";

import { useEffect, useState } from "react";
import { deleteMovie, getMovieList } from "@/src/services/movieService";
import { Search } from "lucide-react";
import StatusBadge from "@/src/components/common/StatusBadge";
import { mapMovieToItem, MovieItem } from "@/src/utils/movies";

const ITEMS_PER_PAGE = 5;

const MovieManagementWrapper = () => {
  const [movieList, setMovieList] = useState<MovieItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMovies = async (page: number) => {
    try {
      setIsLoading(true);

      const result = await getMovieList(page, ITEMS_PER_PAGE);

      setMovieList(result.data.map(mapMovieToItem));
      setTotalMovies(result.total);
      setTotalPages(result.totalPages);
    } catch (error) {
      console.error("Lỗi lấy danh sách phim:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  const handleDeleteMovie = async (id: string) => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xóa?");
    if (!confirmDelete) return;

    try {
      await deleteMovie(id);

      const isLastItemOnPage = movieList.length === 1;
      const newPage =
        isLastItemOnPage && currentPage > 1 ? currentPage - 1 : currentPage;

      if (newPage !== currentPage) {
        setCurrentPage(newPage);
        return;
      }

      await fetchMovies(currentPage);
    } catch (error) {
      console.error("Xóa phim thất bại:", error);
    }
  };

  return (
    <div className="bg-[#f8f9fc] p-6">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-[40px] font-bold leading-tight text-slate-900">
              Quản Lý Phim
            </h1>
            <p className="mt-2 text-lg text-slate-500">
              Quản lý danh sách phim và thông tin chi tiết
            </p>
          </div>

          <button className="rounded-xl bg-violet-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-violet-700">
            + Thêm Phim Mới
          </button>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-4">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm theo tên phim, đạo diễn..."
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm outline-none transition focus:border-violet-500"
                />
              </div>

              <select className="h-12 min-w-[140px] rounded-xl border border-slate-200 px-4 text-sm text-slate-600 outline-none focus:border-violet-500">
                <option>Thể loại</option>
              </select>

              <select className="h-12 min-w-[140px] rounded-xl border border-slate-200 px-4 text-sm text-slate-600 outline-none focus:border-violet-500">
                <option>Trạng Thái</option>
                <option>Đang chiếu</option>
                <option>Sắp chiếu</option>
                <option>Ngừng chiếu</option>
              </select>

              <button className="h-12 rounded-xl bg-violet-600 px-6 text-sm font-semibold text-white transition hover:bg-violet-700">
                Lọc
              </button>

              <button className="h-12 px-3 text-sm font-semibold text-violet-600">
                Xóa lọc
              </button>
            </div>
          </div>

          <div
            className={`overflow-x-auto transition-opacity ${
              isLoading ? "opacity-70" : "opacity-100"
            }`}
          >
            <table className="min-w-full table-fixed">
              <thead className="bg-slate-50">
                <tr className="text-left text-sm font-semibold uppercase tracking-wide text-slate-500">
                  <th className="px-4 py-4 w-[35%]">Phim</th>
                  <th className="px-4 py-4 w-[20%]">Thể loại</th>
                  <th className="px-4 py-4 w-[12%]">Thời lượng</th>
                  <th className="px-4 py-4 w-[15%]">Ngày khởi chiếu</th>
                  <th className="px-4 py-4 w-[10%]">Trạng thái</th>
                  <th className="px-4 py-4 text-center w-[8%]">Thao tác</th>
                </tr>
              </thead>

              <tbody>
                {movieList.length === 0 && !isLoading ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-4 py-8 text-center text-slate-500"
                    >
                      Không có dữ liệu phim
                    </td>
                  </tr>
                ) : (
                  movieList.map((movie) => (
                    <tr
                      key={movie.id}
                      className="border-t border-slate-100 text-sm text-slate-700"
                    >
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={movie.image}
                            alt={movie.title}
                            className="h-16 w-12 rounded-lg object-cover shrink-0"
                          />
                          <div className="min-w-0">
                            <h3 className="truncate text-base font-semibold text-slate-900">
                              {movie.title}
                            </h3>
                            <p className="mt-1 truncate text-sm text-slate-500">
                              Đạo diễn: {movie.director}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-slate-500 truncate">
                        {movie.genre}
                      </td>
                      <td className="px-4 py-4 text-slate-700">
                        {movie.duration}
                      </td>
                      <td className="px-4 py-4 text-slate-700">
                        {movie.releaseDate}
                      </td>
                      <td className="px-4 py-4">
                        <StatusBadge status={movie.status} />
                      </td>

                      <td className="px-4 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button className="flex h-10 items-center justify-center rounded-lg bg-violet-200 px-3 transition">
                            Sửa
                          </button>
                          <button
                            onClick={() => handleDeleteMovie(movie.id)}
                            className="flex h-10 items-center justify-center rounded-lg bg-rose-100 px-3 text-rose-500 transition hover:bg-rose-200"
                          >
                            Xóa
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col justify-between gap-4 border-t border-slate-100 px-4 py-4 text-sm text-slate-500 md:flex-row md:items-center">
            <p>
              Hiển thị {movieList.length} / {totalMovies} phim
            </p>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;

                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    disabled={isLoading}
                    className={`flex h-10 w-10 items-center justify-center rounded-lg font-semibold ${
                      currentPage === page
                        ? "bg-violet-600 text-white"
                        : "border border-slate-200 text-slate-700"
                    } disabled:cursor-not-allowed disabled:opacity-50`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieManagementWrapper;