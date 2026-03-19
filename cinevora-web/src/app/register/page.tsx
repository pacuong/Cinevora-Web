"use client";

import { usePathname, useRouter } from "next/navigation";
import { getApiErrorMessage } from "@/src/utils/getApiErrorMessage";
import { useAuthSlice } from "@/src/stores/useAuth";
import { useAuthMessageStore } from "@/src/stores/useAuthMessageStore";
import { UserRegister } from "@/src/interfaces/authUser";
import { useCustomDevice } from "@/src/hooks/deviceDetect";
import { AUTH_TAB_KEYS } from "@/src/constants/authTabKey";
import { authuTabs } from "@/src/constants/authTab";
import TabsComponent from "@/src/components/common/tabs";
import FormRegister from "@/src/components/FormRegister";
import pageUrl from "@/src/constants/pageUrl";
import Layout from "../siteLayout";

const RegisterPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { isDesktop } = useCustomDevice();

  const activeTabKey = pathname.includes(AUTH_TAB_KEYS.LOGIN)
    ? AUTH_TAB_KEYS.LOGIN
    : AUTH_TAB_KEYS.REGISTER;

  const handleAuthTabChange = (key: string) => {
    if (key === AUTH_TAB_KEYS.LOGIN) {
      router.push(pageUrl.LOGIN);
    }
  };
  const { setSuccess, setError } = useAuthMessageStore();
  const register = useAuthSlice((state) => state.register);
  const handleOnRegister = async (data: UserRegister) => {
    try {
      const { ...payload } = data;
      await register(payload);
      setSuccess("Đăng ký thành công");
      router.push("/");
    } catch (error: unknown) {
      setError(getApiErrorMessage(error, "Đăng ký thất bại"));
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
        <FormRegister onUserName={handleOnRegister} />
      </div>
    </Layout>
  );
};

export default RegisterPage;
