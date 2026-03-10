import { User, UserProfile } from "@/src/interfaces/authUser";

export const mapUserToUserProfile = (user: User): UserProfile => ({
  fullName: user.fullName,
  dateOfBirth: user.dateOfBirth,
  email: user.email,
  phone: user.phone,
  city: user.city,
  district: user.district,
  address: user.address,
  sex: user.sex,
  IDCardNumber: user.IDCardNumber,
});