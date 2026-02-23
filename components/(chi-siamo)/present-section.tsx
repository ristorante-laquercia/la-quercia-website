import Image from "next/image";

import { chiSiamoContent } from "@/lib/contents/chi-siamo";

import sectionBackground from "@/public/assets/backgrounds/pizza-bg.png";
import demoImage from "@/public/assets/demo/side-view-spaghetti-with-greens-ricotta-cheese-round-white-plate.jpg";

export function PresentSection() {
  const titleId = "chi-siamo-present-title";
  const descriptionId = "chi-siamo-present-description";

  return (
    <section
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="grid grid-cols-1 bg-lq-dark lg:grid-cols-2"
    >
      <div className="relative min-h-88 w-full lg:min-h-full lg:py-24">
        <Image
          src={demoImage.src}
          alt="Piatto di spaghetti con ricotta e verdure" // TODO: add alt
          fill
          placeholder="blur"
          blurDataURL={demoImage.blurDataURL}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="relative flex justify-center px-8 py-10 text-center lg:px-10 lg:text-left lg:py-32">
        <Image
          src={sectionBackground.src}
          alt="Sfondo della sezione con elementi ed ingredienti tipici della pizza"
          aria-hidden="true"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover opacity-25"
        />
        <div className="relative z-10 flex w-full max-w-150 flex-col gap-y-6">
          <h2
            id={titleId}
            className="font-gabarito text-lq-orange/80 uppercase"
          >
            {chiSiamoContent.present.title}
          </h2>

          <div
            id={descriptionId}
            //biome-ignore lint/security/noDangerouslySetInnerHtml: secure content
            dangerouslySetInnerHTML={{
              __html: chiSiamoContent.present.description,
            }}
            className="space-y-8"
          />
        </div>
      </div>
    </section>
  );
}
