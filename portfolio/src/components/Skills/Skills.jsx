import { motion } from 'framer-motion'
import { skills } from '../../data/skills'
import styles from './Skills.module.css'

function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <div className="sectionHeader">
          <span className="eyebrow">Skills</span>
          <h2 className="sectionTitle">A practical toolkit for modern product interfaces.</h2>
          <p className="sectionText">From accessible component systems to responsive layouts, I focus on the skills that make websites useful, fast, and beautiful.</p>
        </div>

        <div className={styles.grid}>
          {skills.map((group, index) => {
            const Icon = group.icon
            return (
              <motion.article
                className={`${styles.card} glassCard`}
                key={group.category}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                <div className={styles.heading}>
                  <span><Icon aria-hidden="true" /></span>
                  <h3>{group.category}</h3>
                </div>
                <div className={styles.tags}>
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
