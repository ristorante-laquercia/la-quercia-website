import Image from "next/image";

import { cucinaContent } from "@/lib/contents/cucina";

import { Container } from "@/components/ui/container";
import { DiagonalElement } from "@/components/diagonal-element";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

import techniqueImage from "@/public/assets/demo/cook-pouring-sauce-plate-with-salad.jpg";
import backgroundTexture from "@/public/assets/backgrounds/blackboard-texture.jpg";

export function CucinaTechniquesSection() {
	const titleId = "cucina-techniques-title";
	const descriptionId = "cucina-techniques-description";

	return (
		<section
			aria-labelledby={titleId}
			aria-describedby={descriptionId}
			className="relative overflow-hidden bg-lq-dark py-28 text-white lg:py-36"
		>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 z-0 opacity-18 mix-blend-screen"
				style={{
					backgroundImage: `url(${backgroundTexture.src})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			/>
			<DiagonalElement className="text-white" position="top" side="left" />

			<Container className="relative z-10">
				<RevealGroup
					className="grid grid-cols-1 gap-y-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-x-14"
					stagger={0.16}
					delayChildren={0.12}
					amount={0.18}
				>
					<RevealItem
						preset="fade-up"
						distance={36}
						duration={1.5}
						className="relative overflow-hidden rounded-[2rem] border border-white/10"
					>
						<Image
							src={techniqueImage}
							alt="Preparazione di un piatto con finitura di salsa e dettagli gastronomici"
							placeholder="blur"
							blurDataURL={techniqueImage.blurDataURL}
							sizes="(max-width: 1024px) 100vw, 34vw"
							className="h-full min-h-96 w-full object-cover"
						/>
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
					</RevealItem>

					<div className="flex flex-col gap-y-6">
						<RevealItem preset="fade-up" distance={20} duration={1}>
							<span className="text-sm font-black uppercase tracking-[0.22em] text-lq-senape">
								{cucinaContent.innovation.eyebrow}
							</span>
						</RevealItem>

						<RevealItem preset="fade-up" distance={24} duration={1.05}>
							<h2 id={titleId} className="max-w-3xl text-white">
								{cucinaContent.innovation.title}
							</h2>
						</RevealItem>

						<RevealItem preset="fade-up" distance={24} duration={1.1}>
							<p id={descriptionId} className="max-w-3xl text-white/80">
								{cucinaContent.innovation.intro}
							</p>
						</RevealItem>

						<RevealGroup
							className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-2"
							stagger={0.12}
							delayChildren={0.18}
						>
							{cucinaContent.innovation.techniques.map((item) => (
								<RevealItem
									key={item.title}
									preset="fade-up"
									distance={20}
									duration={1.1}
									className="rounded-[1.5rem] border border-white/10 bg-white/5 px-6 py-6 backdrop-blur-xs"
								>
									<h3 className="text-2xl font-black text-lq-senape">
										{item.title}
									</h3>
									<p className="mt-3 text-sm leading-relaxed text-white/82">
										{item.description}
									</p>
								</RevealItem>
							))}
						</RevealGroup>
					</div>
				</RevealGroup>
			</Container>
		</section>
	);
}
