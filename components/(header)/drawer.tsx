"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

type DrawerProps = {
	open: boolean;
	onClose: () => void;
};

const mobileLinks = [
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

export function Drawer({ open, onClose }: Readonly<DrawerProps>) {
	const pathname = usePathname();
	if (typeof document === "undefined") {
		return null;
	}

	return createPortal(
		<AnimatePresence>
			{open ? (
				<>
					<motion.button
						aria-label="Chiudi menu mobile"
						className="fixed inset-x-0 bottom-0 top-(--navbar-height) z-30 backdrop-blur-sm mdp:hidden bg-black/30"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2, ease: "easeOut" }}
						onClick={onClose}
						type="button"
					/>

					<motion.aside
						aria-label="Menu mobile"
						className="fixed inset-x-0 bottom-0 top-[30dvh] z-40 lg:hidden"
						initial={{ y: "calc(100% + 6rem)", opacity: 0.9 }}
						animate={{
							y: 0,
							opacity: 1,
							transition: { type: "spring", stiffness: 260, damping: 30 },
						}}
						exit={{
							y: "calc(100% + 6rem)",
							opacity: 0.96,
							transition: { duration: 0.28, ease: "easeInOut" },
						}}
					>
						<div aria-hidden className="absolute inset-0 bg-lq-green" />

						<div
							aria-hidden
							className="pointer-events-none absolute inset-x-0 top-0 h-24 w-full -translate-y-full overflow-hidden"
						>
							<svg
								width="100%"
								height="100%"
								viewBox="0 90 1440 310"
								preserveAspectRatio="none"
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								aria-label="Decorative wave pattern"
								className="block size-full"
							>
								<path
									d="M 0,400 L 0,100 C 236.5,94.5 473,89 713,89 C 953,89 1196.5,94.5 1440,100 L 1440,400 L 0,400 Z"
									fill="#94a24e"
									fillOpacity="0.53"
								/>
								<path
									d="M 0,400 L 0,233 C 304.5,238 609,243 849,243 C 1089,243 1264.5,238 1440,233 L 1440,400 L 0,400 Z"
									fill="#94a24e"
									fillOpacity="1"
								/>
							</svg>
						</div>

						<div className="relative h-full overflow-y-auto px-6 pb-10 pt-8 text-center">
							<nav>
								<motion.ul className="space-y-4 text-4xl font-light [&_a]:hover:no-underline [&_a]:hover:text-lq-senape">
									{mobileLinks.map((item, index) =>
										index === 4 ? (
											<motion.li
												key={item.href}
												initial={{ opacity: 0, y: 26 }}
												animate={{
													opacity: 1,
													y: 0,
													transition: {
														type: "spring",
														stiffness: 130,
														damping: 22,
														mass: 1.1,
														delay: 0.22 + index * 0.09,
													},
												}}
												exit={{
													opacity: 0,
													y: 12,
													transition: {
														duration: 0.16,
														ease: "easeIn",
													},
												}}
											>
												<a
													href={item.href}
													target="_blank"
													rel="noopener"
													onClick={onClose}
													className={cn(
														pathname === item.href && "text-lq-senape",
													)}
												>
													{item.label}
												</a>
											</motion.li>
										) : (
											<motion.li
												key={item.href}
												initial={{ opacity: 0, y: 26 }}
												animate={{
													opacity: 1,
													y: 0,
													transition: {
														type: "spring",
														stiffness: 130,
														damping: 22,
														mass: 1.1,
														delay: 0.22 + index * 0.09,
													},
												}}
												exit={{
													opacity: 0,
													y: 12,
													transition: {
														duration: 0.16,
														ease: "easeIn",
													},
												}}
											>
												<Link
													href={item.href}
													onClick={onClose}
													className={cn(
														pathname === item.href && "text-lq-senape",
													)}
												>
													{item.label}
												</Link>
											</motion.li>
										),
									)}
								</motion.ul>
							</nav>
						</div>
					</motion.aside>
				</>
			) : null}
		</AnimatePresence>,
		document.body,
	);
}
