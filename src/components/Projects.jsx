import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Smart Home Automation System',
      description: 'Real-time IoT system for home automation with temperature, humidity, and motion sensors connected via MQTT protocol.',
      tech: ['Node-RED', 'Arduino', 'MQTT', 'React', 'Firebase'],
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Real-time monitoring', 'Automated alerts', 'Mobile app integration'],
    },
    {
      id: 2,
      title: 'Industrial IoT Dashboard',
      description: 'Enterprise-grade dashboard for monitoring multiple IoT devices across manufacturing plants with analytics and reporting.',
      tech: ['React', 'Chart.js', 'Node.js', 'PostgreSQL', 'WebSocket'],
      gradient: 'from-purple-500 to-pink-500',
      features: ['Live data streaming', 'Advanced analytics', 'Custom reports'],
    },
    {
      id: 3,
      title: 'Weather Station Network',
      description: 'Distributed IoT weather monitoring system with cloud storage and predictive analytics using machine learning.',
      tech: ['Raspberry Pi', 'Python', 'TensorFlow', 'AWS', 'React'],
      gradient: 'from-orange-500 to-red-500',
      features: ['ML predictions', 'Cloud sync', 'Mobile alerts'],
    },
    {
      id: 4,
      title: 'Smart Agriculture Platform',
      description: 'IoT-based precision farming solution with soil moisture, pH, and crop health monitoring with AI recommendations.',
      tech: ['Arduino', 'React Native', 'Firebase', 'TensorFlow Lite', 'Web API'],
      gradient: 'from-green-500 to-emerald-500',
      features: ['Soil analysis', 'Crop recommendations', 'Resource optimization'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured IoT Projects
          </h2>
          <p className="text-slate-400 text-lg">Innovative solutions bridging hardware and software</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group relative rounded-xl overflow-hidden"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl"></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              {/* Card Content */}
              <div className="relative p-8 h-full flex flex-col">
                {/* Top Section */}
                <div className="mb-6">
                  <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${project.gradient} mb-4`}>
                    <div className="w-6 h-6 text-white">⚙️</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm">{project.description}</p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-slate-400 mb-3">KEY FEATURES</p>
                  <div className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${project.gradient}`}></span>
                        <span className="text-sm text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-slate-400 mb-2">TECH STACK</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full text-xs bg-slate-700/50 text-slate-300 border border-slate-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 rounded-lg border border-slate-600 text-slate-300 hover:text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <Github size={16} /> Code
                  </motion.button>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br ${project.gradient} p-px`}>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects