'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
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

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "fullstack",
      description: "A comprehensive e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern technologies for optimal performance.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b51ec701-85f1-4aa4-bae2-34f0830eead8.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      features: ["Payment Integration", "Admin Dashboard", "Real-time Inventory", "Mobile Responsive"],
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Task Management App",
      category: "frontend",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/64831b76-72c0-407e-9562-54005fcf0700.png",
      technologies: ["Vue.js", "Socket.io", "Express", "MongoDB"],
      features: ["Real-time Collaboration", "Drag & Drop", "Team Management", "Progress Tracking"],
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed",
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      category: "fullstack",
      description: "An intelligent analytics dashboard that uses machine learning to provide insights and predictions for business data visualization.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/65e59284-6adc-4e11-a3dc-80bde25b4d73.png",
      technologies: ["React", "Python", "TensorFlow", "D3.js", "FastAPI"],
      features: ["Machine Learning", "Data Visualization", "Predictive Analytics", "Custom Reports"],
      demoUrl: "#",
      githubUrl: "#",
      status: "In Progress",
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Social Media Mobile App",
      category: "mobile",
      description: "A cross-platform social media application with photo sharing, real-time messaging, and social features built with React Native.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a6014a40-0be5-4946-a244-d306a1054f0d.png",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
      features: ["Photo Sharing", "Real-time Chat", "Push Notifications", "Social Features"],
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed",
      color: "from-yellow-600 to-orange-600"
    },
    {
      title: "Cryptocurrency Portfolio Tracker",
      category: "frontend",
      description: "A real-time cryptocurrency portfolio tracking application with market data, price alerts, and portfolio management features.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/46306c2b-c741-4d64-8611-af32d13ad9e5.png",
      technologies: ["Next.js", "TypeScript", "Chart.js", "CoinGecko API"],
      features: ["Real-time Data", "Price Alerts", "Portfolio Analytics", "Market News"],
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed",
      color: "from-indigo-600 to-purple-600"
    },
    {
      title: "Restaurant Management System",
      category: "fullstack",
      description: "A complete restaurant management solution with order management, inventory tracking, and customer relationship management.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ea3577ee-dade-41da-a8de-1baedd82d134.png",
      technologies: ["Django", "React", "PostgreSQL", "Redis", "Docker"],
      features: ["Order Management", "Inventory Tracking", "Staff Management", "Sales Analytics"],
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed",
      color: "from-red-600 to-pink-600"
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'mobile', label: 'Mobile' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold font-space-grotesk mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects demonstrating various technologies and skills
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="group relative bg-gradient-to-br from-purple-900/10 to-pink-900/10 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-500 transform hover:scale-105 hover:rotate-1 perspective-1000 overflow-hidden"
              style={{
                animationDelay: `${index * 150}ms`,
                transform: 'perspective(1000px) rotateX(5deg)'
              }}
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Status Badge */}
                  <Badge 
                    className={`absolute top-4 right-4 ${
                      project.status === 'Completed' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-yellow-600 text-white'
                    }`}
                  >
                    {project.status}
                  </Badge>

                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      size="sm" 
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30"
                    >
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="bg-black/20 backdrop-blur-sm hover:bg-black/30 text-white border-white/30"
                    >
                      GitHub
                    </Button>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 font-space-grotesk group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 border-purple-500/30 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge 
                        variant="secondary"
                        className="bg-gray-600/20 text-gray-400 border-gray-500/30 text-xs"
                      >
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-purple-300 uppercase tracking-wide">
                      Key Features
                    </p>
                    <div className="grid grid-cols-2 gap-1 text-xs text-gray-400">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-1">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3D Shadow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-lg transform translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-purple-500/30 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4 font-space-grotesk">
                Interested in Working Together?
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I&apos;m always excited to work on new projects and collaborate with amazing teams. 
                Let&apos;s discuss how we can bring your ideas to life.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start a Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-40 left-0 w-80 h-80 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  )
}