import { FiCode, FiLayers, FiMonitor } from 'react-icons/fi'
import styles from './About.module.css'

const capabilities = [
  { icon: FiMonitor, title: 'Responsive UI', detail: 'Layouts that adapt cleanly across screens and devices.' },
  { icon: FiLayers, title: 'Frontend & CMS', detail: 'Hands-on frontend work and WordPress customization.' },
  { icon: FiCode, title: 'Practical integration', detail: 'Forms, backend connections, debugging, and deployment.' },
]

function About() {
  return (
    <section className={styles.section} id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="sectionHeading" data-reveal>
          <p className="eyebrow">01 / About</p>
          <h2 className="sectionTitle" id="about-title">A developer who sees the whole website.</h2>
        </div>
        <div className={styles.content} data-reveal>
          <p className={styles.lead}>
            I&apos;m a BCA graduate with hands-on frontend and web development experience through freelance and project-based work for real clients and businesses.
          </p>
          <div className={styles.copy}>
            <p>
              My work spans responsive interfaces, UI/UX implementation, WordPress and Elementor customization, and practical backend integrations. I enjoy taking a project from its page structure and visual details through forms, debugging, and deployment.
            </p>
            <p>
              I bring a broad working toolkit—from HTML, CSS, JavaScript, PHP, Python, and MySQL to Git, WordPress, and data technologies—and focus on choosing the right tools for the work at hand.
            </p>
          </div>
        </div>
        <div className={styles.capabilities}>
          {capabilities.map(({ icon: Icon, title, detail }, index) => (
            <article className={styles.capability} key={title} data-reveal>
              <span className={styles.number}>0{index + 1}</span>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
