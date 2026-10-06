"use client";

import { useState } from "react";
import { SocialIcon } from "@/components/shared/social-icon";
import { getShareUrl, type SharePlatform } from "@/lib/share";
import styles from "./story-detail.module.css";

export function StoryActions({
  title,
  label = "แชร์เรื่องราวนี้",
}: {
  title: string;
  label?: string;
}) {
  const [status, setStatus] = useState("");
  function articleUrl() {
    return `${window.location.origin}${window.location.pathname}`;
  }
  function share(platform: SharePlatform) {
    window.open(
      getShareUrl(platform, title, articleUrl()),
      "_blank",
      "noopener,noreferrer",
    );
    setStatus("");
  }
  async function copyLink() {
    try {
      await navigator.clipboard.writeText(articleUrl());
      setStatus("คัดลอกลิงก์แล้ว");
    } catch {
      setStatus("คัดลอกไม่สำเร็จ คุณสามารถคัดลอก URL จากแถบที่อยู่ได้");
    }
  }
  async function nativeShare() {
    if (!navigator.share) {
      await copyLink();
      return;
    }
    try {
      await navigator.share({ title, url: articleUrl() });
      setStatus("");
    } catch (error) {
      if (!(error instanceof Error && error.name === "AbortError"))
        setStatus("แชร์ไม่สำเร็จ ลองเลือกช่องทางด้านบนหรือคัดลอกลิงก์");
    }
  }
  return (
    <div className={styles.actions}>
      <p className={styles.shareLabel}>{label}</p>
      <div className={styles.sharePlatforms}>
        <button
          onClick={() => share("facebook")}
          aria-label="แชร์บทความไป Facebook"
          title="Facebook"
        >
          <SocialIcon name="facebook" />
          <span>Facebook</span>
        </button>
        <button
          onClick={() => share("line")}
          aria-label="แชร์บทความไป LINE"
          title="LINE"
        >
          <SocialIcon name="line" />
          <span>LINE</span>
        </button>
        <button
          onClick={() => share("x")}
          aria-label="แชร์บทความไป X"
          title="X"
        >
          <SocialIcon name="x" />
          <span>X</span>
        </button>
      </div>
      <div className={styles.shareUtilities}>
        <button onClick={copyLink}>
          <span aria-hidden="true">⧉</span>คัดลอกลิงก์
        </button>
        <button onClick={nativeShare}>
          <span aria-hidden="true">↗</span>แชร์เพิ่มเติม
        </button>
      </div>
      <p role="status" aria-live="polite">
        {status}
      </p>
    </div>
  );
}
