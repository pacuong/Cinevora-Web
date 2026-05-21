export interface LoginUser {
  email: string;
  password: string;
}

export type UserRole = "customer" | "admin";

export interface UserRegister {
  fullName: string;
  dateOfBirth: string;
  email: string;
  password: string;
  phone: string;
  confirmPassword: string;
  city: string;
  district: string;
  address: string;
  sex: string;
  IDCardNumber: string;
  role?: UserRole;
}

export interface User extends UserRegister {
  id: string;
  role: UserRole;
}

export interface AuthResponse {
  accessToken: string;
  user: User;
}

export interface RegisterPayload {
  fullName: string;
  dateOfBirth: string;
  email: string;
  password: string;
  phone: string;
  city: string;
  district: string;
  address: string;
  sex: string;
  IDCardNumber: string;
  recaptchaToken: string;
  role?: UserRole;
}

export interface UserProfile {
  fullName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  city: string;
  district: string;
  address: string;
  sex: string;
  IDCardNumber: string;
}

export interface UserChangePassword {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}
