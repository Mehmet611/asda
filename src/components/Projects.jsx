import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaDatabase, FaPalette } from 'react-icons/fa'

const Projects = ({ config }) => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = [
    { id: 'all', name: 'Tümü', icon: FaCode },
    { id: 'web', name: 'Web', icon: FaCode },
    { id: 'mobile', name: 'Mobil', icon: FaMobile },
    { id: 'data', name: 'Veri', icon: FaDatabase },
    { id: 'design', name: 'Tasarım', icon: FaPalette }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? config.projects 
    : config.projects.filter(project => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Projelerim</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Son dönemde geliştirdiğim projelerden bazıları. Her biri farklı teknolojiler 
            ve yaklaşımlar kullanılarak oluşturuldu.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-500 to-secondary-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <FaCode className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Öne Çıkan
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-300"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span className="text-sm font-medium">Kod</span>
                    </motion.a>
                    
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      <span className="text-sm font-medium">Demo</span>
                    </motion.a>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={config.social_links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FaGithub className="w-5 h-5" />
            <span>Daha Fazla Proje Gör</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <FaTimes className="w-6 h-6" />
                  </button>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                  {selectedProject.long_description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                      Kullanılan Teknolojiler
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                      Proje Linkleri
                    </h4>
                    <div className="space-y-3">
                      <a
                        href={selectedProject.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                      >
                        <FaGithub className="w-5 h-5" />
                        <span>GitHub Repository</span>
                      </a>
                      <a
                        href={selectedProject.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                        <span>Canlı Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
