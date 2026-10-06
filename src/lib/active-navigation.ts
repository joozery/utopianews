import { getCategoryHref } from "@/data/categories";
import { getStoryBySlug } from "@/data/stories";
export function getActiveNavigationHref(pathname: string) {
  if (pathname === "/") return "/";
  if (pathname === "/stories") return "/stories";
  if (pathname.startsWith("/stories/")) {
    const story = getStoryBySlug(pathname.split("/")[2]);
    return story ? getCategoryHref(story.category) : "/stories";
  }
  if (pathname === "/events" || pathname.startsWith("/events/"))
    return "/events";
  if (pathname === "/about") return "/about";
  return pathname;
}
