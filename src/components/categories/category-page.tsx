"use client";
import { useState } from "react";
import Link from "@/components/shared/page-link";
import { stories } from "@/data/stories";
import { articleCategories } from "@/data/categories";
import { Photo } from "@/components/shared/photo";
import styles from "./category-page.module.css";

type Category = (typeof articleCategories)[number];
export function CategoryPage({ category }: { category?: Category }) {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(6);
  const collection = stories.filter(
    (story) => !category || story.category === category.name,
  );
  const featured = collection[0];
  const filtered = collection.filter((story) =>
    `${story.title} ${story.description}`
      .toLowerCase()
      .includes(query.trim().toLowerCase()),
  );
  return (
    <main className={`page-width ${styles.page}`}>
      <nav className={styles.breadcrumb} aria-label="เส้นทางนำทาง">
        <Link href="/">หน้าแรก</Link>
        <span>/</span>
        {category ? (
          <>
            <Link href="/stories">เรื่องราวทั้งหมด</Link>
            <span>/</span>
            <span>{category.name}</span>
          </>
        ) : (
          <span>เรื่องราวทั้งหมด</span>
        )}
      </nav>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>
            {category?.english ?? "EVERY STORY, A NEW PERSPECTIVE"}
          </p>
          <h1>
            {category?.name ?? "เรื่องราวทั้งหมด"}
            <span> / {String(collection.length).padStart(2, "0")}</span>
          </h1>
          <p>
            {category?.description ??
              "เปิดมุมมองใหม่ผ่านผู้คน เมือง และเรื่องราวที่อยู่รอบตัวเรา"}
          </p>
        </div>
        <span className={styles.headerMark} aria-hidden="true">
          ↗
        </span>
      </header>
      <nav className={styles.categories} aria-label="หมวดหมู่บทความ">
        <Link href="/stories" aria-current={!category ? "page" : undefined}>
          ทั้งหมด
        </Link>
        {articleCategories.map((item) => (
          <Link
            key={item.slug}
            href={`/categories/${item.slug}`}
            aria-current={category?.slug === item.slug ? "page" : undefined}
          >
            {item.name}
          </Link>
        ))}
        <Link href="/events">กิจกรรม ↗</Link>
      </nav>
      {featured && (
        <Link href={`/stories/${featured.slug}`} className={styles.featured}>
          <div className={styles.featuredImage}>
            <Photo name={category?.image ?? featured.photo} />
          </div>
          <div className={styles.featuredBody}>
            <p className={styles.eyebrow}>EDITOR’S PICK · {featured.label}</p>
            <h2>{featured.title}</h2>
            <p>{featured.description}</p>
            <div>
              <span>{featured.date}</span>
              <span>อ่านเรื่องราว ↗</span>
            </div>
          </div>
        </Link>
      )}
      <section className={styles.stories}>
        <div className={styles.toolbar}>
          <div>
            <p className={styles.eyebrow}>EXPLORE THE STORIES</p>
            <h2>
              {category
                ? `เรื่องราวในหมวด${category.name}`
                : "ทุกเรื่องราวของเรา"}
            </h2>
          </div>
          <label className={styles.search}>
            <span>ค้นหาบทความ</span>
            <input
              type="search"
              placeholder="ค้นหาเรื่องที่คุณสนใจ…"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setCount(6);
              }}
            />
          </label>
        </div>
        <div className={styles.grid} id="category-stories">
          {filtered.slice(0, count).map((story) => (
            <Link
              key={story.slug}
              href={`/stories/${story.slug}`}
              className={styles.card}
            >
              <div className={styles.cardImage}>
                <Photo name={story.photo} />
                <span>{story.category}</span>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.eyebrow}>{story.label}</p>
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <div>
                  <span>{story.date}</span>
                  <span aria-hidden="true">↗</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {!filtered.length && (
          <div className={styles.empty}>
            <h3>
              {collection.length
                ? "ยังไม่พบเรื่องราวที่ค้นหา"
                : "เรื่องราวในหมวดนี้กำลังจะมา"}
            </h3>
            <p>ลองใช้คำอื่น หรือกลับไปดูบทความทั้งหมดในหมวดนี้</p>
            <button
              onClick={() => {
                setQuery("");
                setCount(6);
              }}
            >
              ล้างคำค้นหา
            </button>
          </div>
        )}
        <div className={styles.loadMore}>
          <p role="status">
            แสดง {Math.min(count, filtered.length)} จาก {filtered.length}{" "}
            เรื่องราว
          </p>
          {count < filtered.length && (
            <button
              aria-controls="category-stories"
              onClick={() => setCount((value) => value + 6)}
            >
              โหลดเรื่องราวเพิ่มเติม ＋
            </button>
          )}
        </div>
      </section>
    </main>
  );
}
