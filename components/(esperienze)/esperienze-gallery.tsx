import { esperienzeContent } from "@/lib/contents/esperienze";

import { Container } from "@/components/ui/container";
import { MasonryGallery } from "@/components/ui/masonry-gallery";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

import galleryImage1 from "@/public/assets/demo/brunette-woman-brown-cap-white-tee-her-friend-stylish-top-smiles-rests-street-cafe.jpg";
import galleryImage2 from "@/public/assets/demo/young-couple-drinking-wine-having-fun-lunch-bar-focus-is-man.jpg";
import galleryImage3 from "@/public/assets/demo/friends-playing-cards-bar.jpg";
import galleryImage4 from "@/public/assets/demo/three-friends-cheer-wine-glasses-with-red-white-wine-dinner.jpg";
import galleryImage5 from "@/public/assets/demo/young-woman-eating-pasta-cafe.jpg";
import galleryImage6 from "@/public/assets/demo/restaurant-interior.jpg";
import galleryImage7 from "@/public/assets/demo/table-set-dinning-table.jpg";
import galleryImage8 from "@/public/assets/demo/toast-dinner.jpg";
import galleryImage9 from "@/public/assets/demo/restaurant-interior-2.jpg";
import galleryImage10 from "@/public/assets/demo/2151639899.jpg";

const galleryRows = [
	[
		{
			src: galleryImage1,
			alt: "Persone sedute in un momento conviviale all'aperto",
			widthClassName: "w-[16rem] md:w-[20rem] lg:w-[23rem]",
			heightClassName: "h-[19rem] md:h-[23rem] lg:h-[27rem]",
		},
		{
			src: galleryImage2,
			alt: "Coppia che brinda e sorride durante l'aperitivo",
			widthClassName: "w-[20rem] md:w-[24rem] lg:w-[28rem]",
			heightClassName: "h-[15rem] md:h-[18rem] lg:h-[21rem]",
		},
		{
			src: galleryImage3,
			alt: "Amici che giocano a carte nel locale",
			widthClassName: "w-[15rem] md:w-[18rem] lg:w-[21rem]",
			heightClassName: "h-[20rem] md:h-[24rem] lg:h-[28rem]",
		},
		{
			src: galleryImage4,
			alt: "Brindisi serale tra amici durante una ricorrenza",
			widthClassName: "w-[18rem] md:w-[22rem] lg:w-[26rem]",
			heightClassName: "h-[17rem] md:h-[20rem] lg:h-[23rem]",
		},
	],
	[
		{
			src: galleryImage5,
			alt: "Momento rilassato al tavolo durante una pausa al locale",
			widthClassName: "w-[15rem] md:w-[18rem] lg:w-[21rem]",
			heightClassName: "h-[18rem] md:h-[22rem] lg:h-[25rem]",
		},
		{
			src: galleryImage6,
			alt: "Sala interna del ristorante pronta ad accogliere gli ospiti",
			widthClassName: "w-[19rem] md:w-[23rem] lg:w-[27rem]",
			heightClassName: "h-[14rem] md:h-[17rem] lg:h-[20rem]",
		},
		{
			src: galleryImage7,
			alt: "Tavolo apparecchiato con atmosfera serale",
			widthClassName: "w-[18rem] md:w-[22rem] lg:w-[26rem]",
			heightClassName: "h-[18rem] md:h-[22rem] lg:h-[26rem]",
		},
		{
			src: galleryImage8,
			alt: "Dettaglio di brindisi durante il dopocena",
			widthClassName: "w-[14rem] md:w-[18rem] lg:w-[20rem]",
			heightClassName: "h-[19rem] md:h-[23rem] lg:h-[27rem]",
		},
		{
			src: galleryImage9,
			alt: "Spazio interno adatto a incontri e momenti di lavoro",
			widthClassName: "w-[21rem] md:w-[25rem] lg:w-[29rem]",
			heightClassName: "h-[15rem] md:h-[18rem] lg:h-[21rem]",
		},
		{
			src: galleryImage10,
			alt: "Birra servita al tavolo durante una serata speciale",
			widthClassName: "w-[16rem] md:w-[20rem] lg:w-[23rem]",
			heightClassName: "h-[20rem] md:h-[24rem] lg:h-[28rem]",
		},
	],
] as const;

export function EsperienzeGallery() {
	const titleId = "esperienze-gallery-title";
	const descriptionId = "esperienze-gallery-description";

	return (
		<section
			aria-labelledby={titleId}
			aria-describedby={descriptionId}
			className="bg-white py-24 lg:py-32"
		>
			<Container>
				<RevealGroup className="max-w-3xl" stagger={0.12} amount={0.2}>
					<RevealItem preset="fade-up" distance={18} duration={1}>
						<span className="text-sm font-black uppercase tracking-[0.22em] text-lq-orange">
							{esperienzeContent.gallery.eyebrow}
						</span>
					</RevealItem>
					<RevealItem preset="fade-up" distance={22} duration={1.05}>
						<h2 id={titleId} className="mt-3 text-lq-dark">
							{esperienzeContent.gallery.title}
						</h2>
					</RevealItem>
					<RevealItem preset="fade-up" distance={24} duration={1.1}>
						<p id={descriptionId} className="mt-4 text-lq-dark/80">
							{esperienzeContent.gallery.description}
						</p>
					</RevealItem>
				</RevealGroup>
			</Container>

			<MasonryGallery
				rows={galleryRows}
				className="mt-12 space-y-2.5 md:space-y-3"
				rowClassName="px-8 lg:px-10 xl:px-20"
			/>
		</section>
	);
}
