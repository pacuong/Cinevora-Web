"use client";

import ProfileForm from "@/src/components/AccountProfile";
import GuideWrapper from "@/src/components/GuideWrapper";
import { UserProfile } from "@/src/interfaces/authUser";
import { updateUserProfile } from "@/src/services/authService";
import { useAuthSlice } from "@/src/stores/useAuth";
import { mapUserToUserProfile } from "@/src/utils/mapUserToUserProfile";
import { useShallow } from "zustand/react/shallow";
import { useEffect, useState } from "react";

const ProfileWrapper = () => {
  const [user, isInitialized] = useAuthSlice(
    useShallow((s) => [s.userAuthentication?.user, s.isInitialized]),
  );
  const updateProfile = useAuthSlice((s) => s.updateProfile);
  const profileAccount = user ? mapUserToUserProfile(user) : null;

  const handleUpdateProfile = async (data: UserProfile) => {
    if (!user) return;
    await updateUserProfile(user.id, data);
    updateProfile(data);
  };

  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <GuideWrapper />;
  }

  return (
    <div className="md:pb-17 lg:py-17">
      <ProfileForm
        onSubmitProfile={handleUpdateProfile}
        profileAccount={profileAccount}
      />
    </div>
  );
};

export default ProfileWrapper;
