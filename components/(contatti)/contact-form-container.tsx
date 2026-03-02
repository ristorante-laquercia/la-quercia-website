import Image from "next/image";
import Lineicons from "@lineiconshq/react-lineicons";
import {
	Envelope1Duotone,
	FacebookOutlined,
	InstagramOutlined,
	MapMarker1Duotone,
	WhatsappOutlined,
} from "@lineiconshq/free-icons";

import { contattiContent } from "@/lib/contents/contatti";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { DiagonalElement } from "@/components/diagonal-element";

import demoImage from "@/public/assets/demo/restaurant-interior-2.jpg";

export function ContactFormContainer() {
	const hoursTitleId = "contact-hours-title";
	const socialNavTitleId = "contact-social-links-title";
	const addressTitleId = "contact-address-title";

	return (
		<section
			className="relative overflow-hidden bg-white"
			aria-labelledby={hoursTitleId}
		>
			<Container className="relative z-10 grid grid-cols-1 mdp:grid-cols-2 py-24 gap-y-32 mdp:gap-x-20 lg:gap-x-32 lg:pb-48">
				<div className="order-2 mdp:order-1 max-w-lg">
					<ContactForm />
				</div>

				<div className="flex gap-y-6 flex-col order-1 mdp:order-2">
					<Image
						src={demoImage.src}
						alt="Interno del ristorante La Quercia"
						width={demoImage.width}
						height={demoImage.height}
						placeholder="blur"
						blurDataURL={demoImage.blurDataURL}
						sizes="(max-width: 1024px) 100vw, 50vw"
						className="max-w-full rounded-2xl"
					/>
					<div className="max-w-lg">
						<h2 id={hoursTitleId}>{contattiContent.orari.title}</h2>
						<table className="mt-4 w-full text-left text-lq-dark">
							<caption className="sr-only">Orari di apertura</caption>
							<tbody>
								<tr>
									<th scope="row" className="py-1 pr-6 font-semibold">
										Lunedì
									</th>
									<td className="py-1">19:00 - 00:00</td>
								</tr>
								<tr>
									<th scope="row" className="py-1 pr-6 font-semibold">
										Martedì
									</th>
									<td className="py-1">Chiuso</td>
								</tr>
								<tr>
									<th scope="row" className="py-1 pr-6 font-semibold">
										Mercoledì - Domenica
									</th>
									<td className="py-1">19:00 - 00:00</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div className="flex flex-col gap-y-6">
						<nav aria-labelledby={socialNavTitleId} className="max-w-lg">
							<h3 id={socialNavTitleId} className="sr-only">
								Canali social e contatti rapidi
							</h3>
							<ul className="w-full flex items-center gap-x-4 border-y border-lq-green/20 py-2">
								<li>
									<Button variant={"ghost"} asChild>
										<a
											href="https://www.facebook.com/laquerciatermoli"
											target="_blank"
											rel="noopener noreferrer"
											aria-label="Seguici su Facebook"
											className="has-[svg]:p-0 bg-transparent hover:bg-transparent hover:[&_svg]:opacity-60 transition-all duration-200 ease-in-out"
										>
											<Lineicons
												icon={FacebookOutlined}
												size={48}
												color="var(--lq-green)"
												className="size-7"
												aria-hidden="true"
											/>
										</a>
									</Button>
								</li>
								<li>
									<Button variant={"link"} asChild>
										<a
											href="https://www.instagram.com/laquerciatermoli/"
											target="_blank"
											rel="noopener noreferrer"
											aria-label="Seguici su Instagram"
											className="has-[svg]:p-0 bg-transparent hover:bg-transparent hover:[&_svg]:opacity-60 transition-all duration-200 ease-in-out"
										>
											<Lineicons
												icon={InstagramOutlined}
												size={48}
												color="var(--lq-green)"
												className="size-7"
												aria-hidden="true"
											/>
										</a>
									</Button>
								</li>
								<li>
									<Button variant={"link"} asChild>
										<a
											href="https://wa.me/+393791269699?text=Vorrei%20ricevere%20maggiori%20informazioni"
											target="_blank"
											rel="noopener noreferrer"
											aria-label="Contattaci su WhatsApp"
											className="has-[svg]:p-0 bg-transparent hover:bg-transparent hover:[&_svg]:opacity-60 transition-all duration-200 ease-in-out"
										>
											<Lineicons
												icon={WhatsappOutlined}
												size={48}
												color="var(--lq-green)"
												className="size-7"
												aria-hidden="true"
											/>
										</a>
									</Button>
								</li>
								<li>
									<Button variant={"link"} asChild>
										<a
											href="mailto:info@ristorante-laquercia.it"
											aria-label="Scrivici una email"
											className="has-[svg]:p-0 bg-transparent hover:bg-transparent hover:[&_svg]:opacity-60 transition-all duration-200 ease-in-out"
										>
											<Lineicons
												icon={Envelope1Duotone}
												size={48}
												color="var(--lq-green)"
												className="size-7"
												aria-hidden="true"
											/>
										</a>
									</Button>
								</li>
							</ul>
						</nav>

						<div className="flex items-start gap-x-8 max-w-lg">
							<Lineicons
								icon={MapMarker1Duotone}
								size={64}
								color="var(--lq-green)"
								className="size-14"
								aria-hidden="true"
							/>
							<div className="text-lq-dark">
								<h3 id={addressTitleId} className="text-lg">
									Indirizzo
								</h3>
								<address className="not-italic flex flex-col gap-y-1">
									<span>Via Elba, 1 | 86039 Termoli</span>
									<span className="flex flex-col">
										<a href="tel:+390875707211" className="w-fit">
											Telefono: 0875.707211
										</a>
										<a href="tel:+393791269699" className="w-fit">
											Mobile: 379.1269699
										</a>
									</span>
								</address>
							</div>
						</div>
					</div>
				</div>
			</Container>

			<DiagonalElement
				className="text-lq-green"
				position="bottom"
				side="right"
			/>
		</section>
	);
}
