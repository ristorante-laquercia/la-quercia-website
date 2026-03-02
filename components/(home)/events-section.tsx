import Link from "next/link";
import Image from "next/image";
import Lineicons from "@lineiconshq/react-lineicons";
import { Headphone1Duotone } from "@lineiconshq/free-icons";

import { homeContent } from "@/lib/contents/home";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

import demoImage from "@/public/assets/demo/three-friends-cheer-wine-glasses-with-red-white-wine-dinner.jpg";
import demoImage1 from "@/public/assets/demo/5210.jpg";
import demoImage2 from "@/public/assets/demo/young-couple-drinking-wine-having-fun-lunch-bar-focus-is-man.jpg";
import demoImage3 from "@/public/assets/demo/brunette-woman-brown-cap-white-tee-her-friend-stylish-top-smiles-rests-street-cafe.jpg";
import demoImage4 from "@/public/assets/demo/table-set-dinning-table.jpg";

export function EventsSection() {
	const sectionTitleId = "home-events-title";
	const sectionDescriptionId = "home-events-description";

	return (
		<section
			aria-labelledby={sectionTitleId}
			aria-describedby={sectionDescriptionId}
			className="relative w-full py-24 lg:py-20"
		>
			<Container>
				<Image
					src={demoImage.src}
					alt=""
					className="absolute left-0 top-0 z-0 size-full object-cover"
					fill
				/>
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 z-10 bg-black/35"
				/>
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 z-10 bg-black/75 mask-[radial-gradient(140%_120%_at_82%_18%,transparent_18%,black_68%)] [-webkit-mask-image:radial-gradient(140%_120%_at_82%_18%,transparent_18%,black_68%)]"
				/>
				<RevealGroup
					className="relative z-20 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 items-center"
					stagger={0.24}
					delayChildren={0.32}
					amount={0.25}
				>
					<div className="flex flex-col space-y-4">
						<RevealItem preset="fade-up" duration={1.1} distance={22}>
							<h2 id={sectionTitleId}>{homeContent.events.title}</h2>
						</RevealItem>
						<RevealItem preset="fade-up" duration={1.2} distance={24}>
							<div
								// biome-ignore lint/security/noDangerouslySetInnerHtml: secure content
								dangerouslySetInnerHTML={{
									__html: homeContent.events.description,
								}}
								id={sectionDescriptionId}
								className="space-y-4"
							/>
						</RevealItem>
						<RevealItem preset="fade-up" duration={1.2} distance={26}>
							<Button asChild variant={"custom"} color="green" className="mt-4">
								<Link
									href={homeContent.events.link.href}
									aria-label={`${homeContent.events.link.text}: ${homeContent.events.title}`}
								>
									<span aria-hidden="true" className="inline-flex">
										<Lineicons
											icon={Headphone1Duotone}
											size={48}
											color="white"
											className="size-7"
										/>
									</span>

									{homeContent.events.link.text}
								</Link>
							</Button>
						</RevealItem>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<RevealItem
							className="relative aspect-4/5 overflow-hidden rounded-lg"
							duration={1.2}
						>
							<Image
								src={demoImage1}
								alt="Foto evento 1"
								fill
								className="object-cover"
							/>
						</RevealItem>
						<RevealItem
							className="relative aspect-4/5 overflow-hidden rounded-lg"
							duration={1.35}
						>
							<Image
								src={demoImage2}
								alt="Foto evento 2"
								fill
								className="object-cover"
							/>
						</RevealItem>
						<RevealItem
							className="relative aspect-4/5 overflow-hidden rounded-lg"
							duration={1.5}
						>
							<Image
								src={demoImage3}
								alt="Foto evento 3"
								fill
								className="object-cover"
							/>
						</RevealItem>
						<RevealItem
							className="relative aspect-4/5 overflow-hidden rounded-lg"
							duration={1.65}
						>
							<Image
								src={demoImage4}
								alt="Foto evento 4"
								fill
								className="object-cover"
							/>
						</RevealItem>
					</div>
				</RevealGroup>
			</Container>
		</section>
	);
}
