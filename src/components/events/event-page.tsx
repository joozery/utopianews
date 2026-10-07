import { UiIcon } from "@/components/shared/ui-icon";
import Image from "next/image";
import Link from "@/components/shared/page-link";
import { eventContent } from "@/data/event-content";
import { events } from "@/data/home-content";
import { StoryActions } from "@/components/stories/story-actions";
import styles from "./events.module.css";
import { EventJoin } from "./event-join";

type Event = (typeof events)[number];
export function EventCard({ event }: { event: Event }) {
  return (
    <article className={styles.card}>
      <Link href={`/events/${event.slug}`} className={styles.cardLink}>
        <div className={styles.cardImage}>
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
          />
          <span className={styles.date}>
            <b>{event.day}</b>APR
          </span>
        </div>
        <div className={styles.cardBody}>
          <p className={styles.eyebrow}>{event.category}</p>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <div className={styles.cardFooter}>
            <span>{event.place}</span>
            <span aria-hidden="true"><UiIcon name="up-right" /></span>
          </div>
        </div>
      </Link>
      <div className={styles.cardActions}>
        <EventJoin
          title={event.title}
          registrationUrl={event.registrationUrl}
        />
        <Link href={`/events/${event.slug}`}>ดูรายละเอียด <UiIcon name="right" /></Link>
      </div>
    </article>
  );
}
export function EventsPage() {
  return (
    <main className={`page-width ${styles.page}`}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>MEET. CONNECT. BE INSPIRED.</p>
        <h1>
          Utopia Events<span>พื้นที่ของการพบกัน</span>
        </h1>
        <p>
          ออกไปเจอเรื่องราวใหม่ ๆ ผ่านหนังดี งานสร้างสรรค์
          และผู้คนที่ทำให้เมืองมีชีวิต
        </p>
      </div>
      <div className={styles.sectionTitle}>
        <h2>กิจกรรมของเรา</h2>
        <span>02 EVENTS</span>
      </div>
      <div className={styles.grid}>
        {events.map((event) => (
          <EventCard key={event.slug} event={event} />
        ))}
      </div>
      <p className={styles.note}>
        กิจกรรมตัวอย่างสำหรับการออกแบบเว็บไซต์ ·
        วันเวลาและรายละเอียดจริงจะประกาศอีกครั้ง
      </p>
    </main>
  );
}
export function EventDetail({ event }: { event: Event }) {
  const content = eventContent[event.slug as keyof typeof eventContent];
  return (
    <main className={`page-width ${styles.page}`}>
      <nav className={styles.breadcrumb} aria-label="เส้นทางนำทาง">
        <Link href="/">หน้าแรก</Link>
        <span>/</span>
        <Link href="/events">Events</Link>
        <span>/</span>
        <span>{event.title}</span>
      </nav>
      <div className={styles.hero}>
        <Image
          src={event.image}
          alt={event.title}
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.shade} />
        <div className={styles.heroText}>
          <p>{event.category}</p>
          <h1>{event.title}</h1>
          <p>{event.description}</p>
        </div>
        <span className={styles.heroNumber}>
          {event.day}
          <small>APR</small>
        </span>
      </div>
      <div className={styles.detailGrid}>
        <article className={styles.article}>
          <section className={styles.contentSection}>
            <p className={styles.eyebrow}>ABOUT THE EVENT</p>
            <h2>{content.heading}</h2>
            {content.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
          <blockquote className={styles.quote}>{content.quote}</blockquote>
          <section className={styles.contentSection}>
            <p className={styles.eyebrow}>THE EXPERIENCE</p>
            <h2>มากกว่าการมาร่วมงาน</h2>
            <div className={styles.experiences}>
              {content.experiences.map((item, i) => (
                <div key={item.title}>
                  <span>0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>
          <section className={styles.contentSection}>
            <p className={styles.eyebrow}>HOW THE EVENT FLOWS</p>
            <h2>เส้นทางของประสบการณ์</h2>
            <p>{content.programIntro}</p>
            <ol className={styles.program}>
              {content.program.map((item, i) => (
                <li key={item.title}>
                  <span className={styles.stepNumber}>0{i + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className={styles.programNote}>
              รูปแบบกิจกรรมเบื้องต้น · ลำดับและเวลาจริงจะประกาศหลังยืนยันงาน
            </p>
          </section>
          <section className={`${styles.contentSection} ${styles.audience}`}>
            <p className={styles.eyebrow}>COME AS YOU ARE</p>
            <h2>งานนี้เหมาะกับใคร?</h2>
            <p>{content.audience}</p>
          </section>
          <section className={styles.contentSection}>
            <p className={styles.eyebrow}>BEFORE YOU ARRIVE</p>
            <h2>เตรียมตัวให้พร้อม แล้วมาพบกัน</h2>
            <ul className={styles.checklist}>
              {content.preparation.map((item) => (
                <li key={item}>
                  <span aria-hidden="true"><UiIcon name="check" /></span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section className={`${styles.contentSection} ${styles.faq}`}>
            <p className={styles.eyebrow}>GOOD TO KNOW</p>
            <h2>คำถามที่พบบ่อย</h2>
            {content.faqs.map((item) => (
              <details key={item.question}>
                <summary>
                  {item.question}
                  <span className={styles.faqToggle} aria-hidden="true">
                    <UiIcon name="plus" />
                  </span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </section>
          <StoryActions title={event.title} label="แชร์กิจกรรมนี้" />
        </article>
        <aside className={styles.info}>
          <p className={styles.eyebrow}>EVENT INFORMATION</p>
          <h2>มาพบกันที่นี่</h2>
          <dl>
            <div>
              <dt>วันที่</dt>
              <dd>{event.day} เมษายน · ตัวอย่าง</dd>
            </div>
            <div>
              <dt>เวลา</dt>
              <dd>รอประกาศ</dd>
            </div>
            <div>
              <dt>สถานที่</dt>
              <dd>{event.place}</dd>
            </div>
            <div>
              <dt>ผู้จัด</dt>
              <dd>Utopia</dd>
            </div>
          </dl>
          <EventJoin
            title={event.title}
            registrationUrl={event.registrationUrl}
          />
          <a
            className={styles.mapLink}
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.place)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            ดูสถานที่บนแผนที่ <UiIcon name="up-right" />
          </a>
          <div className={styles.availability}>
            <b>ติดตามประกาศกิจกรรม</b>
            <p>วันเวลาและการลงทะเบียนจริงจะอัปเดตอีกครั้ง</p>
          </div>
        </aside>
      </div>
      <section className={styles.other}>
        <div className={styles.sectionTitle}>
          <h2>พบกันในงานอื่น ๆ</h2>
          <Link href="/events">ดูทั้งหมด <UiIcon name="up-right" /></Link>
        </div>
        <div className={styles.grid}>
          {events
            .filter((item) => item.slug !== event.slug)
            .map((item) => (
              <EventCard key={item.slug} event={item} />
            ))}
        </div>
      </section>
    </main>
  );
}
