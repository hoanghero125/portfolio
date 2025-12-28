import { useState, useEffect } from 'react'
import { PixelCharacter } from '../PixelCharacter'
import { PixelIcon } from '../PixelIcons'
import { personalInfo } from '../../data'
import './Hero.css'

export const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const fullText = personalInfo.title

  useEffect(() => {
    let i = 0
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typeInterval)
      }
    }, 50)
    return () => clearInterval(typeInterval)
  }, [fullText])

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="greeting">
            <span className="pixel-arrow">▶</span>
            <span>HELLO, WORLD!</span>
            {/* <PixelIcon type="fire" className="fire-icon" /> */}
          </div>
          <h1>
            <span className="name-first">{personalInfo.name.first}</span>
            <span className="name-last">{personalInfo.name.last}</span>
          </h1>
          <p className="hero-aka">
            Also known as <strong>Dek</strong>TheDev
          </p>
          <p className="hero-subtitle">
            {typedText}
            <span className="cursor">_</span>
          </p>
          <div className="hero-stats">
            {personalInfo.stats.map((stat, i) => (
              <div key={i} className="stat">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              <span>CONTACT ME</span>
            </a>
            <a href="#projects" className="btn btn-secondary">
              <span>VIEW PROJECTS</span>
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <PixelCharacter size={200} />
          <div className="hero-badges">
            <div className="badge badge-ai">
              <PixelIcon type="ai" />
              <span>AI</span>
            </div>
            <div className="badge badge-code">
              <PixelIcon type="code" />
              <span>CODE</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>SCROLL DOWN</span>
        <div className="scroll-arrow">▼</div>
      </div>
    </section>
  )
}
