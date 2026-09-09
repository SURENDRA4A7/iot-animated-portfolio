import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ]

  const footerLinks = [
    { title: 'Home', href: '#home' },
    { title: 'Projects', href: '#projects' },
    { title: 'Skills', href: '#skills' },
    { title: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="border-t border-slate-700 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">IoT</span>
              </div>
              <span className="font-bold text-lg text-white">Portfolio</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building intelligent IoT solutions that bridge the gap between hardware and software, creating real-world impact through innovation and technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 text-slate-400 hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} IoT Portfolio. All rights reserved. | Made with
              <Heart size={16} className="inline-block mx-1 text-red-500" />
              by SURENDRA
            </p>
            <p className="text-slate-500 text-xs mt-4 md:mt-0">
              💡 100% Free & Open Source | MIT License
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer