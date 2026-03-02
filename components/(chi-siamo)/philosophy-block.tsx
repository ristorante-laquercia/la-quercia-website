"use client";

import { useEffect, useId, useMemo, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "motion/react";

import { chiSiamoContent } from "@/lib/contents/chi-siamo";

import { Container } from "@/components/ui/container";

import demoImage from "@/public/assets/demo/friends-eating-restaurant.jpg";
import demoImage2 from "@/public/assets/demo/cook-pouring-sauce-plate-with-salad.jpg";
import demoImage3 from "@/public/assets/demo/side-view-sac-with-meat-fried-potatoeslavash-table-restaurant.jpg";

export function PhilosophyBlock() {
	const baseId = useId();
	const titleId = `${baseId}-title`;
	const descriptionId = `${baseId}-description`;
	const carouselId = `${baseId}-carousel`;
	const reduceMotion = useReducedMotion();

	const slides = useMemo(
		() => [
			{
				src: demoImage,
				alt: "Persone che giocano a carte al tavolo di un locale",
			},
			{
				src: demoImage2,
				alt: "Dettaglio artistico con atmosfera contemporanea",
			},
			{
				src: demoImage3,
				alt: "Piatto di spaghetti con ricotta e verdure",
			},
		],
		[],
	);

	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		if (reduceMotion || slides.length <= 1) {
			return;
		}

		const intervalId = window.setInterval(() => {
			setActiveIndex((previousIndex) => (previousIndex + 1) % slides.length);
		}, 4500);

		return () => {
			window.clearInterval(intervalId);
		};
	}, [reduceMotion, slides.length]);

	return (
		<section
			aria-labelledby={titleId}
			aria-describedby={descriptionId}
			className="bg-lq-orange text-center py-24 lg:py-32 xl:py-40"
		>
			<Container className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-14">
				<div className="flex flex-col gap-y-8 lg:text-left">
					<h2 id={titleId}>{chiSiamoContent.filosofia.title}</h2>
					<div
						id={descriptionId}
						//biome-ignore lint/security/noDangerouslySetInnerHtml: secure content
						dangerouslySetInnerHTML={{
							__html: chiSiamoContent.filosofia.description,
						}}
						className="space-y-8 relative z-10"
					/>
				</div>

				<div className="mt-12 lg:mt-0">
					<section
						id={carouselId}
						className="relative overflow-hidden rounded-xl md:rounded-2xl"
						aria-roledescription="carousel"
						aria-label="Galleria fotografica"
					>
						<ul
							className="flex transition-transform duration-700 ease-out"
							style={{ transform: `translateX(-${activeIndex * 100}%)` }}
						>
							{slides.map((slide, index) => {
								const slideId = `${carouselId}-slide-${index + 1}`;

								return (
									<li
										id={slideId}
										key={slideId}
										className="relative min-w-full"
										aria-label={`${index + 1} di ${slides.length}`}
									>
										<Image
											src={slide.src}
											alt={slide.alt}
											placeholder="blur"
											blurDataURL={slide.src.blurDataURL}
											sizes="(max-width: 768px) 100vw, 70vw"
											className="h-auto w-full rounded-xl object-cover md:rounded-2xl max-w-2xl mx-auto"
										/>
									</li>
								);
							})}
						</ul>
					</section>
				</div>
			</Container>
		</section>
	);
}
