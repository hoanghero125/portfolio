import { navSections } from '../../data'
import './Navigation.css'

export const Navigation = ({ activeSection, setActiveSection }) => {
  const handleNavClick = (section) => {
    setActiveSection(section)
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="nav">
      <div className="nav-logo">
        <span className="logo-bracket">&lt;</span>
        <span className="logo-text">dekthedev</span>
        <span className="logo-bracket">/&gt;</span>
      </div>
      <ul className="nav-links">
        {navSections.map(section => (
          <li key={section}>
            <button
              className={activeSection === section ? 'active' : ''}
              onClick={() => handleNavClick(section)}
            >
              {section.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
