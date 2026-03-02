'use client'

import { useState, useRef } from 'react'
import Navbar from '@/components/Navbar'

type VerifyState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; badgeUrl: string; repId: string }
  | { status: 'error'; message: string }

export default function VerifyPage() {
  const [repId, setRepId] = useState('')
  const [state, setState] = useState<VerifyState>({ status: 'idle' })
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!repId.trim()) return

    setState({ status: 'loading' })

    try {
      const res = await fetch('/api/verify-rep', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ repId: repId.trim() }),
      })

      const json = await res.json()

      if (!res.ok || !json.ok) {
        setState({ status: 'error', message: json.error ?? 'Rep not found.' })
        return
      }

      setState({ status: 'success', badgeUrl: json.data, repId: repId.trim() })
    } catch {
      setState({ status: 'error', message: 'Network error. Please try again.' })
    }
  }

  const handleReset = () => {
    setState({ status: 'idle' })
    setRepId('')
    setTimeout(() => inputRef.current?.focus(), 50)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Red top bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[200]" style={{ backgroundColor: '#EC1944' }} />

      <Navbar theme="light" />

      <div className="px-6 sm:px-10 md:px-[50px] pt-[130px] pb-24">
        <div className="max-w-[580px] mx-auto">

          {/* DISH Logo + Header */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-3 mb-8">
              <img
                src="/SVG/dishLogo.svg"
                alt="DISH"
                className="h-8 w-auto"
              />
              <span className="text-black/40 text-sm font-medium uppercase tracking-widest">
                Rep Verification
              </span>
            </div>

            <h1 className="text-black text-[52px] sm:text-[72px] font-black uppercase leading-[0.9] mb-5">
              Verify a<br />
              <span style={{ color: '#EC1944' }}>Sales Rep</span>
            </h1>

            <p className="text-black/50 text-base sm:text-lg leading-relaxed max-w-[420px]">
              Enter a rep's ID number below to confirm they are an authorized DISH sales representative.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px mb-10" style={{ backgroundColor: '#EC1944', opacity: 0.25 }} />

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="repId"
                className="block text-black/40 text-xs font-bold uppercase tracking-widest mb-2"
              >
                Rep ID Number
              </label>
              <input
                ref={inputRef}
                id="repId"
                type="text"
                value={repId}
                onChange={(e) => {
                  setRepId(e.target.value)
                  if (state.status !== 'idle') setState({ status: 'idle' })
                }}
                placeholder="e.g. 1482"
                autoComplete="off"
                className="w-full rounded-sm px-5 py-4 text-black text-base placeholder:text-black/20 focus:outline-none transition-colors bg-white"
                style={{ border: '1.5px solid #e5e7eb' }}
                onFocus={e => (e.currentTarget.style.borderColor = '#EC1944')}
                onBlur={e => (e.currentTarget.style.borderColor = '#e5e7eb')}
              />
            </div>

            <button
              type="submit"
              disabled={!repId.trim() || state.status === 'loading'}
              className="w-full py-4 text-white text-sm font-black uppercase tracking-widest rounded-sm transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ backgroundColor: '#EC1944' }}
            >
              {state.status === 'loading' ? 'Verifying...' : 'Verify Rep'}
            </button>
          </form>

          {/* Loading */}
          {state.status === 'loading' && (
            <div className="flex flex-col items-center gap-4 mt-14">
              <div
                className="w-8 h-8 rounded-full animate-spin"
                style={{ border: '2px solid rgba(236,25,68,0.15)', borderTopColor: '#EC1944' }}
              />
              <p className="text-black/40 text-sm uppercase tracking-widest">Looking up rep...</p>
            </div>
          )}

          {/* Error */}
          {state.status === 'error' && (
            <div
              className="mt-10 rounded-sm px-6 py-5 flex items-start gap-4"
              style={{ border: '1px solid rgba(236,25,68,0.3)', backgroundColor: 'rgba(236,25,68,0.05)' }}
            >
              <svg className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#EC1944' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide mb-1" style={{ color: '#EC1944' }}>
                  Not Found
                </p>
                <p className="text-black/50 text-sm">{state.message}</p>
                <button
                  onClick={handleReset}
                  className="mt-3 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-60"
                  style={{ color: '#EC1944' }}
                >
                  Try again
                </button>
              </div>
            </div>
          )}

          {/* Success */}
          {state.status === 'success' && (
            <div className="mt-12 flex flex-col items-center">
              {/* Verified banner */}
              <div
                className="w-full flex items-center gap-3 px-5 py-3.5 rounded-sm mb-6"
                style={{ backgroundColor: 'rgba(22,163,74,0.07)', border: '1px solid rgba(22,163,74,0.3)' }}
              >
                <svg className="w-5 h-5 shrink-0" style={{ color: '#16a34a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.745 3.745 0 0 1 3.296-1.043A3.745 3.745 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest" style={{ color: '#16a34a' }}>
                    Verified DISH Sales Rep
                  </p>
                  <p className="text-black/40 text-xs mt-0.5">Rep ID #{state.repId}</p>
                </div>
              </div>

              {/* Badge image */}
              <div
                className="w-full max-w-sm rounded-sm overflow-hidden"
                style={{ border: '1px solid rgba(236,25,68,0.15)' }}
              >
                <img
                  src={state.badgeUrl}
                  alt={`Rep #${state.repId} badge`}
                  className="w-full h-auto"
                />
              </div>

              <button
                onClick={handleReset}
                className="mt-8 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-60"
                style={{ color: 'rgba(0,0,0,0.3)' }}
              >
                Verify another rep
              </button>
            </div>
          )}

          {/* Footer note */}
          <div className="mt-16 pt-6" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            <p className="text-black/25 text-xs text-center leading-relaxed">
              This tool is for verifying authorized DISH sales representatives only.
              <br />
              Powered by CLBR Sales.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
