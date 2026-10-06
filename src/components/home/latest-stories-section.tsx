"use client";

import { UiIcon } from "@/components/shared/ui-icon";
import { Tabs } from "radix-ui";
import { categories, recentStories } from "@/data/stories";
import { Arrow } from "@/components/shared/arrow";
import { Photo } from "@/components/shared/photo";
import type { StorySelectionHandler } from "@/types/story";

export function LatestStoriesSection({
  category,
  visibleCount,
  onNavigate,
  onReadStory,
  onShowAll,
  onLoadMore,
}: {
  category: string;
  visibleCount: number;
  onNavigate: (category: string) => void;
  onReadStory: StorySelectionHandler;
  onShowAll: () => void;
  onLoadMore: () => void;
}) {
  const latest = recentStories.filter(
    (story) => category === "ทั้งหมด" || story.category === category,
  );
  return (
    <section className="page-width section-block latest-section" id="latest">
      <div className="section-heading">
        <div>
          <p className="latest-kicker">FRESH PERSPECTIVES</p>
          <h2>Latest Stories</h2>
          <p>เรื่องราวล่าสุดจาก Utopia News</p>
        </div>
        <button
          onClick={() => {
            onShowAll();
          }}
        >
          ดูทั้งหมด <Arrow />
        </button>
      </div>
      <Tabs.Root value={category} onValueChange={onNavigate}>
        <Tabs.List aria-label="กรองหมวดหมู่" className="category-tabs">
          {categories.map((c) => (
            <Tabs.Trigger key={c} value={c}>
              {c}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {categories.map((c) => (
          <Tabs.Content key={c} value={c}>
            <div className="latest-grid" id={`latest-cards-${c}`}>
              {latest.length ? (
                latest.slice(0, visibleCount).map((s) => (
                  <button
                    key={s.title}
                    className="latest-story-card"
                    onClick={() => onReadStory(s)}
                  >
                    <div className="latest-story-photo">
                      <Photo name={s.photo} />
                      <span className="latest-category-badge">
                        {s.category}
                      </span>
                      <span className="latest-open-icon">
                        <Arrow />
                      </span>
                    </div>
                    <div className="latest-story-body">
                      <span className="latest-story-label">{s.label}</span>
                      <h3>{s.title}</h3>
                      <p>{s.description}</p>
                      <div className="latest-story-meta">
                        <span>{s.date}</span>
                        <span>
                          อ่านเรื่องราว <Arrow />
                        </span>
                      </div>
                    </div>
                  </button>
                ))
              ) : (
                <p className="empty-state">ยังไม่มีบทความใหม่ในหมวดหมู่นี้</p>
              )}
            </div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
      <div className="latest-load-more">
        <p role="status" aria-live="polite">
          แสดง {Math.min(visibleCount, latest.length)} จาก {latest.length}{" "}
          เรื่องราว
        </p>
        {visibleCount < latest.length ? (
          <button
            aria-controls={`latest-cards-${category}`}
            onClick={() => onLoadMore()}
          >
            โหลดเรื่องราวเพิ่มเติม <span aria-hidden="true"><UiIcon name="plus" /></span>
          </button>
        ) : (
          <span className="latest-all-loaded">
            คุณอ่านถึงเรื่องราวล่าสุดทั้งหมดแล้ว
          </span>
        )}
      </div>
    </section>
  );
}
