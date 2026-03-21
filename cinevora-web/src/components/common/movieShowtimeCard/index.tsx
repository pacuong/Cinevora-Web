"use client";

import AgeRestrictionModal, {
  MovieAgeClassification,
} from "@/src/components/AgeRestrictionModal";
import ConfirmProfile from "@/src/components/ConfirmProfile";
import LoginModal from "@/src/components/LoginModal";
import PAGEURL from "@/src/constants/pageUrl";
import { MovieShowtimeCardProps } from "@/src/interfaces/movieSchedule";
import { useBookingStore } from "@/src/stores/bookingStore";
import { useAuthSlice } from "@/src/stores/useAuth";
import { mapUserToProfile } from "@/src/utils/userMapper";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const MovieShowtimeCard = ({
  title,
  className,
  age,
  posterUrl,
  showtimes,
}: MovieShowtimeCardProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);
  const [openAgeModal, setOpenAgeModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openConfirmProfile, setOpenConfirmProfile] = useState(false);
  const login = useAuthSlice((state) => state.login);
  const userAuthentication = useAuthSlice((state) => state.userAuthentication);
  const setShowtime = useBookingStore((s) => s.setShowtime);
  const router = useRouter();

  const handleClickConfirm = () => {
    router.push(`${PAGEURL.BOOKING_PAGE}`);
  };

  const openConfirm = (index: number) => {
    setSelectedIndex(index);
    setShowtime({
      time: showtimes[index].time,
    });
    setOpenConfirmProfile(true);
    setPendingIndex(null);
  };

  const user = userAuthentication?.user;
  const profileData = useMemo(
    () => (user ? mapUserToProfile(user) : undefined),
    [user],
  );

  const handleSelectShowtime = (index: number) => {
    setPendingIndex(index);

    if (age && age !== "P") {
      setOpenAgeModal(true);
      return;
    }

    if (!userAuthentication) {
      setOpenLoginModal(true);
      return;
    }

    openConfirm(index);
  };

  const handleCloseAgeModal = () => {
    setOpenAgeModal(false);
    setPendingIndex(null);
  };

  const handleConfirmAge = () => {
    setOpenAgeModal(false);

    if (!userAuthentication) {
      setOpenLoginModal(true);
      return;
    }

    if (pendingIndex !== null) {
      openConfirm(pendingIndex);
      setPendingIndex(null);
    }
  };

  const handleCloseLoginModal = () => {
    setOpenLoginModal(false);
    setPendingIndex(null);
  };

  const handleCloseConfirmProfile = () => {
    setOpenConfirmProfile(false);
  };

  return (
    <>
      <div className="px-7 max-w-[1106px] m-auto">
        <h3 className="font-bold mb-9 mt-10 uppercase text-md">
          {title} <span>({age})</span>
        </h3>

        <div className="flex flex-col lg:flex-row ml-6">
          <div className="">
            <img
              src={posterUrl}
              alt={title}
              className="w-[117px] h-[166px] object-cover mb-5"
            />
          </div>

          <div className="lg:px-20">
            <div className={className}>
              {showtimes.map((showtime, index) => {
                const isSelected = selectedIndex === index;

                return (
                  <button
                    key={`${showtime.time}-${showtime.room}-${index}`}
                    onClick={() => handleSelectShowtime(index)}
                    className={`
                    showtime-card cursor-pointer mb-5
                    w-[115px] h-[78px] p-0
                    lg:hover:bg-orange-100 lg:hover:text-white-100 lg:hover:border-0
                    ${isSelected ? "bg-orange-100 text-white-100" : "bg-white-100 text-black-100"}
                  `}
                  >
                    <p className="font-semibold text-l">{showtime.time}</p>
                    {!isSelected && <hr className="divider" />}
                    <p className="text-sm font-normal">Phòng chiếu</p>
                    <p className="text-sm font-normal">{showtime.room}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {age && age !== "P" && (
        <AgeRestrictionModal
          ageClassification={age as MovieAgeClassification}
          open={openAgeModal}
          onClose={handleCloseAgeModal}
          onAgree={handleConfirmAge}
        />
      )}
      <LoginModal
        open={openLoginModal}
        onClose={handleCloseLoginModal}
        onLogin={async (data) => {
          await login(data);
          setOpenLoginModal(false);
          if (pendingIndex !== null) {
            openConfirm(pendingIndex);
          }
          // router.push("/booking");
        }}
      />
      {openConfirmProfile && profileData && (
        <ConfirmProfile
          onClickConfirm={handleClickConfirm}
          open
          profile={profileData}
          onClose={handleCloseConfirmProfile}
          onProfile={handleCloseConfirmProfile}
        />
      )}
    </>
  );
};

export default MovieShowtimeCard;
