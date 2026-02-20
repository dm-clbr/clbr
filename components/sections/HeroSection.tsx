'use client'

import React, { useEffect, useRef } from 'react'
import Button from '@/components/Button'
import { UseScrollAnimationReturn } from '@/hooks/useScrollAnimation'
import Hls from 'hls.js'

interface HeroSectionProps {
  heroAnimation: UseScrollAnimationReturn<HTMLDivElement>
  onJoinClick: () => void
}

export default function HeroSection({ heroAnimation, onJoinClick }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const videoSrc = process.env.NEXT_PUBLIC_VIDEO_HERO_URL || "/videos/CLBRHeroFINAL.mp4"
    
    if (!video) return

    // Check if HLS is needed (for .m3u8 files)
    if (videoSrc.includes('.m3u8')) {
      if (Hls.isSupported()) {
        const hls = new Hls({
          enableWorker: true,
          lowLatencyMode: true,
          startLevel: -1, // Auto select best quality
          maxMaxBufferLength: 30,
          autoStartLoad: true,
          // Force high quality from the start
          capLevelToPlayerSize: false,
          capLevelOnFPSDrop: false,
        })
        hls.loadSource(videoSrc)
        hls.attachMedia(video)
        
        // Force highest quality level when manifest loads
        hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
          // Set to highest quality level (last level is highest)
          const highestLevel = data.levels.length - 1
          hls.currentLevel = highestLevel
          
          video.play().catch(() => {
            // Autoplay might be blocked, that's ok
          })
        })
        
        return () => {
          hls.destroy()
        }
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Native HLS support (Safari)
        video.src = videoSrc
        video.addEventListener('loadedmetadata', () => {
          video.play().catch(() => {
            // Autoplay might be blocked, that's ok
          })
        })
      }
    } else {
      // Regular MP4
      video.src = videoSrc
    }
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden flex items-end pb-20 justify-center">
      {/* Video Background */}
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Decorative Side Text */}
      <div className="hidden md:flex absolute right-6 md:right-[-2rem] top-0 bottom-0 flex-col justify-between py-20 md:pt-[15rem] md:pb-[10rem] z-20">
        <span className="text-cloud text-sm md:text-base lg:text-lg font-bold uppercase tracking-[4px] origin-center rotate-90 whitespace-nowrap">
          EARN BIGGER.
        </span>
        <span className="text-cloud text-sm md:text-base lg:text-lg font-bold uppercase tracking-[4px] origin-center rotate-90 whitespace-nowrap">
          GROW MORE.
        </span>
        <span className="text-cloud text-sm md:text-base lg:text-lg font-bold uppercase tracking-[4px] origin-center rotate-90 whitespace-nowrap">
          EXPAND FOREVER.
        </span>
      </div>
      
      {/* Hero Content */}
      <div 
        ref={heroAnimation.ref}
        className={`relative z-10 h-full w-full text-left px-6 sm:px-10 md:px-16 lg:px-24 transition-all duration-1000 ${
          heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <p className="text-light text-xs tracking-[6px] uppercase mb-8 opacity-70">
          WELCOME TO CLBR
        </p>
        
        <h1 className="text-left text-light text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[150px] font-black uppercase leading-[1.1] xl:leading-[120px] mb-8 xl:tracking-[-7.6px]">
          A BETTER SALES<br />EXPERIENCE
        </h1>
        
        <h2 className="text-light text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-black uppercase leading-[1.2] mb-12">
          IN EVERY SINGLE WAY
        </h2>
        
        <p className="text-smoke text-lg sm:text-xl md:text-2xl mb-12 w-full leading-relaxed">
          We've wrapped real opportunity, genuine growth, and<br className="hidden md:block" />
          exponential earning together for one amazing experience.
        </p>
        
        <Button variant="primary" onClick={onJoinClick}>
          JOIN CLBR
        </Button>
      </div>
    </div>
  )
}
