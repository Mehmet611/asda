import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaAward, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = ({ config }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('tr-TR', { 
      year: 'numeric', 
      month: 'long' 
    })
  }

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Deneyim & Eğitim</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Kariyer yolculuğum ve eğitim geçmişim hakkında bilgiler.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mr-4">
                <FaBriefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                İş Deneyimi
              </h3>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>

              {config.experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative mb-8 pl-16"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 w-4 h-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>

                  {/* Content Card */}
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2 md:mb-0">
                        {exp.title}
                      </h4>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <FaCalendarAlt className="w-4 h-4 mr-2" />
                        {formatDate(exp.start_date)} - {exp.end_date === 'present' ? 'Devam Ediyor' : formatDate(exp.end_date)}
                      </div>
                    </div>

                    <div className="flex items-center mb-3">
                      <FaMapMarkerAlt className="w-4 h-4 text-primary-600 mr-2" />
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        {exp.company}
                      </span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Education */}
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary-600 to-accent-600 rounded-full flex items-center justify-center mr-4">
                  <FaGraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Eğitim
                </h3>
              </div>

              <div className="space-y-6">
                {config.education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    variants={itemVariants}
                    className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <FaCalendarAlt className="w-4 h-4 mr-2" />
                        {formatDate(edu.start_date)} - {formatDate(edu.end_date)}
                      </div>
                    </div>

                    <div className="flex items-center mb-3">
                      <FaMapMarkerAlt className="w-4 h-4 text-secondary-600 mr-2" />
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        {edu.school}
                      </span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {edu.location}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-600 to-primary-600 rounded-full flex items-center justify-center mr-4">
                  <FaAward className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Sertifikalar
                </h3>
              </div>

              <div className="space-y-4">
                {config.certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    variants={itemVariants}
                    className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                        {cert.name}
                      </h4>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <FaCalendarAlt className="w-4 h-4 mr-2" />
                        {formatDate(cert.date)}
                      </div>
                    </div>

                    <div className="flex items-center mb-2">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        {cert.issuer}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Sertifika ID: {cert.credential_id}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Birlikte Çalışalım!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Deneyimlerimi ve yeteneklerimi projelerinizde kullanmak ister misiniz? 
              Benimle iletişime geçin ve birlikte harika şeyler yapalım.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>İletişime Geç</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
