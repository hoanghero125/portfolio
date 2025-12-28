import { SectionHeader } from '../SectionHeader'
import { PixelIcon } from '../PixelIcons'
import { personalInfo } from '../../data'
import { useScrollAnimation } from '../../hooks'
import './Contact.css'

const socialLinks = [
  { icon: 'mail', label: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: 'github', label: personalInfo.social.github, href: `https://github.com/${personalInfo.social.github}` },
  { icon: 'linkedin', label: personalInfo.social.linkedin, href: `https://linkedin.com/in/${personalInfo.social.linkedin}` },
  { icon: 'discord', label: personalInfo.social.discord, href: `https://discord.com/users/${personalInfo.social.discord}` },
  { icon: 'facebook', label: personalInfo.social.facebook, href: `https://facebook.com/${personalInfo.social.facebook}` },
  { icon: 'instagram', label: personalInfo.social.instagram, href: `https://instagram.com/${personalInfo.social.instagram}` },]

export const Contact = () => {
  const [ref, isVisible] = useScrollAnimation(0.2)

  return (
    <section id="contact" className="contact" ref={ref}>
      <SectionHeader number="06" title="GET IN TOUCH" isVisible={isVisible} />
      <div className={`contact-content ${isVisible ? 'visible' : ''}`}>
        <p className="contact-text">
          I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hi, feel free to reach out!
        </p>
        <div className="contact-links">
          {socialLinks.map((link, i) => (
            <a 
              key={i}
              href={link.href} 
              className="contact-link"
              target={link.icon !== 'mail' ? '_blank' : undefined}
              rel={link.icon !== 'mail' ? 'noopener noreferrer' : undefined}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <PixelIcon type={link.icon} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
        <a href={`mailto:${personalInfo.email}`} className="btn btn-primary btn-large">
          <span>SAY HELLO!</span>
        </a>
      </div>
    </section>
  )
}
