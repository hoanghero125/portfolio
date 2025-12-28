import { useState, useEffect } from 'react'
import './PixelCharacter.css'

export const PixelCharacter = ({ size = 200 }) => {
  const [frame, setFrame] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(f => (f + 1) % 2)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pixel-character" style={{ width: size, height: size }}>
      <svg viewBox="0 0 32 32" className="character-sprite">
        {/* Hair */}
        <rect x="10" y="4" width="12" height="4" fill="#2d2d2d"/>
        <rect x="8" y="6" width="16" height="4" fill="#2d2d2d"/>
        
        {/* Face */}
        <rect x="10" y="10" width="12" height="10" fill="#f5d0a9"/>
        <rect x="8" y="12" width="2" height="6" fill="#f5d0a9"/>
        <rect x="22" y="12" width="2" height="6" fill="#f5d0a9"/>
        
        {/* Eyes - blinking */}
        {frame === 0 ? (
          <>
            <rect x="12" y="13" width="3" height="3" fill="#2d2d2d"/>
            <rect x="17" y="13" width="3" height="3" fill="#2d2d2d"/>
            <rect x="13" y="14" width="1" height="1" fill="#fff"/>
            <rect x="18" y="14" width="1" height="1" fill="#fff"/>
          </>
        ) : (
          <>
            <rect x="12" y="14" width="3" height="1" fill="#2d2d2d"/>
            <rect x="17" y="14" width="3" height="1" fill="#2d2d2d"/>
          </>
        )}
        
        {/* Mouth */}
        <rect x="14" y="17" width="4" height="1" fill="#c9836e"/>
        
        {/* Body/Shirt - Cyan themed */}
        <rect x="10" y="20" width="12" height="8" fill="#4ecdc4"/>
        <rect x="8" y="22" width="2" height="6" fill="#4ecdc4"/>
        <rect x="22" y="22" width="2" height="6" fill="#4ecdc4"/>
        
        {/* Collar detail */}
        <rect x="14" y="20" width="4" height="2" fill="#3db8b0"/>
      </svg>
    </div>
  )
}
