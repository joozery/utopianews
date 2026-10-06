"use client";

import { useState } from "react";
import { highlightStories } from "@/data/stories";
import { Arrow } from "@/components/shared/arrow";
import { Photo } from "@/components/shared/photo";
import type { StorySelectionHandler } from "@/types/story";

export function HighlightSection({
  onReadStory,
}: {
  onReadStory: StorySelectionHandler;
}) {
  const [offset, setOffset] = useState(0);
  return (
    <section className="page-width highlights" id="highlights">
      <div className="highlight-heading">
        <h2>
          Highlight
          <br />
          This Week
        </h2>
        <p>
          ประเด็นที่น่าสนใจในสัปดาห์นี้
          <br />
          เกี่ยวกับผู้คน เมือง และไลฟ์สไตล์
          <br />
          เพื่ออนาคตที่ดีกว่า
        </p>
        <div className="mt-7 flex gap-3">
          <button
            className="round"
            aria-label="ไฮไลต์ก่อนหน้า"
            onClick={() => setOffset((offset + 2) % 3)}
          >
            <Arrow direction="left" />
          </button>
          <button
            className="round"
            aria-label="ไฮไลต์ถัดไป"
            onClick={() => setOffset((offset + 1) % 3)}
          >
            <Arrow />
          </button>
        </div>
      </div>
      {[0, 1, 2].map((i) => {
        const s = highlightStories[(offset + i) % 3];
        return (
          <button
            className="story-card highlight-card"
            key={s.title}
            onClick={() => onReadStory(s)}
          >
            <div className="card-photo">
              <Photo name={s.photo === "river" ? "city" : s.photo} />
              <div className="photo-gradient" />
              <span className="image-label">{s.label}</span>
            </div>
            <div className="card-body">
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <div className="card-meta">
                <span>{s.date}</span>
                <span className="round small">
                  <Arrow />
                </span>
              </div>
            </div>
          </button>
        );
      })}
    </section>
  );
}
