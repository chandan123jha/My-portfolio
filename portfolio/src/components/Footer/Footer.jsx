import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import styles from './Footer.module.css'

const links = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact']

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div>
          <a className={styles.logo} href="#home"><span>CJ</span> Chandan Jha</a>
          <p>Frontend Web Developer crafting refined React experiences.</p>
        </div>

        <nav className={styles.links} aria-label="Footer navigation">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}
        </nav>

        <div className={styles.socials}>
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href="mailto:chandan@example.com" aria-label="Email"><FiMail /></a>
          <a className={styles.top} href="#home" aria-label="Back to top"><FiArrowUp /></a>
        </div>
      </div>
      <div className={styles.bottom}>© {new Date().getFullYear()} Chandan Jha. All rights reserved.</div>
    </footer>
  )
}

export default Footer
