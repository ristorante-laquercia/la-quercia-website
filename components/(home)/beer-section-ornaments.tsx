"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.08,
		},
	},
};

const ornamentVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 28,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.75,
			type: "tween",
			ease: "easeOut",
		},
	},
};

const ornaments = [
	{
		src: "/assets/svg/luppolo.svg",
		className:
			"left-0 bottom-0 size-20 rotate-[-10deg] opacity-45 md:size-28 z-10",
	},
	{
		src: "/assets/svg/foglia-bianca.svg",
		className:
			"left-18 bottom-0 size-20 rotate-[80deg] opacity-24 md:left-18 md:size-28 z-[1]",
	},
	{
		src: "/assets/svg/foglia-arancione.svg",
		className:
			"left-38 -bottom-2 size-14 rotate-[200deg] opacity-35 md:left-20 md:-bottom-6 md:size-24 z-20",
	},
	{
		src: "/assets/svg/foglia-bianca.svg",
		className:
			"right-18 -bottom-6 size-20 rotate-[-10deg] opacity-24 md:right-16 md:size-28 z-[1]",
	},
	{
		src: "/assets/svg/foglia-arancione.svg",
		className:
			"right-38 -bottom-2 size-14 rotate-[90deg] opacity-35 md:right-20 md:-bottom-3 md:size-24 z-20",
	},
	{
		src: "/assets/svg/luppolo.svg",
		className:
			"right-0 -bottom-6 size-20 -rotate-[90deg] opacity-45 md:size-28 z-10",
	},
] as const;

export function BeerSectionOrnaments() {
	const prefersReducedMotion = useReducedMotion();

	return (
		<motion.div
			aria-hidden="true"
			role="presentation"
			className="pointer-events-none absolute inset-0 z-1 overflow-hidden"
			variants={prefersReducedMotion ? undefined : containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
		>
			{ornaments.map((ornament, index) => (
				<motion.div
					key={`${ornament.src}-${index}`}
					variants={prefersReducedMotion ? undefined : ornamentVariants}
					initial={prefersReducedMotion ? { opacity: 0 } : undefined}
					whileInView={prefersReducedMotion ? { opacity: 1 } : undefined}
					viewport={{ once: true, amount: 0.2 }}
					className={`absolute ${ornament.className}`}
				>
					<Image
						src={ornament.src}
						alt=""
						fill
						sizes="(max-width: 768px) 6rem, 9rem"
						className="object-contain"
					/>
				</motion.div>
			))}
		</motion.div>
	);
}
