import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart, FaArrowUp } from 'react-icons/fa'

const Footer = ({ config }) => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, href: config.social_links.github, label: 'GitHub' },
    { icon: FaLinkedin, href: config.social_links.linkedin, label: 'LinkedIn' },
    { icon: FaTwitter, href: config.social_links.twitter, label: 'Twitter' },
    { icon: FaInstagram, href: config.social_links.instagram, label: 'Instagram' }
  ]

  const quickLinks = [
    { name: 'Ana Sayfa', href: '#home' },
    { name: 'Hakkımda', href: '#about' },
    { name: 'Yetenekler', href: '#skills' },
    { name: 'Projeler', href: '#projects' },
    { name: 'Deneyim', href: '#experience' },
    { name: 'İletişim', href: '#contact' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {config.personal_info.name.charAt(0)}
                  </span>
                </div>
                <span className="text-2xl font-bold">
                  {config.personal_info.name}
                </span>
              </div>
              
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                {config.personal_info.description}
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Hızlı Linkler</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">İletişim</h3>
              <div className="space-y-3">
                <p className="text-gray-400">
                  <span className="text-white font-medium">Email:</span><br />
                  <a 
                    href={`mailto:${config.personal_info.email}`}
                    className="hover:text-primary-400 transition-colors duration-300"
                  >
                    {config.personal_info.email}
                  </a>
                </p>
                <p className="text-gray-400">
                  <span className="text-white font-medium">Telefon:</span><br />
                  <a 
                    href={`tel:${config.personal_info.phone}`}
                    className="hover:text-primary-400 transition-colors duration-300"
                  >
                    {config.personal_info.phone}
                  </a>
                </p>
                <p className="text-gray-400">
                  <span className="text-white font-medium">Konum:</span><br />
                  {config.personal_info.location}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-center md:text-left mb-4 md:mb-0"
            >
              © {currentYear} {config.personal_info.name}. Tüm hakları saklıdır.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-gray-400"
            >
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart className="w-4 h-4 text-red-500" />
              </motion.div>
              <span>by {config.personal_info.name}</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      >
        <FaArrowUp className="w-5 h-5 text-white" />
      </motion.button>
    </footer>
  )
}

export default Footer
