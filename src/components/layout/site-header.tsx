"use client";

import Link from "@/components/shared/page-link";
import { usePathname } from "next/navigation";
import { getActiveNavigationHref } from "@/lib/active-navigation";
import { useEffect, useState } from "react";
import { getCategoryHref } from "@/data/categories";
import { categories } from "@/data/stories";
import { Logo } from "@/components/shared/logo";
import { SocialMarks } from "@/components/shared/social-marks";

export function SiteHeader({
  onSearch,
  onMenu,
  solid = false,
}: {
  onNavigate: (category: string) => void;
  onSearch: () => void;
  onMenu: () => void;
  solid?: boolean;
}) {
  const activeHref = getActiveNavigationHref(usePathname());
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header masthead${solid || scrolled ? " is-scrolled" : ""}`}
    >
      <div className="header-inner">
        <SocialMarks />
        <Link
          href="/"
          className="masthead-brand"
          aria-label="Utopia News หน้าหลัก"
        >
          <Logo light />
        </Link>
        <nav className="desktop-nav" aria-label="เมนูหลัก">
          <Link href="/" aria-current={activeHref === "/" ? "page" : undefined}>
            หน้าแรก
          </Link>
          {categories.map((c) => (
            <Link
              key={c}
              href={getCategoryHref(c)}
              aria-current={
                activeHref === getCategoryHref(c) ? "page" : undefined
              }
            >
              {c === "ทั้งหมด" ? "ทั้งหมด" : c}
            </Link>
          ))}
          <Link
            href="/categories/business"
            aria-current={
              activeHref === "/categories/business" ? "page" : undefined
            }
          >
            ธุรกิจ
          </Link>
          <Link
            href="/events"
            aria-current={activeHref === "/events" ? "page" : undefined}
          >
            กิจกรรม
          </Link>
          <Link
            href="/about"
            aria-current={activeHref === "/about" ? "page" : undefined}
          >
            เกี่ยวกับเรา
          </Link>
        </nav>
        <div className="header-actions">
          <button
            aria-label="ค้นหาบทความ"
            onClick={() => onSearch()}
            className="icon-button"
          >
            <svg
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <circle cx="10.5" cy="10.5" r="7" />
              <path d="m16 16 5 5" />
            </svg>
          </button>
          <button
            className="icon-button"
            aria-label="เปิดเมนู"
            onClick={() => onMenu()}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
