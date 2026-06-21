import { motion } from 'framer-motion'
import { FiBriefcase, FiMapPin, FiUserCheck } from 'react-icons/fi'
import { LuGraduationCap } from 'react-icons/lu'
import styles from './About.module.css'

const cards = [
  { label: 'Education', value: 'BCA Student', icon: LuGraduationCap },
  { label: 'Experience', value: 'Project-Based', icon: FiBriefcase },
  { label: 'Location', value: 'India', icon: FiMapPin },
  { label: 'Availability', value: 'Open to Work', icon: FiUserCheck },
]

function About() {
  return (
    <section id="about">
      <div className="container">
        <motion.div className="sectionHeader" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <span className="eyebrow">About Me</span>
          <h2 className="sectionTitle">Building interfaces that feel sharp, fast, and human.</h2>
          <p className="sectionText">
            I am Chandan Jha, a frontend web developer focused on React, modern JavaScript, and polished responsive experiences. I enjoy turning ideas into clean digital products with strong visual hierarchy, accessible interactions, and maintainable code.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.article
                className={`${styles.card} glassCard`}
                key={card.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <Icon aria-hidden="true" />
                <span>{card.label}</span>
                <strong>{card.value}</strong>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
