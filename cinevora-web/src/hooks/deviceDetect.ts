"use client";

import { useEffect, useState } from "react";

export const useCustomDevice = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 767;
  const isTablet = width >= 768 && width < 1440;
  const isDesktop = width >= 1440;

  return { isMobile, isTablet, isDesktop, width };
};
