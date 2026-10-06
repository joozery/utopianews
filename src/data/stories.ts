import type { Story } from "@/types/story";
import { latestStories } from "./latest-stories";

export const stories: Story[] = [
  {
    slug: "old-neighborhood-new-stories",
    title: "ย่านเก่าที่ไม่เคยหยุดนิ่ง",
    category: "เมือง",
    label: "CITY",
    photo: "river",
    description: "เรื่องราวใหม่ ๆ ในพื้นที่เดิมของกรุงเทพฯ",
    date: "12 เม.ย. 2567",
    views: "12.4K",
  },
  {
    slug: "craft-and-modern-life",
    title: "งานคราฟต์กับชีวิตร่วมสมัย",
    category: "วัฒนธรรม",
    label: "PEOPLE",
    photo: "craft",
    description: "รอยมือของคนทำ และคุณค่าที่มากกว่าวัตถุ",
    date: "10 เม.ย. 2567",
    views: "7.2K",
  },
  {
    slug: "nature-in-the-city",
    title: "ธรรมชาติกลางเมือง",
    category: "เมือง",
    label: "ENVIRONMENT",
    photo: "garden",
    description: "พื้นที่สีเขียวที่เปลี่ยนชีวิตผู้คนได้จริง",
    date: "8 เม.ย. 2567",
    views: "9.8K",
  },
  {
    slug: "spaces-that-connect",
    title: "พื้นที่เล็ก ๆ ที่เชื่อมผู้คน",
    category: "เรื่องราว",
    label: "PEOPLE",
    photo: "cafe",
    description: "คาเฟ่ ชุมชน และมิตรภาพในเมืองใหญ่",
    date: "8 เม.ย. 2567",
    views: "8.1K",
  },
  ...latestStories,
];
export const categories = [
  "ทั้งหมด",
  "เรื่องราว",
  "เมือง",
  "ไลฟ์สไตล์",
  "วัฒนธรรม",
];

export const highlightStories = stories.slice(0, 3);
export const popularStories = [stories[0], stories[2], stories[3]];
export const recentStories = stories.slice(4);

export function getStoryBySlug(slug: string) {
  return stories.find((story) => story.slug === slug);
}

export function getRelatedStories(story: Story, limit = 3) {
  return stories
    .filter((item) => item.slug !== story.slug)
    .sort(
      (a, b) =>
        Number(b.category === story.category) -
        Number(a.category === story.category),
    )
    .slice(0, limit);
}
