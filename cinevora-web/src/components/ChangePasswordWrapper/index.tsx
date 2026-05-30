"use client";

import ChangePassword from "@/src/components/ChangePassword";
import GuideWrapper from "@/src/components/GuideWrapper";
import { UserChangePassword } from "@/src/interfaces/authUser";
import { changeUserPassword } from "@/src/services/authService";
import { useAuthSlice } from "@/src/stores/useAuth";
import { useShallow } from "zustand/react/shallow";

const ChangePasswordWrapper = () => {
  const [user, isInitialized] = useAuthSlice(
    useShallow((s) => [s.userAuthentication?.user, s.isInitialized]),
  );

  const handleChangePassword = async (data: UserChangePassword) => {
    if (!user) return;

    await changeUserPassword(user.id, data.newPassword);

    alert("Đổi mật khẩu thành công");
  };

  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <GuideWrapper
        title='Access Denied'
        subtitle='Bạn chưa đăng nhập'
        description='Vui lòng đăng nhập để sử dụng chức năng đổi mật khẩu.'
        primaryButtonText='Đăng nhập ngay'
        primaryButtonHref='/dang-nhap'
        secondaryButtonText='Trang chủ'
        secondaryButtonHref='/'
      />
    );
  }

  return (
    <>
      <ChangePassword onSubmitChangePasswor={handleChangePassword} />
    </>
  );
};

export default ChangePasswordWrapper;
