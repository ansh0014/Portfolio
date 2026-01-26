'use client'

import React from "react"

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'anshuljagota03@gmail.com',
      link: 'mailto:anshuljagota03@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7740031491',
      link: 'tel:+917740031491',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Patiala, Punjab, India',
      link: '#',
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/anshul-jagota-7a4a80323',
      color: 'text-blue-400 hover:text-blue-300',
    },
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/ansh0014',
      color: 'text-gray-300 hover:text-white',
    },
  ]

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient-primary mb-6">Let's Connect</h2>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-cyan-400 rounded-full" />
          </div>
          <p className="text-gray-400 text-lg mt-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and collaborations. Reach out anytime!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center group-hover:border-cyan-400/60 transition-all">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wide">{info.label}</p>
                        <p className="text-lg text-white font-medium mt-1 group-hover:text-cyan-400 transition-colors">{info.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            <div className="pt-8 border-t border-cyan-400/20">
              <h3 className="text-2xl font-bold text-white mb-8">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-14 h-14 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center transition-all hover:border-cyan-400/60 ${social.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center p-10 bg-gradient-to-br from-cyan-400/10 via-transparent to-orange-500/10 rounded-2xl border border-cyan-400/20 relative overflow-hidden group hover:border-cyan-400/40 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="text-center relative z-10 space-y-6">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-orange-500">
                Got a Vision? Let's Build It.
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto">
                I'm always ready to collaborate on innovative projects that challenge the status quo.
                From high-scale backends to complex system architectures—let's turn your ideas into deployed reality.
              </p>

              <div className="pt-4">
                <span className="inline-block px-6 py-3 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 font-semibold tracking-wide uppercase text-sm">
                  Open for Collaboration
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-12 border-t border-cyan-400/20 text-center"
        >
          <p className="text-gray-600 text-xs mt-4">© 2024 Anshul Jagota. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}
