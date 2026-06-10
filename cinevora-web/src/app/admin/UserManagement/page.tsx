import { Metadata } from "next";
import UserManagementWrapper from "@/src/components/UserManagementWrapper";

export const metadata: Metadata = {
  title: "Quản Lý Người Dùng",
  description: "Cinevora website",
};

const UserManagementPage = () => {
  return <UserManagementWrapper />;
};

export default UserManagementPage;