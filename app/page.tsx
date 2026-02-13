'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import PageLoader from '@/components/PageLoader'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import JoinAveyoModal from '@/components/JoinAveyoModal'
import {
  HeroSection,
  ReasonsSection,
  SalesStatsSection,
  IncentivesSection,
  VideoSection,
  CultureSection,
  RepsLoveSection,
  IndustryProductsSection,
  BestSystemsSection,
  Footer
} from '@/components/sections'

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
        <HeroSection heroAnimation={heroAnimation} onJoinClick={() => setJoinOpen(true)} />

        {/* Section Header: 05 REASONS */}
        <ReasonsSection />

        {/* 01 SALES STATS */}
        <SalesStatsSection animation={section1Animation} />

        {/* 02 INSANE INCENTIVES */}
        <IncentivesSection 
          animation={section2Animation}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />


        {/* VIDEO SECTION */}
        <VideoSection />


        {/* 03 CLBR CULTURE */}
        <CultureSection animation={section3Animation} />


        {/* 04 OUR REPS LOVE IT HERE */}
        <RepsLoveSection animation={section4Animation} />


        {/* 05 INDUSTRY-BEST PRODUCTS */}
        {/* <IndustryProductsSection 
          animation={section5Animation}
          onJoinClick={() => setJoinOpen(true)}
        /> */}


        {/* THE BEST SYSTEMS */}
        <BestSystemsSection onJoinClick={() => setJoinOpen(true)} />

        {/* Footer */}
        <Footer />
      </div>

      {/* Join Modal */}
      <JoinAveyoModal open={joinOpen} onClose={() => setJoinOpen(false)} />
    </>
  )
}
