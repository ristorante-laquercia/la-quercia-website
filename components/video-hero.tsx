import { useId } from "react";

import { cn } from "@/lib/utils";

type VideoHeroProps = Readonly<{
  videoSrc: string;
  fallbackVideoSrc?: string;
  title: string;
  className?: string;
  headingClassName?: string;
  overlayClassName?: string;
}>;

export function VideoHero({
  videoSrc,
  fallbackVideoSrc,
  title,
  className,
  headingClassName,
  overlayClassName,
}: VideoHeroProps) {
  const titleId = useId();
  const descriptionId = useId();
  const sourceWithType = [videoSrc, fallbackVideoSrc]
    .filter((src): src is string => Boolean(src))
    .map((src) => {
      if (src.endsWith(".mov")) return { src, type: "video/quicktime" };
      if (src.endsWith(".mp4")) return { src, type: "video/mp4" };
      if (src.endsWith(".webm")) return { src, type: "video/webm" };
      return { src, type: undefined };
    });

  return (
    <section
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className={cn(
        "relative isolate h-[min(72vh,44rem)] min-h-96 w-full overflow-hidden bg-lq-dark",
        className,
      )}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      >
        {sourceWithType.map((source) => (
          <source key={source.src} src={source.src} type={source.type} />
        ))}
        <source src={videoSrc} />
        Il tuo browser non supporta il tag video.
      </video>

      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-black/70 via-black/55 to-black/75",
          overlayClassName,
        )}
      />

      <div className="relative z-20 flex h-full items-center px-8 md:px-10 xl:px-20">
        <div
          id={titleId}
          //biome-ignore lint/security/noDangerouslySetInnerHtml: secure content
          dangerouslySetInnerHTML={{ __html: title }}
          className={cn(
            "max-w-4xl [&_h1]:text-5xl [&_h1]:font-black text-white [&_h1]:md:text-6xl font-gabarito",
            headingClassName,
          )}
        />
      </div>

      <p id={descriptionId} className="sr-only">
        Sezione introduttiva con video di sfondo in loop, senza audio.
      </p>
    </section>
  );
}
