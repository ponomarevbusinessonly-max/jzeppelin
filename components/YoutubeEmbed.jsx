import { Play } from 'lucide-react';

/**
 * YoutubeEmbed
 * @param {string}  videoId  - YouTube video ID (e.g. "dQw4w9WgXcQ"). If empty, shows placeholder.
 * @param {string}  title    - Accessible title for the iframe
 */
export default function YoutubeEmbed({ videoId, title }) {
  if (!videoId) {
    return (
      <div className="w-full aspect-video bg-muted border border-border flex flex-col items-center justify-center gap-3 text-muted-foreground/30">
        <Play size={36} strokeWidth={1.5} />
        <span className="font-body text-xs tracking-widest uppercase">{title}</span>
      </div>
    );
  }

  return (
    <div className="w-full aspect-video border border-border overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}
