'use client'

import React from 'react'
import Button from '@/components/Button'

interface BestSystemsSectionProps {
  onJoinClick: () => void
}

export default function BestSystemsSection({ onJoinClick }: BestSystemsSectionProps) {
  return (
    <section className="py-20 px-6 sm:px-10 md:px-16 lg:px-24" id="growth">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-graphite/30 text-[40px] md:text-[40px] font-black leading-none block mb-4">05</span>
        <h2 className="text-light text-[40px] sm:text-[56px] md:text-[72px] font-black uppercase leading-tight mb-4">
          REAL GROWTH. REAL RESULTS.
        </h2>
        {/* <p className="text-cloud text-[28px] sm:text-[36px] md:text-[44px] font-black uppercase mb-16">
          FOR THE BEST REPS.
        </p> */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-surface/80 border border-arsenic/30 rounded-sm p-10 hover:bg-arsenic/50 transition-all">
            <h4 className="text-light text-xl font-bold uppercase">YOUR OPPORTUNITY</h4>
          </div>
          <div className="bg-surface/80 border border-arsenic/30 rounded-sm p-10 hover:bg-arsenic/50 transition-all">
            <h4 className="text-light text-xl font-bold uppercase">YOUR TRAJECTORY</h4>
          </div>
          <div className="bg-surface/80 border border-arsenic/30 rounded-sm p-10 hover:bg-arsenic/50 transition-all">
            <h4 className="text-light text-xl font-bold uppercase">MAXIMIZE YOUR EARNINGS</h4>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-surface/80 border border-arsenic/30 rounded-sm p-10 hover:bg-arsenic/50 transition-all">
            <div className="text-light text-2xl font-black mb-4">001</div>
            <h4 className="text-light text-xl font-bold uppercase">YOUR TRAJECTORY</h4>
          </div>
          <div className="bg-surface/80 border border-arsenic/30 rounded-sm p-10 hover:bg-arsenic/50 transition-all">
            <div className="text-light text-2xl font-black mb-4">002</div>
            <h4 className="text-light text-xl font-bold uppercase">YOUR GROWTH OPPORTUNITY</h4>
          </div>
          <div className="bg-surface/80 border border-arsenic/30 rounded-sm p-10 hover:bg-arsenic/50 transition-all">
            <div className="text-light text-2xl font-black mb-4">003</div>
            <h4 className="text-light text-xl font-bold uppercase">THE COMMISSION STRUCTURE</h4>
          </div>
        </div> */}
        
        <Button variant="primary" onClick={onJoinClick}>
          JOIN NOW →
        </Button>
      </div>
    </section>
  )
}
