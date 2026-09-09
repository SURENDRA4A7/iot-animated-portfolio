import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Hardware & Platforms',
      skills: [
        { name: 'Arduino', level: 95 },
        { name: 'Raspberry Pi', level: 90 },
        { name: 'ESP32', level: 92 },
        { name: 'Sensor Integration', level: 88 },
      ],
    },
    {
      category: 'Protocols & Communication',
      skills: [
        { name: 'MQTT', level: 93 },
        { name: 'HTTP/REST API', level: 95 },
        { name: 'WebSocket', level: 90 },
        { name: 'Bluetooth/BLE', level: 85 },
      ],
    },
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Framer Motion', level: 88 },
        { name: 'Chart.js / D3.js', level: 87 },
      ],
    },
    {
      category: 'Backend & Cloud',
      skills: [
        { name: 'Node.js', level: 93 },
        { name: 'Firebase', level: 89 },
        { name: 'AWS IoT', level: 85 },
        { name: 'MongoDB', level: 90 },
      ],
    },
    {
      category: 'Programming Languages',
      skills: [
        { name: 'JavaScript/ES6+', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'C/C++', level: 88 },
        { name: 'TypeScript', level: 87 },
      ],
    },
    {
      category: 'Data & Analytics',
      skills: [
        { name: 'Data Visualization', level: 92 },
        { name: 'Machine Learning Basics', level: 80 },
        { name: 'Time Series Analysis', level: 85 },
        { name: 'Real-time Analytics', level: 89 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-slate-900/0 to-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-lg">Expertise across IoT stack</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIdx) => (
            <motion.div
              key={categoryIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIdx * 0.1 }}
              className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-xs text-slate-400">{skill.level}%</span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: skillIdx * 0.1 }}
                      className="h-2 bg-slate-700 rounded-full overflow-hidden"
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: skillIdx * 0.1 + 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      ></motion.div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills