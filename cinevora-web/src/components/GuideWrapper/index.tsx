"use client";

import { useRouter } from "next/navigation";
import ButtonComponent from "@/src/components/common/button";
import Image from "next/image";

type GuideWrapperProps = {
  title: string;
  subtitle?: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  backgroundImage?: string;
};

const GuideWrapper = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  backgroundImage = "/assets/images/guideImage.jpg",
}: GuideWrapperProps) => {
  const router = useRouter();

  return (
    <div className='relative w-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] !text-white'>
      <Image
        fill
        className='object-cover brightness-[0.35] contrast-[1.15]'
        src={backgroundImage}
        alt='Guide Background'
      />

      <div className='relative flex min-h-[300px] flex-col items-center justify-center px-5 py-10 text-center md:min-h-[400px] md:px-10 lg:min-h-[500px]'>
        <div className='shadow-error text-4xl font-black tracking-[4px] text-red-60 md:text-5xl lg:text-6xl'>
          Cinevora
        </div>

        <div className='shadow-error uppercase my-0 text-4xl font-black text-white-100 md:text-5xl lg:text-6xl md:my-4'>
          {title}
        </div>

        {subtitle && (
          <h1 className='my-4 text-l text-white-100 font-bold md:text-2xl lg:text-3xl'>
            {subtitle}
          </h1>
        )}

        <p className='max-w-xl text-white-100 text-sm md:text-lg lg:text-xl'>
          {description}
        </p>

        <div className='mt-10 flex gap-4 flex-wrap justify-center'>
          <ButtonComponent
            onClick={() => router.push(primaryButtonHref)}
            name={primaryButtonText}
          />

          {secondaryButtonText && secondaryButtonHref && (
            <ButtonComponent
              onClick={() => router.push(secondaryButtonHref)}
              name={secondaryButtonText}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GuideWrapper;
