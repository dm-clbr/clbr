'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'

export default function JoinPage() {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [consentSms, setConsentSms] = useState(false)
  const [consentCalls, setConsentCalls] = useState(false)

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    experience: 'beginner',
    message: '',
  })

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [key]: e.target.value })

  const validEmail = (v: string) => /.+@.+\..+/.test(v)
  const validPhone = (v: string) => v === '' || /[0-9()\-+\.\s]{7,}/.test(v)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!form.firstName || !form.lastName) return setError('Please enter your first and last name.')
    if (!validEmail(form.email)) return setError('Please enter a valid email.')
    if (!validPhone(form.phone)) return setError('Please enter a valid phone number.')

    setSubmitting(true)
    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, consentSms, consentCalls }),
      })
      if (!res.ok) {
        const txt = await res.text()
        throw new Error(txt || `Submission failed (${res.status})`)
      }
      setSuccess(true)
    } catch (err: any) {
      setError(err?.message || 'Something went wrong.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors"
  const labelClass = "block text-white/40 text-xs font-bold uppercase tracking-widest mb-2"

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-white">
      <Navbar />

      <div className="px-6 sm:px-10 md:px-[50px] pt-[130px] pb-24">
        <div className="max-w-[640px] mx-auto">

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-14">
            <div className="flex items-start justify-center gap-3 mb-6">
              <span className="text-white/40 text-[14px] mt-3">(J)</span>
              <h1 className="text-[60px] sm:text-[80px] md:text-[100px] font-extrabold uppercase leading-[0.85] text-white">
                Join CLBR
              </h1>
            </div>
            <p className="text-white/60 text-lg leading-relaxed max-w-[460px]">
              Fill out the form below and our team will reach out to get you started.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-12" />

          {success ? (
            <div className="text-center py-16">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Submitted</p>
              <h2 className="text-4xl font-black uppercase mb-4">We got it!</h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-sm mx-auto mb-10">
                Our team will reach out to you shortly. Keep an eye on your inbox.
              </p>
              <a
                href="/"
                className="inline-block px-8 py-4 bg-white text-black text-sm font-black uppercase tracking-widest rounded-sm hover:bg-white/90 transition-colors"
              >
                Back to Home
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="border border-red-500/30 bg-red-500/5 rounded-sm px-5 py-4 text-red-400 text-sm">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input value={form.firstName} onChange={update('firstName')} className={inputClass} placeholder="John" />
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input value={form.lastName} onChange={update('lastName')} className={inputClass} placeholder="Smith" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Email</label>
                  <input type="email" value={form.email} onChange={update('email')} className={inputClass} placeholder="john@example.com" />
                </div>
                <div>
                  <label className={labelClass}>Phone</label>
                  <input value={form.phone} onChange={update('phone')} className={inputClass} placeholder="(555) 000-0000" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Location</label>
                  <input value={form.location} onChange={update('location')} className={inputClass} placeholder="City, State" />
                </div>
                <div>
                  <label className={labelClass}>Experience</label>
                  <select value={form.experience} onChange={update('experience')} className={inputClass}>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="expert">Expert</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass}>Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={update('message')}
                  className={inputClass}
                  placeholder="Tell us a bit about yourself..."
                />
              </div>

              {/* Consent checkboxes */}
              <div className="space-y-4 pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={consentSms}
                    onChange={e => setConsentSms(e.target.checked)}
                    className="mt-0.5 shrink-0 accent-white w-4 h-4 cursor-pointer"
                  />
                  <span className="text-xs text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                    I agree to receive SMS messages from CLBR about job opportunities, application updates, interview reminders, and recruiting follow-ups. Message frequency varies. Message and data rates may apply. Reply STOP to opt out and HELP for help. View{' '}
                    <a href="/terms-and-conditions" target="_blank" className="underline hover:text-white/80">Terms &amp; Conditions</a>{' '}
                    and{' '}
                    <a href="/privacy-policy" target="_blank" className="underline hover:text-white/80">Privacy Policy</a>.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={consentCalls}
                    onChange={e => setConsentCalls(e.target.checked)}
                    className="mt-0.5 shrink-0 accent-white w-4 h-4 cursor-pointer"
                  />
                  <span className="text-xs text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                    By checking this box I agree to receive calls from CLBR.
                  </span>
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-white text-black text-sm font-black uppercase tracking-widest rounded-sm hover:bg-white/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  )
}
