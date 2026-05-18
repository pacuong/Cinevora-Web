"use client";

import Layout from "@/src/app/siteLayout";
import TabsComponent from "@/src/components/common/tabs";
import LoginForm from "@/src/components/FormLogin";
import useToast from "@/src/components/ToastContext";
import { authuTabs } from "@/src/constants/authTab";
import { AUTH_TAB_KEYS } from "@/src/constants/authTabKey";
import PAGEURL from "@/src/constants/pageUrl";
import { TOAST_MESSAGE } from "@/src/constants/toastMessage";
import { useCustomDevice } from "@/src/hooks/deviceDetect";
import { useToastMessage } from "@/src/hooks/useAuthMessage";
import { LoginUser } from "@/src/interfaces/authUser";
import { useAuthSlice } from "@/src/stores/useAuth";
import { usePathname, useRouter } from "next/navigation";

const LoginWrapper = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { isDesktop } = useCustomDevice();
  const { addToast } = useToast();
  const { handleToastErrorMessage } = useToastMessage();

  const activeTabKey = pathname.includes(AUTH_TAB_KEYS.REGISTER)
    ? AUTH_TAB_KEYS.REGISTER
    : AUTH_TAB_KEYS.LOGIN;

  const handleAuthTabChange = (key: string) => {
    if (key === activeTabKey) return;
    router.push(PAGEURL.REGISTER);
  };
  const login = useAuthSlice((state) => state.login);

  const handleLogin = async (data: LoginUser) => {
    try {
      const response = await login(data);

      if (response.user.role !== "customer") {
        useAuthSlice.getState().logout();
        alert("Tài khoản admin không được đăng nhập ở đây");
        return;
      }

      addToast(
        TOAST_MESSAGE.LOGIN_SUCCESS.message,
        TOAST_MESSAGE.LOGIN_SUCCESS.type,
      );

      router.push("/");
    } catch (error: unknown) {
      const message = handleToastErrorMessage(
        error,
        TOAST_MESSAGE.LOGIN_ERROR.message,
      );

      addToast(message, TOAST_MESSAGE.LOGIN_ERROR.type);
    }
  };

  return (
    <Layout>
      <div className="auth-tabs-wrapper pt-18 pb-14">
        {isDesktop && (
          <TabsComponent
            activeKey={activeTabKey}
            onTabClick={handleAuthTabChange}
            className="background-btn"
            items={authuTabs}
          />
        )}

        <LoginForm onLogin={handleLogin} />
      </div>
    </Layout>
  );
};

export default LoginWrapper;
