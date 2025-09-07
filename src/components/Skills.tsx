'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('frontend')
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

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React/Next.js', level: 95, description: 'Modern React with hooks, context, and Next.js framework' },
        { name: 'TypeScript', level: 90, description: 'Type-safe development and advanced TS patterns' },
        { name: 'Tailwind CSS', level: 95, description: 'Utility-first CSS framework and responsive design' },
        { name: 'JavaScript ES6+', level: 95, description: 'Modern JavaScript with async/await, modules' },
        { name: 'HTML5/CSS3', level: 98, description: 'Semantic markup and advanced CSS techniques' },
        { name: 'Vue.js', level: 80, description: 'Vue 3 composition API and ecosystem' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 90, description: 'Server-side JavaScript and API development' },
        { name: 'Python', level: 85, description: 'Django, Flask, and data processing' },
        { name: 'Express.js', level: 88, description: 'RESTful APIs and middleware development' },
        { name: 'PostgreSQL', level: 85, description: 'Database design and complex queries' },
        { name: 'MongoDB', level: 80, description: 'NoSQL database design and aggregation' },
        { name: 'GraphQL', level: 75, description: 'Schema design and resolver implementation' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 95, description: 'Version control and collaborative development' },
        { name: 'Docker', level: 80, description: 'Containerization and deployment' },
        { name: 'AWS/Vercel', level: 85, description: 'Cloud deployment and serverless functions' },
        { name: 'Webpack/Vite', level: 80, description: 'Build tools and module bundling' },
        { name: 'Jest/Testing', level: 85, description: 'Unit testing and TDD practices' },
        { name: 'Figma', level: 78, description: 'UI/UX design and prototyping' }
      ]
    }
  }

  const categories = Object.keys(skillCategories) as Array<keyof typeof skillCategories>

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold font-space-grotesk mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiencies across different domains
          </p>
        </div>

        {/* Category Selector */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <span className="mr-2">{skillCategories[category].icon}</span>
              {skillCategories[category].title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <Card 
                key={skill.name}
                className="group relative bg-gradient-to-br from-purple-900/10 to-pink-900/10 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-500 transform hover:scale-105 hover:rotate-1 perspective-1000"
                style={{
                  animationDelay: `${index * 100}ms`,
                  transform: 'perspective(1000px) rotateX(5deg)'
                }}
              >
                <CardContent className="p-6">
                  {/* Skill Header */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white font-space-grotesk group-hover:text-purple-300 transition-colors">
                      {skill.name}
                    </h3>
                    <Badge 
                      variant="secondary" 
                      className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 border-purple-500/30"
                    >
                      {skill.level}%
                    </Badge>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="w-full bg-gray-700/50 rounded-full h-2 mb-2 overflow-hidden">
                      <div 
                        className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          animation: `slideIn 1.5s ease-out ${index * 200}ms forwards`
                        }}
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {skill.description}
                  </p>

                  {/* Hover Effect - Glowing Border */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur animate-pulse" />
                  </div>
                </CardContent>

                {/* 3D Shadow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-lg transform translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-purple-500/30 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4 font-space-grotesk">
                Always Learning & Growing
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Technology evolves rapidly, and I&apos;m committed to continuous learning. I regularly 
                explore new frameworks, contribute to open-source projects, and stay updated with 
                industry best practices to deliver cutting-edge solutions.
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-2xl">📚</span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full flex items-center justify-center animate-pulse delay-500">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full flex items-center justify-center animate-pulse delay-1000">
                  <span className="text-2xl">💡</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <style jsx>{`
        @keyframes slideIn {
          from { width: 0%; }
          to { width: var(--target-width); }
        }
      `}</style>
    </section>
  )
}