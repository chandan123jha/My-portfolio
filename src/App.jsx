import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Achievements from './components/Achievements/Achievements'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('isRevealed')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    document.documentElement.classList.add('motionReady')
    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('motionReady')
    }
  }, [])

  return (
    <>
      <a className="skipLink" href="#main-content">Skip to content</a>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
