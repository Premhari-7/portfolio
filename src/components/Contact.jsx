import { FiMail, FiArrowRight } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const contacts = [
  { label:'Email',    val:'haripradeep185@gmail.com',  href:'mailto:haripradeep185@gmail.com', Icon:FiMail,     cls:'icon-email'    },
  { label:'GitHub',   val:'github.com/Premhari-7',      href:'https://github.com/Premhari-7',  Icon:FaGithub,   cls:'icon-github'   },
  { label:'LinkedIn', val:'linkedin.com/in/premhari07', href:'https://linkedin.com/in/premhari07', Icon:FaLinkedin, cls:'icon-linkedin' },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="sec-header fade-up">
          <div className="sec-divider" />
          <h2 className="sec-title">Get In <span>Touch</span></h2>
          <p className="sec-sub">Open to opportunities, freelance work, and collaborations</p>
        </div>
        <div className="contact-grid fade-up delay-1">
          {contacts.map(({ label, val, href, Icon, cls }) => (
            <a key={label} href={href} target={href.startsWith('mailto')?'_self':'_blank'} rel="noopener noreferrer" className="contact-card">
              <div className={`contact-icon ${cls}`}><Icon size={21} /></div>
              <div>
                <div className="contact-label">{label}</div>
                <div className="contact-val">{val}</div>
              </div>
            </a>
          ))}
        </div>
        <div className="contact-cta fade-up delay-2">
          <h3>Let's build something great together</h3>
          <p>Whether you have a project, a question, or just want to connect — my inbox is always open.</p>
          <a href="mailto:haripradeep185@gmail.com" className="btn-primary" style={{display:'inline-flex'}}>
            Send a Message <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}