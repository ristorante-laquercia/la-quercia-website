'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useReducedMotion } from 'motion/react'
import { useWindowScroll } from '@uidotdev/usehooks'

import logo from '@/public/assets/svg/logo.svg'

export function NavbarLogo() {
  const pathname = usePathname()
  const [scrollState] = useWindowScroll()
  const prefersReducedMotion = useReducedMotion()
  const isScrolled = (scrollState?.y ?? 0) > 24
  const isHomePage = pathname === '/'

  return (
    <motion.div
      className="relative h-[calc(var(--navbar-height)*1.5)] w-[calc(var(--navbar-height)*1.5)] self-start origin-top-left will-change-transform"
      initial={false}
      animate={isScrolled ? 'scrolled' : 'top'}
      variants={{
        top: { scale: 1, y: 0 },
        scrolled: { scale: 2 / 3, y: 0 },
      }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : {
              type: 'spring',
              stiffness: 260,
              damping: 28,
              mass: 0.65,
            }
      }
    >
      <Link
        href="/"
        aria-label="Home La Quercia"
        aria-current={isHomePage ? 'page' : undefined}
        className="block h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lq-senape focus-visible:ring-offset-2"
      >
        <Image
          src={logo}
          alt=""
          width={200}
          height={200}
          draggable={false}
          priority
          className={`block size-full select-none rounded-b-full p-2 ${isScrolled ? 'shadow-none' : 'shadow-lg'}`}
        />
      </Link>
    </motion.div>
  )
}
