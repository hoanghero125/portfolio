import { useState } from 'react'
import { SectionHeader } from '../SectionHeader'
import { PixelIcon } from '../PixelIcons'
import { projects } from '../../data'
import { useScrollAnimation } from '../../hooks'
import './Projects.css'

const ProjectCard = ({ title, company, description, tags, index = 0, isVisible }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`project-card ${hovered ? 'hovered' : ''} ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="card-glow" />
      <div className="project-header">
        <PixelIcon type="folder" />
        <h3>{title}</h3>
      </div>
      <p className="project-company">{company}</p>
      <p className="project-desc">{description}</p>
      <div className="project-tags">
        {tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  )
}

export const Projects = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="projects" className="projects" ref={ref}>
      <SectionHeader number="04" title="PROJECTS" isVisible={isVisible} />
      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} index={i} isVisible={isVisible} />
        ))}
      </div>
    </section>
  )
}
