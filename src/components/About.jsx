import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaPalette, FaRocket, FaUsers, FaAward, FaHeart } from 'react-icons/fa'

const About = ({ config }) => {
  const stats = [
    { icon: FaCode, number: '50+', label: 'Tamamlanan Proje', color: 'text-blue-600' },
    { icon: FaUsers, number: '30+', label: 'Mutlu Müşteri', color: 'text-green-600' },
    { icon: FaAward, number: '3+', label: 'Yıl Deneyim', color: 'text-purple-600' },
    { icon: FaHeart, number: '100%', label: 'Tutku', color: 'text-red-600' }
  ]

  const values = [
    {
      icon: FaCode,
      title: 'Kod Kalitesi',
      description: 'Temiz, okunabilir ve sürdürülebilir kod yazmaya odaklanırım.'
    },
    {
      icon: FaPalette,
      title: 'Tasarım Odaklı',
      description: 'Kullanıcı deneyimini ön planda tutarak güzel tasarımlar oluştururum.'
    },
    {
      icon: FaRocket,
      title: 'Performans',
      description: 'Hızlı ve optimize edilmiş uygulamalar geliştirmeye odaklanırım.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Hakkımda</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Tutkulu bir yazılım geliştirici olarak, modern teknolojilerle 
            kullanıcı dostu uygulamalar geliştiriyorum.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Merhaba! Ben {config.personal_info.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {config.personal_info.description}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  Neler Yapıyorum?
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Frontend ve backend geliştirme konularında deneyimliyim. React, Vue.js, 
                  Node.js ve Python gibi modern teknolojilerle çalışıyorum. Ayrıca UI/UX 
                  tasarım konusunda da kendimi sürekli geliştiriyorum.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  Hedeflerim
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Sürekli öğrenmeye ve kendimi geliştirmeye odaklanıyorum. Yeni teknolojileri 
                  takip ediyor ve projelerimde uyguluyorum. Kullanıcı deneyimini ön planda 
                  tutarak, hem güzel hem de fonksiyonel uygulamalar geliştiriyorum.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image/Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Profile Image Placeholder */}
            <div className="relative mb-8">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="w-64 h-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                    {config.personal_info.name.charAt(0)}
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg"
              >
                <FaCode className="w-8 h-8 text-primary-600" />
              </motion.div>

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg"
              >
                <FaRocket className="w-8 h-8 text-secondary-600" />
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Değerlerim
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center p-8 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
