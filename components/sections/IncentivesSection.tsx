'use client'

import React from 'react'
import Link from 'next/link'
import { UseScrollAnimationReturn } from '@/hooks/useScrollAnimation'

interface IncentivesSectionProps {
  animation: UseScrollAnimationReturn<HTMLElement>
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export default function IncentivesSection({ animation, activeFilter, onFilterChange }: IncentivesSectionProps) {
  // Incentive data from /images/incentives folder
  const incentives = [
    { id: 1, title: 'Out of Stock', category: 'MONTHLY', period: 'Feb 2026', image: '/images/incentives/26_ OUT OF STOCK 2.png' },
    { id: 2, title: 'Top Office', category: 'MONTHLY', period: 'Feb 2026', image: '/images/incentives/26_ TOP OFFICE.png' },
    { id: 3, title: 'Offsite', category: 'YEARLY', period: '2026', image: '/images/incentives/OFFSITE 26_ FINAL.png' },
    { id: 4, title: 'Top Ten Rookies', category: 'MONTHLY', period: 'Feb 2026', image: '/images/incentives/TOP TEN ROOKIES.png' },
    { id: 5, title: 'Top Ten Vets', category: 'MONTHLY', period: 'Feb 2026', image: '/images/incentives/TOP TEN VETS.png' },
  ]

  const filteredIncentives = activeFilter === 'ALL' 
    ? incentives 
    : incentives.filter(incentive => incentive.category === activeFilter)

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
          {filteredIncentives.map((incentive) => (
            <Link
              key={incentive.id}
              href={`/incentives/${incentive.id}`}
              className="group relative aspect-[3/5] bg-surface/80 border border-arsenic/30 rounded-sm overflow-hidden hover:border-cloud transition-all"
            >
              {/* Incentive Poster Image */}
              <img 
                src={incentive.image}
                alt={incentive.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-phantom via-phantom/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-light text-lg font-black uppercase mb-1">
                    {incentive.title}
                  </h4>
                  <p className="text-cloud text-sm uppercase tracking-wider">
                    {incentive.period}
                  </p>
                </div>
              </div>
              
              {/* Always Visible Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 group-hover:opacity-0 transition-opacity">
                <h4 className="text-light text-lg font-black uppercase mb-1">
                  {incentive.title}
                </h4>
                <p className="text-smoke text-sm uppercase tracking-wider">
                  {incentive.period}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
