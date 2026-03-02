import Link from "next/link";
import Lineicons from "@lineiconshq/react-lineicons";

import { contattiContent } from "@/lib/contents/contatti";

import { Button } from "@/components/ui/button";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";
import { DiagonalElement } from "@/components/diagonal-element";

export function PurposeContactList() {
	const sectionTitleId = "contact-needs-title";
	const sectionDescriptionId = "contact-needs-description";

	return (
		<section
			className="relative overflow-hidden bg-lq-senape py-20 md:pt-24 md:pb-32 xl:pb-40"
			aria-labelledby={sectionTitleId}
			aria-describedby={sectionDescriptionId}
		>
			<Container className="relative z-10">
				<RevealGroup className="text-center md:text-left" stagger={0.12}>
					<RevealItem preset="fade-up" distance={20} duration={0.9}>
						<h2 id={sectionTitleId} className="text-lq-dark">
							{contattiContent.needs.sectionTitle}
						</h2>
					</RevealItem>
					<RevealItem preset="fade-up" distance={24} duration={1}>
						<p
							id={sectionDescriptionId}
							className="mx-auto mt-3 max-w-2xl text-base font-normal text-lq-dark/85 md:mx-0 md:text-lg"
						>
							{contattiContent.needs.description}
						</p>
					</RevealItem>
				</RevealGroup>

				<RevealGroup
					className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
					stagger={0.2}
					delayChildren={0.15}
					amount={0.15}
				>
					{contattiContent.needs.blocks.map((block, index) => (
						<RevealItem
							key={block.title}
							preset="fade-up"
							distance={36}
							duration={1.15}
						>
							<article
								className="flex h-full flex-col rounded-2xl bg-white/55 p-6"
								aria-labelledby={`contact-need-title-${index}`}
								aria-describedby={`contact-need-description-${index}`}
							>
								<RevealGroup
									className="flex h-full flex-col gap-y-4"
									stagger={0.08}
								>
									<RevealItem preset="fade-up" distance={16} duration={0.85}>
										<h3
											id={`contact-need-title-${index}`}
											className="text-3xl font-black text-lq-dark"
										>
											{block.title}
										</h3>
									</RevealItem>
									<RevealItem preset="fade-up" distance={20} duration={0.9}>
										<p
											id={`contact-need-description-${index}`}
											className="text-base font-normal text-lq-dark/90"
										>
											{block.description}
										</p>
									</RevealItem>
									<RevealItem
										className="mt-auto pt-2"
										preset="fade-up"
										distance={18}
										duration={0.95}
									>
										<Button
											asChild
											color="dark"
											variant="custom"
											className="text-base px-6 py-2"
										>
											<Link
												href={block.ctaLink}
												aria-label={`${block.ctaText} - ${block.title}`}
											>
												<Lineicons
													icon={block.ctaIcon}
													size={32}
													color="white"
													className="size-5"
													aria-hidden="true"
												/>
												{block.ctaText}
											</Link>
										</Button>
									</RevealItem>
								</RevealGroup>
							</article>
						</RevealItem>
					))}
				</RevealGroup>
			</Container>

			<DiagonalElement className="text-white" position="bottom" side="right" />
		</section>
	);
}
