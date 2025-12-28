import './SectionHeader.css'

export const SectionHeader = ({ number, title, isVisible }) => (
  <div className={`section-header ${isVisible ? 'visible' : ''}`}>
    <h2>
      <span className="section-number">{number}.</span>
      {title}
    </h2>
    <div className="section-line" />
  </div>
)
