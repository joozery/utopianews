import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { events } from "@/data/home-content";
import { StoryShell } from "@/components/stories/story-shell";
import { EventDetail } from "@/components/events/event-page";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  if (!event) return { title: "ไม่พบกิจกรรม — Utopia News" };
  return {
    title: `${event.title} — Utopia News`,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      images: [{ url: event.image, alt: event.title }],
    },
  };
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  if (!event) notFound();
  return (
    <StoryShell>
      <EventDetail event={event} />
    </StoryShell>
  );
}
