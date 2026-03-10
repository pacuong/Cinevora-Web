import { AuthResponse, LoginUser, RegisterPayload, UserProfile } from '@/src/interfaces/authUser';
import { authLogin, authRegister } from '@/src/services/authService';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface UserAction {
  userAuthentication: AuthResponse | null;
  login: (data: LoginUser) => Promise<AuthResponse>;
  register: (data: RegisterPayload) => Promise<AuthResponse>;
  updateProfile: (profile: UserProfile) => void;
  logout: () => void;
}
export const useAuthSlice = create(
  persist<UserAction>(
    (set) => ({
      userAuthentication: null,
      login: async (data) => {
        const response = await authLogin(data);
        set({ userAuthentication: response });
        return response;
      },
      register: async (data) => {
        const response = await authRegister(data);
        set({ userAuthentication: response });
        return response;
      },
      logout: () => {
        localStorage.removeItem('user-storage');
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
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);