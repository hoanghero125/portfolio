import { useState } from 'react'
import { SectionHeader } from '../SectionHeader'
import { PixelCharacter } from '../PixelCharacter'
import { personalInfo } from '../../data'
import { useScrollAnimation } from '../../hooks'
import './About.css'

const InfoItem = ({ label, value, index = 0, isVisible }) => {
  const [hovered, setHovered] = useState(false)
  
  return (
    <div 
      className={`info-item ${hovered ? 'hovered' : ''} ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="card-glow" />
      <span className="info-label">{label}</span>
      <span className="info-value">{value}</span>
    </div>
  )
}

const renderBioText = (text) => {
  return text.split(/<highlight>|<\/highlight>/).map((part, i) => 
    i % 2 === 1 ? <span key={i} className="highlight">{part}</span> : part
  )
}

export const About = () => {
  const [ref, isVisible] = useScrollAnimation(0.2)

  return (
    <section id="about" className="about" ref={ref}>
      <SectionHeader number="01" title="ABOUT ME" isVisible={isVisible} />
      <div className="about-content">
        <div className={`about-portrait ${isVisible ? 'visible' : ''}`}>
          <div className="portrait-frame">
            <div className="portrait-placeholder">
              <img 
                src="/portrait_proptit.jpg" 
                alt="Hoang Do Pham Bao" 
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }} 
              />
              <div className="portrait-fallback">
                <PixelCharacter size={150} />
              </div>
            </div>
            <div className="portrait-border" />
            <div className="portrait-corners">
              <span /><span /><span /><span />
            </div>
          </div>
        </div>
        <div className="about-text-content">
          <div className={`about-text ${isVisible ? 'visible' : ''}`}>
            {personalInfo.bio.map((paragraph, i) => (
              <p key={i}>{renderBioText(paragraph)}</p>
            ))}
          </div>
          <div className="about-info">
            <InfoItem label="LOCATION" value={personalInfo.location} index={0} isVisible={isVisible} />
            <InfoItem label="EDUCATION" value={personalInfo.education} index={1} isVisible={isVisible} />
            <InfoItem label="LANGUAGES" value={personalInfo.languages} index={2} isVisible={isVisible} />
          </div>
        </div>
      </div>
    </section>
  )
}
