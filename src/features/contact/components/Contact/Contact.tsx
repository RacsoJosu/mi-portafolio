import { motion } from 'motion/react'
import { ContactInfo } from './ContactInfo'
import { ContactForm } from './ContactForm'

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl mb-16 text-center">
            <span className="text-white">Hablemos</span>{' '}
            <span className="text-primary">juntos</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
