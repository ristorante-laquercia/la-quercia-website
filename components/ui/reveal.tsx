'use client'

import { motion, type Variants } from 'motion/react'

import { cn } from '@/lib/utils'

type RevealPreset = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in'

type RevealGroupProps = Readonly<{
  children: React.ReactNode
  className?: string
  once?: boolean
  amount?: number
  stagger?: number
  delayChildren?: number
}>

type RevealItemProps = Readonly<{
  children: React.ReactNode
  className?: string
  preset?: RevealPreset
  distance?: number
  duration?: number
  arriveX?: number | string
  arriveY?: number | string
}>

const groupVariants = {
  hidden: {},
  visible: (custom: { stagger: number; delayChildren: number }) => ({
    transition: {
      staggerChildren: custom.stagger,
      delayChildren: custom.delayChildren,
    },
  }),
}

function getSpringTransition(duration: number) {
  return {
    type: 'spring' as const,
    stiffness: 95,
    damping: 22,
    mass: Math.max(0.9, duration * 2.6),
  }
}

function addAxisDistance(base: number | string | undefined, deltaPx: number): number | string {
  if (base === undefined) {
    return deltaPx
  }

  if (typeof base === 'number') {
    return base + deltaPx
  }

  const sign = deltaPx >= 0 ? '+' : '-'
  const amount = Math.abs(deltaPx)
  return `calc(${base} ${sign} ${amount}px)`
}

function getItemVariants(
  preset: RevealPreset,
  distance: number,
  duration: number,
  arriveX?: number | string,
  arriveY?: number | string,
): Variants {
  const targetX = arriveX ?? 0
  const targetY = arriveY ?? 0

  switch (preset) {
    case 'fade-down':
      return {
        hidden: {
          opacity: 0,
          y: addAxisDistance(arriveY, -distance),
          x: targetX,
        },
        visible: {
          opacity: 1,
          y: targetY,
          x: targetX,
          transition: getSpringTransition(duration),
        },
      }
    case 'fade-left':
      return {
        hidden: {
          opacity: 0,
          x: addAxisDistance(arriveX, distance),
          y: targetY,
        },
        visible: {
          opacity: 1,
          x: targetX,
          y: targetY,
          transition: getSpringTransition(duration),
        },
      }
    case 'fade-right':
      return {
        hidden: {
          opacity: 0,
          x: addAxisDistance(arriveX, -distance),
          y: targetY,
        },
        visible: {
          opacity: 1,
          x: targetX,
          y: targetY,
          transition: getSpringTransition(duration),
        },
      }
    case 'zoom-in':
      return {
        hidden: { opacity: 0, scale: 0.92, x: targetX, y: targetY },
        visible: {
          opacity: 1,
          scale: 1,
          x: targetX,
          y: targetY,
          transition: getSpringTransition(duration),
        },
      }
    default:
      return {
        hidden: {
          opacity: 0,
          y: addAxisDistance(arriveY, distance),
          x: targetX,
        },
        visible: {
          opacity: 1,
          y: targetY,
          x: targetX,
          transition: getSpringTransition(duration),
        },
      }
  }
}

function RevealGroup({
  children,
  className,
  once = true,
  amount = 0.2,
  stagger = 0.1,
  delayChildren = 0,
}: RevealGroupProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={groupVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      custom={{ stagger, delayChildren }}
    >
      {children}
    </motion.div>
  )
}

function RevealItem({
  children,
  className,
  preset = 'fade-up',
  distance = 24,
  duration = 0.7,
  arriveX,
  arriveY,
}: RevealItemProps) {
  return (
    <motion.div className={cn(className)} variants={getItemVariants(preset, distance, duration, arriveX, arriveY)}>
      {children}
    </motion.div>
  )
}

export { RevealGroup, RevealItem }
