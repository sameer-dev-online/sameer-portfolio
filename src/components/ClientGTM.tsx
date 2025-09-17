"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ClientGTM() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      (window as any).dataLayer?.push({
        event: "pageview",
        page: pathname,
      });
    }
  }, [pathname]);

  return null;
}
