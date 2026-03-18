import { Profile } from "@/src/components/ConfirmProfile";
import { User } from "@/src/interfaces/authUser";

export const mapUserToProfile = (user: User): Profile => ({
  fullName: user.fullName,
  phone: user.phone,
  email: user.email,
});
