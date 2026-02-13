'use client'

import React from 'react'

export default function VideoSection() {
  return (
    <section className="py-20">
      {/* <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <h3 className="text-light text-[28px] sm:text-[36px] md:text-[44px] font-black uppercase mb-8 text-center">
          WHAT SELLING WITH CLBR<br />LOOKS/FEELS/IS LIKE
        </h3>
      </div> */}
      
      <div className="w-full">
        <video 
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto"
        >
          <source src="/videos/CLBRhype.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}
