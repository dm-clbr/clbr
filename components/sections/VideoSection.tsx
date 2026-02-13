'use client'

import React, { useEffect, useRef } from 'react'
import Hls from 'hls.js'

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const videoSrc = process.env.NEXT_PUBLIC_VIDEO_HYPE_URL || "/videos/CLBRhype.mp4"
    
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
    <section className="py-20">
      {/* <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <h3 className="text-light text-[28px] sm:text-[36px] md:text-[44px] font-black uppercase mb-8 text-center">
          WHAT SELLING WITH CLBR<br />LOOKS/FEELS/IS LIKE
        </h3>
      </div> */}
      
      <div className="w-full">
        <video 
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}
