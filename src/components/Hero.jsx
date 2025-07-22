import { useState, useEffect, useMemo } from 'react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const titles = useMemo(() => [
    'Software Engineer',
    'Full Stack Developer',
    'Problem Solver',
    'Tech Innovator'
  ], [])

  // Enhanced typewriter effect
  useEffect(() => {
    const currentTitle = titles[currentIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % titles.length)
        }
      }
    }, isDeleting ? 75 : Math.random() * 150 + 50) // More natural typing variation

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, titles])

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Enhanced greeting with icon */}
        <div className="animate-fade-in opacity-0 animation-delay-300 animate-fill-forwards">
          <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-lg mb-6 px-4 py-2 bg-blue-50/80 dark:bg-blue-900/30 rounded-full border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm">
            <svg className="w-6 h-6 animate-wave" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0v10a2 2 0 01-2 2H9a2 2 0 01-2-2V8m10 0H7m0 0v10a2 2 0 002 2h6a2 2 0 002-2V8" />
            </svg>
            <span>Hello, I'm</span>
          </div>
        </div>

        {/* Enhanced name with better gradient */}
        <div className="animate-slide-up opacity-0 animation-delay-500 animate-fill-forwards">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent leading-tight">
            Alex Johnson
          </h1>
        </div>

        {/* Enhanced dynamic title with better styling */}
        <div className="animate-slide-up opacity-0 animation-delay-700 animate-fill-forwards">
          <div className="h-20 flex items-center justify-center mb-8">
            <div className="relative">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-300 relative">
                <span className="relative z-10">{displayText}</span>
                <span className="animate-pulse text-blue-500 ml-1 relative z-10">|</span>
                {/* Animated underline */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 animate-expand-width animation-delay-1000"></div>
              </h2>
            </div>
          </div>
        </div>

        {/* Enhanced description */}
        <div className="animate-slide-up opacity-0 animation-delay-900 animate-fill-forwards">
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Passionate about creating <span className="font-semibold text-blue-600 dark:text-blue-400">innovative solutions</span> and building 
            <span className="font-semibold text-purple-600 dark:text-purple-400"> scalable applications</span> that make a difference. 
            Let's turn ideas into reality.
          </p>
        </div>

        {/* Enhanced CTA buttons */}
        <div className="animate-slide-up opacity-0 animation-delay-1100 animate-fill-forwards flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="group px-10 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-2xl font-semibold text-lg hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm bg-white/10 dark:bg-gray-800/20"
          >
            <span className="flex items-center gap-2">
              Get In Touch
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </span>
          </button>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0 animation-delay-1500 animate-fill-forwards">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400 font-light">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center relative">
              <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-ping"></div>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Hero