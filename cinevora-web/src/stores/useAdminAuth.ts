import { AuthResponse, LoginUser } from "@/src/interfaces/authUser";
import { authLogin } from "@/src/services/authService";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AdminAuthState {
  adminAuthentication: AuthResponse | null;
  loginAdmin: (data: LoginUser) => Promise<AuthResponse>;
  logoutAdmin: () => void;
  isInitialized: boolean;
  setInitialized: (state: boolean) => void;
}

export const useAdminAuthSlice = create(
  persist<AdminAuthState>(
    (set) => ({
      adminAuthentication: null,
      isInitialized: false,
      setInitialized: (state) => set({ isInitialized: state }),

      loginAdmin: async (data) => {
        const response = await authLogin(data);

        if (response.user.role !== "Admin") {
          alert("Tài khoản này không phải admin");
          return Promise.reject(new Error("NOT_ADMIN"));
        }

        set({ adminAuthentication: response });
        return response;
      },

      logoutAdmin: () => {
        localStorage.removeItem("admin-storage");
        set({
          adminAuthentication: null,
          isInitialized: true,
        });
      },
    }),
    {
      name: "admin-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setInitialized(true);
      },
    },
  ),
);