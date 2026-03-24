import Image from "next/image";

import { cucinaContent } from "@/lib/contents/cucina";

import { Container } from "@/components/ui/container";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

import diningImage from "@/public/assets/demo/restaurant-interior-2.jpg";
import dishImage from "@/public/assets/demo/side-view-spaghetti-with-greens-ricotta-cheese-round-white-plate.jpg";
import atmosphereImage from "@/public/assets/demo/friends-eating-restaurant.jpg";

export function CucinaIntroSection() {
	const titleId = "cucina-intro-title";
	const descriptionId = "cucina-intro-description";

	return (
		<section
			aria-labelledby={titleId}
			aria-describedby={descriptionId}
			className="relative overflow-hidden bg-white py-24 lg:py-32"
		>
			<Container className="relative z-10">
				<RevealGroup
					className="grid grid-cols-1 gap-y-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-x-14 lg:items-stretch"
					stagger={0.16}
					delayChildren={0.12}
					amount={0.2}
				>
					<div className="flex flex-col gap-y-6">
						<RevealItem preset="fade-up" distance={20} duration={1}>
							<span className="text-sm font-black uppercase tracking-[0.22em] text-lq-orange">
								{cucinaContent.intro.eyebrow}
							</span>
						</RevealItem>

						<RevealItem preset="fade-up" distance={24} duration={1.05}>
							<h2 id={titleId} className="max-w-3xl text-lq-dark">
								{cucinaContent.intro.title}
							</h2>
						</RevealItem>

						<div id={descriptionId} className="space-y-4 text-lq-dark">
							{cucinaContent.intro.paragraphs.map((paragraph, index) => (
								<RevealItem
									key={paragraph}
									preset="fade-up"
									distance={22 + index * 2}
									duration={1.1 + index * 0.08}
								>
									<p>{paragraph}</p>
								</RevealItem>
							))}
						</div>
					</div>

					<div className="grid grid-cols-2 gap-4 md:gap-6 lg:h-full lg:grid-rows-2">
						<RevealItem
							preset="fade-up"
							distance={36}
							duration={1.5}
							className="relative overflow-hidden rounded-[1.75rem] shadow-lg lg:row-span-2 lg:h-full"
						>
							<Image
								src={diningImage}
								alt="Interno del locale con tavoli apparecchiati"
								placeholder="blur"
								blurDataURL={diningImage.blurDataURL}
								sizes="(max-width: 768px) 45vw, 26vw"
								className="h-full min-h-80 w-full object-cover lg:min-h-full"
							/>
						</RevealItem>

						<RevealItem
							preset="fade-up"
							distance={42}
							duration={1.7}
							arriveY={20}
							className="relative overflow-hidden rounded-[1.75rem] shadow-lg lg:h-full"
						>
							<Image
								src={dishImage}
								alt="Piatto della cucina della casa impiattato con cura"
								placeholder="blur"
								blurDataURL={dishImage.blurDataURL}
								sizes="(max-width: 768px) 45vw, 20vw"
								className="h-full min-h-64 w-full object-cover lg:min-h-full"
							/>
						</RevealItem>

						<RevealItem
							preset="fade-up"
							distance={28}
							duration={1.35}
							className="relative overflow-hidden rounded-[1.75rem] shadow-lg lg:h-full"
						>
							<Image
								src={atmosphereImage}
								alt="Persone sedute al tavolo durante un momento conviviale"
								placeholder="blur"
								blurDataURL={atmosphereImage.blurDataURL}
								sizes="(max-width: 768px) 45vw, 20vw"
								className="h-full min-h-56 w-full object-cover lg:min-h-full"
							/>
						</RevealItem>
					</div>
				</RevealGroup>
			</Container>
		</section>
	);
}
