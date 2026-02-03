'use client'

import React, { useState, useEffect } from 'react'
import Button from '@/components/Button'
import Navbar from '@/components/Navbar'
import PageLoader from '@/components/PageLoader'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import JoinAveyoModal from '@/components/JoinAveyoModal'
import Link from 'next/link'

export default function Home() {
  const [showLoader, setShowLoader] = useState(true)
  const [pageReady, setPageReady] = useState(false)
  const [joinOpen, setJoinOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('ALL')

  const handleLoaderComplete = () => {
    setShowLoader(false)
    setTimeout(() => {
      setPageReady(true)
    }, 100)
  }

  const welcomeAnimation = useScrollAnimation<HTMLDivElement>({ delay: 200, disabled: !pageReady })
  const heroAnimation = useScrollAnimation<HTMLDivElement>({ delay: 400, disabled: !pageReady })
  const section1Animation = useScrollAnimation<HTMLElement>({ delay: 200 })
  const section2Animation = useScrollAnimation<HTMLElement>({ delay: 200 })
  const section3Animation = useScrollAnimation<HTMLElement>({ delay: 200 })
  const section4Animation = useScrollAnimation<HTMLElement>({ delay: 200 })
  const section5Animation = useScrollAnimation<HTMLElement>({ delay: 200 })

  return (
    <>
      {showLoader && (
        <PageLoader onComplete={handleLoaderComplete} />
      )}
      
      <div className="bg-background min-h-screen flex flex-col">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
          {/* Video Background */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/aveyoWEB1a.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-phantom/80 via-phantom/60 to-background/90" />
          
          {/* Hero Content */}
          <div 
            ref={heroAnimation.ref}
            className={`relative z-10 text-center px-6 sm:px-10 md:px-16 lg:px-24 max-w-6xl transition-all duration-1000 ${
              heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-light text-xs tracking-[6px] uppercase mb-8 opacity-70">
              WELCOME TO CLBR
            </p>
            
            <h1 className="text-light text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-black uppercase leading-[1.1] mb-8">
              A BETTER SALES<br />EXPERIENCE
            </h1>
            
            <h2 className="text-light text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-black uppercase leading-[1.2] mb-4">
              IN EVERY SINGLE WAY
            </h2>
            
            <h3 className="text-cloud text-[24px] sm:text-[32px] md:text-[36px] font-bold uppercase leading-[1.3] mb-12">
              EARN BIGGER. GROW MORE.<br />EXPAND FOREVER.
            </h3>
            
            <Button variant="primary" onClick={() => setJoinOpen(true)}>
              JOIN CLBR →
            </Button>
            
            <p className="text-smoke text-lg sm:text-xl md:text-2xl mt-12 max-w-3xl mx-auto leading-relaxed">
              We've wrapped real opportunity, genuine growth, and<br className="hidden md:block" />
              exponential earning together for one amazing experience.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-arsenic/40" />

        {/* Section Header: 05 REASONS */}
        <section className="py-20 px-6 sm:px-10 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-light text-[40px] sm:text-[56px] md:text-[72px] font-black uppercase leading-tight mb-2">
              05 REASONS
            </h2>
            <p className="text-cloud text-xl md:text-2xl">
              TO SELL WITH CLBR
            </p>
          </div>
        </section>

        <div className="w-full h-px bg-white/20" />

        {/* 01 SALES STATS */}
        <section 
          ref={section1Animation.ref}
          className={`py-20 px-6 sm:px-10 md:px-16 lg:px-24 transition-all duration-1000 ${
            section1Animation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-start gap-8 mb-12">
              <span className="text-graphite text-[80px] md:text-[120px] font-black leading-none">01</span>
              <div>
                <h3 className="text-light text-[32px] sm:text-[40px] md:text-[48px] font-black uppercase mb-4">
                  SALES STATS
                </h3>
                <p className="text-steel text-xl md:text-2xl max-w-2xl">
                  A real look into real metrics of our<br />
                  sales reps. This could be you soon:
                </p>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-surface/80 border border-arsenic/30 rounded-sm p-8">
                <div className="text-light text-5xl font-black mb-2">4.8</div>
                <div className="text-space text-sm uppercase tracking-wider">REVIEWS</div>
              </div>
              <div className="bg-surface/80 border border-arsenic/30 rounded-sm p-8">
                <div className="text-light text-5xl font-black mb-2">$850</div>
                <div className="text-space text-sm uppercase tracking-wider">$/CLOSE</div>
              </div>
              <div className="bg-surface/80 border border-arsenic/30 rounded-sm p-8">
                <div className="text-light text-5xl font-black mb-2">$12K</div>
                <div className="text-space text-sm uppercase tracking-wider">AVERAGE MONTHLY</div>
              </div>
              <div className="bg-surface/80 border border-arsenic/30 rounded-sm p-8">
                <div className="text-light text-5xl font-black mb-2">21</div>
                <div className="text-space text-sm uppercase tracking-wider">DAYS TO INSTALL</div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-white/20" />

        {/* 02 INSANE INCENTIVES */}
        <section 
          ref={section2Animation.ref}
          className={`py-20 px-6 sm:px-10 md:px-16 lg:px-24 transition-all duration-1000 ${
            section2Animation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-start gap-8 mb-8">
              <span className="text-graphite text-[80px] md:text-[120px] font-black leading-none">02</span>
              <div>
                <h3 className="text-light text-[32px] sm:text-[40px] md:text-[48px] font-black uppercase mb-4">
                  INSANE INCENTIVES
                </h3>
                <p className="text-steel text-xl md:text-2xl max-w-2xl mb-6">
                  Our sales leaders imagine up incentive prizes and trips<br />
                  to ensure that your commissions are just a cherry on top.
                </p>
                <p className="text-space text-lg italic">
                  Take a look at what we have going on:
                </p>
              </div>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-4 mb-8">
              {['ALL', 'MONTHLY', 'YEARLY', 'SUMMER', 'PAST'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-sm font-bold uppercase text-sm transition-all ${
                    activeFilter === filter
                      ? 'bg-light text-phantom'
                      : 'bg-surface text-light hover:bg-arsenic'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            
            {/* Incentives Preview - Link to full page */}
            <Link 
              href="/incentives"
              className="block bg-surface/60 border border-arsenic/30 rounded-sm p-12 hover:bg-surface transition-all group"
            >
              <p className="text-space text-lg mb-4">View all active incentives →</p>
              <p className="text-light text-2xl group-hover:translate-x-2 transition-transform">
                Explore trips, bonuses, and rewards
              </p>
            </Link>
          </div>
        </section>

        <div className="w-full h-px bg-white/20" />

        {/* VIDEO SECTION */}
        <section className="py-20 px-6 sm:px-10 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-light text-[28px] sm:text-[36px] md:text-[44px] font-black uppercase mb-8 text-center">
              WHAT SELLING WITH CLBR<br />LOOKS/FEELS/IS LIKE
            </h3>
            
            <div className="aspect-video bg-phantom/60 border border-arsenic/30 rounded-sm flex items-center justify-center">
              <p className="text-graphite text-lg">[VIDEO PLACEHOLDER]</p>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-white/20" />

        {/* 03 CLBR CULTURE */}
        <section 
          ref={section3Animation.ref}
          className={`py-20 px-6 sm:px-10 md:px-16 lg:px-24 transition-all duration-1000 ${
            section3Animation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-start gap-8 mb-12">
              <span className="text-graphite text-[80px] md:text-[120px] font-black leading-none">03</span>
              <div>
                <h3 className="text-light text-[32px] sm:text-[40px] md:text-[48px] font-black uppercase mb-8">
                  CLBR CULTURE
                </h3>
                <h4 className="text-cloud text-[24px] sm:text-[32px] md:text-[36px] font-black uppercase leading-tight mb-6">
                  WE MAKE SURE THINGS ARE A LITTLE DIFFERENT HERE.<br />
                  WE REPLACE HYPE WITH REAL OPPORTUNITY. GRIND<br />
                  MINDSET WITH PROVEN METHODS. AND SHADY TACTICS<br />
                  WITH A TRANSPARENT APPROACH.
                </h4>
                <h5 className="text-smoke text-xl md:text-2xl font-bold mb-8">
                  WORLD CLASS LEADERS // WORLD CLASS SYSTEMS //<br />
                  WORLD CLASS RESULTS
                </h5>
                <p className="text-steel text-lg md:text-xl leading-relaxed max-w-4xl">
                  Our teams are comprised of the best players in the industry. We match that<br />
                  talent with systems that educate and streamline to give every single one<br />
                  of our reps (including you) the best possible outcome.
                </p>
              </div>
            </div>
            
            {/* Facts & Figures Placeholder */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-light text-4xl md:text-5xl font-black mb-2">500+</div>
                <div className="text-space text-sm uppercase tracking-wider">Active Reps</div>
              </div>
              <div className="text-center">
                <div className="text-light text-4xl md:text-5xl font-black mb-2">12</div>
                <div className="text-space text-sm uppercase tracking-wider">States</div>
              </div>
              <div className="text-center">
                <div className="text-light text-4xl md:text-5xl font-black mb-2">98%</div>
                <div className="text-space text-sm uppercase tracking-wider">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-light text-4xl md:text-5xl font-black mb-2">$50M+</div>
                <div className="text-space text-sm uppercase tracking-wider">Annual Revenue</div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-white/20" />

        {/* 04 OUR REPS LOVE IT HERE */}
        <section 
          ref={section4Animation.ref}
          className={`py-20 px-6 sm:px-10 md:px-16 lg:px-24 transition-all duration-1000 ${
            section4Animation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-start gap-8 mb-12">
              <span className="text-graphite text-[80px] md:text-[120px] font-black leading-none">04</span>
              <div>
                <h3 className="text-light text-[32px] sm:text-[40px] md:text-[48px] font-black uppercase mb-4">
                  OUR REPS LOVE IT HERE
                </h3>
                <p className="text-steel text-xl md:text-2xl max-w-2xl">
                  What's it really like working at CLBR? We'll have our<br />
                  reps tell you.
                </p>
              </div>
            </div>
            
            {/* Reviews Link */}
            <Link 
              href="/reviews"
              className="block aspect-video bg-phantom/60 border border-arsenic/30 rounded-sm flex items-center justify-center hover:border-arsenic transition-all group"
            >
              <div className="text-center">
                <div className="text-light text-6xl mb-4 group-hover:scale-110 transition-transform">▶</div>
                <p className="text-light text-xl">Watch Rep Testimonials</p>
              </div>
            </Link>
          </div>
        </section>

        <div className="w-full h-px bg-white/20" />

        {/* 05 INDUSTRY-BEST PRODUCTS */}
        <section 
          ref={section5Animation.ref}
          className={`py-20 px-6 sm:px-10 md:px-16 lg:px-24 transition-all duration-1000 ${
            section5Animation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
                  We're the nation's leading D2C provider of both <strong className="text-light">DISH</strong> and <strong className="text-light">STARLINK.</strong> We'll<br />
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
                  <div className="text-steel text-base">D2C DISH/Starlink provider</div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="primary" onClick={() => setJoinOpen(true)}>
                JOIN NOW →
              </Button>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-white/20" />

        {/* THE BEST SYSTEMS */}
        <section className="py-20 px-6 sm:px-10 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-light text-[40px] sm:text-[56px] md:text-[72px] font-black uppercase leading-tight mb-4">
              THE BEST SYSTEMS
            </h2>
            <p className="text-cloud text-[28px] sm:text-[36px] md:text-[44px] font-black uppercase mb-16">
              FOR THE BEST REPS
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
            </div>
            
            <Button variant="primary" onClick={() => setJoinOpen(true)}>
              JOIN NOW →
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 sm:px-10 md:px-16 lg:px-24 border-t border-arsenic/40">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-graphite text-sm uppercase tracking-wider">
              © 2025 CLBR. ALL RIGHTS RESERVED.
            </p>
          </div>
        </footer>
      </div>

      {/* Join Modal */}
      <JoinAveyoModal open={joinOpen} onClose={() => setJoinOpen(false)} />
    </>
  )
}
