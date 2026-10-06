import Image from "next/image";
export type SocialIconName =
  "facebook" | "instagram" | "youtube" | "tiktok" | "line" | "x";
export function SocialIcon({
  name,
  monochrome = false,
}: {
  name: SocialIconName;
  monochrome?: boolean;
}) {
  return (
    <Image
      src={`/icons/social/${name}${monochrome && name !== "x" ? "-mono" : ""}.svg`}
      alt=""
      width={18}
      height={18}
      unoptimized
      aria-hidden="true"
    />
  );
}
