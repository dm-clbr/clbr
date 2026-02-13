'use client'

import React from 'react'
import { UseScrollAnimationReturn } from '@/hooks/useScrollAnimation'

interface CultureSectionProps {
  animation: UseScrollAnimationReturn<HTMLElement>
}

export default function CultureSection({ animation }: CultureSectionProps) {
  return (
    <section 
      id="culture"
      ref={animation.ref}
      className={`py-[160px] px-6 min-h-[100vh] sm:px-10 md:px-16 lg:px-24 transition-all duration-1000 flex items-center justify-center ${
        animation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="mx-auto text-center">
        {/* Section Number */}
        <span className="text-graphite/30 text-[40px] md:text-[40px] font-black leading-none block mb-4">03</span>
        
        <div className="mx-auto">
          <h3 className="text-light text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-black leading-tight mb-6">
            CLBR CULTURE
          </h3>
          <h4 className="text-cloud text-[24px] sm:text-[28px] md:text-[32px] font-black uppercase leading-tight mb-12">
            WE MAKE SURE THINGS ARE A LITTLE DIFFERENT HERE.
          </h4>
        </div>

        {/* Three Culture Points with Images */}
        <div className="max-w-[70vw] pt-[160px] pb-[160px] mx-auto grid grid-cols-1 md:[grid-template-columns:30%_40%_30%] gap-6 mb-16 items-end">
          {/* Point 1 */}
          <div className="group h-full flex flex-col justify-end">
            <div className="aspect-square bg-surface/80 border border-arsenic/30 rounded-sm overflow-hidden mb-4">
              <img 
                src="/images/clbr-team.png" 
                alt="CLBR Team"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-light text-xs font-black uppercase leading-tight text-left">
              WE REPLACE HYPE WITH REAL OPPORTUNITY
            </h3>
          </div>

          {/* Point 2 - Larger middle image */}
          <div className="group ">
            <div className="aspect-[3/4] bg-surface/80 border border-arsenic/30 rounded-sm overflow-hidden mb-4">
              <img 
                src="/images/rep-shaking-hands.jpeg" 
                alt="Rep Shaking Hands"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-light text-xs font-black uppercase leading-tight text-left">
              SHADY TACTICS WITH A TRANSPARENT APPROACH
            </h3>
          </div>

          {/* Point 3 */}
          <div className="group h-full">
            <div className="w-full h-[170px] bg-surface/80 border border-arsenic/30 rounded-sm overflow-hidden mb-4">
              <img 
                src="/images/cabo-group.png" 
                alt="Team in Cabo"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-light text-xs md:text-xs font-black uppercase leading-tight text-left">
              GRIND MINDSET WITH PROVEN METHODS
            </h3>
          </div>
        </div>

        {/* World Class Section */}
        <div className="mb-12">
          {/* Marquee Banner - Full Width */}
          <div className="relative overflow-hidden py-8 mb-8 bg-surface/30 -mx-6 sm:-mx-10 md:-mx-16 lg:-mx-24 w-screen left-0">
            <div className="flex animate-marquee whitespace-nowrap">
              <span className="text-smoke text-2xl md:text-3xl lg:text-4xl font-black uppercase flex items-center gap-6">
                POSITIVE ATTITUDE <span className="w-2 h-2 bg-cloud"></span> GROWTH FOCUSED <span className="w-2 h-2 bg-cloud"></span> "A" PLAYER MENTALITY <span className="w-2 h-2 bg-cloud"></span> DEPENDABLE ACCOUNTABILITY <span className="w-2 h-2 bg-cloud"></span> WIN TOGETHER <span className="w-2 h-2 bg-cloud"></span>
              </span>
              <span className="text-smoke text-2xl md:text-3xl lg:text-4xl font-black uppercase mx-8 flex items-center gap-6">
                POSITIVE ATTITUDE <span className="w-2 h-2 bg-cloud"></span> GROWTH FOCUSED <span className="w-2 h-2 bg-cloud"></span> "A" PLAYER MENTALITY <span className="w-2 h-2 bg-cloud"></span> DEPENDABLE ACCOUNTABILITY <span className="w-2 h-2 bg-cloud"></span> WIN TOGETHER <span className="w-2 h-2 bg-cloud"></span>
              </span>
              <span className="text-smoke text-2xl md:text-3xl lg:text-4xl font-black uppercase mx-8 flex items-center gap-6">
                POSITIVE ATTITUDE <span className="w-2 h-2 bg-cloud"></span> GROWTH FOCUSED <span className="w-2 h-2 bg-cloud"></span> "A" PLAYER MENTALITY <span className="w-2 h-2 bg-cloud"></span> DEPENDABLE ACCOUNTABILITY <span className="w-2 h-2 bg-cloud"></span> WIN TOGETHER <span className="w-2 h-2 bg-cloud"></span>
              </span>
            </div>
          </div>
          
          <p className="text-steel text-lg md:text-xl leading-relaxed max-w-4xl mx-auto py-[160px]">
            Our teams are comprised of the best players in the industry. We match that<br />
            talent with systems that educate and streamline to give every single one<br />
            of our reps (including you) the best possible outcome.
          </p>
        </div>
        
        {/* Facts & Figures */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="text-light text-4xl md:text-5xl font-black mb-2">350</div>
            <div className="text-space text-sm uppercase tracking-wider">Active Reps</div>
          </div>
          <div className="text-center">
            <div className="text-light text-4xl md:text-5xl font-black mb-2">50</div>
            <div className="text-space text-sm uppercase tracking-wider">All States</div>
          </div>
          <div className="text-center">
            <div className="text-light text-4xl md:text-5xl font-black mb-2">800k</div>
            <div className="text-space text-sm uppercase tracking-wider">Leads</div>
          </div>
          {/* <div className="text-center">
            <div className="text-light text-4xl md:text-5xl font-black mb-2">$50M+</div>
            <div className="text-space text-sm uppercase tracking-wider">Annual Revenue</div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
