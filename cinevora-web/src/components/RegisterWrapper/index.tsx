"use client";

import { usePathname, useRouter } from "next/navigation";
import { getApiErrorMessage } from "@/src/utils/getApiErrorMessage";
import { useAuthSlice } from "@/src/stores/useAuth";
import { UserRegister } from "@/src/interfaces/authUser";
import { useCustomDevice } from "@/src/hooks/deviceDetect";
import { AUTH_TAB_KEYS } from "@/src/constants/authTabKey";
import { authuTabs } from "@/src/constants/authTab";
import TabsComponent from "@/src/components/common/tabs";
import FormRegister from "@/src/components/FormRegister";
import pageUrl from "@/src/constants/pageUrl";
import Layout from "@/src/app/siteLayout";
import { useToastMessage } from "@/src/hooks/useAuthMessage";
import useToast from "@/src/components/ToastContext";
import { TOAST_MESSAGE } from "@/src/constants/toastMessage";

const RegisterWrapper = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { isDesktop } = useCustomDevice();
  const { addToast } = useToast();

  const activeTabKey = pathname.includes(AUTH_TAB_KEYS.LOGIN)
    ? AUTH_TAB_KEYS.LOGIN
    : AUTH_TAB_KEYS.REGISTER;

  const handleAuthTabChange = (key: string) => {
    if (key === AUTH_TAB_KEYS.LOGIN) {
      router.push(pageUrl.LOGIN);
    }
  };
  const { message, type, clear, handleToastErrorMessage } = useToastMessage();
  const register = useAuthSlice((state) => state.register);
  const handleOnRegister = async (data: UserRegister) => {
    try {
      await register(data);
      addToast(
        TOAST_MESSAGE.REGISTER_SUCCESS.message,
        TOAST_MESSAGE.REGISTER_SUCCESS.type,
      );
      router.push("/");
    } catch (error: unknown) {
      handleToastErrorMessage(error, TOAST_MESSAGE.REGISTER_ERROR.message);
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
        <FormRegister
          onUserName={handleOnRegister}
          messageRegister={message}
          typeRegister={type}
          clearMessage={clear}
        />
      </div>
    </Layout>
  );
};

export default RegisterWrapper;
