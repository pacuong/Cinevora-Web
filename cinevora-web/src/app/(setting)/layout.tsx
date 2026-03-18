import AccountSidebar from "@/src/components/AccountSidebar";
import { accountMenuItems } from "@/src/constants/settingsMenu";

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center md:pb-17 lg:py-17 gap-10 lg:gap-20 lg:flex-row">
      <AccountSidebar accountMenuItems={accountMenuItems} />
      {children}
    </div>
  );
};

export default AccountLayout;
