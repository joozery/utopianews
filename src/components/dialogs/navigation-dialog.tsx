"use client";

import { usePathname } from "next/navigation";
import { getActiveNavigationHref } from "@/lib/active-navigation";
import { Dialog } from "radix-ui";
import Link from "@/components/shared/page-link";
import { useRef, type CSSProperties } from "react";
import { getCategoryHref } from "@/data/categories";
import { categories } from "@/data/stories";
import { Logo } from "@/components/shared/logo";
import { Arrow } from "@/components/shared/arrow";
import styles from "./navigation-dialog.module.css";

function stagger(index: number): CSSProperties {
  return { "--menu-item-delay": `${80 + index * 35}ms` } as CSSProperties;
}

export function NavigationDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate: (category: string) => void;
  homePath?: string;
}) {
  const activeHref = getActiveNavigationHref(usePathname());
  const navigating = useRef(false);
  function navigate() {
    navigating.current = true;
    onOpenChange(false);
  }
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={`dialog-overlay ${styles.overlay}`} />
        <Dialog.Content
          className={`menu-dialog ${styles.panel}`}
          onCloseAutoFocus={(event) => {
            if (navigating.current) {
              event.preventDefault();
              navigating.current = false;
            }
          }}
        >
          <Dialog.Close
            className={`dialog-close ${styles.close}`}
            aria-label="ปิดเมนู"
          >
            ×
          </Dialog.Close>
          <Dialog.Title className={styles.intro}>
            <Logo />
          </Dialog.Title>
          <Dialog.Description
            className={`mt-5 text-sm text-gray-500 ${styles.intro}`}
          >
            People · Culture · Better Living
          </Dialog.Description>
          <nav aria-label="เมนูเพิ่มเติม">
            <Link
              href="/"
              aria-current={activeHref === "/" ? "page" : undefined}
              className={styles.item}
              style={stagger(0)}
              onNavigate={navigate}
            >
              หน้าหลัก <Arrow />
            </Link>
            {categories.map((c, index) => (
              <Link
                key={c}
                href={getCategoryHref(c)}
                aria-current={
                  activeHref === getCategoryHref(c) ? "page" : undefined
                }
                className={styles.item}
                style={stagger(index + 1)}
                onNavigate={navigate}
              >
                {c === "ทั้งหมด" ? "เรื่องราวทั้งหมด" : c}
                <Arrow />
              </Link>
            ))}
            <Link
              href="/events"
              aria-current={activeHref === "/events" ? "page" : undefined}
              className={styles.item}
              style={stagger(categories.length + 1)}
              onNavigate={navigate}
            >
              กิจกรรม <Arrow />
            </Link>
            <Link
              href="/about"
              aria-current={activeHref === "/about" ? "page" : undefined}
              className={styles.item}
              style={stagger(categories.length + 2)}
              onNavigate={navigate}
            >
              เกี่ยวกับเรา <Arrow />
            </Link>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
