import Image from "next/image";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Image
      src="/logo/white.png"
      alt="Utopia News"
      width={2048}
      height={684}
      priority
      className={`brand-logo${light ? " brand-logo-light" : ""}`}
    />
  );
}
