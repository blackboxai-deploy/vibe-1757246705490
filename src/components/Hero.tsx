'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Dynamic background based on mouse position */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-out opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)`
        }}
      />
      
      {/* Animated geometric shapes */}
      <div className="absolute inset-0">
        {/* Floating cubes */}
        <div 
          className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 transform rotate-45"
          style={{
            animation: 'float 8s ease-in-out infinite',
            transform: `rotateX(45deg) rotateY(45deg) translateZ(20px)`
          }}
        />
        <div 
          className="absolute top-3/4 right-1/3 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 transform rotate-45"
          style={{
            animation: 'float 6s ease-in-out infinite 2s',
            transform: `rotateX(-30deg) rotateY(60deg) translateZ(10px)`
          }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 transform rotate-45"
          style={{
            animation: 'float 10s ease-in-out infinite 1s',
            transform: `rotateX(60deg) rotateY(-45deg) translateZ(30px)`
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Animated greeting */}
        <div className="opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
          <p className="text-lg sm:text-xl text-purple-300 font-medium mb-4">
            Hello, I&apos;m
          </p>
        </div>

        {/* 3D Name with text shadow and gradient */}
        <div className="opacity-0 animate-[fadeInUp_1.2s_ease-out_0.4s_forwards]">
          <h1 
            className="text-5xl sm:text-7xl lg:text-8xl font-bold font-space-grotesk mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent"
            style={{
              textShadow: `
                0 0 10px rgba(168, 85, 247, 0.5),
                0 0 20px rgba(168, 85, 247, 0.3),
                0 0 30px rgba(168, 85, 247, 0.1),
                2px 2px 4px rgba(0, 0, 0, 0.5)
              `,
              transform: 'perspective(500px) rotateX(15deg)'
            }}
          >
            Ismail En Niou
          </h1>
        </div>

        {/* Animated title with typewriter effect */}
        <div className="opacity-0 animate-[fadeInUp_1.4s_ease-out_0.6s_forwards]">
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 font-light mb-8 font-space-grotesk">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
              <span className="animate-pulse text-purple-400">|</span>
            </h2>
          </div>
        </div>

        {/* Professional description */}
        <div className="opacity-0 animate-[fadeInUp_1.6s_ease-out_0.8s_forwards]">
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate about creating innovative solutions and bringing ideas to life through 
            clean, efficient code and modern web technologies.
          </p>
        </div>

        {/* CTA Buttons with 3D effects */}
        <div className="opacity-0 animate-[fadeInUp_1.8s_ease-out_1s_forwards]">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="lg"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              style={{
                transform: 'perspective(500px) rotateX(10deg)',
                transition: 'all 0.3s ease'
              }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="group px-8 py-4 border-2 border-purple-500/50 text-purple-300 hover:text-white hover:border-purple-400 font-semibold rounded-full text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-black/20"
              style={{
                transform: 'perspective(500px) rotateX(10deg)',
                transition: 'all 0.3s ease'
              }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">Get In Touch</span>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-[fadeInUp_2s_ease-out_1.5s_forwards]">
          <div className="flex flex-col items-center text-purple-300">
            <p className="text-sm mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`,
              transform: `scale(${0.5 + Math.random() * 1})`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </section>
  )
}