import {
  AuthResponse,
  LoginUser,
  RegisterPayload,
  UserProfile,
  UserRegister,
} from "@/src/interfaces/authUser";
import { authLogin, authRegister } from "@/src/services/authService";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserAction {
  userAuthentication: AuthResponse | null;
  login: (data: LoginUser) => Promise<AuthResponse>;
  register: (data: UserRegister) => Promise<AuthResponse>;
  updateProfile: (profile: UserProfile) => void;
  logout: () => void;
  isInitialized: boolean;
  setInitialized: (state: boolean) => void;
}
export const useAuthSlice = create(
  persist<UserAction>(
    (set) => ({
      userAuthentication: null,
      isInitialized: false,
      setInitialized: (state) => set({ isInitialized: state }),
      login: async (data) => {
        const response = await authLogin(data);
        set({ userAuthentication: response });
        return response;
      },
      // TODO: add recaptcha
      register: async (data) => {
        const { confirmPassword, ...rest } = data;

        const payload: RegisterPayload = {
          ...rest,
          recaptchaToken: "test-recaptcha-token",
        };
        const response = await authRegister(payload);
        set({ userAuthentication: response });
        return response;
      },
      logout: () => {
        localStorage.removeItem("user-storage");
        set({ userAuthentication: null });
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
