import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export type GalleryStripItem = {
  src: StaticImageData
  alt: string
  /** Proportional width weight within the row */
  flexGrow: number
}

const DEFAULT_ROW_HEIGHTS = [
  'h-[12rem] md:h-[20rem] lg:h-[24rem]',
  'h-[11rem] md:h-[22rem] lg:h-[28rem]',
  'h-[10rem] md:h-[17rem] lg:h-[22rem]',
]

type GalleryStripProps = {
  items: readonly GalleryStripItem[]
  /** Height classes applied per 4-item lg-group (cycles). Defaults to DEFAULT_ROW_HEIGHTS. */
  rowHeights?: readonly string[]
  className?: string
}

export function GalleryStrip({ items, rowHeights = DEFAULT_ROW_HEIGHTS, className }: GalleryStripProps) {
  return (
    <div className={cn('flex flex-wrap gap-2 md:gap-2.5 px-2 md:px-2.5', className)}>
      {items.map((item, i) => {
        const heightClass = rowHeights[Math.floor(i / 4) % rowHeights.length]
        return (
          <div
            key={item.alt}
            className={cn(
              'group relative min-w-0 overflow-hidden rounded-xl md:rounded-2xl',
              'basis-[40%] md:basis-[28%] lg:basis-[20%]',
              heightClass,
            )}
            style={{ flexGrow: item.flexGrow }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              placeholder="blur"
              blurDataURL={item.src.blurDataURL}
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )
      })}
    </div>
  )
}
