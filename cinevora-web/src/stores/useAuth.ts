import {
  AuthResponse,
  LoginUser,
  RegisterPayload,
  UserProfile,
} from "@/src/interfaces/authUser";
import { authLogin, authRegister } from "@/src/services/authService";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserAction {
  userAuthentication: AuthResponse | null;
  userBackup: AuthResponse | null;

  login: (data: LoginUser) => Promise<AuthResponse>;
  register: (data: RegisterPayload) => Promise<AuthResponse>;
  updateProfile: (profile: UserProfile) => void;

  logout: () => void;
  backupUserSession: () => void;
  restoreUserSession: () => void;

  isInitialized: boolean;
  setInitialized: (state: boolean) => void;
}

export const useAuthSlice = create(
  persist<UserAction>(
    (set, get) => ({
      userAuthentication: null,
      userBackup: null,

      isInitialized: false,
      setInitialized: (state) => set({ isInitialized: state }),

      login: async (data) => {
        const response = await authLogin(data);

        set({
          userAuthentication: response,
        });

        return response;
      },

      register: async (data) => {
        const response = await authRegister(data);

        set({
          userAuthentication: response,
        });

        return response;
      },

      logout: () => {
        localStorage.removeItem("user-storage");
        set({
          userAuthentication: null,
          userBackup: null,
        });
      },

      backupUserSession: () => {
        const currentUser = get().userAuthentication;
        const currentBackup = get().userBackup;

        if (!currentUser) return;
        if (currentBackup) return;
        if (currentUser.user.role !== "user") return;

        set({
          userBackup: currentUser,
          userAuthentication: null,
        });
      },

      restoreUserSession: () => {
        const currentUser = get().userAuthentication;
        const currentBackup = get().userBackup;

        if (currentUser) return;
        if (!currentBackup) return;

        set({
          userAuthentication: currentBackup,
          userBackup: null,
        });
      },

      updateProfile: (profile) =>
        set((state) => {
          if (!state.userAuthentication) return state;

          return {
            userAuthentication: {
              ...state.userAuthentication,
              user: {
                ...state.userAuthentication.user,
                ...profile,
              },
            },
          };
        }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setInitialized(true);
      },
    },
  ),
);