"use client"
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'

const STATS_CONFIG = {
  duration: 2000,
  clients: 250,
  investments: 120,
  returns: 35
}

const PARTICLES_CONFIG = {
  count: 20,
  minSize: 5,
  maxSize: 15
}

const IMAGES = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"
]

const throttle = (fn, wait) => {
  let lastTime = 0
  return (...args) => {
    const now = Date.now()
    if (now - lastTime >= wait) {
      fn(...args)
      lastTime = now
    }
  }
}

export default function Hero() {
  const [stats, setStats] = useState({ clients: 0, investments: 0, returns: 0 })
  const [showVideo, setShowVideo] = useState(false)
  const [offset, setOffset] = useState(0)
  const [activeImage, setActiveImage] = useState(0)
  const animationFrameId = useRef(null)
  const observerRef = useRef(null)
  const statsRef = useRef(null)
  const imageTimer = useRef(null)

  const particles = useMemo(() => 
    Array(PARTICLES_CONFIG.count).fill().map((_, i) => ({
      id: i,
      size: Math.random() * (PARTICLES_CONFIG.maxSize - PARTICLES_CONFIG.minSize) + PARTICLES_CONFIG.minSize,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      duration: `${Math.random() * 20 + 10}s`,
      delay: `${Math.random() * 5}s`
    })), [])

  const animateStats = useCallback(() => {
    const startTime = Date.now()
    const updateCounters = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / STATS_CONFIG.duration, 1)
      setStats({
        clients: Math.floor(progress * STATS_CONFIG.clients),
        investments: Math.floor(progress * STATS_CONFIG.investments),
        returns: Math.floor(progress * STATS_CONFIG.returns)
      })
      if (progress < 1) animationFrameId.current = requestAnimationFrame(updateCounters)
    }
    updateCounters()
    return () => cancelAnimationFrame(animationFrameId.current)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animateStats()
        observer.disconnect()
      }
    }, { threshold: 0.5 })
    if (statsRef.current) observer.observe(statsRef.current)
    observerRef.current = observer
    return () => observer.disconnect()
  }, [animateStats])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < window.innerHeight) setOffset(window.scrollY * 0.5)
    }
    const throttledScroll = throttle(handleScroll, 50)
    window.addEventListener('scroll', throttledScroll)
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [])

  useEffect(() => {
    imageTimer.current = setInterval(() => {
      setActiveImage(prev => (prev + 1) % IMAGES.length)
    }, 5000)
    return () => clearInterval(imageTimer.current)
  }, [])

  const toggleVideo = useCallback(() => setShowVideo(prev => !prev), [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" aria-label="Main Introduction Section">
      <div className="absolute inset-0 z-0 object-fit" style={{ transform: `translateY(${offset}px)` }}>
        {IMAGES.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Technology Background"
            className={`absolute w-full h-full object-cover object-center transition-opacity duration-1000 ${
              activeImage === index ? 'opacity-100' : 'opacity-0'
            }`}
            loading={index === 0 ? 'eager' : 'lazy'}
            role="presentation"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/50 mix-blend-multiply" />
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-yellow-400/30 blur-sm animate-float"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: particle.x,
              top: particle.y,
              animationDuration: particle.duration,
              animationDelay: particle.delay
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="bg-blue-700/50 backdrop-blur-sm text-blue-100 text-sm px-4 py-2 rounded-full border border-blue-400/30">
              Transforming Business Through Strategic Investment
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight md:leading-snug mt-10">
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mt-30">
              Bridging
            </span>{' '}
            Innovation <br className="hidden md:inline" />and Global Opportunity
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto opacity-90 leading-relaxed mt-5">
            Transform your visionary ideas into successful ventures through our 
            strategic investment ecosystem specializing in proptech solutions, 
            marketing innovation, and artificial intelligence advancement.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <button 
            className="group relative bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg" 
            aria-label="Explore Investment Opportunities"
          >
            <span className="relative z-10 flex items-center">
              Explore Investments
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-yellow-500 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-30" />
          </button>
          <button 
            onClick={toggleVideo} 
            className="group relative border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-yellow-400/10" 
            aria-label="Watch Product Demonstration"
          >
            <span className="relative z-10 flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" 
                  clipRule="evenodd" 
                />
              </svg>
              Watch Demo
            </span>
          </button>
        </div>

        <div ref={statsRef} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-blue-900/40 backdrop-blur-sm rounded-xl p-6 transition-all duration-500 hover:scale-105 hover:bg-blue-800/40">
            <p className="text-4xl font-bold text-yellow-400 mb-2">{stats.clients}+</p>
            <p className="text-blue-100">Global Clients</p>
          </div>
          <div className="bg-blue-900/40 backdrop-blur-sm rounded-xl p-6 transition-all duration-500 hover:scale-105 hover:bg-blue-800/40">
            <p className="text-4xl font-bold text-yellow-400 mb-2">${stats.investments}M+</p>
            <p className="text-blue-100">Investments Made</p>
          </div>
          <div className="bg-blue-900/40 backdrop-blur-sm rounded-xl p-6 transition-all duration-500 hover:scale-105 hover:bg-blue-800/40">
            <p className="text-4xl font-bold text-yellow-400 mb-2">{stats.returns}%</p>
            <p className="text-blue-100">Average Returns</p>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-sm uppercase tracking-wider text-blue-200 mb-4">Trusted By Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {[1, 2, 3, 4].map(i => (
              <div 
                key={i} 
                className="h-8 w-24 bg-white/80 rounded-md animate-pulse" 
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-blue-100 text-sm mb-2">Scroll to Explore</span>
          <div className="w-6 h-10 border-2 border-blue-100 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-blue-100 rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-900/90 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl">
            <button 
              onClick={toggleVideo} 
              className="absolute top-4 right-4 z-10 bg-black/50 rounded-full p-2 text-white hover:text-yellow-400 transition-colors" 
              aria-label="Close video"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
            <div className="aspect-w-16 aspect-h-9 bg-black">
              <iframe
                src="https://www.youtube.com/embed/2VsTDo8ALC0?autoplay=1&rel=0&modestbranding=1"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                title="Company Introduction"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}