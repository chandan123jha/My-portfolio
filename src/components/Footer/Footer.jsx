import { FiArrowUpRight } from 'react-icons/fi'
import { navigationLinks } from '../../data/navigation'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div>
          <a className={styles.logo} href="#home">Chandan Jha<span aria-hidden="true">.</span></a>
          <p>Frontend Developer | Web Developer</p>
          <a className={styles.email} href="mailto:chandanjha2714@gmail.com">
            chandanjha2714@gmail.com <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <nav className={styles.links} aria-label="Footer navigation">
          {navigationLinks.map(({ label, id }) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
      </div>
      <div className={`${styles.bottom} container`}>
        <span>© {new Date().getFullYear()} Chandan Jha</span>
        <span>Built with clean code &amp; attention to detail.</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default Footer
