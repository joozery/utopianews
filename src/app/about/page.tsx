import { UiIcon } from "@/components/shared/ui-icon";
import Image from "next/image";
import Link from "@/components/shared/page-link";
import { StoryShell } from "@/components/stories/story-shell";
import styles from "./about.module.css";
export const metadata = {
  title: "เกี่ยวกับเรา — Utopia News",
  description:
    "ทำความรู้จัก Utopia News พื้นที่ของผู้คน เมือง วัฒนธรรม และการใช้ชีวิต",
};
const perspectives = [
  {
    number: "01",
    title: "ผู้คนคือจุดเริ่มต้น",
    text: "มองชีวิตผ่านประสบการณ์ของผู้คน ความตั้งใจเล็ก ๆ และบทสนทนาที่ช่วยให้เราเข้าใจกันมากขึ้น",
  },
  {
    number: "02",
    title: "เมืองมีเรื่องราวเสมอ",
    text: "สำรวจพื้นที่คุ้นเคยด้วยสายตาใหม่ ตั้งแต่ชุมชน ร้านเล็ก ๆ ไปจนถึงพื้นที่ที่ทำให้ชีวิตประจำวันดีขึ้น",
  },
  {
    number: "03",
    title: "ความคิดสร้างสรรค์เชื่อมโยงเรา",
    text: "ค้นพบศิลปะ งานคราฟต์ และวิธีใช้ชีวิตที่เปิดพื้นที่ให้ความคิดหลากหลายได้มาพบกัน",
  },
];
export default function Page() {
  return (
    <StoryShell>
      <main className={`page-width ${styles.page}`}>
        <nav className={styles.breadcrumb} aria-label="เส้นทางนำทาง">
          <Link href="/">หน้าแรก</Link>
          <span>/</span>
          <span>เกี่ยวกับเรา</span>
        </nav>
        <section className={styles.intro}>
          <div>
            <p className={styles.kicker}>THIS IS UTOPIA</p>
            <h1>
              เรื่องราวดี ๆ<br />
              เริ่มต้นจากการมองรอบตัว
            </h1>
            <p className={styles.lead}>
              Utopia News คือพื้นที่ของผู้คน เมือง
              และความคิดสร้างสรรค์ที่อยู่ใกล้กว่าที่คิด
            </p>
            <p className={styles.description}>
              เราอยากชวนคุณออกไปพบมุมมองใหม่ในเรื่องธรรมดา
              รู้จักผู้คนเบื้องหลังพื้นที่ที่เรารัก
              และค้นพบแรงบันดาลใจที่ทำให้ชีวิตประจำวันมีความหมายมากขึ้น
            </p>
            <Link href="/stories" className={styles.primaryButton}>
              สำรวจเรื่องราวทั้งหมด <span aria-hidden="true"><UiIcon name="up-right" /></span>
            </Link>
          </div>
          <figure className={styles.image}>
            <Image
              src="/asset/coverhero.png"
              alt="บรรยากาศเมืองและพื้นที่ที่เชื่อมโยงผู้คน"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
              priority
            />
            <figcaption>PEOPLE · CULTURE · BETTER LIVING</figcaption>
          </figure>
        </section>
        <section className={styles.perspectives}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>OUR PERSPECTIVE</p>
            <h2>สิ่งที่เราอยากชวนคุณค้นพบ</h2>
          </div>
          <div className={styles.grid}>
            {perspectives.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className={styles.invitation}>
          <div>
            <p className={styles.kicker}>BE PART OF THE CONVERSATION</p>
            <h2>
              จากเรื่องราวบนหน้าจอ
              <br />
              สู่การพบกันในเมือง
            </h2>
            <p>พบหนังดี งานสร้างสรรค์ และบทสนทนาใหม่ ๆ ผ่านกิจกรรมของ Utopia</p>
          </div>
          <Link href="/events" className={styles.secondaryButton}>
            ดูกิจกรรมของเรา <span aria-hidden="true"><UiIcon name="up-right" /></span>
          </Link>
        </section>
      </main>
    </StoryShell>
  );
}
