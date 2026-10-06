import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articleCategories } from "@/data/categories";
import { CategoryPage } from "@/components/categories/category-page";
import { StoryShell } from "@/components/stories/story-shell";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return articleCategories.map((category) => ({ slug: category.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = articleCategories.find((item) => item.slug === slug);
  return {
    title: category
      ? `${category.name} — Utopia News`
      : "ไม่พบหมวดหมู่ — Utopia News",
    description: category?.description,
  };
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const category = articleCategories.find((item) => item.slug === slug);
  if (!category) notFound();
  return (
    <StoryShell>
      <CategoryPage key={category.slug} category={category} />
    </StoryShell>
  );
}
