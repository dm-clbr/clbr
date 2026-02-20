'use client'

import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 px-6 sm:px-10 md:px-16 lg:px-24 border-t border-arsenic/40">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-graphite text-sm uppercase tracking-wider">
          © {new Date().getFullYear()} CLBR. ALL RIGHTS RESERVED.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/privacy-policy"
            className="text-graphite hover:text-smoke text-sm uppercase tracking-wider transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-conditions"
            className="text-graphite hover:text-smoke text-sm uppercase tracking-wider transition-colors"
          >
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  )
}
