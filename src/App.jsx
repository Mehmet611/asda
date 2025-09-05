import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Components
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import ScrollToTop from './components/ScrollToTop'

// Config
import config from '../config.json'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    })

    // Loading simulation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('darkMode')
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme))
    }

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Save theme preference
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Header 
            config={config} 
            darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode} 
          />
          
          <main>
            <Hero config={config} />
            <About config={config} />
            <Skills config={config} />
            <Projects config={config} />
            <Experience config={config} />
            <Contact config={config} />
          </main>
          
          <Footer config={config} />
          <ScrollToTop />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App
