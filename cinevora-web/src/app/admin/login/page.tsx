"use client";

import LoginForm from "@/src/components/FormLogin";
import { LoginUser } from "@/src/interfaces/authUser";
import { useAdminAuthSlice } from "@/src/stores/useAdminAuth";
import { useAuthMessageStore } from "@/src/stores/useAuthMessageStore";
import { getApiErrorMessage } from "@/src/utils/getApiErrorMessage";
import { useRouter } from "next/navigation";

const AdminLoginPage = () => {
  const router = useRouter();
  const { setSuccess, setError } = useAuthMessageStore();
  const loginAdmin = useAdminAuthSlice((state) => state.loginAdmin);

  const handleAdminLogin = async (data: LoginUser) => {
    try {
      const response = await loginAdmin(data);

      if (response.user.role !== "admin") {
        useAdminAuthSlice.getState().logoutAdmin();
        alert("Tài khoản này không phải admin");
        return;
      }

      setSuccess("Đăng nhập admin thành công");
      router.push("/admin");
    } catch (error: unknown) {
      setError(getApiErrorMessage(error, "Đăng nhập admin thất bại"));
    }
  };

  return (
    <div className=" flex items-center justify-center pt-18 pb-14">
      <LoginForm onLogin={handleAdminLogin} />
    </div>
  );
};

export default AdminLoginPage;