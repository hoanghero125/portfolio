import { useState } from 'react'
import { SectionHeader } from '../SectionHeader'
import { experiences } from '../../data'
import { useScrollAnimation } from '../../hooks'
import './Experience.css'

const ExperienceItem = ({ role, company, location, period, description, index = 0, isVisible }) => {
  const [hovered, setHovered] = useState(false)
  
  return (
    <div 
      className={`exp-item ${hovered ? 'hovered' : ''} ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="exp-timeline">
        <div className="exp-dot" />
        <div className="exp-line" />
      </div>
      <div className="exp-content">
        <div className="card-glow" />
        <h3>{role}</h3>
        <p className="exp-company">{company} • {location}</p>
        <p className="exp-period">{period}</p>
        <p className="exp-desc">{description}</p>
      </div>
    </div>
  )
}

export const Experience = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="experience" className="experience" ref={ref}>
      <SectionHeader number="03" title="EXPERIENCE" isVisible={isVisible} />
      <div className="exp-timeline-container">
        {experiences.map((exp, i) => (
          <ExperienceItem key={i} {...exp} index={i} isVisible={isVisible} />
        ))}
      </div>
    </section>
  )
}
