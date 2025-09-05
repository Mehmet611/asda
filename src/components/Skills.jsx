import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaReact, FaJs, FaHtml5, FaCss3, FaSass, FaNodeJs, FaPython,
  FaGitAlt, FaDocker, FaAws, FaFigma, FaDatabase, FaServer, FaCode,
  FaFire, FaBolt, FaShieldAlt, FaTools
} from 'react-icons/fa'
import { SiVuedotjs, SiTypescript, SiMongodb, SiPostgresql, SiExpress, SiGraphql, SiTailwindcss, SiVite, SiWebpack, SiVercel } from 'react-icons/si'

const Skills = ({ config }) => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const skillCategories = {
    frontend: {
      title: 'Frontend',
      icon: FaCode,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 95, icon: FaReact, color: 'text-blue-500' },
        { name: 'Vue.js', level: 90, icon: SiVuedotjs, color: 'text-green-500' },
        { name: 'JavaScript', level: 95, icon: FaJs, color: 'text-yellow-500' },
        { name: 'TypeScript', level: 85, icon: SiTypescript, color: 'text-blue-600' },
        { name: 'HTML5', level: 98, icon: FaHtml5, color: 'text-orange-500' },
        { name: 'CSS3', level: 95, icon: FaCss3, color: 'text-blue-600' },
        { name: 'Tailwind CSS', level: 90, icon: SiTailwindcss, color: 'text-cyan-500' },
        { name: 'Sass', level: 85, icon: FaSass, color: 'text-pink-500' }
      ]
    },
    backend: {
      title: 'Backend',
      icon: FaServer,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 90, icon: FaNodeJs, color: 'text-green-600' },
        { name: 'Python', level: 85, icon: FaPython, color: 'text-yellow-600' },
        { name: 'Express', level: 88, icon: SiExpress, color: 'text-gray-600' },
        { name: 'MongoDB', level: 80, icon: SiMongodb, color: 'text-green-500' },
        { name: 'PostgreSQL', level: 75, icon: SiPostgresql, color: 'text-blue-600' },
        { name: 'Firebase', level: 85, icon: FaFire, color: 'text-orange-500' },
        { name: 'GraphQL', level: 70, icon: SiGraphql, color: 'text-pink-500' },
        { name: 'REST API', level: 90, icon: FaBolt, color: 'text-purple-500' }
      ]
    },
    tools: {
      title: 'Araçlar',
      icon: FaTools,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git', level: 90, icon: FaGitAlt, color: 'text-orange-500' },
        { name: 'Docker', level: 75, icon: FaDocker, color: 'text-blue-500' },
        { name: 'AWS', level: 70, icon: FaAws, color: 'text-orange-600' },
        { name: 'Vercel', level: 85, icon: SiVercel, color: 'text-gray-600' },
        { name: 'Figma', level: 80, icon: FaFigma, color: 'text-pink-500' },
        { name: 'VS Code', level: 95, icon: FaCode, color: 'text-blue-500' },
        { name: 'Webpack', level: 75, icon: SiWebpack, color: 'text-blue-600' },
        { name: 'Vite', level: 85, icon: SiVite, color: 'text-purple-500' }
      ]
    }
  }

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
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Yeteneklerim</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Modern teknolojilerle çalışıyorum ve sürekli kendimi geliştiriyorum.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Skill Icon */}
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gray-50 dark:bg-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className={`w-8 h-8 ${skill.color}`} />
                </div>
              </div>

              {/* Skill Name */}
              <h3 className="text-lg font-semibold text-center mb-4 text-gray-800 dark:text-white">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`h-2 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color}`}
                  />
                </div>
                <span className="absolute -top-8 right-0 text-sm font-medium text-gray-600 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <div className="flex items-center justify-center mb-4">
              <FaShieldAlt className="w-8 h-8 text-primary-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Sürekli Öğrenme
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Teknoloji dünyası hızla değişiyor ve ben bu değişime ayak uydurmak için 
              sürekli yeni teknolojiler öğreniyorum. Her proje, yeni bir öğrenme fırsatı.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
