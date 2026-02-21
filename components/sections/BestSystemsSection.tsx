'use client'

import React, { useState } from 'react'
import Button from '@/components/Button'

interface BestSystemsSectionProps {
  onJoinClick: () => void
}

export default function BestSystemsSection({ onJoinClick }: BestSystemsSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const getFlexClass = (index: number) => {
    if (hoveredIndex === null) return 'flex-1' // Equal width when nothing is hovered
    if (hoveredIndex === index) return 'flex-[0.6]' // 60% width when hovered
    return 'flex-[0.2]' // 20% width when another is hovered
  }

  return (
    <section className="py-20" id="growth">
      {/* Title Section */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-24 mb-12">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-graphite/30 text-[40px] md:text-[40px] font-black leading-none block mb-4">06</span>
          <h2 className="text-light text-[40px] sm:text-[56px] md:text-[72px] font-black uppercase leading-tight mb-4">
            THE BEST SYSTEMS
          </h2>
          <p className="text-smoke text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            From training to technology, we've built the infrastructure to support your success every step of the way.
          </p>
        </div>
      </div>

      {/* Full Width Image Row - stacked on mobile, side-by-side on desktop */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] flex flex-col md:flex-row md:h-[90vh]">
        {/* Image 1 - Training */}
        <div 
          className={`relative overflow-hidden group h-[60vw] md:h-auto transition-all duration-500 ease-in-out ${getFlexClass(0)}`}
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img 
            src="/images/BestSystemsImages/meeting.JPEG"
            alt="Training Systems"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-phantom via-phantom/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <h3 className="text-light text-[24px] md:text-[44px] font-black uppercase mb-2">
              WORLD-CLASS TRAINING
            </h3>
            <p className="text-smoke text-base md:text-xl max-w-md">
              Comprehensive onboarding and ongoing development to master your craft
            </p>
          </div>
        </div>

        {/* Image 2 - Systems */}
        <div 
          className={`relative overflow-hidden group h-[60vw] md:h-auto transition-all duration-500 ease-in-out ${getFlexClass(1)}`}
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img 
            src="/images/BestSystemsImages/onCall.jpg"
            alt="Sales Systems"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-phantom via-phantom/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <h3 className="text-light text-[24px] md:text-[44px] font-black uppercase mb-2">
              PROVEN SYSTEMS
            </h3>
            <p className="text-smoke text-base md:text-xl max-w-md">
              Battle-tested strategies and tools that drive real results
            </p>
          </div>
        </div>

        {/* Image 3 - Growth */}
        <div 
          className={`relative overflow-hidden group h-[60vw] md:h-auto transition-all duration-500 ease-in-out ${getFlexClass(2)}`}
          onMouseEnter={() => setHoveredIndex(2)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img 
            src="/images/BestSystemsImages/handshake.jpg"
            alt="Growth Opportunities"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-phantom via-phantom/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <h3 className="text-light text-[24px] md:text-[44px] font-black uppercase mb-2">
              REAL GROWTH
            </h3>
            <p className="text-smoke text-base md:text-xl max-w-md">
              Clear pathways to leadership and unlimited earning potential
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-24 mt-16">
        <div className="max-w-7xl mx-auto flex justify-center">
          <Button variant="primary" onClick={onJoinClick}>
            JOIN CLBR →
          </Button>
        </div>
      </div>
    </section>
  )
}
