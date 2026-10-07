# Utopia News

เว็บไซต์ข่าวภาษาไทย สร้างด้วย Next.js App Router, React, Tailwind CSS และ Radix UI ใช้ฟอนต์ Noto Sans Thai

## เริ่มต้น

```bash
npm ci
npm run dev
```

เปิด http://localhost:3000

## ตรวจสอบและ build

```bash
npm run lint
npx tsc --noEmit --incremental false
npm run build
npm start
```

Production build ต้องเข้าถึง Google Fonts สำหรับ next/font

## หน้าเว็บไซต์

- `/` หน้าแรก
- `/stories` รวมบทความ
- `/stories/[slug]` รายละเอียดบทความ
- `/categories/[slug]` หมวดหมู่
- `/events` รวมกิจกรรม
- `/events/[slug]` รายละเอียดกิจกรรม
- `/about` เกี่ยวกับเรา

## เนื้อหาและรูปภาพ

ข้อมูลแยกไว้ใน `src/data` และ component ใน `src/components` รูปภาพอยู่ใน `public/asset` กิจกรรมเป็นข้อมูลตัวอย่าง ช่องทางลงทะเบียนตั้งค่าได้ที่ `registrationUrl` ใน `src/data/home-content.ts`

เครดิตภาพอยู่ใน `public/asset/latest/credits.json` ไอคอนมาจาก thesvg.org และภาพหมวดหมู่ที่สร้างด้วย AI พร้อม prompt อยู่ใน `public/asset/topics`

ตั้ง `NEXT_PUBLIC_SITE_URL` เป็นโดเมนจริงตาม `.env.example` เพื่อใช้ URL รูปตัวอย่างสำหรับการแชร์โซเชียล

## วิดีโอในบทความ

บทความที่ใช้ `body` และรูปประกอบอัตโนมัติสามารถเพิ่ม `videos: [{ provider: "youtube", id: "YOUTUBE_VIDEO_ID", title: "ชื่อวิดีโอ" }]` ได้ ระบบจะแทรกหลังส่วนแรกพร้อมหัวข้อในสารบัญ โดยเก็บเนื้อหาและรูปเดิมไว้ ตัวอย่างจริงอยู่ในบทความ `coffee-beyond-taste` และ `nature-in-the-city`

เพิ่มบล็อก `video` ในอาร์เรย์ `content` ของบทความ แทรกระหว่างข้อความหรือรูปภาพได้ตามลำดับ อาร์เรย์ `content` จะแทนที่เนื้อหาอัตโนมัติจาก `body` จึงต้องใส่บล็อกข้อความเดิมที่ต้องการเก็บไว้ด้วย

```ts
// YouTube: id คือรหัสหลัง v= ในลิงก์ หรือหลัง youtu.be/
{ type: "video", video: {
  provider: "youtube", id: "YOUTUBE_VIDEO_ID",
  title: "สัมภาษณ์ผู้คนเบื้องหลังกาแฟ",
  caption: "บทสนทนาเรื่องแหล่งปลูกและการทำกาแฟ",
} }

// Vimeo: ใช้รหัสตัวเลขของวิดีโอ
{ type: "video", video: {
  provider: "vimeo", id: "VIMEO_VIDEO_ID",
  title: "วิดีโอสัมภาษณ์",
} }

// ไฟล์ใน public/videos หรือ URL ไฟล์วิดีโอที่เปิดอ่านได้โดยตรง
{ type: "video", video: {
  provider: "file", src: "/videos/interview.mp4",
  title: "วิดีโอสัมภาษณ์", poster: "/asset/latest/coffee.jpg",
  subtitles: [{ src: "/videos/interview-th.vtt", language: "th", label: "ภาษาไทย" }],
} }
```

ทุกประเภทตั้ง `aspectRatio` เป็น `landscape` (ค่าเริ่มต้น 16:9), `portrait` (9:16) หรือ `square` (1:1) และใส่ `credit: { name, url }` ได้ วิดีโอไม่เล่นอัตโนมัติ มีลิงก์เปิดแยกหากดูในบทความไม่ได้ วิดีโอ YouTube/Vimeo ต้องอนุญาตให้ฝังบนเว็บไซต์ ส่วนไฟล์วิดีโอขนาดใหญ่ควรใช้ URL จากบริการเก็บไฟล์แทนการเก็บใน Git
