"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "@/assets/nprogress.css"; // atau public/nprogress.css kalau dari public

export default function NProgressProvider() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.configure({
      easing: "ease",
      speed: 1000, // kamu bisa ganti ini
      showSpinner: false,
    });

    NProgress.start();

    const timeout = setTimeout(() => {
      NProgress.done();
    }, 1000); // tambahkan delay agar bar terlihat

    return () => {
      clearTimeout(timeout);
      NProgress.done();
    };
  }, [pathname]);

  return null;
}
