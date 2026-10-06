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
