"use client";

import TabsComponent from "@/src/components/common/tabs";
import LoginForm from "@/src/components/FormLogin";
import { authuTabs } from "@/src/constants/authTab";
import { AUTH_TAB_KEYS } from "@/src/constants/authTabKey";
import PAGEURL from "@/src/constants/pageUrl";
import { useCustomDevice } from "@/src/hooks/deviceDetect";
import { LoginUser } from "@/src/interfaces/authUser";
import { useAuthSlice } from "@/src/stores/useAuth";
import { useAuthMessageStore } from "@/src/stores/useAuthMessageStore";
import { getApiErrorMessage } from "@/src/utils/getApiErrorMessage";
import { usePathname, useRouter } from "next/navigation";

const LoginPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { isDesktop } = useCustomDevice();

  const activeTabKey = pathname.includes(AUTH_TAB_KEYS.REGISTER)
    ? AUTH_TAB_KEYS.REGISTER
    : AUTH_TAB_KEYS.LOGIN;

  const handleAuthTabChange = (key: string) => {
    if (key === activeTabKey) return;
    router.push(PAGEURL.REGISTER);
  };
  const { setSuccess, setError } = useAuthMessageStore();
  const login = useAuthSlice((state) => state.login);
  const handleLogin = async (data: LoginUser) => {
    try {
      await login(data);
      setSuccess("Đăng nhập thành công");
      // add loading indicator
      router.push("/");
    } catch (error: unknown) {
      setError(getApiErrorMessage(error, "Đăng nhập thất bại"));
    }
  };

  return (
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
  );
};

export default LoginPage;
