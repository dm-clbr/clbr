"use client"
import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { supabase } from '@/lib/supabase-browser'
import Image from 'next/image'

interface NavbarProps {
  className?: string
  theme?: 'dark' | 'light'
}

const navItems = [
  { name: 'About', href: '/#culture' },
  { name: 'Reviews', href: '/reviews' },
  // { name: 'Stats', href: '/stats' },
  // { name: 'Leaderboard', href: '/leaderboard' },
  { name: 'Incentives', href: '/incentives' }, 
  // { name: 'EDU', href: '/edu' },
  { name: 'Store', href: 'https://clbr.store/' },
  { name: 'Verify', href: '/verify' },
  { name: 'Join', href: '/join' },
  // { name: 'Brand', href: '/brand' },
  // { name: 'Wiki', href: 'https://aveyo-wiki.bullet.site/' },
  // { name: 'Map', href: '/map' },
]

export default function Navbar({ className = '', theme = 'dark' }: NavbarProps) {
  const isLight = theme === 'light'
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    let mounted = true
    const init = async () => {
      const { data } = await supabase.auth.getUser()
      if (!mounted) return
      const user = data.user
      setIsLoggedIn(!!user)
      const meta = (user?.user_metadata as any) || {}
      setAvatarUrl(meta.avatar_url || null)
    }
    init()
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session?.user)
      const meta = (session?.user?.user_metadata as any) || {}
      setAvatarUrl(meta.avatar_url || null)
    })
    return () => {
      mounted = false
      sub.subscription.unsubscribe()
    }
  }, [])

  function Backdrop({ onClick }: { onClick: () => void }) {
    if (typeof document === 'undefined') return null
    return createPortal(
      <div
        className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-md supports-[backdrop-filter]:backdrop-blur-md"
        style={{ WebkitBackdropFilter: 'blur(12px)' }}
        onClick={onClick}
      />,
      document.body
    )
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 md:px-12 py-4 md:py-5 transition-colors isolate ${
        isLight
          ? open
            ? 'bg-white shadow-sm'
            : scrolled
              ? 'bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm'
              : 'bg-white border-b border-black/8'
          : open
            ? 'bg-black/80'
            : scrolled
              ? 'bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60'
              : 'bg-transparent'
      } ${className}`}
    >
      <div className="mx-auto max-w-[98vw]">
        <div className="flex items-center md:justify-between justify-between md:gap-[20px]">
          {/* Left: Logo */}
          <a href="/" className="shrink-0 flex items-center">
            <img
              alt="CLBR Logo"
              className="block h-[40px] w-auto max-w-none"
              src={isLight ? '/clbr-lockup-black.svg' : '/clbr-lockup-white.svg'}
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-xs font-bold uppercase tracking-wide hover:opacity-70 transition-opacity ${
                  isLight ? 'text-black' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            {/* Right: Account link */}
            <a
              href="https://app.knockvia.com/signin"
              target="_blank"
              rel="noopener noreferrer"
              title="Sign in to KnockVia"
              className="flex items-center justify-center rounded-full overflow-hidden h-[28px] w-[28px] bg-gradient-to-b from-[#5C5C5C] to-[#1F1F1F] hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/user-icon.png"
                alt="Account"
                width={28}
                height={28}
                className="block size-full object-cover"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            className={`md:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus-visible:ring-2 transition-colors ${
              isLight
                ? 'text-black/70 hover:text-black hover:bg-black/5 focus-visible:ring-black/20'
                : 'text-white/90 hover:text-white hover:bg-white/10 focus-visible:ring-white/50'
            }`}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown (overlay) */}
        {open && (
          <>
            {/* Backdrop */}
            <Backdrop onClick={() => setOpen(false)} />
            {/* Menu panel anchored to navbar */}
            <div className="md:hidden absolute left-0 right-0 top-full z-[110] mt-2 px-4 pointer-events-auto">
              <div className={`rounded-md shadow-lg ${
                isLight
                  ? 'border border-black/10 bg-white'
                  : 'border border-white/10 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60'
              }`}>
                <div className="flex flex-col py-2">
                  {/* Account link (mobile) */}
                  <a
                    href="https://app.knockvia.com/signin"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 text-sm font-bold uppercase tracking-wide transition-colors flex items-center gap-3 ${
                      isLight ? 'text-black hover:bg-black/5' : 'text-white hover:bg-white/10'
                    }`}
                  >
                    <span className={`inline-block size-6 rounded-full overflow-hidden border ${
                      isLight ? 'border-black/20' : 'border-white/20'
                    }`}>
                      <img
                        alt="Account"
                        src="/images/user-icon.png"
                        className="block max-w-none size-full object-cover"
                      />
                    </span>
                    Account
                  </a>
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`px-4 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${
                        isLight ? 'text-black hover:bg-black/5' : 'text-white hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}
