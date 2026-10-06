import { UiIcon } from "@/components/shared/ui-icon";
import Image from "next/image";
import type { ArticleImage, StoryBlock } from "@/types/story";
import styles from "./story-detail.module.css";

function ArticleFigure({ image }: { image: ArticleImage }) {
  return (
    <figure className={styles.inlineFigure}>
      <div className={styles.inlineImage}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 800px) 100vw, 720px"
        />
      </div>
      <figcaption>
        {image.caption && <span>{image.caption}</span>}
        {image.credit && (
          <a href={image.credit.url} target="_blank" rel="noopener noreferrer">
            ภาพ: {image.credit.name} / Unsplash <UiIcon name="up-right" />
          </a>
        )}
      </figcaption>
    </figure>
  );
}

export function StoryContent({ blocks }: { blocks: StoryBlock[] }) {
  return (
    <div className={styles.contentBlocks}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={block.id} id={block.id}>
                {block.text}
              </h2>
            );
          case "paragraph":
            return (
              <p className={styles.bodyParagraph} key={index}>
                {block.text}
              </p>
            );
          case "image":
            return <ArticleFigure key={index} image={block.image} />;
          case "gallery":
            return (
              <div className={styles.galleryBlock} key={index}>
                <div className={styles.imageGallery}>
                  {block.images.map((image, i) => (
                    <ArticleFigure key={`${image.src}-${i}`} image={image} />
                  ))}
                </div>
                {block.caption && (
                  <p className={styles.galleryCaption}>{block.caption}</p>
                )}
              </div>
            );
          case "quote":
            return (
              <blockquote key={index} className={styles.quote}>
                <span aria-hidden="true">“</span>
                {block.text}
              </blockquote>
            );
        }
      })}
    </div>
  );
}
