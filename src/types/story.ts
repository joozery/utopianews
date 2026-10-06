export type ArticleImage = {
  src: string;
  alt: string;
  caption?: string;
  credit?: { name: string; url: string };
};

export type StoryBlock =
  | { type: "heading"; id: string; text: string }
  | { type: "paragraph"; text: string }
  | { type: "image"; image: ArticleImage }
  | { type: "gallery"; images: ArticleImage[]; caption?: string }
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
  sources?: { title: string; url: string }[];
  photoCredit?: { name: string; url: string };
};
export type StorySelectionHandler = (story: Story) => void;
