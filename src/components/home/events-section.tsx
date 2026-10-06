"use client";

import { events } from "@/data/home-content";
import Image from "next/image";
import { Arrow } from "@/components/shared/arrow";
import Link from "@/components/shared/page-link";
import { EventJoin } from "@/components/events/event-join";

export function EventsSection() {
  return (
    <section
      id="events"
      className="page-width events"
      aria-label="กิจกรรมที่น่าสนใจ"
    >
      {events.map((event) => (
        <article key={event.title} className="event-card">
          <Image
            src={event.image}
            alt=""
            fill
            sizes="(max-width: 540px) 100vw, 50vw"
            className="event-cover"
          />
          <div className="event-shade" />
          <div className="event-content">
            <div className="date-box">
              <strong>{event.day}</strong>
              <span>APR</span>
            </div>
            <div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p className="event-place">⌖ {event.place}</p>
              <div className="event-join-actions">
                <EventJoin
                  title={event.title}
                  registrationUrl={event.registrationUrl}
                />
                <Link className="pill outline" href={`/events/${event.slug}`}>
                  ดูรายละเอียด <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
