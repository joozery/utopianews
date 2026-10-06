"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { finishPageNavigation } from "@/lib/page-navigation";
export function NavigationScroll() {
  const pathname = usePathname();
  useEffect(() => {
    finishPageNavigation(pathname);
  }, [pathname]);
  return null;
}
