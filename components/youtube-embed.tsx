"use client";

import { useState } from "react";

export default function YouTubeEmbed({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border/60 bg-muted">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse">
          <div className="h-10 w-10 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        </div>
      )}

      <iframe
        className={`w-full h-full transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}