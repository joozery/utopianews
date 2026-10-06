import type { Metadata } from "next";
import { StoryShell } from "@/components/stories/story-shell";
import { CategoryPage } from "@/components/categories/category-page";
export const metadata: Metadata = {
  title: "เรื่องราวทั้งหมด — Utopia News",
  description:
    "สำรวจบทความเรื่องราว เมือง ไลฟ์สไตล์ และวัฒนธรรมจาก Utopia News",
};
export default function Page() {
  return (
    <StoryShell>
      <CategoryPage key="all" />
    </StoryShell>
  );
}
