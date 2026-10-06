import { photoAssets } from "@/data/photos";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { stories, getStoryBySlug } from "@/data/stories";
import { StoryShell } from "@/components/stories/story-shell";
import { StoryDetail } from "@/components/stories/story-detail";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug! }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return { title: "ไม่พบบทความ — Utopia News" };
  const image = story.photo.startsWith("/")
    ? story.photo
    : (photoAssets[story.photo] ?? "/asset/coverhero.png");
  return {
    title: `${story.title} — Utopia News`,
    description: story.description,
    twitter: {
      card: "summary_large_image",
      title: story.title,
      description: story.description,
      images: [image],
    },
    openGraph: {
      title: story.title,
      description: story.description,
      type: "article",
      images: [{ url: image, alt: story.title }],
    },
  };
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();
  return (
    <StoryShell>
      <StoryDetail story={story} />
    </StoryShell>
  );
}
