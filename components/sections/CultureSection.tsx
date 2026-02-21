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
      className={`py-16 lg:py-[160px] px-6 min-h-[100vh] sm:px-10 md:px-16 lg:px-24 transition-all duration-1000 flex items-center justify-center relative ${
        animation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Large Background Marquee Text */}
      <div className="absolute top-0 left-0 w-screen overflow-hidden pointer-events-none">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="text-[20vw] font-black uppercase text-graphite/5 mx-8">
            CLBR CULTURE
          </span>
          <span className="text-[20vw] font-black uppercase text-graphite/5 mx-8">
            CLBR CULTURE
          </span>
          <span className="text-[20vw] font-black uppercase text-graphite/5 mx-8">
            CLBR CULTURE
          </span>
        </div>
      </div>

      <div className="w-full mx-auto text-center relative z-10">
        
        {/* Three Culture Points with Images */}
        <div className="w-full pt-16 pb-16 lg:pt-[160px] lg:pb-[160px] flex flex-col lg:flex-row gap-6 mb-16 items-stretch">
          {/* Point 1 */}
          
          <div className="group flex flex-col justify-between flex-1">
          <div className="w-full">
            <span className="text-graphite/30 text-left text-[40px] md:text-[40px] font-black leading-none block mb-4">03</span>
            <h3 className="text-light text-left text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-black leading-[1.1] mb-6">
              CLBR CULTURE
            </h3>
            <h6 className="text-cloud text-left text-[18px] sm:text-[15px] md:text-[22px] font-black uppercase leading-tight mb-12">
              WE MAKE SURE THINGS ARE A LITTLE DIFFERENT HERE.
            </h6>
          </div>
          <div>
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
          </div>

          {/* Point 2 - Larger middle image */}
          <div className="group h-full w-full lg:w-[40%]">
            
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
          <div className="group flex flex-col justify-start flex-1">
            <div className="w-full h-[370px] bg-surface/80 border border-arsenic/30 rounded-sm overflow-hidden mb-4">
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
          {/* Background Pattern */}
          <img
            src="/SVG/clbr-outline.svg"
            alt="CLBR Outline"
            className="absolute opacity-5"
            draggable={false}
            style={{
              bottom: '0vh',
              left: '0vw',
              backgroundSize: 'cover',
              maxWidth: 'none !important',
              width: '100vw',
            }}
          />
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
          
          <p className="text-steel text-lg md:text-xl leading-relaxed max-w-4xl mx-auto py-16 lg:py-[160px]">
            Our teams are comprised of the best players in the industry. We match that
            talent with systems that educate and streamline to give every single one
            of our reps (including you) the best possible outcome.
          </p>
        </div>
        
        {/* Facts & Figures */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-6 max-w-[1400px] mx-auto mt-auto">
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
