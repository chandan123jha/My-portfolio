import { FiArrowUpRight, FiCheck } from 'react-icons/fi'
import styles from './Experience.module.css'

const responsibilities = [
  'Website development and customization',
  'Responsive UI and frontend implementation',
  'WordPress and Elementor page building',
  'Forms and backend integration',
  'Debugging, deployment, and working through client requirements',
]

function Experience() {
  return (
    <section className={styles.section} id="experience" aria-labelledby="experience-title">
      <div className={`${styles.inner} container`}>
        <div data-reveal>
          <p className="eyebrow">04 / Experience</p>
          <h2 className="sectionTitle" id="experience-title">Project work, grounded in real requirements.</h2>
        </div>
        <article className={styles.role} data-reveal>
          <div className={styles.roleHeader}>
            <span className={styles.marker} aria-hidden="true" />
            <p>Freelance · Project-based</p>
          </div>
          <h3>Freelance Web Developer / Frontend Developer</h3>
          <p className={styles.summary}>
            I work with clients and businesses to build and improve websites, translating project requirements into clear interfaces and reliable web functionality.
          </p>
          <ul>
            {responsibilities.map((responsibility) => (
              <li key={responsibility}><FiCheck aria-hidden="true" />{responsibility}</li>
            ))}
          </ul>
          <a href="#projects">Explore selected projects <FiArrowUpRight aria-hidden="true" /></a>
        </article>
      </div>
    </section>
  )
}

export default Experience
