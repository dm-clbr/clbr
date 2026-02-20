'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import type { Incentive } from '@/lib/types/incentive'
import { getStatusBadgeClasses, getCategoryBadgeStyle } from '@/lib/ui/badges'

interface IncentiveModalProps {
  incentive: Incentive
  onClose: () => void
}

export default function IncentiveModal({ incentive, onClose }: IncentiveModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  // Close on Escape key and lock scroll
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

  const getDaysText = () => {
    const now = new Date()
    const start = new Date(incentive.start_date)
    const end = new Date(incentive.end_date)
    if (incentive.live_status === 'live') {
      const days = Math.ceil((end.getTime() - now.getTime()) / 86400000)
      return days > 0 ? `${days} days left` : 'Last day'
    }
    if (incentive.live_status === 'coming_up') {
      const days = Math.ceil((start.getTime() - now.getTime()) / 86400000)
      return days > 0 ? `${days} days away` : 'Starting soon'
    }
    return 'Ended'
  }

  const statusClasses = getStatusBadgeClasses(incentive.live_status)
  const statusLabel =
    incentive.live_status === 'live'
      ? 'Live'
      : incentive.live_status === 'coming_up'
      ? 'Coming Up'
      : 'Done'

  if (!mounted) return null

  return createPortal(
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Panel */}
      <div
        className="relative w-full max-w-3xl bg-[#111] rounded-sm overflow-hidden flex flex-col md:flex-row shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 text-white/70 hover:text-white hover:bg-black transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Poster image */}
        <div className="w-full md:w-[280px] flex-shrink-0 aspect-[9/16] md:aspect-auto md:h-auto relative bg-[#1a1a1a]">
          {incentive.background_image_url && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={incentive.background_image_url}
              alt={incentive.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between flex-1 p-7 gap-6">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[13px] font-semibold ${statusClasses.container}`}>
              <div className={`w-1.5 h-1.5 rounded-full ${statusClasses.dot}`} />
              <span className={statusClasses.text}>{statusLabel}</span>
            </div>
            <div
              className="flex items-center px-3 py-1.5 rounded-full text-[13px] font-semibold text-black"
              style={getCategoryBadgeStyle(incentive.category, incentive.category_color)}
            >
              {incentive.category}
            </div>
          </div>

          {/* Title */}
          <div>
            <h2 className="text-white font-extrabold text-[28px] sm:text-[32px] leading-tight mb-3">
              {incentive.title}
            </h2>
            {incentive.description && (
              <p className="text-white/70 text-[15px] leading-relaxed">
                {incentive.description}
              </p>
            )}
          </div>

          {/* Date range */}
          <div className="border-t border-white/10 pt-5">
            <p className="text-white/40 text-[12px] uppercase tracking-widest mb-1">Timeline</p>
            <p className="text-white text-[15px] font-semibold">
              {formatDate(incentive.start_date)} – {formatDate(incentive.end_date)}
            </p>
            <p className="text-white/50 text-[13px] mt-1">{getDaysText()}</p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
