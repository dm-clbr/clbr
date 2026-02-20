'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import Navbar from '@/components/Navbar'
import IncentivesList from '@/components/incentives/IncentivesList'
import type { Incentive as IncentiveModel } from '@/lib/types/incentive'

interface Incentive {
  id: string
  title: string
  description: string
  category: string
  category_color: string
  live_status: 'coming_up' | 'live' | 'done'
  background_image_url: string
  background_video_url?: string
  start_date: string
  end_date: string
  sort_order: number
}

export default function IncentivesPage() {
  const [incentives, setIncentives] = useState<Incentive[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'live' | 'coming_up' | 'done'>('all')
  const [mounted, setMounted] = useState(false)
  const [copyLoading, setCopyLoading] = useState(true)
  const [incentivesCopy, setIncentivesCopy] = useState<{ section_number: string; section_title: string; description: string }>({
    section_number: '02',
    section_title: 'INCENTIVES',
    description: 'Our sales leaders dream up incentive prizes and trips to ensure that your commissions are just a cherry on top. From tropical getaways to cash bonuses, we celebrate your wins in style.',
  })

  const fetchIncentives = async () => {
    try {
      setLoading(true)
      
      const response = await fetch('/api/incentives')
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      setIncentives(data || [])
    } catch (error) {
      console.error('Error fetching incentives:', error)
      // Fallback with actual CLBR incentive data from posters
      setIncentives([
        {
          id: '1',
          title: 'Out of Stock',
          description: 'Hit your monthly sales targets and earn exclusive CLBR branded merchandise. Rookies need 5 sales, Vets need 20 sales to qualify.',
          category: 'Monthly',
          category_color: '#3B82F6',
          live_status: 'live',
          background_image_url: '/images/incentives/26_ OUT OF STOCK 2.png',
          start_date: '2026-02-01',
          end_date: '2026-02-28',
          sort_order: 1
        },
        {
          id: '2', 
          title: 'Top Office',
          description: 'Monthly office-level competition to recognize and reward the highest-performing CLBR sales office.',
          category: 'Monthly',
          category_color: '#10B981',
          live_status: 'live',
          background_image_url: '/images/incentives/26_ TOP OFFICE.png',
          start_date: '2026-02-01',
          end_date: '2026-02-28',
          sort_order: 2
        },
        {
          id: '3',
          title: 'Top Ten Rookies',
          description: 'Monthly recognition program for the top 10 rookie sales reps. Compete with other new reps for exclusive rewards and recognition.',
          category: 'Monthly',
          category_color: '#F59E0B',
          live_status: 'live',
          background_image_url: '/images/incentives/TOP TEN ROOKIES.png',
          start_date: '2026-02-01',
          end_date: '2026-02-28',
          sort_order: 3
        },
        {
          id: '4',
          title: 'Top Ten Vets',
          description: 'Year-long cumulative competition for veteran reps. Every close matters, every sale adds up. Top 10 reps by end of year get something insane.',
          category: 'Yearly',
          category_color: '#8B5CF6',
          live_status: 'live',
          background_image_url: '/images/incentives/TOP TEN VETS.png',
          start_date: '2026-01-01',
          end_date: '2026-12-31',
          sort_order: 4
        },
        {
          id: '5',
          title: 'Offsite 2026',
          description: 'Annual all-expenses-paid tropical vacation for top performers. Qualify with points: 450 TSI = 1 DISH install is 3 points, T-Mobile is 1 point.',
          category: 'Yearly',
          category_color: '#06B6D4',
          live_status: 'live',
          background_image_url: '/images/incentives/OFFSITE 26_ FINAL.png',
          start_date: '2026-01-01',
          end_date: '2026-12-31',
          sort_order: 5
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  const fetchIncentivesCopy = async () => {
    try {
      const res = await fetch('/api/cms/home-incentives')
      if (res.ok) {
        const data = await res.json()
        setIncentivesCopy({
          section_number: data.section_number ?? '(2)',
          section_title: data.section_title ?? 'Incentives.',
          description: data.description ?? '',
        })
      }
    } catch (e) {
      console.error('Error fetching incentives copy:', e)
    } finally {
      setCopyLoading(false)
    }
  }

  useEffect(() => {
    setMounted(true)
    fetchIncentives()
    fetchIncentivesCopy()
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const filteredIncentives = incentives.filter(incentive => {
    if (filter === 'all') return true
    return incentive.live_status === filter
  })
  // (Note) Badge helpers and date formatters removed here since rendering moved into IncentivesList/IncentiveCard
  return (
    <div className="bg-[#0d0d0d] min-h-screen pt-[100px]">
      <Navbar />
      <div className="px-6 sm:px-8 md:px-10 lg:px-[50px] py-16 sm:py-20 lg:py-[130px]">
        <IncentivesList
          incentivesCopy={incentivesCopy}
          filter={filter}
          onFilterChange={(next) => setFilter(next)}
          loading={loading}
          filteredIncentives={([...filteredIncentives]
            .sort((a, b) => {
              const rank = (s: Incentive['live_status']) => (s === 'live' ? 0 : s === 'coming_up' ? 1 : 2)
              return rank(a.live_status) - rank(b.live_status)
            }) as IncentiveModel[])}
        />
      </div>
    </div>
  )
}
