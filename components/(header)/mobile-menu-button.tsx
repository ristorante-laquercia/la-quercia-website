'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

import { Drawer } from '@/components/(header)/drawer'

export function MobileMenuButton() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
  const scrollPositionRef = useRef(0)

  useEffect(() => {
    const html = document.documentElement
    const body = document.body

    const unlockScroll = () => {
      const wasLocked = body.style.position === 'fixed'

      html.style.removeProperty('overflow')
      html.style.removeProperty('touch-action')

      body.style.removeProperty('overflow')
      body.style.removeProperty('position')
      body.style.removeProperty('top')
      body.style.removeProperty('left')
      body.style.removeProperty('right')
      body.style.removeProperty('width')

      if (wasLocked) {
        window.scrollTo(0, scrollPositionRef.current)
      }
    }

    if (!isDrawerOpen) {
      unlockScroll()
      return
    }

    scrollPositionRef.current = window.scrollY

    html.style.overflow = 'hidden'
    html.style.touchAction = 'none'

    body.style.overflow = 'hidden'
    body.style.position = 'fixed'
    body.style.top = `-${scrollPositionRef.current}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'

    return () => {
      unlockScroll()
    }
  }, [isDrawerOpen])

  return (
    <div className="mdp:hidden">
      <button
        aria-expanded={isDrawerOpen}
        aria-label={isDrawerOpen ? 'Chiudi menu' : 'Apri menu'}
        className="relative flex h-11 w-11 items-center justify-center"
        onClick={() => setIsDrawerOpen((prev) => !prev)}
        type="button"
      >
        <span className="relative h-4 w-6">
          <motion.span
            className="absolute left-0 top-0 h-0.5 w-6 bg-current"
            animate={isDrawerOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          />
          <motion.span
            className="absolute left-0 top-1.5 h-0.5 w-6 bg-current"
            animate={isDrawerOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15, ease: 'easeInOut' }}
          />
          <motion.span
            className="absolute left-0 top-3 h-0.5 w-6 bg-current"
            animate={isDrawerOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          />
        </span>
      </button>

      <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  )
}
