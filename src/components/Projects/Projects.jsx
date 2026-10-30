import { FiChevronDown, FiExternalLink } from 'react-icons/fi'
import { featuredProjects } from '../../data/projects'
import styles from './Projects.module.css'

function ProjectVisual({ project, index }) {
  return (
    <div className={`${styles.visual} ${styles[project.visual]}`} aria-label={`${project.title} project preview`}>
      <div className={styles.visualTop}>
        <span>0{index + 1}</span>
        <span>{project.short}</span>
      </div>
      <div className={styles.browser}>
        <div className={styles.browserBar}>
          <span /><span /><span />
          <b>chandanjha.dev / work</b>
        </div>
        <div className={styles.mockContent}>
          {project.visual === 'estate' && (
            <>
              <small>ALPHA DREAM HOMES</small>
              <strong>Built around<br />the way you live.</strong>
              <i>Custom homes · Renovations · New construction</i>
              <div className={styles.mockLine} />
            </>
          )}
          {project.visual === 'booking' && (
            <>
              <small>YELLOW STAR / BOOKING</small>
              <strong>Choose your<br />vehicle.</strong>
              <div className={styles.bookingPills}><i>Vehicle</i><i>Pricing</i><i>Details</i></div>
              <div className={styles.mockCards}><span /><span /><span /></div>
            </>
          )}
          {project.visual === 'knowledge' && (
            <>
              <small>THE KNOWLEDGE KEY</small>
              <strong>Get your work<br />moving.</strong>
              <div className={styles.uploadBox}>DROP ASSIGNMENT HERE <b>↑</b></div>
              <div className={styles.mockLine} />
            </>
          )}
          {project.visual === 'towing' && (
            <>
              <small>A.J. TOWING SERVICE</small>
              <strong>Help when<br />you need it.</strong>
              <div className={styles.towActions}><i>CALL NOW</i><i>OUR SERVICES</i></div>
              <div className={styles.towRoad}><span /></div>
            </>
          )}
        </div>
      </div>
      <div className={styles.visualBottom}>
        <span>Selected work</span>
        <span>Web development</span>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section className={styles.section} id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className={styles.heading} data-reveal>
          <div>
            <p className="eyebrow">03 / Selected work</p>
            <h2 className="sectionTitle" id="projects-title">Websites built for real people and real requirements.</h2>
          </div>
          <p className="sectionText">A focused collection of recent client and project-based work — from business websites to booking and submission workflows.</p>
        </div>

        <div className={styles.list}>
          {featuredProjects.map((project, index) => (
            <article className={`${styles.project} ${index === 0 ? styles.featured : ''}`} key={project.title} data-reveal>
              <ProjectVisual project={project} index={index} />
              <div className={styles.body}>
                <div className={styles.meta}>
                  <span>{project.role}</span>
                  <span>{String(index + 1).padStart(2, '0')} / 04</span>
                </div>
                <h3>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <ul className={styles.stack} aria-label={`${project.title} technologies`}>
                  {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                <div className={styles.actions}>
                  {project.website ? (
                    <a href={project.website} target="_blank" rel="noopener noreferrer">
                      View live <FiExternalLink aria-hidden="true" />
                    </a>
                  ) : (
                    <span className={styles.privateLink}>Live link not added yet</span>
                  )}
                  <details className={styles.caseStudy}>
                    <summary>Case details <FiChevronDown aria-hidden="true" /></summary>
                    <div className={styles.caseContent}>
                      <div><h4>Challenge</h4><p>{project.challenge}</p></div>
                      <div><h4>What I worked on</h4><p>{project.work}</p></div>
                      <div><h4>Key work</h4><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
                    </div>
                  </details>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
