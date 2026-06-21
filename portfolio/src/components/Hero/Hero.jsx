import { motion } from 'framer-motion'
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi'
import profile from '../../assets/profile.png'
import resume from '../../assets/resume.pdf'
import styles from './Hero.module.css'

const roles = ['Frontend Web Developer', 'React Developer', 'Responsive Web Designer']

function Hero() {
  return (
    <section className={styles.hero} id="home" aria-label="Hero section">
      <div className={styles.glowOne} aria-hidden="true" />
      <div className={styles.glowTwo} aria-hidden="true" />
      <motion.div
        className={`${styles.inner} container`}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className={styles.copy}>
          <motion.span className={styles.hello} initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            Hello, I am
          </motion.span>
          <h1>
            I'm <span className="gradientText">Chandan Jha</span>
          </h1>
          <div className={styles.roleWrap} aria-label="Frontend Web Developer">
            {roles.map((role, index) => (
              <span key={role} style={{ animationDelay: `${index * 2.4}s` }}>{role}</span>
            ))}
          </div>
          <p>
            I am a passionate Frontend Web Developer with experience in React, JavaScript, Node.js, Express.js, MongoDB, and WordPress. I enjoy building responsive, modern, and user-friendly web applications that solve real-world problems.
          </p>

          <div className={styles.actions}>
            <motion.a className={styles.primary} href={resume} download whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
              <FiDownload aria-hidden="true" />
              Download Resume
            </motion.a>
            <motion.a className={styles.secondary} href="#projects" whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
              View Projects
              <FiArrowRight aria-hidden="true" />
            </motion.a>
          </div>

          <div className={styles.socials} aria-label="Social links">
            <a href="https://github.com/chandan123jha" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://linkedin.com/in/chandanjha" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="mailto:yourmail@example.com" target="_blank" rel="noreferrer" aria-label="Email"><FiMail /></a>
          </div>
        </div>

        <motion.div className={styles.visual} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7 }}>
          <motion.div className={styles.orbitA} animate={{ y: [0, -16, 0], rotate: [0, 4, 0] }} transition={{ duration: 5, repeat: Infinity }}>
            React
          </motion.div>
          <motion.div className={styles.orbitB} animate={{ y: [0, 14, 0], rotate: [0, -5, 0] }} transition={{ duration: 5.8, repeat: Infinity }}>
            UI
          </motion.div>
          <div className={styles.frame}>
            <img src={profile} alt="Chandan Jha profile" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
