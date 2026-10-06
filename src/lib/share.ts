export type SharePlatform = "facebook" | "line" | "x";

export function getShareUrl(
  platform: SharePlatform,
  title: string,
  articleUrl: string,
) {
  const endpoints = {
    facebook: "https://www.facebook.com/sharer/sharer.php",
    line: "https://social-plugins.line.me/lineit/share",
    x: "https://twitter.com/intent/tweet",
  };
  const url = new URL(endpoints[platform]);
  url.searchParams.set(platform === "facebook" ? "u" : "url", articleUrl);
  if (platform !== "facebook") url.searchParams.set("text", title);
  return url.toString();
}
