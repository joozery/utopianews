"use client";

import { Dialog } from "radix-ui";
import { Photo } from "@/components/shared/photo";
import type { Story } from "@/types/story";

export function ArticleDialog({
  selected,
  onClose,
}: {
  selected: Story | null;
  onClose: () => void;
}) {
  return (
    <Dialog.Root
      open={selected !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="article-dialog">
          <Dialog.Close className="dialog-close" aria-label="ปิดบทความ">
            ×
          </Dialog.Close>
          {selected && (
            <>
              <div className="article-photo">
                <Photo name={selected.photo} />
              </div>
              <div className="article-content">
                <p className="eyebrow">
                  {selected.category} · {selected.date}
                </p>
                <Dialog.Title>{selected.title}</Dialog.Title>
                <Dialog.Description>{selected.description}</Dialog.Description>
                {selected.body ? (
                  <>
                    <p className="article-byline">
                      บทความเรียบเรียง · Utopia News
                    </p>
                    {selected.body.map((paragraph, i) => (
                      <p key={i} className="article-text">
                        {paragraph}
                      </p>
                    ))}
                    <div className="article-sources">
                      <h3>แหล่งข้อมูลและอ่านเพิ่มเติม</h3>
                      {selected.sources?.map((source) => (
                        <a
                          key={source.url}
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {source.title} ↗
                        </a>
                      ))}
                    </div>
                    {selected.photoCredit && (
                      <p className="photo-credit">
                        ภาพประกอบโดย{" "}
                        <a
                          href={selected.photoCredit.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {selected.photoCredit.name} / Unsplash
                        </a>{" "}
                        ·{" "}
                        <a
                          href="https://unsplash.com/license"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          สิทธิ์ใช้งานภาพ
                        </a>
                        <br />
                        ภาพถ่ายใช้ประกอบเนื้อหา ไม่ใช่ภาพรายงานเหตุการณ์
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    <p className="article-text">
                      เมืองที่น่าอยู่ไม่ได้เกิดจากสถานที่เพียงอย่างเดียว
                      แต่เกิดจากผู้คน ความคิดสร้างสรรค์
                      และพื้นที่ที่เปิดให้เราได้ใช้ชีวิตร่วมกัน Utopia News
                      ชวนคุณมองเห็นเรื่องราวเล็ก ๆ รอบตัว
                      และค้นพบความเป็นไปได้ใหม่ในทุกวัน
                    </p>
                    <p className="demo-note">
                      บทความตัวอย่างสำหรับสาธิตเว็บไซต์
                    </p>
                  </>
                )}
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
