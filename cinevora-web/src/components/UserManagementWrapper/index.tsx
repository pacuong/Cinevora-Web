import {
  Users,
  UserPlus,
  PieChart,
  Lock,
  Search,
  Pencil,
  Eye,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { userList } from "@/src/constants/adminUserData";
import Image from "next/image";
import StatusToggle from "@/src/utils/StatusToggle";
import StatusBar from "@/src/utils/StatusBar";
import StatCard from "@/src/utils/StatCard";
import RoleBadge from "@/src/utils/RoleBadge";

const UserManagementWrapper = () => {
  return (
    <div className="min-h-screen bg-[#f7f8fc] p-4 md:p-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-[42px] font-bold leading-tight text-slate-900">
              Quản Lý Người Dùng
            </h1>
            <p className="mt-2 text-lg text-slate-500">
              Quản lý tài khoản, phân quyền và trạng thái người dùng
            </p>
          </div>

          <button className="inline-flex h-12 items-center rounded-xl bg-violet-600 px-6 text-base font-semibold text-white transition hover:bg-violet-700">
            + Thêm Người Dùng
          </button>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Tổng Người Dùng"
            value="1,200"
            subText="↑ 24 người dùng mới"
            icon={Users}
            iconBg="bg-violet-100"
            iconColor="text-violet-600"
            subTextColor="text-emerald-500"
          />
          <StatCard
            title="Người Dùng Hôm Nay"
            value="36"
            subText="◔ Cập nhật liên tục"
            icon={UserPlus}
            iconBg="bg-blue-100"
            iconColor="text-blue-600"
            subTextColor="text-blue-500"
          />
          <StatCard
            title="Tỷ Lệ Hoạt Động"
            value="92.5%"
            subText="↑ 1.2% so với tháng trước"
            icon={PieChart}
            iconBg="bg-amber-100"
            iconColor="text-amber-500"
            subTextColor="text-emerald-500"
          />
          <StatCard
            title="Người Dùng Bị Khóa"
            value="35"
            subText="↓ 5 tài khoản"
            icon={Lock}
            iconBg="bg-rose-100"
            iconColor="text-rose-500"
            subTextColor="text-rose-500"
          />
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#eef0f6] bg-white shadow-[0_2px_10px_rgba(15,23,42,0.03)]">
          <div className="border-b border-[#eef0f6] p-4">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Tìm theo tên, email hoặc số điện thoại..."
                  className="h-12 w-full rounded-xl border border-slate-200 pl-12 pr-4 text-sm outline-none transition focus:border-violet-500"
                />
              </div>

              <select className="h-12 min-w-[140px] rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none focus:border-violet-500">
                <option>Vai Trò</option>
                <option>Admin</option>
                <option>User</option>
              </select>

              <select className="h-12 min-w-[140px] rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none focus:border-violet-500">
                <option>Trạng Thái</option>
                <option>Hoạt động</option>
                <option>Đã khóa</option>
              </select>

              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 text-sm font-semibold text-white transition hover:bg-violet-700">
                <Search className="h-4 w-4" />
                Lọc
              </button>

              <button className="h-12 px-3 text-sm font-semibold text-violet-600">
                Xóa lọc
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-[#fafbfe]">
                <tr className="text-left text-sm font-semibold uppercase text-slate-500">
                  <th className="px-5 py-5">Người dùng</th>
                  <th className="px-5 py-5">Số điện thoại</th>
                  <th className="px-5 py-5">Vai trò</th>
                  <th className="px-5 py-5">Trạng thái</th>
                  <th className="px-5 py-5">Ngày tạo</th>
                  <th className="px-5 py-5 text-center">Thao tác</th>
                </tr>
              </thead>

              <tbody>
                {userList.map((user) => (
                  <tr
                    key={user.id}
                    className="border-t border-[#eef0f6] text-sm text-slate-700"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-4">
                        <Image src={user.avatar} alt={user.fullName} width={48} height={48} sizes="48px" className="h-12 w-12 rounded-full object-cover" />
                        <div>
                          <h3 className="text-[15px] font-semibold text-slate-900">
                            {user.fullName}
                          </h3>
                          <p className="mt-1 text-sm text-slate-400">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4 text-[15px] text-slate-700">
                      {user.phone}
                    </td>

                    <td className="px-5 py-4">
                      <RoleBadge role={user.role} />
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-4">
                        <StatusBar status={user.status} />
                        <StatusToggle enabled={user.enabled} />
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <div className="text-[15px] font-medium text-slate-900">
                        {user.createdDate}
                      </div>
                      <div className="mt-1 text-sm text-slate-400">
                        {user.createdTime}
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-100 text-violet-600 transition hover:bg-violet-200">
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition hover:bg-blue-200">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-100 text-rose-500 transition hover:bg-rose-200">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col justify-between gap-4 border-t border-[#eef0f6] px-5 py-4 text-sm text-slate-500 md:flex-row md:items-center">
            <p>Hiển thị 5 trên 1,200 người dùng</p>

            <div className="flex items-center gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-400">
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600 font-semibold text-white">
                1
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700">
                2
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700">
                3
              </button>
              <span className="px-2 text-slate-400">...</span>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700">
                240
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagementWrapper;