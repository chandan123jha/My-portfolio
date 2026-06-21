import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { certificates } from '../../data/certificates'
import styles from './Certificates.module.css'

function Certificates() {
  return (
    <section id="certificates">
      <div className="container">
        <div className="sectionHeader">
          <span className="eyebrow">Certificates</span>
          <h2 className="sectionTitle">Proof of practice across design and development.</h2>
        </div>

        <div className={styles.grid}>
          {certificates.map((certificate, index) => (
            <motion.article
              className={`${styles.card} glassCard`}
              key={certificate.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.icon}><FiAward aria-hidden="true" /></div>
              <span>{certificate.date}</span>
              <h3>{certificate.title}</h3>
              <strong>{certificate.issuer}</strong>
              <p>{certificate.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
