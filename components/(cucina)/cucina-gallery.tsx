import Image from "next/image";

import { cucinaContent } from "@/lib/contents/cucina";

import { Container } from "@/components/ui/container";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

import galleryImage1 from "@/public/assets/demo/2151639899.jpg";
import galleryImage2 from "@/public/assets/demo/restaurant-interior.jpg";
import galleryImage3 from "@/public/assets/demo/table-set-dinning-table.jpg";
import galleryImage4 from "@/public/assets/demo/friends-playing-cards-bar.jpg";
import galleryImage5 from "@/public/assets/demo/young-couple-drinking-wine-having-fun-lunch-bar-focus-is-man.jpg";
import galleryImage6 from "@/public/assets/demo/three-friends-cheer-wine-glasses-with-red-white-wine-dinner.jpg";
import galleryImage7 from "@/public/assets/demo/brunette-woman-brown-cap-white-tee-her-friend-stylish-top-smiles-rests-street-cafe.jpg";
import galleryImage8 from "@/public/assets/demo/young-woman-eating-pasta-cafe.jpg";
import galleryImage9 from "@/public/assets/demo/chef-pouring-special-sauce-pork-ribs-kitchen.jpg";
import galleryImage10 from "@/public/assets/demo/italian-lasagne-served-with-rocket-salad.jpg";
import galleryImage11 from "@/public/assets/demo/toast-dinner.jpg";
import galleryImage12 from "@/public/assets/demo/top-view-pans-with-mushroom-sautee-mashed-potato-sabzi-boiled-vegetables-roasted-potatoes.jpg";
import type { StaticImageData } from "next/image";

type GalleryItem = {
	src: StaticImageData;
	alt: string;
	/** Peso proporzionale usato come flex-grow per riempire la riga */
	flexGrow: number;
};

type GalleryRow = {
	items: readonly GalleryItem[];
	heightClassName: string;
};

const galleryRows: readonly GalleryRow[] = [
	{
		// Riga media: 4 foto con proporzioni molto sbilanciate
		heightClassName: "h-[8rem] sm:h-[13rem] md:h-[20rem] lg:h-[24rem]",
		items: [
			{
				src: galleryImage1,
				alt: "Calice di birra e tavolo apparecchiato",
				flexGrow: 42,
			},
			{
				src: galleryImage2,
				alt: "Vista della sala interna del locale",
				flexGrow: 18,
			},
			{
				src: galleryImage3,
				alt: "Tavolo pronto per il servizio serale",
				flexGrow: 34,
			},
			{
				src: galleryImage8,
				alt: "Donna mentre assaggia un piatto di pasta al tavolo",
				flexGrow: 22,
			},
		],
	},
	{
		// Riga alta: solo 3 foto, dominante e spettacolare
		heightClassName: "h-[11rem] sm:h-[17rem] md:h-[28rem] lg:h-[34rem]",
		items: [
			{
				src: galleryImage9,
				alt: "Chef mentre rifinisce un piatto con salsa in cucina",
				flexGrow: 28,
			},
			{
				src: galleryImage4,
				alt: "Momento conviviale con persone sedute nel locale",
				flexGrow: 46,
			},
			{
				src: galleryImage5,
				alt: "Coppia al tavolo durante una pausa pranzo",
				flexGrow: 26,
			},
		],
	},
	{
		// Riga bassa: 5 foto più dense e compresse
		heightClassName: "h-[6rem] sm:h-[10rem] md:h-[16rem] lg:h-[19rem]",
		items: [
			{
				src: galleryImage6,
				alt: "Brindisi tra amici con calici alzati",
				flexGrow: 20,
			},
			{
				src: galleryImage7,
				alt: "Dettaglio spontaneo di atmosfera nel dehors del locale",
				flexGrow: 33,
			},
			{
				src: galleryImage10,
				alt: "Lasagna servita con insalata e impiattamento contemporaneo",
				flexGrow: 14,
			},
			{
				src: galleryImage11,
				alt: "Brindisi serale con bicchieri e atmosfera conviviale",
				flexGrow: 28,
			},
			{
				src: galleryImage12,
				alt: "Tavola dall'alto con piatti diversi e ingredienti condivisi",
				flexGrow: 19,
			},
		],
	},
];

export function CucinaGallery() {
	const titleId = "cucina-gallery-title";
	const descriptionId = "cucina-gallery-description";

	return (
		<section
			aria-labelledby={titleId}
			aria-describedby={descriptionId}
			className="relative overflow-hidden bg-lq-dark py-24 lg:py-32"
		>
			{/* Grain */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
				style={{
					backgroundImage:
						"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
					backgroundRepeat: "repeat",
					backgroundSize: "256px 256px",
					maskImage: "linear-gradient(to bottom, transparent 0%, black 40%)",
					WebkitMaskImage:
						"linear-gradient(to bottom, transparent 0%, black 40%)",
				}}
			/>

			{/* Radial accent glows */}
			<div
				aria-hidden
				className="pointer-events-none absolute -left-40 -bottom-40 z-0 size-144 rounded-full"
				style={{
					background:
						"radial-gradient(circle, oklch(0.7823 0.162 79.7 / 0.06) 0%, transparent 65%)",
				}}
			/>

			<div
				aria-hidden
				className="pointer-events-none absolute -right-40 -bottom-40 z-0 size-144 rounded-full"
				style={{
					background:
						"radial-gradient(circle, oklch(0.7823 0.162 79.7 / 0.06) 0%, transparent 65%)",
				}}
			/>

			{/* Ghost word */}
			<span
				aria-hidden
				className="pointer-events-none absolute inset-x-0 bottom-0 z-0 select-none overflow-hidden text-center font-gabarito font-black leading-none text-white/2.5"
				style={{ fontSize: "clamp(6rem, 14vw, 18rem)" }}
			>
				{cucinaContent.gallery.eyebrow}
			</span>

			<Container className="relative z-10">
				<RevealGroup
					className="flex flex-col items-center gap-y-5 text-center"
					stagger={0.12}
					amount={0.2}
				>
					<RevealItem preset="fade-up" distance={18} duration={1}>
						<div className="flex items-center gap-4">
							<span className="text-sm font-black uppercase tracking-[0.22em] text-lq-orange">
								{cucinaContent.gallery.eyebrow}
							</span>
						</div>
					</RevealItem>

					<RevealItem preset="fade-up" distance={22} duration={1.05}>
						<h2
							id={titleId}
							className="max-w-4xl font-gabarito text-5xl text-lq-senape lg:text-7xl"
							style={{ letterSpacing: "-0.04em" }}
						>
							{cucinaContent.gallery.title}
						</h2>
					</RevealItem>

					<RevealItem
						preset="fade-up"
						distance={24}
						duration={1.1}
						className="max-w-lg"
					>
						<p id={descriptionId} className="text-xl text-white/55">
							{cucinaContent.gallery.description}
						</p>
					</RevealItem>
				</RevealGroup>

				<RevealGroup className="mt-10 mb-0" stagger={0} amount={0.3}>
					<RevealItem preset="fade-up" distance={10} duration={1.2}>
						<div className="h-px w-full bg-linear-to-r from-lq-orange/20 via-lq-orange/40 to-lq-orange/20" />
					</RevealItem>
				</RevealGroup>
			</Container>

			<div className="mt-12 space-y-2 md:space-y-2.5">
				{galleryRows.map((row, rowIndex) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: righe di layout stabili
					<div key={rowIndex} className="px-2 md:px-2.5">
						<div className={`flex gap-2 md:gap-2.5 ${row.heightClassName}`}>
							{row.items.map((item) => (
								<div
									key={item.alt}
									className="group relative min-w-0 overflow-hidden rounded-xl md:rounded-2xl"
									style={{ flexGrow: item.flexGrow }}
								>
									<Image
										src={item.src}
										alt={item.alt}
										fill
										placeholder="blur"
										blurDataURL={item.src.blurDataURL}
										sizes="(max-width: 768px) 40vw, 25vw"
										className="object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
