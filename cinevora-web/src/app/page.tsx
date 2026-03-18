"use client";

import AgeRestrictionModal from "@/src/components/AgeRestrictionModal";
import ButtonComponent from "@/src/components/common/button";
import FormError from "@/src/components/common/errorForm";
import InputComponent from "@/src/components/common/input";
import MenuComponent from "@/src/components/common/menu";
import ModalComponent from "@/src/components/common/modal";
import OfferHoverOverlay from "@/src/components/common/offerHoverOverlay";
import TabsComponent from "@/src/components/common/tabs";
import ConfirmProfile from "@/src/components/ConfirmProfile";
import DropdownComponent from "@/src/components/DropdownComponent";
import LoginModal from "@/src/components/LoginModal";
import OffersSection from "@/src/components/OffersSection";
import ScheduleDateSelector, {
  ShowDate,
} from "@/src/components/ScheduleDateSelector";
import SeatCinema from "@/src/components/Seat";
import SelectComponent from "@/src/components/Select";
import ShowtimeScheduleModal from "@/src/components/ShowtimeScheduleModal";
import { rows } from "@/src/constants/seat";
import {
  LoginUser,
  UserChangePassword,
  UserProfile,
} from "@/src/interfaces/authUser";
import { useState } from "react";
import Image from "next/image";
import NavBarComponent, { NavbarItem } from "@/src/components/Navbar";
import HeaderMobile from "@/src/components/HeaderMobile";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { footerDataMock } from "@/src/mocks/footerDataMock";
import ChangePassword from "@/src/components/ChangePassword";
import MovieCarousel from "@/src/components/Carousel";
import { MOCK_MOVIES } from "@/src/mocks/movieCard";
import BookingInfoPanel from "@/src/components/BookingInfoPanel";
import { Banner } from "@/src/components/Banner";
import { slides } from "@/src/mocks/slides";
import AccountSidebar from "@/src/components/AccountSidebar";
import { accountMenuItems } from "@/src/constants/settingsMenu";
import { useAuthSlice } from "@/src/stores/useAuth";
import { mapUserToUserProfile } from "@/src/utils/mapUserToUserProfile";
import { updateUserProfile } from "@/src/services/authService";
import ProfileForm from "@/src/components/AccountProfile";

export default function Home() {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "",
    phone: "",
    email: "",
  });
  const handleLogin = async (data: LoginUser) => {
    console.log("data login:", data);

    // ví dụ gọi API
    // await loginUser(data);

    // nếu lỗi thì throw để LoginModal setError
    // throw new Error("Sai tài khoản hoặc mật khẩu");
  };
  const dates: ShowDate[] = [
    { label: "T2", day: 17, month: 3, fullDate: "2026-03-17" },
    { label: "T3", day: 18, month: 3, fullDate: "2026-03-18" },
    { label: "T5", day: 19, month: 3, fullDate: "2026-03-19" },
    { label: "T6", day: 20, month: 3, fullDate: "2026-03-20" },
    { label: "T7", day: 21, month: 3, fullDate: "2026-03-21" },
    { label: "CN", day: 22, month: 3, fullDate: "2026-03-22" },
  ];
  const [selectedDate, setSelectedDate] = useState(dates[0].fullDate);
  const cityOptions = [
    { label: "Đà Nẵng", value: "da-nang" },
    { label: "Hà Nội", value: "ha-noi" },
    { label: "TP.HCM", value: "ho-chi-minh" },
  ];

  const [city, setCity] = useState("");
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const highlight = {
    title: "Ưu đãi nổi bật",
    description: "Khám phá các chương trình khuyến mãi hấp dẫn tại rạp",
  };

  const topImages = [
    {
      id: 1,
      image: "/assets/images/Deadpool-Wolverine.jpg",
      alt: "Promo 1",
      titlePromotion: "Giảm 50% vé xem phim",
    },
    {
      id: 2,
      image: "/assets/images/",
      alt: "Promo 2",
      titlePromotion: "Mua 1 tặng 1 bắp nước",
    },
  ];

  const gridImages = [
    {
      id: 3,
      image: "",
      alt: "Promo 3",
      titlePromotion: "Combo sinh viên",
    },
    {
      id: 4,
      image: "/images/promo4.jpg",
      alt: "Promo 4",
      titlePromotion: "Thứ 4 vui vẻ",
    },
    {
      id: 5,
      image: "/images/promo5.jpg",
      alt: "Promo 5",
      titlePromotion: "Ưu đãi thành viên",
    },
  ];
  const navList: NavbarItem[] = [
    {
      content: "Trang chủ",
      href: "/",
    },
    {
      content: "Phim",
      href: "/movies",
    },
    {
      content: "Rạp",
      href: "/cinemas",
    },
    {
      type: "dropdown",
      content: "Thành viên",
      placement: "bottomLeft",
      dropdownItems: [
        {
          key: "login",
          text: "Đăng nhập",
          href: "/login",
        },
        {
          key: "register",
          text: "Đăng ký",
          href: "/register",
        },
      ],
    },
  ];
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
    <div>
      {/* <InputComponent
        id="name"
        value={"hello"}
        placeholder="Nhập tên"
        onChange={(e) => setName(e.target.value)}
        className="text-red-70 border p-10"
      />

      <ButtonComponent name="hoa" variant="link" />
      <TabsComponent
        items={[
          {
            key: "1",
            label: "Tab 1",
            children: <div>Nội dung tab 1</div>,
          },
          {
            key: "2",
            label: "Tab 2",
            children: <div>Nội dung tab 2</div>,
          },
        ]}
      />
      <MenuComponent
        itemsData={[
          {
            key: 1,
            value: {
              label: "Trang chủ",
              link: "/",
            },
          },
          {
            key: 2,
            value: {
              label: "Phim đang chiếu",
              link: "/movies",
            },
          },
          {
            key: 3,
            value: {
              label: "Rạp",
              link: "/cinemas",
            },
          },
        ]}
        title="Danh mục"
      />
      <ModalComponent
        title="Thông tin phim"
        context={<p>Avatar 3 chuẩn bị chiếu</p>}
        modalWidth="600px"
        variant="default"
        isModalOpen={open}
        setIsModalOpen={setOpen}
      />
      <FormError error={{ message: "Email không hợp lệ" }} />
      <OfferHoverOverlay title="hi" />
      <DropdownComponent
        itemLink={[
          {
            key: "1",
            text: "Trang chủ",
            href: "/",
          },
          {
            key: "2",
            text: "Phim đang chiếu",
            href: "/movies",
          },
          {
            key: "3",
            text: "Đăng xuất",
            href: "/logout",
            isDanger: true,
          },
        ]}
        textLink="Tài khoản"
        className="border border-red-70"
      />

      <>
        <button onClick={() => setOpen(true)}>Mở Age Modal</button>

        <AgeRestrictionModal
          ageClassification="C18"
          open={open}
          onClose={() => setOpen(false)}
          onAgree={() => {
            console.log("Đồng ý");
            setOpen(false);
          }}
        />
      </>
      <>
        <button onClick={() => setOpen(true)}>Xác nhận thông tin</button>

        <ConfirmProfile
          open={open}
          profile={profile}
          onClose={() => setOpen(false)}
          onClickConfirm={() => {
            console.log("Confirm profile", profile);
            setOpen(false);
          }}
          onProfile={(data) => {
            setProfile(data);
          }}
        />
      </>
      <>
        <button onClick={() => setOpen(true)}>Mở modal đăng nhập</button>

        <LoginModal
          open={open}
          onClose={() => setOpen(false)}
          onLogin={handleLogin}
        />
      </>
      <ScheduleDateSelector
        dates={dates}
        selected={selectedDate}
        onSelect={(date) => setSelectedDate(date)}
      />
      <>
        <button onClick={() => setOpen(true)}>Mở lịch chiếu</button>

        <ShowtimeScheduleModal
          isModalOpen={open}
          setIsModalOpen={setOpen}
          movieId="movie_123"
        />
      </>
      <SelectComponent
        label="Thành phố"
        name="city"
        value={city}
        options={cityOptions}
        placeholder="Chọn thành phố"
        onChange={setCity}
      />
      <SeatCinema
        rows={rows}
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
      />
      <OffersSection
        highlight={highlight}
        topImages={topImages}
        gridImages={gridImages}
      />
      <NavBarComponent navList={navList} />
      <HeaderMobile />
      <hr /> */}
      <Header />
      <Footer
        socialLinks={footerDataMock.socialLinks}
        brand={footerDataMock.brand}
        map={footerDataMock.map}
        metiz={footerDataMock.metiz}
        navigation={footerDataMock.navigation}
        bottomInfo={footerDataMock.bottomInfo}
        companyInfo={footerDataMock.companyInfo}
        notify={footerDataMock.notify}
      />
      <ChangePassword
        onSubmitChangePasswor={function (data: UserChangePassword): void {
          throw new Error("Function not implemented.");
        }}
      />
      <MovieCarousel movies={MOCK_MOVIES} />
      <Banner slides={slides} />
      <AccountSidebar accountMenuItems={accountMenuItems} />
      <ProfileForm
        onSubmitProfile={handleUpdateProfile}
        profileAccount={profileAccount}
      />
      ;
    </div>
  );
}
