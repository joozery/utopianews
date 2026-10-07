export type ArticleImage = {
  src: string;
  alt: string;
  caption?: string;
  credit?: { name: string; url: string };
};

export type ArticleVideo = {
  title: string;
  caption?: string;
  credit?: { name: string; url: string };
  aspectRatio?: "landscape" | "portrait" | "square";
} & (
  | {
      provider: "file";
      src: string;
      poster?: string;
      subtitles?: { src: string; language: string; label: string }[];
    }
  | { provider: "youtube" | "vimeo"; id: string }
);

export type StoryBlock =
  | { type: "heading"; id: string; text: string }
  | { type: "paragraph"; text: string }
  | { type: "image"; image: ArticleImage }
  | { type: "gallery"; images: ArticleImage[]; caption?: string }
  | { type: "video"; video: ArticleVideo }
  | { type: "quote"; text: string };

export type Story = {
  slug?: string;
  title: string;
  category: string;
  label: string;
  photo: string;
  description: string;
  date: string;
  views: string;
  body?: string[];
  content?: StoryBlock[];
  videos?: ArticleVideo[];
  sources?: { title: string; url: string }[];
  photoCredit?: { name: string; url: string };
};
export type StorySelectionHandler = (story: Story) => void;
