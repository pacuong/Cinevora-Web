"use client";

import ProfileForm from "@/src/components/AccountProfile";
import { UserProfile } from "@/src/interfaces/authUser";
import { updateUserProfile } from "@/src/services/authService";
import { useAuthSlice } from "@/src/stores/useAuth";
import { mapUserToUserProfile } from "@/src/utils/mapUserToUserProfile";

const ProfilePage = () => {
  const user = useAuthSlice((s) => s.userAuthentication?.user);
  const updateProfile = useAuthSlice((s) => s.updateProfile);
  const profileAccount = user ? mapUserToUserProfile(user) : null;
  console.log(profileAccount);
  const handleUpdateProfile = async (data: UserProfile) => {
    if (!user) return;
    await updateUserProfile(user.id, data);
    updateProfile(data);
  };

  return (
    <ProfileForm
      onSubmitProfile={handleUpdateProfile}
      profileAccount={profileAccount}
    />
  );
};

export default ProfilePage;
