'use client'

import React, { useEffect, useState, useRef } from 'react'

export default function ReasonsSection() {
  const [offsetY, setOffsetY] = useState(0)
  const [scale, setScale] = useState(1)
  const [aspectRatio, setAspectRatio] = useState('100% / 100%')
  const [backgroundSize, setBackgroundSize] = useState('cover')
  const [backgroundPosition, setBackgroundPosition] = useState('center')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const windowWidth = window.innerWidth
        const sectionTop = rect.top
        
        // Only start shrinking after section top reaches viewport top
        if (sectionTop <= 0) {
          // Progress from 0 (section top just hit viewport top) to 1 (section scrolled through)
          const scrolledDistance = Math.abs(sectionTop)
          const totalScrollDistance = rect.height - windowHeight
          const progress = Math.max(0, Math.min(1, scrolledDistance / totalScrollDistance))
          
          // Parallax effect - move slower than scroll
          setOffsetY(progress * 50)
          
          // Scale from 1 to 0.6 as section scrolls
          const newScale = 1 - (progress * 0.4)
          setScale(Math.max(0.6, newScale))
          
          // Transition aspect ratio from viewport to 16:9
          // Calculate target dimensions for 16:9 at 60vw
          const targetWidth = windowWidth * 0.8
          const targetHeight = targetWidth * (7 / 16)
          
          // Interpolate between viewport dimensions and 16:9
          const currentWidth = windowWidth - (windowWidth - targetWidth) * progress
          const currentHeight = windowHeight - (windowHeight - targetHeight) * progress
          
          setAspectRatio(`${currentWidth}px / ${currentHeight}px`)
          
          // Reframe the image: zoom to 250% and shift right by 20%
          const currentZoom = 100 + (170 * progress) // 100% to 250%
          setBackgroundSize(`${currentZoom}%`)
          
          const currentXPosition = 50 + (-30 * progress) // center (50%) to 70%
          setBackgroundPosition(`${currentXPosition}% 40%`)
        } else {
          // Section hasn't reached top yet - keep at initial state
          setOffsetY(0)
          setScale(1)
          setAspectRatio('100% / 100%')
          setBackgroundSize('cover')
          setBackgroundPosition('center')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[200vh]"
    >
      <div className="hidden md:flex absolute left-[16vw] bottom-[50vh] justify-between gap-[20px] items-start z-20 origin-center rotate-90">
        <a 
          href="#stats" 
          className="relative text-cloud text-sm md:text-base lg:text-lg font-bold uppercase tracking-[4px] origin-center whitespace-nowrap hover:text-light transition-colors cursor-pointer px-4 py-2 rounded-sm overflow-hidden group"
        >
          <span className="absolute inset-0 bg-black rounded-sm origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          <span className="relative z-10">STATS</span>
        </a>
        <a 
          href="#incentives" 
          className="relative text-cloud text-sm md:text-base lg:text-lg font-bold uppercase tracking-[4px] origin-center whitespace-nowrap hover:text-light transition-colors cursor-pointer px-4 py-2 rounded-sm overflow-hidden group"
        >
          <span className="absolute inset-0 bg-black rounded-sm origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          <span className="relative z-10">INCENTIVES</span>
        </a>
        <a 
          href="#culture" 
          className="relative text-cloud text-sm md:text-base lg:text-lg font-bold uppercase tracking-[4px] origin-center whitespace-nowrap hover:text-light transition-colors cursor-pointer px-4 py-2 rounded-sm overflow-hidden group"
        >
          <span className="absolute inset-0 bg-black rounded-sm origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          <span className="relative z-10">CULTURE</span>
        </a>
        <a 
          href="#reps" 
          className="relative text-cloud text-sm md:text-base lg:text-lg font-bold uppercase tracking-[4px] origin-center whitespace-nowrap hover:text-light transition-colors cursor-pointer px-4 py-2 rounded-sm overflow-hidden group"
        >
          <span className="absolute inset-0 bg-black rounded-sm origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          <span className="relative z-10">REPS</span>
        </a>
        <a 
          href="#growth" 
          className="relative text-cloud text-sm md:text-base lg:text-lg font-bold uppercase tracking-[4px] origin-center whitespace-nowrap hover:text-light transition-colors cursor-pointer px-4 py-2 rounded-sm overflow-hidden group"
        >
          <span className="absolute inset-0 bg-black rounded-sm origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          <span className="relative z-10">GROWTH</span>
        </a>
      </div>
      {/* Sticky Container */}
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Background Pattern */}
        <img
          src="/SVG/clbr-outline.svg"
          alt="CLBR Outline"
          className="absolute opacity-5"
          draggable={false}
          style={{
            bottom: '0vh',
            left: '10vw',
            backgroundSize: 'cover',
            maxWidth: 'none !important',
            width: '100vw',
          }}
        />
        
        {/* Parallax Background with Scale and Aspect Ratio Transition */}
        <div
          className="relative"
          style={{
            backgroundImage: 'url("/images/clbr-outdoor.JPG")',
            backgroundSize: backgroundSize,
            backgroundPosition: backgroundPosition,
            backgroundRepeat: 'no-repeat',
            transform: `translateY(0px) scale(${scale})`,
            transformOrigin: 'center center',
            willChange: 'transform',
            transition: 'transform 0.1s ease-out',
            width: aspectRatio.split(' / ')[0],
            height: aspectRatio.split(' / ')[1]
          }}
        >
          {/* Overlay - only on the image */}
          <div className="absolute inset-0 bg-phantom/50" />
          
          {/* Corner Squares */}
          <div 
            className="absolute top-[-5px] left-[-5px] w-[10px] h-[10px] bg-white origin-center" 
            style={{ transform: `scale(${1/scale})` }}
          />
          <div 
            className="absolute top-[-5px] right-[-5px] w-[10px] h-[10px] bg-white origin-center" 
            style={{ transform: `scale(${1/scale})` }}
          />
          <div 
            className="absolute bottom-[-5px] left-[-5px] w-[10px] h-[10px] bg-white origin-center" 
            style={{ transform: `scale(${1/scale})` }}
          />
          <div 
            className="absolute bottom-[-5px] right-[-5px] w-[10px] h-[10px] bg-white origin-center" 
            style={{ transform: `scale(${1/scale})` }}
          />
        </div>
        
        {/* Content */}
        <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-6 sm:px-10 md:px-16 lg:px-24 max-w-4xl w-full">
          <h2 className="text-light text-[28px] sm:text-[64px] md:text-[80px] lg:text-[100px] font-black uppercase leading-tight mb-4">
            5 REASONS
          </h2>
          <p className="text-cloud text-lg sm:text-3xl md:text-4xl font-bold uppercase">
            TO SELL WITH CLBR
          </p>
        </div>
      </div>
    </section>
  )
}
