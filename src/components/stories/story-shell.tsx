"use client";

import { useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { beginPageNavigation } from "@/lib/page-navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SearchDialog } from "@/components/dialogs/search-dialog";
import { NavigationDialog } from "@/components/dialogs/navigation-dialog";
import { NewsletterSection } from "@/components/home/newsletter-section";
import type { Story } from "@/types/story";

export function StoryShell({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  function navigate() {
    setMenuOpen(false);
    beginPageNavigation("/stories");
    router.push("/stories");
  }
  function readStory(story: Story) {
    if (story.slug) {
      beginPageNavigation(`/stories/${story.slug}`);
      router.push(`/stories/${story.slug}`);
    }
  }
  return (
    <>
      <SiteHeader
        solid
        onNavigate={navigate}
        onMenu={() => setMenuOpen(true)}
        onSearch={() => setSearchOpen(true)}
      />
      {children}
      <NewsletterSection />
      <SiteFooter />
      <SearchDialog
        open={searchOpen}
        onOpenChange={setSearchOpen}
        onReadStory={readStory}
      />
      <NavigationDialog
        open={menuOpen}
        onOpenChange={setMenuOpen}
        onNavigate={navigate}
        homePath="/"
      />
    </>
  );
}
