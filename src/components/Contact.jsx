import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, Phone, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thanks for reaching out! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
      setTimeout(() => setSubmitMessage(''), 5000)
    }, 1500)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@iotportfolio.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: MessageSquare,
      title: 'Discord',
      value: '@IoTDeveloper',
      color: 'from-indigo-500 to-blue-500',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg">Let's collaborate on your next IoT project</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-colors cursor-pointer"
                >
                  <div className={`p-4 rounded-lg bg-gradient-to-br ${method.color} flex-shrink-0`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{method.title}</h4>
                    <p className="text-slate-400 mt-1">{method.value}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="Project inquiry"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-50"
            >
              <Send size={20} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 text-sm"
              >
                {submitMessage}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact