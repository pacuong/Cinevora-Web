import {
  AuthResponse,
  LoginUser,
  RegisterPayload,
  UserProfile,
} from "@/src/interfaces/authUser";
import fetchApi from "@/src/services/fetchApi";

export const authRegister = async (
  data: RegisterPayload,
): Promise<AuthResponse> => {
  const response = await fetchApi.post<AuthResponse>("/users", data);
  return response.data;
};

export const authLogin = async (data: LoginUser): Promise<AuthResponse> => {
  const response = await fetchApi.post<AuthResponse>("/login", data);
  return response.data;
};

export const updateUserProfile = async (id: string, data: UserProfile) => {
  const response = await fetchApi.patch(`/users/${id}`, data);
  return response.data;
};

export const changeUserPassword = async (id: string, newPassword: string) => {
  return fetchApi.patch(`/users/${id}`, {
    password: newPassword,
  });
};
