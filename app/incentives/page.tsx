'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import IncentivesList from '@/components/incentives/IncentivesList'
import { HARDCODED_INCENTIVES } from '@/lib/data/hardcoded-incentives'
import type { Incentive } from '@/lib/data/incentives'
import type { Incentive as IncentiveModel } from '@/lib/types/incentive'

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
      setIncentives(HARDCODED_INCENTIVES)
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
