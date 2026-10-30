import { skills } from '../../data/skills'
import styles from './Skills.module.css'

function Skills() {
  return (
    <section className={styles.section} id="skills" aria-labelledby="skills-title">
      <div className="container">
        <div className="sectionHeading" data-reveal>
          <p className="eyebrow">02 / Toolkit</p>
          <h2 className="sectionTitle" id="skills-title">Tools I use to get the work done.</h2>
          <p className="sectionText">A practical mix of web development, CMS, and data skills built through study and project work.</p>
        </div>
        <div className={styles.groups}>
          {skills.map((group, index) => (
            <article className={styles.group} key={group.category} data-reveal>
              <span className={styles.groupIndex}>0{index + 1}</span>
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
