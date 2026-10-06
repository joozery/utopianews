import type { Metadata } from "next";
import { StoryShell } from "@/components/stories/story-shell";
import { EventsPage } from "@/components/events/event-page";
export const metadata: Metadata = {
  title: "Events — Utopia News",
  description: "พื้นที่พบปะผู้คน หนังดี และงานสร้างสรรค์จาก Utopia",
};
export default function Page() {
  return (
    <StoryShell>
      <EventsPage />
    </StoryShell>
  );
}
