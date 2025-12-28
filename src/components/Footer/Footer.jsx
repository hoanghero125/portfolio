import { PixelIcon } from '../PixelIcons'
import { personalInfo } from '../../data'
import './Footer.css'

export const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>Designed & Built by <img src="/dekthedev.png" alt="DekTheDev" className="footer-logo" /></p>
      <p className="footer-year">© 2025</p>
    </div>
    <div className="footer-decoration">
      {Array.from({ length: 20 }, (_, i) => (
        <PixelIcon key={i} type="star" />
      ))}
    </div>
  </footer>
)
