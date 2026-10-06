import { SocialIcon, type SocialIconName } from "./social-icon";
const channels: { name: SocialIconName; label: string }[] = [
  { name: "facebook", label: "Facebook" },
  { name: "instagram", label: "Instagram" },
  { name: "youtube", label: "YouTube" },
  { name: "tiktok", label: "TikTok" },
  { name: "line", label: "LINE" },
];
export function SocialMarks() {
  return (
    <div className="social-marks" aria-label="ช่องทางของ Utopia News">
      {channels.map((channel) => (
        <span key={channel.name} role="img" aria-label={channel.label}>
          <SocialIcon name={channel.name} monochrome />
        </span>
      ))}
    </div>
  );
}
