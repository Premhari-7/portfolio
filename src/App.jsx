import { useEffect } from 'react'
import './index.css'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Skills   from './components/Skills'
import Projects from './components/Projects'
import Contact  from './components/Contact'

export default function App() {

  /* scroll reveal */
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.fade-up')
    elements.forEach(el => obs.observe(el))

    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* removed cursor divs */}

      <div className="orb orb1" />
      <div className="orb orb2" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer>
        <p>
          Designed &amp; Built by <span>Prem Hari S</span> · MERN Stack &amp; UI/UX Developer
        </p>
      </footer>
    </>
  )
}