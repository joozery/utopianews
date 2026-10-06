"use client";
import Link from "@/components/shared/page-link";

import { popularStories } from "@/data/stories";
import { Arrow } from "@/components/shared/arrow";
import type { StorySelectionHandler } from "@/types/story";
import { PopularStoryCard } from "./popular-story-card";
import styles from "./popular-section.module.css";

export function PopularSection({
  onReadStory,
}: {
  onReadStory: StorySelectionHandler;
  onNavigate: (category: string) => void;
}) {
  return (
    <section className={styles.section} id="popular">
      <div className="page-width">
        <div className={styles.heading}>
          <div>
            <p className={styles.kicker}>THE STORIES YOU LOVE</p>
            <h2>Most Popular</h2>
            <p className={styles.subtitle}>เรื่องราวที่คนอ่านมากที่สุด</p>
          </div>
          <Link href="/stories">
            ดูทั้งหมด <Arrow />
          </Link>
        </div>
        <div className={styles.grid}>
          {popularStories.map((story, index) => (
            <PopularStoryCard
              key={story.title}
              story={story}
              rank={index + 1}
              onReadStory={onReadStory}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
