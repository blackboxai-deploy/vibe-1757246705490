'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeExperience, setActiveExperience] = useState(0)
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

  const experiences = [
    {
      company: "Tech Innovate Solutions",
      position: "Senior Full Stack Developer",
      period: "2022 - Present",
      type: "Full-time",
      location: "Remote",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for enterprise clients.",
      achievements: [
        "Increased application performance by 40% through optimization",
        "Led a team of 5 developers on complex projects",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Designed and built microservices architecture"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"],
      color: "from-purple-600 to-pink-600"
    },
    {
      company: "Digital Creative Agency",
      position: "Full Stack Developer",
      period: "2021 - 2022",
      type: "Full-time",
      location: "Hybrid",
      description: "Developed responsive web applications and e-commerce solutions for diverse clients. Collaborated with designers and project managers to deliver high-quality digital products.",
      achievements: [
        "Built 15+ client websites with 100% satisfaction rate",
        "Reduced page load times by 35% through optimization",
        "Implemented payment systems and inventory management",
        "Created reusable component libraries"
      ],
      technologies: ["Vue.js", "Express.js", "MongoDB", "Stripe API", "Tailwind CSS"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      company: "StartupX",
      position: "Frontend Developer",
      period: "2020 - 2021",
      type: "Contract",
      location: "Remote",
      description: "Contributed to the development of a SaaS platform, focusing on user interface and experience. Worked closely with the product team to implement new features and improvements.",
      achievements: [
        "Improved user engagement by 50% with UI/UX enhancements",
        "Built responsive dashboards and data visualizations",
        "Implemented real-time notifications system",
        "Established testing practices increasing code coverage to 85%"
      ],
      technologies: ["React", "Redux", "Chart.js", "Socket.io", "Jest"],
      color: "from-green-600 to-emerald-600"
    }
  ]

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold font-space-grotesk mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional journey and key achievements in software development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline Sidebar */}
          <div className={`lg:col-span-1 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="sticky top-32">
              <h3 className="text-xl font-bold text-white mb-6 font-space-grotesk">Career Timeline</h3>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveExperience(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                      activeExperience === index
                        ? `bg-gradient-to-r ${exp.color} text-white shadow-lg`
                        : 'bg-white/5 text-gray-400 hover:bg-white/10 backdrop-blur-sm'
                    }`}
                  >
                    <div className="font-semibold text-sm">{exp.company}</div>
                    <div className="text-xs opacity-80">{exp.period}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Details */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <Card className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 border-purple-500/20 backdrop-blur-sm min-h-[600px]">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Company Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white font-space-grotesk mb-2">
                        {experiences[activeExperience].position}
                      </h3>
                      <p className="text-xl text-purple-300">
                        {experiences[activeExperience].company}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant="secondary" 
                        className={`bg-gradient-to-r ${experiences[activeExperience].color} text-white mb-2`}
                      >
                        {experiences[activeExperience].type}
                      </Badge>
                      <p className="text-gray-400 text-sm">
                        {experiences[activeExperience].period}
                      </p>
                      <p className="text-gray-400 text-sm">
                        📍 {experiences[activeExperience].location}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                    <p className="text-gray-300 leading-relaxed">
                      {experiences[activeExperience].description}
                    </p>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 font-space-grotesk">
                      Key Achievements
                    </h4>
                    <div className="grid gap-3">
                      {experiences[activeExperience].achievements.map((achievement, index) => (
                        <div 
                          key={index}
                          className="flex items-start gap-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                          style={{ animationDelay: `${index * 150}ms` }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${experiences[activeExperience].color} mt-2 flex-shrink-0`} />
                          <p className="text-gray-300 text-sm">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 font-space-grotesk">
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experiences[activeExperience].technologies.map((tech, index) => (
                        <Badge 
                          key={tech}
                          variant="outline"
                          className="bg-white/5 border-purple-500/30 text-purple-300 hover:bg-white/10 transition-all duration-300 transform hover:scale-110"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3D Card Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-lg transform translate-x-1 translate-y-1 -z-10" />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Career Highlights */}
        <div className={`mt-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 border-purple-500/20 backdrop-blur-sm text-center transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold font-space-grotesk bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  3+
                </div>
                <p className="text-gray-400">Years of Experience</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/10 to-cyan-900/10 border-blue-500/20 backdrop-blur-sm text-center transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold font-space-grotesk bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <p className="text-gray-400">Projects Delivered</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-900/10 to-emerald-900/10 border-green-500/20 backdrop-blur-sm text-center transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold font-space-grotesk bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  15+
                </div>
                <p className="text-gray-400">Technologies Mastered</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  )
}