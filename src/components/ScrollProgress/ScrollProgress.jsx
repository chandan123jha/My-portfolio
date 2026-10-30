import { useEffect, useRef } from 'react'
import styles from './ScrollProgress.module.css'

function ScrollProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    let frame = 0

    const updateProgress = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0
        barRef.current?.style.setProperty('--scroll-progress', String(progress))
      })
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return <div className={styles.track} aria-hidden="true"><span ref={barRef} /></div>
}

export default ScrollProgress
