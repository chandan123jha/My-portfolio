import { motion } from 'framer-motion'
import { FiClock, FiExternalLink, FiGithub, FiLock } from 'react-icons/fi'
import { projects } from '../../data/projects'
import styles from './Projects.module.css'

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="sectionHeader">
          <span className="eyebrow">Projects</span>
          <h2 className="sectionTitle">Selected work with clean structure and strong presentation.</h2>
          <p className="sectionText">A focused collection of production-minded projects, each shaped around responsive UI, practical workflows, and clear next actions.</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.article
              className={`${styles.card} glassCard`}
              key={project.title}
              initial={{ opacity: 0, y: 34, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -10, rotateX: 1.5, rotateY: -1.5 }}
            >
              <div className={`${styles.media} ${styles[project.accent]}`} aria-hidden="true">
                <div className={styles.mediaGlow} />
                {project.image ? (
                  <img src={project.image} alt={`${project.title} thumbnail`} />
                ) : (
                  <>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{project.imageLabel}</strong>
                  </>
                )}
              </div>
              <div className={styles.body}>
                <div className={styles.titleRow}>
                  <h3>{project.title}</h3>
                  {project.status && <span className={styles.status}>{project.status}</span>}
                </div>
                <p>{project.description}</p>
                <div className={styles.stack} aria-label={`${project.title} technologies`}>
                  {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                {project.builtWith && (
                  <span className={styles.badge}>{`Built with ${project.builtWith}`}</span>
                )}
                <div className={styles.actions}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> GitHub</a>
                  )}
                  {project.demo && (
                    <a className={styles.demo} href={project.demo} target="_blank" rel="noreferrer"><FiExternalLink aria-hidden="true" /> Live Demo</a>
                  )}
                  {!project.demo && project.demoPlaceholder && (
                    <a
                      className={`${styles.demo} ${styles.disabled}`}
                      href="#"
                      tabIndex={-1}
                      aria-disabled="true"
                      title="Live link coming soon"
                    >
                      <FiExternalLink aria-hidden="true" /> Live Demo
                    </a>
                  )}
                  {!project.demo && project.status === 'Deployment Coming Soon' && (
                    <span className={styles.badge}><FiClock aria-hidden="true" /> Coming Soon</span>
                  )}
                  {!project.github && project.status === 'Private Project' && (
                    <span className={styles.badge}><FiLock aria-hidden="true" /> Private Project</span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects