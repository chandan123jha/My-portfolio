import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import styles from './Contact.module.css'

const initialForm = { name: '', email: '', subject: '', message: '' }

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${encodeURIComponent(form.message)}`
    window.location.href = `mailto:chandanjha2714@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${body}`
    setSent(true)
    setForm(initialForm)
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={`${styles.inner} container`}>
        <motion.div className={styles.copy} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="eyebrow">Contact</span>
          <h2 className="sectionTitle">Have a project or role in mind?</h2>
          <p className="sectionText">Send a message and I will respond with clarity, context, and next steps. I am open to frontend roles, internships, freelance work, and collaborative builds.</p>

          <div className={styles.details}>
            <a href="mailto:chandanjha2714@gmail.com"><FiMail aria-hidden="true" /> chandanjha2714@gmail.com</a>
            <span><FiMapPin aria-hidden="true" /> Available remotely from India</span>
          </div>

          <div className={styles.socials}>
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="mailto:chandanjha2714@gmail.com" aria-label="Email"><FiMail /></a>
          </div>
        </motion.div>

        <motion.form className={`${styles.form} glassCard`} onSubmit={handleSubmit} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <label>
            Name
            <input name="name" value={form.name} onChange={handleChange} type="text" autoComplete="name" required placeholder="Your name" />
          </label>
          <label>
            Email
            <input name="email" value={form.email} onChange={handleChange} type="email" autoComplete="email" required placeholder="you@example.com" />
          </label>
          <label>
            Subject
            <input name="subject" value={form.subject} onChange={handleChange} type="text" required placeholder="Project inquiry" />
          </label>
          <label>
            Message
            <textarea name="message" value={form.message} onChange={handleChange} rows="5" required placeholder="Tell me what you want to build" />
          </label>
          <motion.button type="submit" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <FiSend aria-hidden="true" />
            Send Message
          </motion.button>
          {sent && <p className={styles.success}>Your email app is ready with the message.</p>}
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
