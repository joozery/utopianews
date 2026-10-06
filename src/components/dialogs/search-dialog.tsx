"use client";

import { Dialog } from "radix-ui";
import { useState } from "react";
import { stories } from "@/data/stories";
import { Arrow } from "@/components/shared/arrow";
import { Photo } from "@/components/shared/photo";
import type { StorySelectionHandler } from "@/types/story";

export function SearchDialog({
  open,
  onOpenChange,
  onReadStory,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onReadStory: StorySelectionHandler;
}) {
  const [query, setQuery] = useState("");
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="search-dialog">
          <Dialog.Close className="dialog-close" aria-label="ปิดการค้นหา">
            ×
          </Dialog.Close>
          <Dialog.Title>ค้นหาเรื่องราว</Dialog.Title>
          <Dialog.Description>
            ค้นพบผู้คน เมือง และไอเดียที่คุณสนใจ
          </Dialog.Description>
          <label className="sr-only" htmlFor="search">
            คำค้นหา
          </label>
          <input
            id="search"
            className="search-input"
            placeholder="ลองค้นหา เมือง กาแฟ หรือชุมชน…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="search-results">
            {stories
              .filter((s) =>
                `${s.title} ${s.description} ${s.category}`.includes(
                  query.trim(),
                ),
              )
              .map((s) => (
                <button
                  key={s.title}
                  onClick={() => {
                    onOpenChange(false);
                    onReadStory(s);
                  }}
                >
                  <Photo name={s.photo} />
                  <div>
                    <small>{s.category}</small>
                    <h3>{s.title}</h3>
                  </div>
                  <Arrow />
                </button>
              ))}
            {!stories.some((s) =>
              `${s.title} ${s.description} ${s.category}`.includes(
                query.trim(),
              ),
            ) && (
              <p className="empty-state">ไม่พบเรื่องราว ลองใช้คำค้นหาอื่น</p>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
