import { 
  SiMongodb, 
  SiExpress, 
  SiReact, 
  SiNodedotjs, 
  SiJavascript, 
  SiHtml5, 
  SiTailwindcss, 
  SiRedux, 
  SiGit, 
  SiFigma, 
  SiPostman 
} from 'react-icons/si'

import { FaCss3Alt } from 'react-icons/fa'   // ✅ FIX

const skills = [
  { name:'MongoDB',    Icon:SiMongodb,    color:'#4DB33D', lvl:'Database', url:'https://www.mongodb.com/docs/' },
  { name:'Express.js', Icon:SiExpress,    color:'#e8f0fe', lvl:'Backend',  url:'https://expressjs.com/' },
  { name:'React',      Icon:SiReact,      color:'#61DAFB', lvl:'Frontend', url:'https://react.dev/' },
  { name:'Node.js',    Icon:SiNodedotjs,  color:'#68A063', lvl:'Runtime',  url:'https://nodejs.org/docs/' },
  { name:'JavaScript', Icon:SiJavascript, color:'#F7DF1E', lvl:'Language', url:'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name:'HTML5',      Icon:SiHtml5,      color:'#E34F26', lvl:'Markup',   url:'https://www.w3schools.com/html/' },

  // ✅ FIXED CSS ICON
  { name:'CSS3',       Icon:FaCss3Alt,    color:'#264de4', lvl:'Styling',  url:'https://www.w3schools.com/css/' },

  { name:'Tailwind',   Icon:SiTailwindcss,color:'#38BDF8', lvl:'CSS Framework', url:'https://tailwindcss.com/docs' },
  { name:'Redux',      Icon:SiRedux,      color:'#764ABC', lvl:'State Mgmt', url:'https://redux.js.org/' },
  { name:'Git',        Icon:SiGit,        color:'#F05032', lvl:'Version Control', url:'https://git-scm.com/doc' },
  { name:'Figma',      Icon:SiFigma,      color:'#F24E1E', lvl:'UI/UX Design', url:'https://help.figma.com/' },
  { name:'Postman',    Icon:SiPostman,    color:'#FF6C37', lvl:'API Testing', url:'https://learning.postman.com/' },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="sec-header fade-up">
          <div className="sec-divider" />
          <h2 className="sec-title">My <span>Skills</span></h2>
          <p className="sec-sub">Click any skill to open its official documentation</p>
        </div>

        <div className="skills-grid fade-up delay-1">
          {skills.map(({ name, Icon, color, lvl, url }) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="skill-card">
              <div className="skill-icon-wrap">
                <Icon size={22} style={{ color }} />
              </div>
              <div className="skill-name">{name}</div>
              <div className="skill-lvl">{lvl}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}