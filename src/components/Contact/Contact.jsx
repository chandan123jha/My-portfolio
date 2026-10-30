import { useState } from 'react'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import styles from './Contact.module.css'

const initialForm = { name: '', email: '', subject: '', message: '' }

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setStatus('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      '',
      form.message,
    ].join('\n')
    const mailto = `mailto:chandanjha2714@gmail.com?${new URLSearchParams({
      subject: form.subject,
      body,
    })}`

    window.location.href = mailto
    setStatus('Your email app should open with your message. If it doesn’t, email me directly at the address shown.')
  }

  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-title">
      <div className={`${styles.inner} container`}>
        <div className={styles.copy} data-reveal>
          <p className="eyebrow">07 / Contact</p>
          <h2 className="sectionTitle" id="contact-title">Let&apos;s make your next website work harder.</h2>
          <p className={styles.intro}>For freelance projects, frontend opportunities, or a conversation about an idea, you can reach me here.</p>
          <div className={styles.identity}>
            <strong>Chandan Jha</strong>
            <span>Frontend Developer | Web Developer</span>
          </div>
          <address className={styles.details}>
            <a href="mailto:chandanjha2714@gmail.com"><FiMail aria-hidden="true" />chandanjha2714@gmail.com</a>
            <a href="tel:+918699762755"><FiPhone aria-hidden="true" />+91 8699762755</a>
            <span><FiMapPin aria-hidden="true" />Punjab, India</span>
          </address>
          <div className={styles.socials} aria-label="Social profiles">
            <a href="https://github.com/chandan123jha" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub aria-hidden="true" />
            </a>
            <a href="https://linkedin.com/in/chandanjha" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin aria-hidden="true" />
            </a>
          </div>
          <a className={styles.emailCta} href="mailto:chandanjha2714@gmail.com">
            Email me <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} data-reveal>
          <p className={styles.formIntro}>Tell me a little about what you need.</p>
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" value={form.name} onChange={handleChange} autoComplete="name" required />
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email" required />
          <label htmlFor="contact-subject">Subject</label>
          <input id="contact-subject" name="subject" value={form.subject} onChange={handleChange} required />
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} rows="5" required />
          <p className={styles.formNote}>This form opens your email app; it does not send data to a server.</p>
          <button type="submit">Continue to email <FiArrowUpRight aria-hidden="true" /></button>
          <p className={styles.status} aria-live="polite">{status}</p>
        </form>
      </div>
    </section>
  )
}

export default Contact
