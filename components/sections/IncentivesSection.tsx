'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { UseScrollAnimationReturn } from '@/hooks/useScrollAnimation'
import { HARDCODED_INCENTIVES, getIncentivePeriod } from '@/lib/data/hardcoded-incentives'
import IncentiveModal from '@/components/incentives/IncentiveModal'
import { getStatusBadgeClasses } from '@/lib/ui/badges'
import type { Incentive } from '@/lib/types/incentive'

interface IncentivesSectionProps {
  animation: UseScrollAnimationReturn<HTMLElement>
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export default function IncentivesSection({ animation, activeFilter, onFilterChange }: IncentivesSectionProps) {
  const [selectedIncentive, setSelectedIncentive] = useState<Incentive | null>(null)
  const [calendarOpen, setCalendarOpen] = useState(false)

  const closeCalendar = useCallback(() => setCalendarOpen(false), [])

  useEffect(() => {
    if (!calendarOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeCalendar() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [calendarOpen, closeCalendar])

  const filteredIncentives = activeFilter === 'ALL'
    ? HARDCODED_INCENTIVES
    : HARDCODED_INCENTIVES.filter(
        (incentive) => incentive.category.toUpperCase() === activeFilter
      )

  return (
    <section 
      id="incentives"
      ref={animation.ref}
      className={`py-20 px-6 sm:px-10 md:px-16 lg:px-24 transition-all duration-1000 min-h-[100vh] ${
        animation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Number */}
        <span className="text-graphite/30 text-[40px] md:text-[40px] font-black leading-none block mb-4">02</span>
        
        <div className="mb-12">
          <h3 className="text-light text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-black leading-tight mb-6">
            INCENTIVES
          </h3>
          <p className="text-smoke text-lg md:text-xl leading-relaxed max-w-3xl">
            Our sales leaders dream up incentive prizes and trips to ensure that your 
            commissions are just a cherry on top. From tropical getaways to cash bonuses, 
            we celebrate your wins in style.
          </p>
        </div>
        
        {/* Filter Tabs + Calendar Button */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          {['ALL', 'MONTHLY', 'YEARLY', 'SUMMER', 'PAST'].map((filter) => (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`px-6 py-3 rounded-sm font-bold uppercase text-sm transition-all ${
                activeFilter === filter
                  ? 'bg-cloud text-phantom'
                  : 'bg-surface text-light hover:bg-arsenic'
              }`}
            >
              {filter}
            </button>
          ))}

          <button
            onClick={() => setCalendarOpen(true)}
            className="ml-auto flex items-center gap-2 px-5 py-3 rounded-sm font-bold uppercase text-sm bg-surface text-light hover:bg-arsenic transition-all"
          >
            {/* Calendar icon */}
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="2.5" width="14" height="12.5" rx="1.5" />
              <path d="M1 6.5h14" />
              <path d="M5 1v3M11 1v3" />
            </svg>
            Calendar
          </button>
        </div>
        
        {/* Incentives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredIncentives.map((incentive) => {
            const period = getIncentivePeriod(incentive.start_date, incentive.end_date)
            return (
              <button
                key={incentive.id}
                onClick={() => setSelectedIncentive(incentive as Incentive)}
                className="group relative aspect-[3.5/5] bg-surface/80 border border-arsenic/30 rounded-sm overflow-hidden hover:border-cloud transition-all text-left w-full"
              >
                {/* Incentive Poster Image */}
                <img
                  src={incentive.background_image_url}
                  alt={incentive.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Gradient for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-phantom/90 via-phantom/40 to-transparent pointer-events-none"></div>

                {/* Status Badge */}
                {(() => {
                  const classes = getStatusBadgeClasses(incentive.live_status)
                  return (
                    <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold shadow-md ${classes.container}`}>
                      {classes.iconType === 'check' ? (
                        <svg className="w-2.5 h-2.5 text-green-400 shrink-0" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 6l3 3 5-5" />
                        </svg>
                      ) : classes.ping ? (
                        <span className="relative flex h-2 w-2 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                        </span>
                      ) : (
                        <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${classes.dot}`} />
                      )}
                      <span className={classes.text}>
                        {incentive.live_status === 'live' ? 'Live' : incentive.live_status === 'coming_up' ? 'Coming Up' : 'Done'}
                      </span>
                    </div>
                  )
                })()}

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-phantom via-phantom/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-light text-lg font-black uppercase mb-1">
                      {incentive.title}
                    </h4>
                    <p className="text-cloud text-sm uppercase tracking-wider">
                      {period}
                    </p>
                  </div>
                </div>

                {/* Always Visible Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 group-hover:opacity-0 transition-opacity">
                  <h4 className="text-light text-lg font-black uppercase mb-1">
                    {incentive.title}
                  </h4>
                  <p className="text-smoke text-sm uppercase tracking-wider">
                    {period}
                  </p>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {selectedIncentive && (
        <IncentiveModal
          incentive={selectedIncentive}
          onClose={() => setSelectedIncentive(null)}
        />
      )}

      {/* Calendar Lightbox */}
      {calendarOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-start justify-center overflow-y-auto"
          onClick={closeCalendar}
        >
          {/* Close button */}
          <button
            onClick={closeCalendar}
            className="fixed top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/70 text-white/70 hover:text-white hover:bg-black transition-colors text-lg"
            aria-label="Close calendar"
          >
            ✕
          </button>

          {/* Image — clicks don't close */}
          <div className="py-6 px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src="/images/incentives/CLBR-Incentive-Calendar-4K-2160x2700.png"
              alt="CLBR Incentive Calendar '25–'26"
              className="w-full max-w-2xl mx-auto rounded-sm shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  )
}
