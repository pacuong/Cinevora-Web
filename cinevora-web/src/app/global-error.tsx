"use client";

import { useRouter } from "next/navigation";
import ButtonComponent from "@/src/components/common/button";
import Image from "next/image";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = ({ reset, error }: ErrorPageProps) => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/");
  };
  const handleReset = () => {
    reset();
  };
  return (
    <div className="relative w-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] !text-white">
      <Image
        fill
        className="object-cover brightness-[0.35] contrast-[1.15]"
        src="/assets/images/errorPhotography.jpg"
        alt={"Image Error"}
      />
      <div className="relative flex min-h-[300px] flex-col items-center justify-center px-5 py-10 text-center md:min-h-[400px] md:px-10 lg:min-h-[500px]">
        <div
          className={`${"shadow-error"} text-4xl font-black tracking-[4px] text-red-60 md:text-5xl lg:text-6xl`}
        >
          Cinevora
        </div>
        <div
          className={`${"shadow-error"} uppercase my-0 text-4xl font-black text-white text-red-60 md:text-5xl lg:text-6xl md:my-4`}
        >
          error
        </div>
        <h1 className="my-4 text-l text-gray-50 font-bold md:text-2xl lg:text-3xl">
          An unexpected error occurred
        </h1>
        <div className="mt-10 flex gap-4">
          <ButtonComponent onClick={handleReset} name="Thử lại" />
          <ButtonComponent onClick={handleBack} name="Về trang chủ" />
        </div>
        <div>{error.digest && <p>Error Code: {error.digest}</p>}</div>
      </div>
    </div>
  );
};

export default Error;
