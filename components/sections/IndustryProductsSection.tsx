'use client'

import React from 'react'
import Button from '@/components/Button'
import { UseScrollAnimationReturn } from '@/hooks/useScrollAnimation'

interface IndustryProductsSectionProps {
  animation: UseScrollAnimationReturn<HTMLElement>
  onJoinClick: () => void
}

export default function IndustryProductsSection({ animation, onJoinClick }: IndustryProductsSectionProps) {
  return (
    <section 
      id="products"
      ref={animation.ref}
      className={`py-20 px-6 sm:px-10 md:px-16 lg:px-24 transition-all duration-1000 ${
        animation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start gap-8 mb-12">
          <span className="text-graphite text-[80px] md:text-[120px] font-black leading-none">05</span>
          <div>
            <h3 className="text-light text-[32px] sm:text-[40px] md:text-[48px] font-black uppercase mb-6">
              INDUSTRY-BEST PRODUCTS
            </h3>
            <p className="text-steel text-xl md:text-2xl max-w-3xl leading-relaxed">
              Tired of selling pest, security, or solar? We've got a better opportunity for you.<br />
              We're the nation's leading D2C provider of <a href="https://dish.com" target="_blank" rel="noopener noreferrer" className="text-cloud font-bold hover:underline">dish.com</a>. We'll<br />
              send you to white-hot markets that haven't seen any reps selling our products.
            </p>
          </div>
        </div>
        
        {/* Growth Metrics */}
        <div className="bg-surface/80 border border-arsenic/30 rounded-sm p-12">
          <p className="text-space text-sm uppercase tracking-wider mb-6">Growth Metrics</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-light text-5xl font-black mb-2">45%</div>
              <div className="text-steel text-base">Year-over-year growth</div>
            </div>
            <div>
              <div className="text-light text-5xl font-black mb-2">250+</div>
              <div className="text-steel text-base">New markets this year</div>
            </div>
            <div>
              <div className="text-light text-5xl font-black mb-2">#1</div>
              <div className="text-steel text-base">D2C DISH provider</div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="primary" onClick={onJoinClick}>
            JOIN NOW →
          </Button>
        </div>
      </div>
    </section>
  )
}
