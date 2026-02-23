'use client'

import React from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface RevealBlockProps {
  children: React.ReactNode
  className?: string
  delay?: number    // ms delay before animation starts (for staggering)
  duration?: number // ms for full animation sequence (default 2500)
}

export default function RevealBlock({
  children,
  className,
  delay = 0,
  duration = 2500,
}: RevealBlockProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ delay })

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ''}`}>
      {/* White overlay — hidden before trigger, then snaps on as small square and animates */}
      <div
        className="absolute inset-0 z-10 bg-white pointer-events-none"
        style={
          isVisible
            ? { animation: `reveal-overlay ${duration}ms ease-in-out both` }
            : { opacity: 0 }
        }
      />
      {/* Content — hidden until overlay snaps off at end of animation */}
      <div
        className="w-full h-full"
        style={
          isVisible
            ? { animation: `reveal-content ${duration}ms ease-in-out both` }
            : { opacity: 0 }
        }
      >
        {children}
      </div>
    </div>
  )
}
