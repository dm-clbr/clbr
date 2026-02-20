'use client'

import { useState, useEffect, useRef } from 'react'
import Navbar from '@/components/Navbar'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface Review {
  id: string
  title: string
  description: string
  video_url: string
  thumbnail_url: string
  type: 'customer' | 'rep'
  featured: boolean
  customer_name?: string
  rep_name?: string
  location: string
  date_recorded: string
  status: string
}

export default function ReviewsPage() {
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState<'all' | 'customer' | 'rep'>('all')
  const [featuredOnly, setFeaturedOnly] = useState(false)
  const [pageReady, setPageReady] = useState(false)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Hardcoded CLBR rep review videos
  const reviews: Review[] = [
    {
      id: '1',
      title: 'Noah Sorenson',
      description: 'CLBR sales rep Noah Sorenson shares his experience working at CLBR',
      video_url: 'https://vz-a709db05-aaf.b-cdn.net/20eaaa09-9e22-4c45-96c3-4f3c8c9d7bfc/play_1080p.mp4',
      thumbnail_url: 'https://vz-a709db05-aaf.b-cdn.net/20eaaa09-9e22-4c45-96c3-4f3c8c9d7bfc/thumbnail.jpg',
      type: 'rep',
      featured: true,
      rep_name: 'Noah Sorenson',
      location: 'CLBR Sales',
      date_recorded: '2026-02-01',
      status: 'active'
    },
    {
      id: '2',
      title: 'Andrew Rietveld',
      description: 'CLBR sales rep Andrew Rietveld discusses his success and experience',
      video_url: 'https://vz-a709db05-aaf.b-cdn.net/bde3f6e5-dbcb-4bb0-93ed-8137cdcc1dae/play_1080p.mp4',
      thumbnail_url: 'https://vz-a709db05-aaf.b-cdn.net/bde3f6e5-dbcb-4bb0-93ed-8137cdcc1dae/thumbnail.jpg',
      type: 'rep',
      featured: true,
      rep_name: 'Andrew Rietveld',
      location: 'CLBR Sales',
      date_recorded: '2026-02-01',
      status: 'active'
    },
    {
      id: '3',
      title: 'Kaden Blake',
      description: 'CLBR sales rep Kaden Blake shares what makes CLBR different',
      video_url: 'https://vz-a709db05-aaf.b-cdn.net/de9799cb-cfb6-4859-9df6-1f98be83b43a/play_1080p.mp4',
      thumbnail_url: 'https://vz-a709db05-aaf.b-cdn.net/de9799cb-cfb6-4859-9df6-1f98be83b43a/thumbnail.jpg',
      type: 'rep',
      featured: true,
      rep_name: 'Kaden Blake',
      location: 'CLBR Sales',
      date_recorded: '2026-02-01',
      status: 'active'
    }
  ]

  const filteredReviews = reviews.filter(review => {
    if (filter !== 'all' && review.type !== filter) return false
    if (featuredOnly && !review.featured) return false
    return true
  })

  const headerAnimation = useScrollAnimation<HTMLDivElement>({ delay: 200, disabled: false })
  const descriptionAnimation = useScrollAnimation<HTMLDivElement>({ delay: 400, disabled: false })
  const filtersAnimation = useScrollAnimation<HTMLDivElement>({ delay: 600, disabled: false })
  const gridAnimation = useScrollAnimation<HTMLDivElement>({ delay: 800, disabled: false })

  useEffect(() => {
    setPageReady(true)
  }, [])

  // Initialize videos and enforce single-play behavior
  useEffect(() => {
    filteredReviews.forEach((review, index) => {
      const video = videoRefs.current[index]
      if (!video) return

      video.src = review.video_url

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
  }, [filteredReviews])

  return (
    <div className="bg-[#0d0d0d] min-h-screen">
      <Navbar />
      
      <div className="px-[50px] py-[130px]">
        <div className="max-w-[1480px] mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center pb-10">
            {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 border border-white/10 rounded-full px-6 py-2 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/80 text-sm font-semibold">COMING SOON</span>
            </div> */}

            {/* Title */}
            <div className='flex flex-col items-center justify-center'>
              <div className="flex items-start justify-center gap-3 mb-8">
                <span className="text-white/60 text-[16px] mt-4">(E)</span>
                <h1 className="text-[60px] sm:text-[80px] md:text-[120px] font-extrabold uppercase leading-[0.8] text-white text-center">
                  Reviews
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-[20px] sm:text-[24px] md:text-[32px] max-w-[700px] text-white/80 mb-6 leading-relaxed text-center">
              Hear from our successful sales representatives about their experiences at CLBR.
              </p>
            </div>
          </div>

          {/* Filters */}
          {/* <div 
            ref={filtersAnimation.ref}
            className="flex items-center justify-center gap-2.5 mb-12 opacity-100 translate-y-0"
          >
            <button
              onClick={() => setFilter('all')}
              className={`px-[15px] py-[7px] rounded-[60px] text-[14px] font-semibold transition-colors ${
                filter === 'all'
                  ? 'bg-white text-black'
                  : 'bg-gradient-to-b from-[#232323] to-[#171717] text-white'
              }`}
            >
              All Reviews
            </button>
            <button
              onClick={() => setFilter('customer')}
              className={`px-[15px] py-[7px] rounded-[60px] text-[14px] font-semibold transition-colors ${
                filter === 'customer'
                  ? 'bg-white text-black'
                  : 'bg-gradient-to-b from-[#232323] to-[#171717] text-white'
              }`}
            >
              Customers
            </button>
            <button
              onClick={() => setFilter('rep')}
              className={`px-[15px] py-[7px] rounded-[60px] text-[14px] font-semibold transition-colors ${
                filter === 'rep'
                  ? 'bg-white text-black'
                  : 'bg-gradient-to-b from-[#232323] to-[#171717] text-white'
              }`}
            >
              Reps
            </button>
            <button
              onClick={() => setFeaturedOnly(!featuredOnly)}
              className={`px-[15px] py-[7px] rounded-[60px] text-[14px] font-semibold transition-colors ${
                featuredOnly
                  ? 'bg-white text-black'
                  : 'bg-gradient-to-b from-[#232323] to-[#171717] text-white'
              }`}
            >
              ⭐ Featured Only
            </button>
          </div> */}

          {/* Results Count */}
          <div className="text-center mb-12">
            <p className="text-[rgba(255,255,255,0.6)] text-[14px]">
              Showing {filteredReviews.length} review{filteredReviews.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Video Grid */}
          {!loading && (
            <div 
              ref={gridAnimation.ref}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-100 translate-y-0"
            >
              {filteredReviews.map((review, index) => (
                <div
                  key={review.id}
                  className="group relative w-full aspect-[9/16] bg-surface/80 border border-arsenic/30 rounded-sm overflow-hidden hover:border-cloud transition-all"
                >
                  {/* Video Element */}
                  <video
                    ref={(el) => { videoRefs.current[index] = el }}
                    className="absolute inset-0 w-full h-full object-cover"
                    controls
                    playsInline
                    preload="none"
                    poster={review.thumbnail_url}
                  />
                  
                  {/* Info Overlay */}
                  {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-phantom via-phantom/80 to-transparent p-6 pointer-events-none">
                    <h4 className="text-light text-lg font-black uppercase mb-1">
                      {review.rep_name || review.title}
                    </h4>
                  </div> */}
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && filteredReviews.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🎥</div>
              <h3 className="text-[24px] font-bold text-white mb-4">No Reviews Found</h3>
              <p className="text-[rgba(255,255,255,0.6)] text-[16px]">
                {filter === 'all' 
                  ? 'No reviews available at the moment.' 
                  : `No ${filter} reviews match your current filters.`}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
