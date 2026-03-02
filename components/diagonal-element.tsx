import { cn } from "@/lib/utils";

export function DiagonalElement({
	className,
	position = "top",
	side = "left",
}: Readonly<{
	className?: string;
	position?: "top" | "bottom";
	side?: "left" | "right";
}>) {
	const pathByPositionAndSide: Record<
		`${"top" | "bottom"}-${"left" | "right"}`,
		string
	> = {
		"top-left": "M0,8L1000,100L1000,0L0,0Z",
		"top-right": "M0,100L1000,8L1000,0L0,0Z",
		"bottom-left": "M0,0L1000,92L1000,100L0,100Z",
		"bottom-right": "M0,92L1000,0L1000,100L0,100Z",
	};

	const pathKey = `${position}-${side}` as const;

	return (
		<div
			aria-hidden
			className={cn(
				"pointer-events-none absolute inset-x-0 z-0 h-16 text-white md:h-20 lg:h-24",
				position === "top" ? "top-0" : "bottom-0",
				className,
			)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1000 100"
				preserveAspectRatio="none"
				className="size-full"
			>
				<title>Diagonale superiore sezione food</title>
				<path className="fill-current" d={pathByPositionAndSide[pathKey]} />
			</svg>
		</div>
	);
}
