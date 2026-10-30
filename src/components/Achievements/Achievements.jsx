import { FiAward } from 'react-icons/fi'
import { achievements } from '../../data/achievements'
import styles from './Achievements.module.css'

function Achievements() {
  return (
    <section className={styles.section} id="achievements" aria-labelledby="achievements-title">
      <div className="container">
        <div className="sectionHeading" data-reveal>
          <p className="eyebrow">06 / Achievements</p>
          <h2 className="sectionTitle" id="achievements-title">Recognition, participation, and curiosity.</h2>
        </div>
        <div className={styles.grid}>
          {achievements.map((achievement, index) => (
            <article className={styles.item} key={achievement.detail} data-reveal>
              <span className={styles.number}>0{index + 1}</span>
              <FiAward aria-hidden="true" />
              <h3>{achievement.title}</h3>
              <p>{achievement.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
