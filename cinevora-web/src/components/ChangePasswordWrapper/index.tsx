"use client";

import ChangePassword from "@/src/components/ChangePassword";
import { UserChangePassword } from "@/src/interfaces/authUser";
import { changeUserPassword } from "@/src/services/authService";
import { useAuthSlice } from "@/src/stores/useAuth";

const ChangePasswordWrapper = () => {
  const user = useAuthSlice((s) => s.userAuthentication?.user);

  const handleChangePassword = async (data: UserChangePassword) => {
    if (!user) return;

    await changeUserPassword(user.id, data.newPassword);

    alert("Đổi mật khẩu thành công");
  };

  return <ChangePassword onSubmitChangePasswor={handleChangePassword} />;
};

export default ChangePasswordWrapper;
