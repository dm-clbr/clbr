'use client'

import React, { useRef, useState, useEffect } from 'react'
import { UseScrollAnimationReturn } from '@/hooks/useScrollAnimation'

interface RepsLoveSectionProps {
  animation: UseScrollAnimationReturn<HTMLElement>
}

export default function RepsLoveSection({ animation }: RepsLoveSectionProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Actual testimonial videos from Bunny Stream
  const testimonials = [
    { 
      id: 1, 
      name: 'Noah Sorenson', 
      videoSrc: 'https://vz-a709db05-aaf.b-cdn.net/20eaaa09-9e22-4c45-96c3-4f3c8c9d7bfc/play_1080p.mp4',
      poster: 'https://vz-a709db05-aaf.b-cdn.net/20eaaa09-9e22-4c45-96c3-4f3c8c9d7bfc/thumbnail.jpg',
    },
    { 
      id: 2, 
      name: 'Andrew Rietveld', 
      videoSrc: 'https://vz-a709db05-aaf.b-cdn.net/bde3f6e5-dbcb-4bb0-93ed-8137cdcc1dae/play_1080p.mp4',
      poster: 'https://vz-a709db05-aaf.b-cdn.net/bde3f6e5-dbcb-4bb0-93ed-8137cdcc1dae/thumbnail.jpg',
    },
    { 
      id: 3, 
      name: 'Kaden Blake', 
      videoSrc: 'https://vz-a709db05-aaf.b-cdn.net/de9799cb-cfb6-4859-9df6-1f98be83b43a/play_1080p.mp4',
      poster: 'https://vz-a709db05-aaf.b-cdn.net/de9799cb-cfb6-4859-9df6-1f98be83b43a/thumbnail.jpg',
    },
  ]

  useEffect(() => {
    testimonials.forEach((testimonial, index) => {
      const video = videoRefs.current[index]
      if (!video) return
      video.src = testimonial.videoSrc

      const handlePlay = () => {
        videoRefs.current.forEach((other, otherIndex) => {
          if (otherIndex !== index && other && !other.paused) {
            other.pause()
          }
        })
      }

      video.addEventListener('play', handlePlay)
      return () => video.removeEventListener('play', handlePlay)
    })
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
    carouselRef.current.style.scrollSnapType = 'none'
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
    carouselRef.current.style.scrollSnapType = 'none'
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (carouselRef.current) {
      carouselRef.current.style.scrollSnapType = 'x mandatory'
    }
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    if (carouselRef.current) {
      carouselRef.current.style.scrollSnapType = 'x mandatory'
    }
  }

  return (
    <section 
      id="reps"
      ref={animation.ref}
      className={`py-16 lg:py-[160px] px-6 sm:px-10 md:px-16 lg:px-24 transition-all duration-1000 ${
        animation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Number */}
        <span className="text-graphite/30 text-[40px] md:text-[40px] font-black leading-none block mb-4">04</span>
        
        <div className="mb-12">
          <h3 className="text-light text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-black leading-tight mb-6">
            OUR REPS LOVE IT HERE
          </h3>
          <p className="text-smoke text-lg md:text-xl leading-relaxed max-w-2xl">
            What's it really like working at CLBR? We'll have our<br />
            reps tell you.
          </p>
        </div>
        
        {/* Video Carousel */}
        <div className="relative">
          <div
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            className={`overflow-x-auto scrollbar-hide pb-4 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ scrollSnapType: 'x mandatory' }}
          >
            <div className="flex gap-6 min-w-min">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="group relative w-[280px] md:w-[320px] aspect-[9/16] bg-surface/80 border border-arsenic/30 rounded-sm overflow-hidden hover:border-cloud transition-all flex-shrink-0"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  {/* Video Element */}
                  <video
                    ref={(el) => { videoRefs.current[index] = el }}
                    className="absolute inset-0 w-full h-full object-cover"
                    controls
                    playsInline
                    preload="none"
                    poster={testimonial.poster}
                  />
                  
                  {/* Info Overlay */}
                  {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-phantom via-phantom/80 to-transparent p-6 pointer-events-none">
                    <h4 className="text-light text-lg font-black uppercase mb-1">
                      {testimonial.name}
                    </h4>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Hint */}
          <div className="text-center mt-6">
            <p className="text-steel text-sm uppercase tracking-wider">
              ← Drag or Swipe to Navigate →
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
