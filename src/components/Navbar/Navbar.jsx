import { useEffect, useState } from 'react'
import { FiArrowUpRight, FiDownload, FiMenu, FiX } from 'react-icons/fi'
import { navigationLinks } from '../../data/navigation'
import styles from './Navbar.module.css'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navigationLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visibleSections[0]) setActiveId(visibleSections[0].target.id)
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.inner} aria-label="Primary navigation">
        <a className={styles.logo} href="#home" onClick={closeMenu} aria-label="Chandan Jha, home">
          <span aria-hidden="true">CJ</span>
          <strong>Chandan Jha</strong>
        </a>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="primary-links"
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>

        <div id="primary-links" className={`${styles.links} ${open ? styles.open : ''}`}>
          {navigationLinks.map(({ label, id }) => (
            <a
              key={id}
              className={activeId === id ? styles.active : ''}
              href={`#${id}`}
              aria-current={activeId === id ? 'location' : undefined}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a className={styles.resume} href="/resume.pdf" download onClick={closeMenu}>
            <FiDownload aria-hidden="true" />
            Resume
          </a>
          <a className={styles.contactCta} href="#contact" onClick={closeMenu}>
            Let&apos;s talk <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
