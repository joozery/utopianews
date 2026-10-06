import type { CSSProperties } from "react";

import { crops, photoAssets, reference } from "@/data/photos";

export function Photo({
  name,
  className = "",
  style = {},
}: {
  name: string;
  className?: string;
  style?: CSSProperties;
}) {
  const asset = name.startsWith("/asset/latest/") ? name : photoAssets[name];
  if (asset) {
    return (
      <div
        aria-hidden="true"
        className={`photo ${className}`}
        style={{
          backgroundImage: `url("${asset}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          ...style,
        }}
      />
    );
  }
  const [x, y, w, h] = crops[name as keyof typeof crops];
  return (
    <div
      aria-hidden="true"
      className={`photo ${className}`}
      style={{
        backgroundImage: `url("${reference}")`,
        backgroundSize: `${(901 / w) * 100}% ${(1745 / h) * 100}%`,
        backgroundPosition: `${(x / (901 - w)) * 100}% ${(y / (1745 - h)) * 100}%`,
        ...style,
      }}
    />
  );
}
