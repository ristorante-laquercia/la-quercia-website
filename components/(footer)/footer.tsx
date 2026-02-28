import Lineicons from "@lineiconshq/react-lineicons";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
	FacebookOutlined,
	InstagramOutlined,
	WhatsappOutlined,
} from "@lineiconshq/free-icons";
import { SubFooter } from "@/components/(footer)/sub-footer";

export function Footer() {
	// TODO: sostituire con le pagine reali del sito.
	const infoLinks = [
		{ label: "Chi siamo", href: "/chi-siamo" },
		{ label: "Menu", href: "/menu" },
		{ label: "Eventi", href: "/eventi" },
		{ label: "Contatti", href: "/contatti" },
	];

	const openingHours = [
		"Lun: 19:00 - 00:00",
		"Martedì: Chiuso",
		"Mer - Dom: 19:00 - 00:00",
	];

	return (
		<footer id="site-footer" className="grid grid-cols-12">
			<div className="bg-lq-dark col-span-12 py-10">
				<Container className="text-center grid grid-cols-1 gap-10 md:max-mdp:grid-cols-2 mdp:grid-cols-3">
					<div className="grid grid-cols-1">
						<h4 className="text-[32px] mdp:text-left font-gabarito">
							La Quercia
						</h4>
						<div className="mdp:text-left">
							<p className="text-xl mdp:text-base">
								Via Elba, 1 <br />
								Telefono: 0875.707211 <br />
								Mobile: 379.1269699
								<br />
								e-mail:{" "}
								<a
									href="info@ristorante-laquercia.it"
									target="_blank"
									rel="noopener"
									className="hover:no-underline hover:text-lq-senape"
								>
									info@ristorante-laquercia.it
								</a>
							</p>
						</div>
						{/* Social list */}
						<div className="flex items-center gap-1 justify-center mt-4 mdp:justify-start mdp:gap-x-4">
							<Button variant={"ghost"} asChild>
								<a
									href="https://www.facebook.com/laquerciatermoli"
									target="_blank"
									rel="noopener"
									className="mdp:has-[svg]:p-0 bg-transparent hover:bg-transparent"
								>
									<Lineicons
										icon={FacebookOutlined}
										size={48}
										color="white"
										className="size-7"
									/>
								</a>
							</Button>
							<Button variant={"link"} asChild>
								<a
									href="https://www.instagram.com/laquerciatermoli/"
									target="_blank"
									rel="noopener"
									className="mdp:has-[svg]:p-0 bg-transparent hover:bg-transparent"
								>
									<Lineicons
										icon={InstagramOutlined}
										size={48}
										color="white"
										className="size-7"
									/>
								</a>
							</Button>
							<Button variant={"link"} asChild>
								<a
									href="https://wa.me/+393791269699?text=Vorrei%20ricevere%20maggiori%20informazioni"
									target="_blank"
									rel="noopener"
									className="mdp:has-[svg]:p-0 bg-transparent hover:bg-transparent"
								>
									<Lineicons
										icon={WhatsappOutlined}
										size={48}
										color="white"
										className="size-7"
									/>
								</a>
							</Button>
						</div>
					</div>

					{/* Central block */}
					<div>
						<h4 className="text-[32px] font-gabarito">Informazioni</h4>
						<ul className="[&_li]:text-2xl font-light [&_li_a]:hover:no-underline [&_li_a]:hover:text-lq-senape">
							{infoLinks.map((item) => (
								<li key={item.href}>
									<Link href={item.href}>{item.label}</Link>
								</li>
							))}
						</ul>
					</div>

					{/* End block */}
					<div className="md:max-mdp:col-span-2 mdp:col-span-1">
						<h4 className="text-[32px] mdp:text-right font-gabarito">
							Orari di apertura
						</h4>
						<ul className="[&_li]:text-xl font-light [&_li]:mdp:text-base mdp:text-right">
							{openingHours.map((hour) => (
								<li key={hour}>{hour}</li>
							))}
						</ul>
					</div>
				</Container>
			</div>

			<SubFooter />
		</footer>
	);
}
