'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Availability" }
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold font-space-grotesk mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - 3D Profile Card */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative group perspective-1000">
              <Card className="relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30 backdrop-blur-sm transform transition-all duration-500 group-hover:rotate-y-6 group-hover:rotate-x-6 group-hover:scale-105">
                <CardContent className="p-8">
                  {/* Profile Image Placeholder */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-600 to-pink-600 p-1">
                      <img
                        src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/24253a8b-deaf-45ac-bf91-e15cfcf44348.png"
                        alt="Ismail En Niou - Professional headshot"
                        className="w-full h-full rounded-full object-cover bg-gray-800"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse" />
                  </div>

                  {/* Profile Info */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2 font-space-grotesk">Ismail En Niou</h3>
                    <p className="text-purple-300 mb-4">Full Stack Developer</p>
                    <div className="flex justify-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <span className="text-white text-sm font-bold">in</span>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <span className="text-white text-sm font-bold">Git</span>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <span className="text-white text-sm font-bold">@</span>
                      </div>
                    </div>
                  </div>
                </CardContent>

                {/* 3D Shadow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500" />
              </Card>
            </div>
          </div>

          {/* Right side - About Content */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white font-space-grotesk">
                Passionate Developer & Problem Solver
              </h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I&apos;m a dedicated Full Stack Developer with over 3 years of experience in creating 
                  innovative web solutions. My journey in technology started with curiosity and 
                  has evolved into a passion for building meaningful applications that make a difference.
                </p>
                
                <p>
                  Specializing in modern JavaScript frameworks, cloud technologies, and responsive 
                  design, I bring ideas to life through clean, scalable code. I believe in continuous 
                  learning and staying updated with the latest industry trends and best practices.
                </p>
                
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community. I&apos;m 
                  always excited to take on new challenges and collaborate on innovative projects.
                </p>
              </div>

              {/* Skills highlights */}
              <div className="flex flex-wrap gap-3 mt-8">
                {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'].map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className={`mt-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 border-purple-500/20 backdrop-blur-sm transform transition-all duration-300 group-hover:scale-105 group-hover:border-purple-400/40">
                  <CardContent className="p-6">
                    <div className="text-3xl sm:text-4xl font-bold font-space-grotesk bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm sm:text-base">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-full blur-3xl" />
    </section>
  )
}