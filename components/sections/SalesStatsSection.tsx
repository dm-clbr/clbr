'use client'

import React from 'react'
import { UseScrollAnimationReturn } from '@/hooks/useScrollAnimation'
import { useCountUp } from '@/hooks/useCountUp'

interface SalesStatsSectionProps {
  animation: UseScrollAnimationReturn<HTMLElement>
}

export default function SalesStatsSection({ animation }: SalesStatsSectionProps) {
  const activeReps = useCountUp({ end: 350, duration: 2000, suffix: '+', isVisible: animation.isVisible })
  const avgIncome = useCountUp({ end: 68, duration: 2000, prefix: '$', suffix: 'K', isVisible: animation.isVisible })
  const totalPaid = useCountUp({ end: 500, duration: 2000, prefix: '$', suffix: 'M+', isVisible: animation.isVisible })
  const activeSales = useCountUp({ end: 200000, duration: 2000, suffix: '+',isVisible: animation.isVisible })
  return (
    <section 
      id="stats"
      ref={animation.ref}
      className={`relative py-20 md:py-32 px-6 sm:px-10 md:px-16 lg:px-24 bg-transparent transition-all duration-1000 ${
        animation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side - Content */}
          <div className='flex flex-col items-start justify-center'>
            {/* Section Number */}
            <span className="text-graphite/30 text-[40px] md:text-[40px] font-black leading-none block mb-4">01</span>
            
            <h3 className="text-light text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-black leading-tight mb-6">
              SALES STATS
            </h3>
            <p className="text-smoke text-lg md:text-xl leading-relaxed max-w-xl mb-8">
              A real look into real metrics of our top-performing sales reps. These aren't 
              projections or promises—they're actual results from reps in the field right now. 
              This could be you soon, backed by our proven systems and industry-leading products.
            </p>
            
            {/* Image Placeholder */}
            <div className="w-full h-[250px] md:h-[600px] bg-surface/80 overflow-hidden">
              <div
                className="w-full h-full bg-gradient-to-br from-graphite via-arsenic to-phantom flex items-center justify-center"
                style={{
                  backgroundImage: "url('/images/clbr-back2back.jpg'), linear-gradient(to bottom right, #25282b, #383e42, #181a20)",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  // backgroundBlendMode: 'multiply'
                }}
              >
              </div>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="space-y-8 md:space-y-12">
            <div>
              <div className="text-cloud text-[52px] md:text-[96px] lg:text-[120px] font-black leading-none mb-2">
                {activeReps}
              </div>
              <div className="text-steel text-base md:text-lg uppercase tracking-wider">
                Total Active Reps
              </div>
            </div>
            
            <div>
              <div className="text-cloud text-[52px] md:text-[96px] lg:text-[120px] font-black leading-none mb-2">
                {avgIncome}
              </div>
              <div className="text-steel text-base md:text-lg uppercase tracking-wider">
                Avg Rep Total Income
              </div>
            </div>
            
            <div>
              <div className="text-cloud text-[52px] md:text-[96px] lg:text-[120px] font-black leading-none mb-2">
                {totalPaid}
              </div>
              <div className="text-steel text-base md:text-lg uppercase tracking-wider">
                Total Lifetime Paid Out Commissions
              </div>
            </div>
            
            <div>
              <div className="text-cloud text-[52px] md:text-[96px] lg:text-[120px] font-black leading-none mb-2">
                {activeSales}
              </div>
              <div className="text-steel text-base md:text-lg uppercase tracking-wider">
                Lifetime Installs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
