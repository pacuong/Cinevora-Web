"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAdminAuthSlice } from "@/src/stores/useAdminAuth";
import AdminWrapper from "@/src/components/AdminWrapper";

const AdminPage = () => {
  const router = useRouter();

  const adminAuthentication = useAdminAuthSlice(
    (state) => state.adminAuthentication,
  );
  const isInitialized = useAdminAuthSlice((state) => state.isInitialized);

  useEffect(() => {
    if (!isInitialized) return;

    if (!adminAuthentication || adminAuthentication.user.role !== "admin") {
      router.push("/admin/login");
    }
  }, [isInitialized, adminAuthentication, router]);

  if (!isInitialized) {
    return null;
  }

  if (!adminAuthentication || adminAuthentication.user.role !== "admin") {
    return null;
  }

  return <AdminWrapper />;
};

export default AdminPage;