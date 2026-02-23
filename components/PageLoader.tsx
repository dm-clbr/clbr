'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PageLoaderProps {
  onComplete?: () => void
}

const REVEAL_DURATION = 0.9
const REVEAL_EASE = [0.22, 1, 0.36, 1] as const
const ICON_SIZE = 80

// The CLBR icon SVG is made of exactly two L-shaped paths (viewBox="0 0 588 603")
const PATH_TOP_RIGHT = 'M139.68 139.68V0H317.23C333.46 0 349.02 6.41 360.55 17.83L559.53 215.11C577.11 232.54 587.01 256.28 587.01 281.04V463.05H447.99V163.75C447.99 150.46 437.21 139.68 423.92 139.68H139.68Z'
const PATH_BOTTOM_LEFT = 'M139.68 139.68H0V332.3C0 348.53 6.41 364.09 17.83 375.62L215.11 574.6C232.54 592.18 256.28 602.08 281.04 602.08H447.98V463.06H163.75C150.46 463.06 139.68 452.28 139.68 438.99V139.68Z'

type Phase = 'loading' | 'revealing' | 'done'

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [phase, setPhase] = useState<Phase>('loading')
  const [vp, setVp] = useState({ w: 0, h: 0 })

  useEffect(() => {
    setVp({ w: window.innerWidth, h: window.innerHeight })
  }, [])

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setPhase('revealing')
      setTimeout(() => {
        setPhase('done')
        onComplete?.()
      }, Math.round(REVEAL_DURATION * 1000) + 50)
    }, 2000)

    return () => clearTimeout(loadTimer)
  }, [onComplete])

  if (phase === 'done') return null

  const isRevealing = phase === 'revealing'
  const stripTransition = { duration: REVEAL_DURATION, ease: REVEAL_EASE }

  // Each corner piece is positioned at its screen corner (top:0 right:0 or bottom:0 left:0).
  // These offsets translate it back to center so it appears over the loading icon,
  // then animates to {x:0, y:0} to land at the corner.
  const trInitX = -(vp.w / 2 - ICON_SIZE / 2) // top-right piece: shift left to center
  const trInitY = vp.h / 2 - ICON_SIZE / 2    // top-right piece: shift down to center
  const blInitX = vp.w / 2 - ICON_SIZE / 2    // bottom-left piece: shift right to center
  const blInitY = -(vp.h / 2 - ICON_SIZE / 2) // bottom-left piece: shift up to center

  return (
    <div className="fixed inset-0 z-[500]">
      {/* 4 retraction strips — together they cover the full viewport during loading,
          then simultaneously retract to reveal the site through an expanding rectangle */}
      <motion.div
        className="absolute top-0 left-0 right-0 bg-[#0d0d0d]"
        initial={{ height: '50%' }}
        animate={{ height: isRevealing ? 0 : '50%' }}
        transition={stripTransition}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-[#0d0d0d]"
        initial={{ height: '50%' }}
        animate={{ height: isRevealing ? 0 : '50%' }}
        transition={stripTransition}
      />
      <motion.div
        className="absolute top-0 bottom-0 left-0 bg-[#0d0d0d]"
        initial={{ width: '50%' }}
        animate={{ width: isRevealing ? 0 : '50%' }}
        transition={stripTransition}
      />
      <motion.div
        className="absolute top-0 bottom-0 right-0 bg-[#0d0d0d]"
        initial={{ width: '50%' }}
        animate={{ width: isRevealing ? 0 : '50%' }}
        transition={stripTransition}
      />

      {/* Full logo + loading dots — visible only during loading phase */}
      <AnimatePresence>
        {phase === 'loading' && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-10"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            <div className="text-center">
              <motion.img
                src="/clbr-icon-white.svg"
                alt="CLBR"
                className="mx-auto mb-4 mt-[60px]"
                style={{ width: ICON_SIZE, height: ICON_SIZE, objectFit: 'contain' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              <div className="relative overflow-hidden rounded-full mt-[50px]" style={{ width: 150, height: 4, background: 'rgba(255,255,255,0.15)' }}>
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-white"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.8, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Corner pieces — mount at the reveal phase start, translate from center to corners */}
      {isRevealing && vp.w > 0 && (
        <>
          {/* Top-right L-shape (path 1 of the CLBR icon) */}
          <motion.div
            className="absolute top-0 right-0 z-20"
            style={{ width: ICON_SIZE, height: ICON_SIZE }}
            initial={{ x: trInitX, y: trInitY }}
            animate={{ x: ICON_SIZE, y: -ICON_SIZE }}
            transition={stripTransition}
          >
            <svg viewBox="0 0 588 603" width={ICON_SIZE} height={ICON_SIZE} fill="none">
              <path d={PATH_TOP_RIGHT} fill="#F2F2F2" />
            </svg>
          </motion.div>

          {/* Bottom-left L-shape (path 2 of the CLBR icon) */}
          <motion.div
            className="absolute bottom-0 left-0 z-20"
            style={{ width: ICON_SIZE, height: ICON_SIZE }}
            initial={{ x: blInitX, y: blInitY }}
            animate={{ x: -ICON_SIZE, y: ICON_SIZE }}
            transition={stripTransition}
          >
            <svg viewBox="0 0 588 603" width={ICON_SIZE} height={ICON_SIZE} fill="none">
              <path d={PATH_BOTTOM_LEFT} fill="#F2F2F2" />
            </svg>
          </motion.div>
        </>
      )}
    </div>
  )
}
