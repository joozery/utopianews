import type { ArticleVideo } from "@/types/story";
import { UiIcon } from "@/components/shared/ui-icon";
import styles from "./story-detail.module.css";

export function ArticleVideoFigure({ video }: { video: ArticleVideo }) {
  const aspectRatio = {
    landscape: "16 / 9",
    portrait: "9 / 16",
    square: "1 / 1",
  }[video.aspectRatio ?? "landscape"];
  const embedUrl = video.provider === "youtube"
    ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.id)}`
    : video.provider === "vimeo"
      ? `https://player.vimeo.com/video/${encodeURIComponent(video.id)}`
      : undefined;

  return (
    <figure className={styles.inlineFigure}>
      <div className={styles.videoFrame} style={{ aspectRatio }}>
        {video.provider === "file" ? (
          <video
            src={video.src}
            poster={video.poster}
            aria-label={video.title}
            controls
            playsInline
            preload="none"
          >
            {video.subtitles?.map((track, index) => (
              <track
                key={`${track.language}-${track.src}`}
                kind="captions"
                src={track.src}
                srcLang={track.language}
                label={track.label}
                default={index === 0}
              />
            ))}
            เบราว์เซอร์นี้ไม่รองรับการเล่นวิดีโอ
          </video>
        ) : (
          <iframe
            src={embedUrl}
            title={video.title}
            loading="lazy"
            allow="encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        )}
      </div>
      <figcaption>
        <span>{video.caption ?? video.title}</span>
        {video.credit && (
          <a href={video.credit.url} target="_blank" rel="noopener noreferrer">
            วิดีโอ: {video.credit.name} <UiIcon name="up-right" />
          </a>
        )}
        <a
          href={video.provider === "file" ? video.src : video.provider === "youtube"
            ? `https://www.youtube.com/watch?v=${encodeURIComponent(video.id)}`
            : `https://vimeo.com/${encodeURIComponent(video.id)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          เปิดวิดีโอในหน้าใหม่ <UiIcon name="up-right" />
        </a>
      </figcaption>
    </figure>
  );
}
