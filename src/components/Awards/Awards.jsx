import { useState } from 'react'
import { SectionHeader } from '../SectionHeader'
import { PixelIcon } from '../PixelIcons'
import { awards } from '../../data'
import { useScrollAnimation } from '../../hooks'
import './Awards.css'

const AwardItem = ({ year, placement, title, location, index = 0, isVisible }) => {
  const [hovered, setHovered] = useState(false)
  
  return (
    <div 
      className={`award-item ${hovered ? 'hovered' : ''} ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="card-glow" />
      <PixelIcon type="trophy" />
      <div className="award-content">
        <span className="award-placement highlight">{placement}</span>
        <h4>{title}</h4>
        <p>{year} - {location}</p>
      </div>
    </div>
  )
}

export const Awards = () => {
  const [ref, isVisible] = useScrollAnimation(0.2)

  return (
    <section id="awards" className="awards" ref={ref}>
      <SectionHeader number="05" title="HONORS & AWARDS" isVisible={isVisible} />
      <div className="awards-grid">
        {awards.map((award, i) => (
          <AwardItem key={i} {...award} index={i} isVisible={isVisible} />
        ))}
      </div>
    </section>
  )
}
