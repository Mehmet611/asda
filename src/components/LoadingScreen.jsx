import React from 'react'
import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 flex items-center justify-center z-50"
    >
      <div className="text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
            <span className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              M
            </span>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl font-bold text-white mb-4"
        >
          Mehmet
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-white/80 mb-8"
        >
          Portfolio Yükleniyor...
        </motion.p>

        {/* Loading Spinner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-r-white/50 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8 w-64 mx-auto"
        >
          <div className="w-full bg-white/20 rounded-full h-1">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="bg-white h-1 rounded-full"
            />
          </div>
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
