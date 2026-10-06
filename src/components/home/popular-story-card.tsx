"use client";

import { Arrow } from "@/components/shared/arrow";
import { Photo } from "@/components/shared/photo";
import type { Story, StorySelectionHandler } from "@/types/story";
import styles from "./popular-section.module.css";

export function PopularStoryCard({
  story,
  rank,
  onReadStory,
}: {
  story: Story;
  rank: number;
  onReadStory: StorySelectionHandler;
}) {
  const featured = rank === 1;
  return (
    <button
      className={`${styles.card} ${featured ? styles.featured : styles.horizontal}`}
      onClick={() => onReadStory(story)}
    >
      <div className={styles.media}>
        <Photo name={story.photo} className={styles.photo} />
        <div className={styles.shade} />
        <span className={styles.rank}>
          <span className="sr-only">อันดับ </span>
          {String(rank).padStart(2, "0")}
        </span>
        {featured && <span className={styles.category}>{story.category}</span>}
      </div>
      <div className={styles.content}>
        {featured && (
          <p className={styles.mostRead}>
            <span aria-hidden="true" />
            MOST READ
          </p>
        )}
        <p className={styles.label}>{story.label}</p>
        <h3>{story.title}</h3>
        <p className={styles.description}>{story.description}</p>
        <div className={styles.bottom}>
          <div className={styles.meta}>
            <span>
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="4" y="5" width="16" height="16" rx="1.5" />
                <path d="M8 2v6M16 2v6M4 10h16" />
              </svg>
              {story.date}
            </span>
            <span>
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              {story.views}
            </span>
          </div>
          <span className={styles.arrow}>
            <Arrow />
          </span>
        </div>
      </div>
    </button>
  );
}
