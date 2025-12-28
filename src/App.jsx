import { useState, useEffect } from 'react'
import {
  Navigation,
  PixelParticles,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Awards,
  Contact,
  Footer,
} from './components'
import { navSections } from './data'
import './styles/global.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      for (const section of navSections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`app ${loaded ? 'loaded' : ''}`}>
      <PixelParticles />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Awards />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
