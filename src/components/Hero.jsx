import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDownload, FaArrowDown } from 'react-icons/fa'
import { HiCode, HiLightBulb, HiRocket } from 'react-icons/hi'

const Hero = ({ config }) => {
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const titles = [
    'Full Stack Developer',
    'UI/UX Designer',
    'Software Engineer',
    'Problem Solver'
  ]

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const pauseTime = 2000

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < titles[textIndex].length) {
        setCurrentText(titles[textIndex].substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(titles[textIndex].substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === titles[textIndex].length) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setTextIndex((textIndex + 1) % titles.length)
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, textIndex, titles])

  const socialLinks = [
    { icon: FaGithub, href: config.social_links.github, label: 'GitHub' },
    { icon: FaLinkedin, href: config.social_links.linkedin, label: 'LinkedIn' },
    { icon: FaTwitter, href: config.social_links.twitter, label: 'Twitter' },
    { icon: FaInstagram, href: config.social_links.instagram, label: 'Instagram' }
  ]

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium mb-4">
                👋 Merhaba, Ben
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">{config.personal_info.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 h-12 flex items-center justify-center lg:justify-start"
            >
              <span className="text-gray-700 dark:text-gray-300">
                {currentText}
                <span className="typing-animation"></span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
            >
              {config.personal_info.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="btn btn-primary inline-flex items-center justify-center space-x-2"
              >
                <span>Projelerimi Gör</span>
                <HiRocket className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={config.personal_info.resume}
                download
                className="btn btn-secondary inline-flex items-center justify-center space-x-2"
              >
                <FaDownload className="w-4 h-4" />
                <span>CV İndir</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex justify-center lg:justify-start space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ rotateY: 10, rotateX: 5 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Main Card */}
              <div className="w-80 h-96 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl shadow-2xl transform perspective-1000">
                <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between">
                  {/* Avatar */}
                  <div className="flex justify-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                      {config.personal_info.name.charAt(0)}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {config.personal_info.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {config.personal_info.title}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary-600">50+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Projeler</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary-600">3+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Yıl</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent-600">100%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Memnuniyet</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg"
              >
                <HiCode className="w-6 h-6 text-primary-600" />
              </motion.div>

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg"
              >
                <HiLightBulb className="w-6 h-6 text-secondary-600" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToAbout}
            className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
          >
            <span className="text-sm mb-2">Aşağı Kaydır</span>
            <FaArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
