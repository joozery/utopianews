"use client";

import Link from "@/components/shared/page-link";
import { getCategoryHref } from "@/data/categories";
import { topics } from "@/data/home-content";
import { Arrow } from "@/components/shared/arrow";
import Image from "next/image";

export function TopicSection() {
  return (
    <section id="topics" className="visual-topics" aria-label="สำรวจหมวดหมู่">
      {topics.map((item) => (
        <Link
          key={item.label}
          href={getCategoryHref(item.category)}
          className="visual-topic"
        >
          <Image
            src={item.image}
            alt=""
            fill
            sizes={
              item.category === "ธุรกิจ"
                ? "(max-width: 600px) 100vw, (max-width: 800px) 33vw, 20vw"
                : "(max-width: 600px) 50vw, (max-width: 800px) 33vw, 20vw"
            }
            className="topic-image"
          />
          <div className="topic-shade" />
          <div className="visual-topic-copy">
            <div>
              <p>{item.label}</p>
              <h2>{item.title}</h2>
            </div>
            <span className="round light-outline">
              <Arrow />
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
}
