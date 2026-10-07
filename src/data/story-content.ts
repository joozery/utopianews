import type { ArticleImage, Story, StoryBlock } from "@/types/story";
import { featuredStoryContent } from "./featured-story-content";

const images: Record<string, ArticleImage> = {
  coffee: {
    src: "/asset/latest/coffee.jpg",
    alt: "กาแฟลาเต้สองแก้วบนโต๊ะไม้ท่ามกลางใบไม้",
    caption: "รายละเอียดเล็ก ๆ ที่ทำให้กาแฟแต่ละแก้วมีเรื่องราว",
    credit: {
      name: "Nathan Dumlao",
      url: "https://unsplash.com/photos/c2Y16tC3yO8",
    },
  },
  pottery: {
    src: "/asset/latest/pottery.jpg",
    alt: "มือของช่างกำลังนวดและขึ้นรูปดิน",
    caption: "กระบวนการทำงานที่อาศัยทั้งทักษะและการฝึกฝน",
    credit: {
      name: "Alex Jones",
      url: "https://unsplash.com/photos/Tq4YjCa2BSc",
    },
  },
  park: {
    src: "/asset/latest/park.jpg",
    alt: "ทางเดินในสวนที่มีต้นไม้ใหญ่และม้านั่ง",
    caption: "พื้นที่สีเขียวและจุดพักสำหรับชีวิตประจำวัน",
    credit: {
      name: "Mike Benna",
      url: "https://unsplash.com/photos/SBiVq9eWEtQ",
    },
  },
  bangkok: {
    src: "/asset/latest/bangkok.jpg",
    alt: "เส้นขอบฟ้ากรุงเทพฯ และอาคารที่ส่องสว่างยามค่ำ",
    caption: "มองเมืองจากอีกจังหวะของวัน",
    credit: {
      name: "Tan Kaninthanond",
      url: "https://unsplash.com/photos/417FF0HwyIM",
    },
  },
  meal: {
    src: "/asset/latest/meal.jpg",
    alt: "ผู้คนร่วมรับประทานอาหารรอบโต๊ะจากมุมด้านบน",
    caption: "โต๊ะอาหารในฐานะพื้นที่พบปะและแบ่งปัน",
    credit: {
      name: "Stefan Vladimirov",
      url: "https://unsplash.com/photos/Q_Moi2xjieU",
    },
  },
  cafe: {
    src: "/asset/latest/cafe.jpg",
    alt: "แก้วกาแฟและเมล็ดกาแฟบนพื้นหลังสีเข้ม",
    caption: "จากเมล็ดกาแฟสู่ช่วงเวลาที่เราได้หยุดพัก",
    credit: {
      name: "Ante Samarzija",
      url: "https://unsplash.com/photos/lsmu0rUhUOk",
    },
  },
};

// Blocks are rendered in array order. A story's `content` can override the
// default layout with headings, text, images, galleries, quotes and videos.
export function getStoryContent(story: Story): StoryBlock[] {
  if (story.content) return story.content;
  const paragraphs =
    story.body ?? featuredStoryContent[story.slug ?? ""]?.body ?? [];
  const headings = ["เรื่องราวและมุมมอง", "ประเด็นที่น่าสนใจ", "ชวนคิดต่อ"];
  const blocks: StoryBlock[] = [];
  const craft = story.category === "วัฒนธรรม";
  const gallery =
    story.category === "ไลฟ์สไตล์"
      ? [images.coffee, images.cafe]
      : [images.park, images.bangkok];
  for (const [index, text] of paragraphs.entries()) {
    blocks.push(
      {
        type: "heading",
        id: `part-${index + 1}`,
        text: headings[index] ?? `อ่านต่อ ${index + 1}`,
      },
      { type: "paragraph", text },
    );
    if (index === 0) {
      blocks.push({
        type: "image",
        image: craft
          ? images.pottery
          : story.category === "ไลฟ์สไตล์"
            ? images.coffee
            : story.category === "เรื่องราว"
              ? images.meal
              : images.park,
      });
      if (story.videos?.length) {
        blocks.push({ type: "heading", id: "related-videos", text: "ชมวิดีโอประกอบเรื่องราว" });
        for (const video of story.videos) blocks.push({ type: "video", video });
      }
    }
    if (index === 1)
      blocks.push(
        craft
          ? { type: "quote", text: story.description }
          : {
              type: "gallery",
              images: gallery,
              caption: "สองมุมมองของชีวิตที่เชื่อมโยงกัน · ภาพประกอบเนื้อหา",
            },
      );
  }
  return blocks;
}
