"use client";

import AccountSidebar from "@/src/components/AccountSidebar";
import GuideWrapper from "@/src/components/GuideWrapper";
import { accountMenuItems } from "@/src/constants/settingsMenu";
import { useAuthSlice } from "@/src/stores/useAuth";

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  const user = useAuthSlice((s) => s.userAuthentication?.user);
  return (
    <div className="flex flex-col justify-center gap-10 lg:gap-20 lg:flex-row">
      {user && <AccountSidebar accountMenuItems={accountMenuItems} />}
      {children}
    </div>
  );
};

export default AccountLayout;
