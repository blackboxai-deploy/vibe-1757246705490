'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior for navigation
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    document.addEventListener('click', handleSmoothScroll)
    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [])

  return (
    <main className="relative">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-white font-space-grotesk">
                Ismail
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#hero" className="text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300">
                  Home
                </a>
                <a href="#about" className="text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300">
                  About
                </a>
                <a href="#skills" className="text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300">
                  Skills
                </a>
                <a href="#experience" className="text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300">
                  Experience
                </a>
                <a href="#projects" className="text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300">
                  Projects
                </a>
                <a href="#contact" className="text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Sections */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      {/* Floating Elements for 3D Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-24 h-24 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
    </main>
  )
}