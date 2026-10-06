"use client";

import Image from "next/image";
import { useState } from "react";
import { Arrow } from "@/components/shared/arrow";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  return (
    <section id="about" className="newsletter">
      <Image
        src="/asset/news.png"
        alt=""
        fill
        sizes="100vw"
        className="newsletter-cover"
      />
      <div className="newsletter-shade" />
      <div className="page-width newsletter-inner">
        <div className="newsletter-brand">
          <span className="brand-seal">U</span>
          <div>
            <h2>Utopia News</h2>
            <p>People · Culture · Better Living</p>
          </div>
        </div>
        <div className="newsletter-form">
          <h3>รับเรื่องราวดี ๆ ก่อนใคร</h3>
          <p>สมัครรับข่าวสารและบทความใหม่จาก Utopia News</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubscribed(true);
            }}
          >
            <label className="sr-only" htmlFor="email">
              อีเมลของคุณ
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="กรอกอีเมลของคุณ"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setSubscribed(false);
              }}
            />
            <button aria-label="สมัครรับข่าวสาร">
              <Arrow />
            </button>
          </form>
          <p role="status" className="subscribe-status">
            {subscribed
              ? "ขอบคุณที่สนใจ! นี่คือแบบฟอร์มสาธิต ยังไม่ได้ส่งข้อมูลหรือสมัครจริง"
              : ""}
          </p>
        </div>
      </div>
    </section>
  );
}
