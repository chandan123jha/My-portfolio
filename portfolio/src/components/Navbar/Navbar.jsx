import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'
import styles from './Navbar.module.css'

const links = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact']

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.inner} aria-label="Primary navigation">
        <a className={styles.logo} href="#home" onClick={closeMenu} aria-label="Chandan Jha home">
          <span>CJ</span>
          <strong>Chandan</strong>
        </a>

        <div className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={closeMenu}>
              {link}
            </a>
          ))}
          <motion.a
            className={styles.resume}
            href="/src/assets/resume.pdf"
            download
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={closeMenu}
          >
            <FiDownload aria-hidden="true" />
            Resume
          </motion.a>
        </div>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </nav>
    </header>
  )
}

export default Navbar
