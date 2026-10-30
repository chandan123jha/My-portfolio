import { FiArrowDownRight, FiArrowUpRight, FiDownload, FiMousePointer } from 'react-icons/fi'
import portrait from '../../assets/profile.webp'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero} id="home" aria-labelledby="hero-title">
      <div className={styles.gridLines} aria-hidden="true" />
      <div className={styles.orbit} aria-hidden="true"><span /><span /><span /></div>
      <div className={`${styles.inner} container`}>
        <div className={styles.copy}>
          <div className={styles.kicker}>
            <span className={styles.liveDot} />
            Available for selected freelance projects
          </div>
          <p className={styles.eyebrow}>Frontend Developer <span>•</span> Web Developer <span>•</span> Punjab, India</p>
          <h1 id="hero-title">
            <span className={styles.lineOne}>Websites that</span>
            <span className={styles.lineTwo}>feel <em>alive.</em></span>
            <span className={styles.lineThree}>built with intent.</span>
          </h1>
          <p className={styles.intro}>
            I&apos;m Chandan Jha — a BCA graduate and freelance web developer building responsive, practical websites for real businesses and projects.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#projects">Explore my work <FiArrowDownRight aria-hidden="true" /></a>
            <a className={styles.secondary} href="/resume.pdf" download><FiDownload aria-hidden="true" /> Resume</a>
          </div>
          <a className={styles.workLink} href="#contact">Have a project in mind? Let&apos;s talk <FiArrowUpRight aria-hidden="true" /></a>
        </div>

        <div className={styles.visual}>
          <div className={styles.visualHeader}>
            <span>01 — Portrait / 2026</span>
            <span>Scroll to explore</span>
          </div>
          <div className={styles.imageStage}>
            <div className={styles.imageGlow} aria-hidden="true" />
            <div className={styles.imageFrame}>
              <img src={portrait} alt="Chandan Jha, Frontend Developer and Web Developer" width="1122" height="1402" fetchPriority="high" />
            </div>
            <div className={styles.stamp}>CJ / WEB<br />DEVELOPER</div>
            <div className={styles.note}><FiMousePointer aria-hidden="true" /> Design. Build. Refine.</div>
          </div>
          <div className={styles.visualFooter}>
            <span>HTML / CSS / JS / PHP / WordPress</span>
            <span>Based in India</span>
          </div>
        </div>
      </div>
      <div className={styles.scrollCue} aria-hidden="true"><span /> Scroll</div>
      <span className={styles.heroIndex} aria-hidden="true">CHANDAN JHA / 2026</span>
    </section>
  )
}

export default Hero
