"use client";

import { useWindowSize } from "@uidotdev/usehooks";

export function Hero() {
	const size = useWindowSize();
	const heroTextConfig = (() => {
		const width = size.width ?? 1536;

		if (width < 640) {
			return {
				fontSize: "60",
				topY: "45%",
				bottomY: "54%",
				topLetterSpacing: "1",
				bottomLetterSpacing: "0.5",
			};
		}

		if (width < 768) {
			return {
				fontSize: "80",
				topY: "45%",
				bottomY: "56%",
				topLetterSpacing: "2",
				bottomLetterSpacing: "1",
			};
		}

		if (width < 1024) {
			return {
				fontSize: "120",
				topY: "45%",
				bottomY: "60%",
				topLetterSpacing: "3",
				bottomLetterSpacing: "1.5",
			};
		}

		if (width < 1280) {
			return {
				fontSize: "140",
				topY: "45%",
				bottomY: "62%",
				topLetterSpacing: "3.5",
				bottomLetterSpacing: "2",
			};
		}

		if (width < 1536) {
			return {
				fontSize: "180",
				topY: "45%",
				bottomY: "67%",
				topLetterSpacing: "4",
				bottomLetterSpacing: "2",
			};
		}

		// >= 1536: mantieni le stesse regole del blocco 1280-1535.
		return {
			fontSize: "180",
			topY: "45%",
			bottomY: "67%",
			topLetterSpacing: "4",
			bottomLetterSpacing: "2",
		};
	})();
	const heroStackLayout = (() => {
		const viewportHeight = size.height ?? 900;
		const viewportWidth = size.width ?? 1536;
		const blockCenterY = 52;

		// Gap proporzionali alla viewport, ma limitati per evitare estremi.
		const baseLineGapPct = Math.min(
			Math.max(viewportHeight * 0.012, 8.5),
			15.5,
		);
		const baseSubtitleGapPct = Math.min(
			Math.max(viewportHeight * 0.009, 6),
			11,
		);

		let lineGapMultiplier = 1;
		let subtitleGapMultiplier = 1;

		if (viewportWidth < 640) {
			// < 640: meno spazio tra LA e QUERCIA.
			lineGapMultiplier = 0.72;
			subtitleGapMultiplier = 0.72;
		} else if (viewportWidth >= 768 && viewportWidth < 1024) {
			// 768-1023: più spazio tra LA e QUERCIA.
			lineGapMultiplier = 1.18;
		} else if (viewportWidth >= 1024 && viewportWidth < 1280) {
			// 1024-1279: aumento ulteriore di entrambe le distanze.
			lineGapMultiplier = 1.34;
			subtitleGapMultiplier = 1.26;
		} else if (viewportWidth >= 1280) {
			// >= 1280 (incluso > 1536): più spazio sia tra le due righe sia verso il sottotitolo.
			lineGapMultiplier = 1.7;
			subtitleGapMultiplier = 1.45;
		}

		const lineGapPct = baseLineGapPct * lineGapMultiplier;
		const subtitleGapPct = baseSubtitleGapPct * subtitleGapMultiplier;

		const totalGapPct = lineGapPct + subtitleGapPct;
		const topY = blockCenterY - totalGapPct / 2;
		const bottomY = topY + lineGapPct;
		const subtitleY = bottomY + subtitleGapPct;

		return {
			topY: `${topY.toFixed(2)}%`,
			bottomY: `${bottomY.toFixed(2)}%`,
			subtitleY: `${subtitleY.toFixed(2)}%`,
		};
	})();

	return (
		<section className="relative isolate h-dvh min-h-136 w-full overflow-hidden bg-lq-dark">
			<video
				className="absolute inset-0 h-full w-full object-cover"
				autoPlay
				loop
				muted
				playsInline
				preload="metadata"
				aria-hidden
			>
				<source
					src="/assets/demo/6038167_People_Friends_1920x1080.mp4"
					type="video/mp4"
				/>
			</video>

			<h1 className="sr-only">La Quercia</h1>

			<svg
				aria-hidden
				viewBox="0 0 1200 700"
				preserveAspectRatio="xMidYMid slice"
				className="pointer-events-none absolute inset-0 z-10 h-full w-full"
			>
				<title>Overlay texture con testo trasparente</title>
				<defs>
					<mask id="hero-text-cutout">
						<rect width="1200" height="700" fill="white" />
						<text
							x="50%"
							y={heroStackLayout.topY}
							dominantBaseline="middle"
							textAnchor="middle"
							fontFamily="Gabarito, sans-serif"
							fontWeight="900"
							fontSize={heroTextConfig.fontSize}
							letterSpacing={heroTextConfig.topLetterSpacing}
							fill="black"
						>
							LA
						</text>
						<text
							x="50%"
							y={heroStackLayout.bottomY}
							dominantBaseline="middle"
							textAnchor="middle"
							fontFamily="Gabarito, sans-serif"
							fontWeight="900"
							fontSize={heroTextConfig.fontSize}
							letterSpacing={heroTextConfig.bottomLetterSpacing}
							fill="black"
						>
							QUERCIA
						</text>
					</mask>
				</defs>

				<image
					width="1200"
					height="700"
					href="/assets/backgrounds/solid-painted-concrete-wall-textured-backdrop.jpg"
					preserveAspectRatio="xMidYMid slice"
					mask="url(#hero-text-cutout)"
				/>
			</svg>

			<p
				className="font-gabarito uppercase font-extrabold pointer-events-none absolute inset-x-0 z-20 -translate-y-1/2 text-center text-2xl tracking-wider text-white md:text-3xl"
				style={{ top: heroStackLayout.subtitleY }}
			>
				Mangia - Bevi - Vivi
			</p>
		</section>
	);
}
