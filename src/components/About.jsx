import { HiOutlineCode, HiOutlinePencil, HiOutlineAcademicCap, HiOutlineLocationMarker } from 'react-icons/hi'

const cardRows = [
  { icon:<HiOutlineCode size={18}/>,             label:'Role',     val:'MERN Stack Developer'  },
  { icon:<HiOutlinePencil size={18}/>,           label:'Design',   val:'UI/UX Designer'        },
  { icon:<HiOutlineAcademicCap size={18}/>,      label:'Focus',    val:'Full Stack Web Apps'   },
  { icon:<HiOutlineLocationMarker size={18}/>,   label:'Based in', val:'India'                 },
]

const stats = [
  { num:'10+',  label:'Projects Built'   },
  { num:'MERN', label:'Stack Expertise'  },
  { num:'UI/UX',label:'Design Skills'    },
  { num:'∞',    label:'Passion for Code' },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="sec-header fade-up">
          <div className="sec-divider" />
          <h2 className="sec-title">About <span>Me</span></h2>
          <p className="sec-sub">Who I am and what I bring to every project</p>
        </div>
        <div className="about-grid">
          <div className="fade-up">
            <div className="about-text">
              <p>Hi, I'm <strong>Prem Hari S</strong> — a passionate <strong>MERN Stack Developer</strong> and <strong>UI/UX Designer</strong> who loves building end-to-end digital products that are powerful under the hood and beautiful on the surface.</p>
              <p>I specialize in <strong>MongoDB, Express.js, React,</strong> and <strong>Node.js</strong>, combined with a strong eye for design using Figma and Tailwind CSS.</p>
              <p>Whether crafting pixel-perfect UI components or architecting scalable REST APIs, I bring creativity and technical precision to every project.</p>
            </div>
            <div className="about-stats">
              {stats.map(s => (
                <div className="stat-box" key={s.label}>
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-card fade-up delay-2">
            {cardRows.map(r => (
              <div className="about-card-row" key={r.label}>
                <div className="about-icon-wrap">{r.icon}</div>
                <div>
                  <div className="about-card-label">{r.label}</div>
                  <div className="about-card-val">{r.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}