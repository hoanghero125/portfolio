import './PixelParticles.css'

export const PixelParticles = () => {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    size: 4 + Math.floor(Math.random() * 8),
    color: Math.random() > 0.7 ? 'var(--accent-orange)' : 'var(--accent-cyan)',
  }))

  return (
    <div className="particles">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
          }}
        />
      ))}
    </div>
  )
}
