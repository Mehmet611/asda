import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaPaperPlane, FaCheck } from 'react-icons/fa'

const Contact = ({ config }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: config.personal_info.email,
      href: `mailto:${config.personal_info.email}`,
      color: 'text-blue-600'
    },
    {
      icon: FaPhone,
      title: 'Telefon',
      value: config.personal_info.phone,
      href: `tel:${config.personal_info.phone}`,
      color: 'text-green-600'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Konum',
      value: config.personal_info.location,
      href: '#',
      color: 'text-red-600'
    }
  ]

  const socialLinks = [
    { icon: FaGithub, href: config.social_links.github, label: 'GitHub', color: 'hover:text-gray-900' },
    { icon: FaLinkedin, href: config.social_links.linkedin, label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: FaTwitter, href: config.social_links.twitter, label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: FaInstagram, href: config.social_links.instagram, label: 'Instagram', color: 'hover:text-pink-600' }
  ]

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">İletişim</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Projeleriniz için benimle iletişime geçmekten çekinmeyin. 
            Size yardımcı olmaktan mutluluk duyarım.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
              İletişim Bilgileri
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  href={info.href}
                  className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Sosyal Medya
              </h4>
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
                    className={`w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-400 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Mesaj Gönder
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCheck className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Mesaj Gönderildi!
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    En kısa sürede size dönüş yapacağım.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Adınız
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                        placeholder="Adınızı girin"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Konu
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                      placeholder="Mesaj konusu"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Mesaj
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300 resize-none"
                      placeholder="Mesajınızı yazın..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center space-x-2 py-4 px-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Gönderiliyor...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-5 h-5" />
                        <span>Mesaj Gönder</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
              Konum
            </h3>
            <div className="h-64 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-gray-600 dark:to-gray-500 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <FaMapMarkerAlt className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {config.personal_info.location}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
