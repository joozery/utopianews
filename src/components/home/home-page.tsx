"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { beginPageNavigation } from "@/lib/page-navigation";
import type { Story } from "@/types/story";
import { recentStories } from "@/data/stories";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ArticleDialog } from "@/components/dialogs/article-dialog";
import { SearchDialog } from "@/components/dialogs/search-dialog";
import { NavigationDialog } from "@/components/dialogs/navigation-dialog";
import { HeroSection } from "./hero-section";
import { TopicSection } from "./topic-section";
import { HighlightSection } from "./highlight-section";
import { EventsSection } from "./events-section";
import { PopularSection } from "./popular-section";
import { LatestStoriesSection } from "./latest-stories-section";
import { NewsletterSection } from "./newsletter-section";

export function HomePage() {
  const router = useRouter();
  const [selected, setSelected] = useState<Story | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [category, setCategory] = useState("ทั้งหมด");
  const [visibleCount, setVisibleCount] = useState(4);

  function readStory(story: Story) {
    if (story.slug) {
      beginPageNavigation(`/stories/${story.slug}`);
      router.push(`/stories/${story.slug}`);
    } else setSelected(story);
  }

  function navigate(value: string) {
    setCategory(value);
    setVisibleCount(4);
    setMenuOpen(false);
  }

  function showAll() {
    setCategory("ทั้งหมด");
    setVisibleCount(recentStories.length);
  }

  return (
    <>
      <SiteHeader
        onNavigate={navigate}
        onSearch={() => setSearchOpen(true)}
        onMenu={() => setMenuOpen(true)}
      />
      <main>
        <HeroSection onReadStory={readStory} />
        <TopicSection />
        <HighlightSection onReadStory={readStory} />
        <EventsSection />
        <PopularSection onReadStory={readStory} onNavigate={navigate} />
        <LatestStoriesSection
          category={category}
          visibleCount={visibleCount}
          onNavigate={navigate}
          onReadStory={readStory}
          onShowAll={showAll}
          onLoadMore={() => setVisibleCount((count) => count + 4)}
        />
        <NewsletterSection />
      </main>
      <SiteFooter />
      <ArticleDialog selected={selected} onClose={() => setSelected(null)} />
      <SearchDialog
        open={searchOpen}
        onOpenChange={setSearchOpen}
        onReadStory={readStory}
      />
      <NavigationDialog
        open={menuOpen}
        onOpenChange={setMenuOpen}
        onNavigate={navigate}
      />
    </>
  );
}
