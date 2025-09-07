'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      description: 'Send me an email',
      contact: 'ismail.enniou@example.com',
      link: 'mailto:ismail.enniou@example.com',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      description: 'Connect professionally',
      contact: 'linkedin.com/in/ismail-en-niou',
      link: 'https://www.linkedin.com/in/ismail-en-niou',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: '📱',
      title: 'Phone',
      description: 'Let&apos;s talk directly',
      contact: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: 'from-green-600 to-emerald-600'
    }
  ]

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/ismail-en-niou', icon: '🔗' },
    { name: 'Twitter', url: 'https://twitter.com/ismail-en-niou', icon: '🐦' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ismail-en-niou', icon: '💼' },
    { name: 'Portfolio', url: '#', icon: '🌐' }
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold font-space-grotesk mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 font-space-grotesk">
                  Let's Start a Conversation
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  I&apos;m always interested in new opportunities, whether it&apos;s a full-time position, 
                  freelance project, or just a casual chat about technology. Don&apos;t hesitate to reach out!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card 
                    key={method.title}
                    className="group bg-gradient-to-br from-purple-900/10 to-pink-900/10 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    style={{ animationDelay: `${index * 150}ms` }}
                    onClick={() => window.open(method.link, '_blank')}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                            {method.title}
                          </h4>
                          <p className="text-sm text-gray-400 mb-1">
                            {method.description}
                          </p>
                          <p className="text-purple-300 text-sm">
                            {method.contact}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 font-space-grotesk">
                  Find Me Online
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <button
                      key={social.name}
                      onClick={() => window.open(social.url, '_blank')}
                      className="w-12 h-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full flex items-center justify-center text-xl hover:scale-110 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm"
                      style={{ animationDelay: `${index * 100}ms` }}
                      title={social.name}
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <Card className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 font-space-grotesk">
                  Send Me a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-2">
                        Your Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white/5 border-purple-500/30 text-white placeholder-gray-500 focus:border-purple-400 focus:ring-purple-400/20 group-hover:border-purple-400/50 transition-colors"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/5 border-purple-500/30 text-white placeholder-gray-500 focus:border-purple-400 focus:ring-purple-400/20 group-hover:border-purple-400/50 transition-colors"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="subject" className="block text-sm font-medium text-purple-300 mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-white/5 border-purple-500/30 text-white placeholder-gray-500 focus:border-purple-400 focus:ring-purple-400/20 group-hover:border-purple-400/50 transition-colors"
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-purple-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="bg-white/5 border-purple-500/30 text-white placeholder-gray-500 focus:border-purple-400 focus:ring-purple-400/20 group-hover:border-purple-400/50 transition-colors resize-none"
                      placeholder="Tell me about your project or just say hello..."
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25"
                  >
                    <span className="mr-2">Send Message</span>
                    <span>🚀</span>
                  </Button>
                </form>

                {/* Response Time Note */}
                <div className="mt-6 p-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 rounded-lg backdrop-blur-sm">
                  <p className="text-sm text-purple-300 text-center">
                    ⚡ I typically respond within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="border-t border-purple-500/20 pt-8">
            <p className="text-gray-400 mb-4">
              © 2024 Ismail En Niou. Built with passion using Next.js and modern web technologies.
            </p>
            <div className="flex justify-center items-center gap-2 text-purple-300">
              <span>Made with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>and lots of</span>
              <span className="text-yellow-500">☕</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  )
}