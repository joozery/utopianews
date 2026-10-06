"use client";
import Link from "next/link";
import type { ComponentProps } from "react";
import { beginPageNavigation } from "@/lib/page-navigation";
export default function PageLink({
  onNavigate,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      onNavigate={(event) => {
        let cancelled = false;
        onNavigate?.({
          preventDefault: () => {
            cancelled = true;
            event.preventDefault();
          },
        });
        if (cancelled) return;
        const href =
          typeof props.href === "string"
            ? props.href
            : (props.href.pathname ?? "");
        beginPageNavigation(href);
      }}
    />
  );
}
