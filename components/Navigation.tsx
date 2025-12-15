'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Speaking', href: '/speaking' },
    { label: 'About', href: '/about' },
    { label: 'Media', href: '/media' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-2xl shadow-black/20'
        : 'bg-transparent'
    }`}>
      <div className="container flex justify-between items-center py-5">
        <Link href="/" className="group flex items-center gap-3">
          <img
            src="https://raycashcare.com/wp-content/uploads/2023/01/ray-cash-care-logo.webp"
            alt="Ray Cash Care Logo"
            className="h-14 w-auto"
          />
        </Link>

        <div className="hidden lg:flex gap-10 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-secondary hover:text-text-primary font-medium transition-all duration-300 text-sm relative group py-2"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent-light group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="btn-primary hidden md:flex items-center gap-2">
            <span>Book Ray</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <button
            className="lg:hidden text-text-primary p-2 hover:bg-surface rounded-xl transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-border/50 lg:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}>
          <div className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-accent hover:bg-surface font-medium text-lg py-3 px-4 rounded-xl transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="btn-primary w-full mt-4">
              Book Ray
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
