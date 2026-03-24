import Image, { type StaticImageData } from "next/image";

type MasonryGalleryItem = Readonly<{
	src: StaticImageData;
	alt: string;
	widthClassName: string;
	heightClassName: string;
}>;

type MasonryGalleryProps = Readonly<{
	rows: readonly (readonly MasonryGalleryItem[])[];
	className?: string;
	rowClassName?: string;
	itemClassName?: string;
}>;

export function MasonryGallery({
	rows,
	className,
	rowClassName,
	itemClassName,
}: MasonryGalleryProps) {
	return (
		<div className={className}>
			{rows.map((row, rowIndex) => (
				<div key={`masonry-row-${rowIndex + 1}`} className={rowClassName ?? ""}>
					<div className="flex flex-wrap gap-2.5 md:gap-3 lg:gap-3.5">
						{row.map((item) => (
							<div
								key={`${rowIndex + 1}-${item.alt}`}
								className={`${itemClassName ?? "relative overflow-hidden rounded-[1.6rem]"} ${item.widthClassName} ${item.heightClassName}`}
							>
								<Image
									src={item.src}
									alt={item.alt}
									placeholder="blur"
									blurDataURL={item.src.blurDataURL}
									sizes="(max-width: 768px) 70vw, (max-width: 1280px) 32vw, 24vw"
									className="size-full object-cover"
								/>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
