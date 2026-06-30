'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'

type DrawerProps = {
  open: boolean
  onClose: () => void
}

const mobileLinks = [
  { label: 'Chi siamo', href: '/chi-siamo' },
  { label: 'Cucina', href: '/cucina' },
  { label: 'Birreria', href: '/birreria' },
  { label: 'Esperienze', href: '/esperienze' },
  {
    label: 'Menu',
    href: 'https://drive.google.com/file/d/1ioDqAh1YH6W5PPM4OCMO6iOGwhH9gmyr/view?usp=sharing',
  },
  { label: 'Prenota', href: 'https://laquercia1.plateform.app/welcome' },
  { label: 'Contatti', href: '/contatti' },
]

const FOCUSABLE_SELECTORS =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function Drawer({ open, onClose }: Readonly<DrawerProps>) {
  const pathname = usePathname()
  const prefersReducedMotion = useReducedMotion()
  const asideRef = useRef<HTMLElement>(null)

  // Move focus into the drawer when it opens, restore it on close
  useEffect(() => {
    if (!open) return

    const firstFocusable = asideRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTORS)
    firstFocusable?.focus()
  }, [open])

  // Trap focus within the drawer while it is open
  useEffect(() => {
    if (!open) return

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose()
        return
      }

      if (e.key !== 'Tab') return

      const focusable = Array.from(asideRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS) ?? [])
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  if (typeof document === 'undefined') {
    return null
  }

  const noMotion = prefersReducedMotion ?? false

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
            transition={noMotion ? { duration: 0 } : { duration: 0.2, ease: 'easeOut' }}
            onClick={onClose}
            type="button"
          />

          <motion.aside
            ref={asideRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu mobile"
            className="fixed inset-x-0 bottom-0 top-[24dvh] z-40 lg:hidden"
            initial={noMotion ? { opacity: 0 } : { y: 'calc(100% + 6rem)', opacity: 0.9 }}
            animate={
              noMotion
                ? { opacity: 1 }
                : {
                    y: 0,
                    opacity: 1,
                    transition: { type: 'spring', stiffness: 260, damping: 30 },
                  }
            }
            exit={
              noMotion
                ? { opacity: 0, transition: { duration: 0 } }
                : {
                    y: 'calc(100% + 6rem)',
                    opacity: 0.96,
                    transition: { duration: 0.28, ease: 'easeInOut' },
                  }
            }
          >
            <div aria-hidden className="absolute inset-0 bg-lq-green" />

            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-22 w-full -translate-y-full overflow-hidden"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 90 1440 310"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
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

            <div className="relative h-full overflow-y-auto px-6 pb-10 pt-6 text-center">
              <nav>
                <motion.ul className="space-y-4 text-4xl font-light [&_a]:hover:no-underline [&_a]:hover:text-lq-senape">
                  {mobileLinks.map((item, index) =>
                    index === 4 || index === 5 ? (
                      <motion.li
                        key={item.href}
                        initial={noMotion ? { opacity: 0 } : { opacity: 0, y: 26 }}
                        animate={
                          noMotion
                            ? { opacity: 1, transition: { duration: 0 } }
                            : {
                                opacity: 1,
                                y: 0,
                                transition: {
                                  type: 'spring',
                                  stiffness: 130,
                                  damping: 22,
                                  mass: 1.1,
                                  delay: 0.22 + index * 0.09,
                                },
                              }
                        }
                        exit={
                          noMotion
                            ? { opacity: 0, transition: { duration: 0 } }
                            : {
                                opacity: 0,
                                y: 12,
                                transition: { duration: 0.16, ease: 'easeIn' },
                              }
                        }
                      >
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={onClose}
                          className={cn(pathname === item.href && 'text-lq-senape')}
                        >
                          {item.label}
                        </a>
                      </motion.li>
                    ) : (
                      <motion.li
                        key={item.href}
                        initial={noMotion ? { opacity: 0 } : { opacity: 0, y: 26 }}
                        animate={
                          noMotion
                            ? { opacity: 1, transition: { duration: 0 } }
                            : {
                                opacity: 1,
                                y: 0,
                                transition: {
                                  type: 'spring',
                                  stiffness: 130,
                                  damping: 22,
                                  mass: 1.1,
                                  delay: 0.22 + index * 0.09,
                                },
                              }
                        }
                        exit={
                          noMotion
                            ? { opacity: 0, transition: { duration: 0 } }
                            : {
                                opacity: 0,
                                y: 12,
                                transition: { duration: 0.16, ease: 'easeIn' },
                              }
                        }
                      >
                        <Link href={item.href} onClick={onClose} className={cn(pathname === item.href && 'text-lq-senape')}>
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
  )
}
