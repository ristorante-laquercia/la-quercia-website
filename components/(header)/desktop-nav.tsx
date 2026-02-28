"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Lineicons from "@lineiconshq/react-lineicons";
import { CalendarDaysDuotone } from "@lineiconshq/free-icons";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const menuLinks = [
	{ label: "Chi siamo", href: "/chi-siamo" },
	{ label: "Cucina", href: "/cucina" },
	{ label: "Birreria", href: "/birreria" },
	{ label: "Eventi", href: "/eventi" },
	{
		label: "Menu",
		href: "https://drive.google.com/file/d/12mDiZ6AjIgRar0naHPXMmmPkAGePialF/view?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnigNlTn22eE4AIkAuzvWpbCRGcio96qzVjJJw1qYYqH-OfXD8EeIF5DSmZ7c_aem_BQ4t7XxEtM_tg5WwmWc1xA",
	},
	{ label: "Contatti", href: "/contatti" },
];

export function DesktopNav() {
	const pathname = usePathname();

	return (
		<nav className="max-mdp:hidden">
			<ul className="flex items-center gap-x-4 [&_li]:text-lg font-light [&_li_a]:hover:no-underline [&_li_a]:hover:text-lq-senape">
				{menuLinks.map((item, index) =>
					index === 4 ? (
						<li key={item.href}>
							<a
								href={item.href}
								target="_blank"
								rel="noopener"
								className={cn(pathname === item.href && "text-lq-senape")}
							>
								{item.label}
							</a>
						</li>
					) : (
						<li key={item.href}>
							<Link
								href={item.href}
								className={cn(pathname === item.href && "text-lq-senape")}
							>
								{item.label}
							</Link>
						</li>
					),
				)}
				{/* TODO: sostituire con il link esterno reale di prenotazione */}
				<Button asChild variant="custom" color="green">
					<a
						href="https://example.com/prenotazioni"
						target="_blank"
						rel="noopener noreferrer"
						className="mdp:text-sm"
					>
						<Lineicons
							icon={CalendarDaysDuotone}
							size={48}
							className="mdp:size-5"
						/>
						Prenota
					</a>
				</Button>
			</ul>
		</nav>
	);
}
