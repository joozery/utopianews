"use client";

import Image from "next/image";
import { stories } from "@/data/stories";
import type { StorySelectionHandler } from "@/types/story";

export function HeroSection({
  onReadStory,
}: {
  onReadStory: StorySelectionHandler;
}) {
  return (
    <section className="hero immersive-hero" aria-label="เรื่องราวแนะนำ">
      <Image
        src="/asset/coverhero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-cover"
      />
      <div className="hero-shade" />
      <div className="hero-content page-width">
        <p className="eyebrow">FEATURED STORY</p>
        <span className="featured-rule" />
        <button
          className="featured-story-link"
          onClick={() => onReadStory(stories[3])}
        >
          <h1>เมืองที่เราอยากอยู่</h1>
        </button>
        <p className="hero-description">
          เรื่องราวของผู้คน พื้นที่ และความเป็นไปได้ใหม่ ๆ ในชีวิตเมือง
        </p>
      </div>
      <a href="#topics" className="scroll-explore">
        <span className="scroll-circle">↓</span>
        <span>SCROLL TO EXPLORE</span>
      </a>
    </section>
  );
}
