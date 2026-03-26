"use client";

import { useRouter } from "next/navigation";
import ButtonComponent from "@/src/components/common/button";
import Image from "next/image";

const GuideWrapper = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/dang-nhap");
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="relative w-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] !text-white">
      <Image
        fill
        className="object-cover brightness-[0.35] contrast-[1.15]"
        src="/assets/images/guideImage.jpg"
        alt="Guide Background"
      />

      <div className="relative flex min-h-[300px] flex-col items-center justify-center px-5 py-10 text-center md:min-h-[400px] md:px-10 lg:min-h-[500px]">
        <div className="shadow-error text-4xl font-black tracking-[4px] text-red-60 md:text-5xl lg:text-6xl">
          Cinevora
        </div>

        <div className="shadow-error uppercase my-0 text-4xl font-black text-white md:text-5xl lg:text-6xl md:my-4">
          access denied
        </div>

        <h1 className="my-4 text-l text-gray-50 font-bold md:text-2xl lg:text-3xl">
          Bạn chưa đăng nhập
        </h1>

        <p className="max-w-xl text-gray-40 text-sm md:text-lg lg:text-xl">
          Để truy cập các chức năng như đặt vé, hồ sơ cá nhân hoặc đổi mật khẩu,
          bạn cần đăng nhập trước.
        </p>

        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <ButtonComponent onClick={handleLogin} name="Đăng nhập ngay" />
          <ButtonComponent onClick={handleBack} name="Về trang chủ" />
        </div>
      </div>
    </div>
  );
};

export default GuideWrapper;
