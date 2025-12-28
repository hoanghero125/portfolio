import { useState, useEffect } from 'react'
import { SectionHeader } from '../SectionHeader'
import { PixelIcon } from '../PixelIcons'
import { skills } from '../../data'
import { useScrollAnimation } from '../../hooks'
import './Skills.css'

const SkillBar = ({ name, level, color, isVisible, delay = 0 }) => {
  const [animated, setAnimated] = useState(false)
  const [currentLevel, setCurrentLevel] = useState(0)
  
  useEffect(() => {
    if (isVisible) {
      const startTimer = setTimeout(() => {
        setAnimated(true)
        let current = 0
        const increment = level / 20
        const countInterval = setInterval(() => {
          current += increment
          if (current >= level) {
            setCurrentLevel(level)
            clearInterval(countInterval)
          } else {
            setCurrentLevel(Math.floor(current))
          }
        }, 30)
        return () => clearInterval(countInterval)
      }, delay)
      return () => clearTimeout(startTimer)
    }
  }, [isVisible, level, delay])

  const blocks = 10
  const filled = Math.round(currentLevel / 10)

  return (
    <div className={`skill-bar ${animated ? 'animated' : ''}`}>
      <span className="skill-name">{name}</span>
      <div className="skill-blocks">
        {Array.from({ length: blocks }, (_, i) => (
          <div
            key={i}
            className={`skill-block ${i < filled ? 'filled' : ''}`}
            style={{
              backgroundColor: i < filled ? color : 'transparent',
              transitionDelay: `${i * 80}ms`,
              borderColor: i < filled ? color : undefined,
            }}
          />
        ))}
      </div>
      <span className="skill-percent" style={{ color }}>{currentLevel}%</span>
    </div>
  )
}

const SkillCategory = ({ title, icon, skillList, isVisible, categoryIndex }) => (
  <div 
    className={`skill-category ${isVisible ? 'visible' : ''}`} 
    style={{ animationDelay: `${categoryIndex * 100}ms` }}
  >
    <h3>
      {icon && <PixelIcon type={icon} />}
      {title}
    </h3>
    {skillList.map((skill, i) => (
      <SkillBar 
        key={skill.name} 
        {...skill} 
        isVisible={isVisible}
        delay={categoryIndex * 100 + i * 100}
      />
    ))}
  </div>
)

export const Skills = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)

  const categories = [
    { title: 'PROGRAMMING', icon: 'code', skillList: skills.programming },
    { title: 'AI & DATA SCIENCE', icon: 'ai', skillList: skills.aiData },
    { title: 'BACK-END', skillList: skills.backend },
    { title: 'FRONT-END', skillList: skills.frontend },
    { title: 'DEVOPS & INFRA', skillList: skills.devops },
  ]

  return (
    <section id="skills" className="skills" ref={ref}>
      <SectionHeader number="02" title="SKILLS" isVisible={isVisible} />
      <div className="skills-grid">
        {categories.map((cat, i) => (
          <SkillCategory 
            key={cat.title}
            {...cat}
            isVisible={isVisible}
            categoryIndex={i}
          />
        ))}
      </div>
    </section>
  )
}
