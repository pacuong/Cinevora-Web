"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAuthSlice } from "@/src/stores/useAuth";

const AuthSessionBridge = () => {
  const pathname = usePathname();
  const isInitialized = useAuthSlice((state) => state.isInitialized);
  const backupUserSession = useAuthSlice((state) => state.backupUserSession);
  const restoreUserSession = useAuthSlice((state) => state.restoreUserSession);

  useEffect(() => {
    if (!isInitialized) return;

    if (pathname.startsWith("/admin")) {
      backupUserSession();
      return;
    }

    restoreUserSession();
  }, [pathname, isInitialized, backupUserSession, restoreUserSession]);

  return null;
};

export default AuthSessionBridge;