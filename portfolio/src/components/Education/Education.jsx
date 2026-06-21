import { motion } from 'framer-motion'
import { education } from '../../data/education'
import styles from './Education.module.css'

function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className="container">
        <div className="sectionHeader">
          <span className="eyebrow">Education</span>
          <h2 className="sectionTitle">A timeline shaped by learning and building.</h2>
          <p className="sectionText">My path combines formal computer education with hands-on frontend projects and continuous technical practice.</p>
        </div>

        <div className={styles.timeline}>
          {education.map((item, index) => (
            <motion.article
              className={styles.item}
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className={`${styles.content} glassCard`}>
                <span>{item.year}</span>
                <h3>{item.title}</h3>
                <strong>{item.institution}</strong>
                <p>{item.details}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
