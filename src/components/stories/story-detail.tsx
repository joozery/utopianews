import { UiIcon } from "@/components/shared/ui-icon";
import Link from "@/components/shared/page-link";
import { Photo } from "@/components/shared/photo";
import { Arrow } from "@/components/shared/arrow";
import { getRelatedStories } from "@/data/stories";
import { featuredStoryContent } from "@/data/featured-story-content";
import type { Story } from "@/types/story";
import { getStoryContent } from "@/data/story-content";
import { StoryContent } from "./story-content";
import { StoryActions } from "./story-actions";
import styles from "./story-detail.module.css";

export function StoryDetail({ story }: { story: Story }) {
  const fallback = featuredStoryContent[story.slug ?? ""];
  const blocks = getStoryContent(story);
  const contents = blocks.filter((block) => block.type === "heading");
  const sources = story.sources ?? fallback?.sources ?? [];
  const related = getRelatedStories(story);
  return (
    <main className={styles.page}>
      <div className="page-width">
        <nav aria-label="เส้นทางหน้า" className={styles.breadcrumb}>
          <Link href="/">หน้าแรก</Link>
          <span>/</span>
          <Link href="/stories">เรื่องราว</Link>
          <span>/</span>
          <span aria-current="page">{story.category}</span>
        </nav>
        <header className={styles.header}>
          <p className={styles.kicker}>
            {story.label} <span>UTOPIA JOURNAL</span>
          </p>
          <h1>{story.title}</h1>
          <p className={styles.intro}>{story.description}</p>
          <div className={styles.byline}>
            <span className={styles.avatar}>U</span>
            <div>
              <strong>Utopia News</strong>
              <p>บทความเรียบเรียง · {story.date}</p>
            </div>
            <span className={styles.readingNote}>อ่านบทความ</span>
          </div>
        </header>
        <figure className={styles.figure}>
          <div className={styles.cover}>
            <Photo name={story.photo} />
          </div>
          <figcaption>
            {story.photoCredit ? (
              <>
                ภาพประกอบโดย{" "}
                <a
                  href={story.photoCredit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {story.photoCredit.name} / Unsplash <UiIcon name="up-right" />
                </a>
              </>
            ) : (
              "ภาพประกอบบทความ · Utopia News"
            )}
            <span>ภาพใช้ประกอบเนื้อหา ไม่ใช่ภาพรายงานเหตุการณ์</span>
          </figcaption>
        </figure>
        <div className={styles.readingLayout}>
          <aside className={styles.sidebar}>
            <p className={styles.sideLabel}>IN THIS STORY</p>
            <nav aria-label="สารบัญบทความ">
              {contents.map((heading, i) => (
                <a key={i} href={`#${heading.id}`}>
                  <span>0{i + 1}</span>
                  {heading.text}
                </a>
              ))}
              <a href="#sources">
                <span><UiIcon name="up-right" /></span>แหล่งอ้างอิง
              </a>
            </nav>
          </aside>
          <article className={styles.article}>
            <p className={styles.lead}>{story.description}</p>
            <StoryContent blocks={blocks} />
            <div className={styles.endMark}>✳</div>
            <section id="sources" className={styles.sources}>
              <h2>แหล่งข้อมูลและอ่านเพิ่มเติม</h2>
              {sources.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {source.title}
                  <Arrow />
                </a>
              ))}
              {story.photoCredit && (
                <a
                  href="https://unsplash.com/license"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  สิทธิ์ใช้งานภาพ Unsplash
                  <Arrow />
                </a>
              )}
            </section>
            <StoryActions title={story.title} />
            <div className={styles.articleFooter}>
              <span>{story.category}</span>
              <Link href="/stories">
                กลับไปเรื่องราวทั้งหมด <Arrow />
              </Link>
            </div>
          </article>
        </div>
        <section className={styles.related}>
          <div className={styles.relatedHeading}>
            <div>
              <p className={styles.kicker}>KEEP EXPLORING</p>
              <h2>เรื่องราวที่คุณอาจสนใจ</h2>
            </div>
            <Link href="/stories">
              ดูทั้งหมด <Arrow />
            </Link>
          </div>
          <div className={styles.relatedGrid}>
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/stories/${item.slug}`}
                className={styles.relatedCard}
              >
                <div className={styles.relatedPhoto}>
                  <Photo name={item.photo} />
                  <span>{item.category}</span>
                </div>
                <div className={styles.relatedBody}>
                  <p className={styles.kicker}>{item.label}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div>
                    <span>{item.date}</span>
                    <Arrow />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
