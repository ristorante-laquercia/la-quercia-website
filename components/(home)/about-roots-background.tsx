"use client";

import { motion, useReducedMotion } from "motion/react";

import { RootSvg } from "@/components/svg";

export function AboutRootsBackground() {
	const prefersReducedMotion = useReducedMotion();

	return (
		<div
			aria-hidden="true"
			role="presentation"
			className="pointer-events-none absolute inset-0 z-1 overflow-hidden"
		>
			<motion.div
				className="absolute inset-x-[-14%] top-0 text-lq-dark/12 md:inset-x-[-8%]"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.8 }}
			>
				<motion.div
					animate={
						prefersReducedMotion
							? undefined
							: {
									y: [0, -10, 0],
									x: [0, 8, 0],
								}
					}
					transition={
						prefersReducedMotion
							? undefined
							: {
									y: { duration: 14, repeat: Number.POSITIVE_INFINITY },
									x: { duration: 18, repeat: Number.POSITIVE_INFINITY },
								}
					}
				>
					<RootSvg
						decorative
						animateDraw
						className="h-auto w-[150%] max-w-none md:w-[125%] xl:w-[110%]"
					/>
				</motion.div>
			</motion.div>
		</div>
	);
}
