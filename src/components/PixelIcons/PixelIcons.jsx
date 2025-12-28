import './PixelIcons.css'

const iconPaths = {
  code: (
    <>
      <rect x="2" y="4" width="2" height="2" fill="currentColor"/>
      <rect x="4" y="6" width="2" height="2" fill="currentColor"/>
      <rect x="6" y="8" width="2" height="2" fill="currentColor"/>
      <rect x="4" y="10" width="2" height="2" fill="currentColor"/>
      <rect x="2" y="12" width="2" height="2" fill="currentColor"/>
      <rect x="12" y="4" width="2" height="2" fill="currentColor"/>
      <rect x="10" y="6" width="2" height="2" fill="currentColor"/>
      <rect x="8" y="8" width="2" height="2" fill="currentColor"/>
      <rect x="10" y="10" width="2" height="2" fill="currentColor"/>
      <rect x="12" y="12" width="2" height="2" fill="currentColor"/>
    </>
  ),
  ai: (
    <>
      <rect x="4" y="2" width="8" height="2" fill="currentColor"/>
      <rect x="2" y="4" width="2" height="8" fill="currentColor"/>
      <rect x="12" y="4" width="2" height="8" fill="currentColor"/>
      <rect x="4" y="12" width="8" height="2" fill="currentColor"/>
      <rect x="5" y="5" width="2" height="2" fill="currentColor"/>
      <rect x="9" y="5" width="2" height="2" fill="currentColor"/>
      <rect x="6" y="9" width="4" height="2" fill="currentColor"/>
    </>
  ),
  trophy: (
    <>
      <rect x="4" y="2" width="8" height="2" fill="currentColor"/>
      <rect x="2" y="2" width="2" height="6" fill="currentColor"/>
      <rect x="12" y="2" width="2" height="6" fill="currentColor"/>
      <rect x="4" y="4" width="8" height="4" fill="currentColor"/>
      <rect x="6" y="8" width="4" height="2" fill="currentColor"/>
      <rect x="7" y="10" width="2" height="2" fill="currentColor"/>
      <rect x="5" y="12" width="6" height="2" fill="currentColor"/>
    </>
  ),
  folder: (
    <>
      <rect x="2" y="4" width="6" height="2" fill="currentColor"/>
      <rect x="2" y="6" width="12" height="8" fill="currentColor"/>
      <rect x="4" y="8" width="8" height="4" fill="#1a1a2e"/>
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="12" height="8" fill="currentColor"/>
      <rect x="4" y="6" width="2" height="2" fill="#1a1a2e"/>
      <rect x="10" y="6" width="2" height="2" fill="#1a1a2e"/>
      <rect x="6" y="8" width="4" height="2" fill="#1a1a2e"/>
    </>
  ),
  github: (
    <>
      <rect x="4" y="2" width="8" height="2" fill="currentColor"/>
      <rect x="2" y="4" width="2" height="6" fill="currentColor"/>
      <rect x="12" y="4" width="2" height="6" fill="currentColor"/>
      <rect x="4" y="4" width="8" height="6" fill="currentColor"/>
      <rect x="6" y="6" width="1" height="2" fill="#1a1a2e"/>
      <rect x="9" y="6" width="1" height="2" fill="#1a1a2e"/>
      <rect x="4" y="10" width="3" height="2" fill="currentColor"/>
      <rect x="9" y="10" width="3" height="2" fill="currentColor"/>
      <rect x="3" y="12" width="2" height="2" fill="currentColor"/>
      <rect x="11" y="12" width="2" height="2" fill="currentColor"/>
    </>
  ),
  linkedin: (
    <>
      <rect x="2" y="2" width="12" height="12" fill="currentColor"/>
      <rect x="4" y="4" width="2" height="2" fill="#1a1a2e"/>
      <rect x="4" y="7" width="2" height="5" fill="#1a1a2e"/>
      <rect x="7" y="7" width="2" height="5" fill="#1a1a2e"/>
      <rect x="9" y="8" width="2" height="4" fill="#1a1a2e"/>
      <rect x="7" y="6" width="4" height="2" fill="#1a1a2e"/>
    </>
  ),
  facebook: (
    <>
      <rect x="2" y="2" width="12" height="12" fill="currentColor"/>
      <rect x="7" y="4" width="4" height="2" fill="#1a1a2e"/>
      <rect x="6" y="6" width="2" height="6" fill="#1a1a2e"/>
      <rect x="5" y="8" width="5" height="2" fill="#1a1a2e"/>
      <rect x="11" y="6" width="2" height="2" fill="#1a1a2e"/>
    </>
  ),
  instagram: (
    <>
      <rect x="2" y="2" width="12" height="12" fill="currentColor"/>
      <rect x="4" y="4" width="8" height="8" fill="#1a1a2e"/>
      <rect x="6" y="6" width="4" height="4" fill="currentColor"/>
      <rect x="10" y="4" width="2" height="2" fill="currentColor"/>
    </>
  ),
  discord: (
    <>
      <rect x="3" y="3" width="10" height="8" fill="currentColor"/>
      <rect x="2" y="5" width="2" height="4" fill="currentColor"/>
      <rect x="12" y="5" width="2" height="4" fill="currentColor"/>
      <rect x="5" y="5" width="2" height="2" fill="#1a1a2e"/>
      <rect x="9" y="5" width="2" height="2" fill="#1a1a2e"/>
      <rect x="5" y="9" width="2" height="1" fill="#1a1a2e"/>
      <rect x="6" y="10" width="1" height="1" fill="#1a1a2e"/>
      <rect x="9" y="10" width="1" height="1" fill="#1a1a2e"/>
      <rect x="9" y="9" width="2" height="1" fill="#1a1a2e"/>
      <rect x="2" y="11" width="2" height="2" fill="currentColor"/>
      <rect x="12" y="11" width="2" height="2" fill="currentColor"/>
    </>
  ),
  star: (
    <>
      <rect x="7" y="1" width="2" height="2" fill="currentColor"/>
      <rect x="6" y="3" width="4" height="2" fill="currentColor"/>
      <rect x="1" y="5" width="14" height="2" fill="currentColor"/>
      <rect x="3" y="7" width="10" height="2" fill="currentColor"/>
      <rect x="4" y="9" width="8" height="2" fill="currentColor"/>
      <rect x="3" y="11" width="4" height="2" fill="currentColor"/>
      <rect x="9" y="11" width="4" height="2" fill="currentColor"/>
      <rect x="2" y="13" width="2" height="2" fill="currentColor"/>
      <rect x="12" y="13" width="2" height="2" fill="currentColor"/>
    </>
  ),
  fire: (
    <>
      <rect x="7" y="1" width="2" height="2" fill="currentColor"/>
      <rect x="6" y="3" width="4" height="2" fill="currentColor"/>
      <rect x="5" y="5" width="6" height="2" fill="currentColor"/>
      <rect x="4" y="7" width="8" height="2" fill="currentColor"/>
      <rect x="4" y="9" width="8" height="2" fill="currentColor"/>
      <rect x="5" y="11" width="6" height="2" fill="currentColor"/>
      <rect x="6" y="13" width="4" height="2" fill="currentColor"/>
    </>
  ),
}

export const PixelIcon = ({ type, className = '' }) => {
  if (!iconPaths[type]) return null
  
  return (
    <svg viewBox="0 0 16 16" className={`pixel-icon ${className}`}>
      {iconPaths[type]}
    </svg>
  )
}
