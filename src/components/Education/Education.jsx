import { education } from '../../data/education'
import styles from './Education.module.css'

function Education() {
  return (
    <section className={styles.section} id="education" aria-labelledby="education-title">
      <div className="container">
        <div className="sectionHeading" data-reveal>
          <p className="eyebrow">05 / Education</p>
          <h2 className="sectionTitle" id="education-title">Learning that supports the work.</h2>
        </div>
        <div className={styles.list}>
          {education.map((item, index) => (
            <article className={styles.item} key={item.title} data-reveal>
              <span className={styles.index}>0{index + 1}</span>
              <span className={styles.period}>{item.period}</span>
              <div>
                <h3>{item.title}</h3>
                <p className={styles.institution}>{item.institution}</p>
                {item.details && <p className={styles.details}>{item.details}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
