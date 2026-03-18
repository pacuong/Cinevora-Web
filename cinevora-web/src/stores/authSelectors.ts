import { Profile } from "@/src/components/ConfirmProfile";
import { AuthResponse } from "@/src/interfaces/authUser";
import { mapUserToProfile } from "@/src/utils/userMapper";

export const selectProfile = (auth: AuthResponse | null): Profile | null => {
  if (!auth?.user) return null;
  return mapUserToProfile(auth.user);
};
