export const articleCategories = [
  {
    slug: "business",
    name: "ธุรกิจ",
    english: "LOCAL BUSINESS",
    description: "เรื่องราวของธุรกิจท้องถิ่นและผู้ประกอบการในชุมชน",
    image: "cafe",
  },
  {
    slug: "people",
    name: "เรื่องราว",
    english: "PEOPLE & STORIES",
    description: "เรื่องเล่าจากผู้คนธรรมดา ที่ทำให้เราเห็นโลกในมุมใหม่",
    image: "cafe",
  },
  {
    slug: "city",
    name: "เมือง",
    english: "CITY & COMMUNITY",
    description: "สำรวจย่าน พื้นที่ และความเปลี่ยนแปลงที่ทำให้เมืองมีชีวิต",
    image: "river",
  },
  {
    slug: "lifestyle",
    name: "ไลฟ์สไตล์",
    english: "LIFESTYLE & LIVING",
    description: "ความสุขเล็ก ๆ และแรงบันดาลใจในการใช้ชีวิตทุกวัน",
    image: "/asset/latest/coffee.jpg",
  },
  {
    slug: "culture",
    name: "วัฒนธรรม",
    english: "ARTS & CULTURE",
    description: "ศิลปะ งานคราฟต์ และความคิดสร้างสรรค์ที่เชื่อมโยงผู้คน",
    image: "/asset/latest/pottery.jpg",
  },
];
export function getCategoryHref(name: string) {
  const category = articleCategories.find((item) => item.name === name);
  return category ? `/categories/${category.slug}` : "/stories";
}
