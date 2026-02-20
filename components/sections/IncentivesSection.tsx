'use client'

import React, { useState } from 'react'
import { UseScrollAnimationReturn } from '@/hooks/useScrollAnimation'
import { HARDCODED_INCENTIVES, getIncentivePeriod } from '@/lib/data/hardcoded-incentives'
import IncentiveModal from '@/components/incentives/IncentiveModal'
import type { Incentive } from '@/lib/types/incentive'

interface IncentivesSectionProps {
  animation: UseScrollAnimationReturn<HTMLElement>
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export default function IncentivesSection({ animation, activeFilter, onFilterChange }: IncentivesSectionProps) {
  const [selectedIncentive, setSelectedIncentive] = useState<Incentive | null>(null)

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
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
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
    </section>
  )
}
