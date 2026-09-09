import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Dashboard from './components/Dashboard'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      setScrollProgress((scrolled / windowHeight) * 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50" 
           style={{ width: `${scrollProgress}%`, transition: 'width 0.1s ease' }}>
      </div>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Dashboard />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App