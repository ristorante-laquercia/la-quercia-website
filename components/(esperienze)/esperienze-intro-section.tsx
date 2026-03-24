import Image from "next/image";

import { esperienzeContent } from "@/lib/contents/esperienze";

import { Container } from "@/components/ui/container";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { DiagonalElement } from "@/components/diagonal-element";

import introImage from "@/public/assets/demo/three-friends-cheer-wine-glasses-with-red-white-wine-dinner.jpg";
import detailImage from "@/public/assets/demo/toast-dinner.jpg";
import atmosphereImage from "@/public/assets/demo/table-set-dinning-table.jpg";

export function EsperienzeIntroSection() {
	const titleId = "esperienze-intro-title";
	const descriptionId = "esperienze-intro-description";

	return (
		<section
			aria-labelledby={titleId}
			aria-describedby={descriptionId}
			className="relative overflow-hidden bg-white py-24 lg:py-32"
		>
			<Container className="relative z-10">
				<RevealGroup
					className="grid grid-cols-1 gap-y-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-x-14"
					stagger={0.16}
					delayChildren={0.12}
					amount={0.2}
				>
					<div className="flex flex-col gap-y-6">
						<RevealItem preset="fade-up" distance={20} duration={1}>
							<span className="text-sm font-black uppercase tracking-[0.22em] text-lq-orange">
								{esperienzeContent.intro.eyebrow}
							</span>
						</RevealItem>

						<RevealItem preset="fade-up" distance={24} duration={1.05}>
							<h2 id={titleId} className="max-w-3xl text-lq-dark">
								{esperienzeContent.intro.title}
							</h2>
						</RevealItem>

						<div id={descriptionId} className="space-y-4 text-lq-dark">
							{esperienzeContent.intro.paragraphs.map((paragraph, index) => (
								<RevealItem
									key={paragraph}
									preset="fade-up"
									distance={22 + index * 2}
									duration={1.08 + index * 0.08}
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
							duration={1.45}
							className="relative overflow-hidden rounded-[1.75rem] shadow-lg lg:row-span-2"
						>
							<Image
								src={introImage}
								alt="Brindisi tra amici durante una serata alla Quercia"
								placeholder="blur"
								blurDataURL={introImage.blurDataURL}
								sizes="(max-width: 768px) 45vw, 26vw"
								className="h-full min-h-80 w-full object-cover lg:min-h-full"
							/>
						</RevealItem>

						<RevealItem
							preset="fade-up"
							distance={30}
							duration={1.25}
							className="relative overflow-hidden rounded-[1.75rem] shadow-lg"
						>
							<Image
								src={detailImage}
								alt="Dettaglio di brindisi e atmosfera serale"
								placeholder="blur"
								blurDataURL={detailImage.blurDataURL}
								sizes="(max-width: 768px) 45vw, 20vw"
								className="h-full min-h-56 w-full object-cover"
							/>
						</RevealItem>

						<RevealItem
							preset="fade-up"
							distance={26}
							duration={1.15}
							className="relative overflow-hidden rounded-[1.75rem] shadow-lg"
						>
							<Image
								src={atmosphereImage}
								alt="Tavolo apparecchiato pronto per l'aperitivo"
								placeholder="blur"
								blurDataURL={atmosphereImage.blurDataURL}
								sizes="(max-width: 768px) 45vw, 20vw"
								className="h-full min-h-56 w-full object-cover"
							/>
						</RevealItem>
					</div>
				</RevealGroup>
			</Container>

			<DiagonalElement
				className="text-lq-dark"
				position="bottom"
				side="right"
			/>
		</section>
	);
}
