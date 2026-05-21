export type UserRole = "admin" | "customer";
export type UserStatus = "Hoạt động" | "Đã khóa";

export type UserItem = {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  role: UserRole;
  status: UserStatus;
  createdDate: string;
  createdTime: string;
  avatar: string;
  enabled: boolean;
};