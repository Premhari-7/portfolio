import { useState, useEffect, useCallback } from 'react'
import { FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi'

import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiRedux,
  SiHtml5,
  SiJavascript
} from 'react-icons/si'

import { FaCss3Alt } from 'react-icons/fa'

const projects = [
 {
  name:'Scent Bite (Capstone Project)',
  desc:'Full-stack perfume shop management system developed as a capstone project, achieving a perfect score of 100/100.',
  tags:['React','Node.js','MongoDB','Express','Full Stack'],
  slides:[
    '/images/scent_1.png',
    '/images/scent_2.png',
    '/images/scent_3.png'
  ],
  github:'https://github.com/Premhari-7',
  live:'https://github.com/Premhari-7/scent-bite',
  icons:[SiReact,SiNodedotjs,SiMongodb,SiExpress]
},

{
  name:'GUVI Internship Task',
  desc:'Full-stack authentication system with login, registration, and profile management...',
  tags:['HTML','CSS','JavaScript','PHP','MySQL','MongoDB'],
  slides:[
    '/images/guvi_register.png',
    '/images/guvi_login.png',
    '/images/guvi_profile.png'
  ],
  github:'https://github.com/Premhari-7',
  live:'https://github.com/Premhari-7/guvi-project',
  icons:[SiHtml5, FaCss3Alt, SiJavascript, SiMongodb, SiNodedotjs]
},

{
  name:'Plant Disease Analyzer (AI + ML)',
  desc:'AI-powered web application that detects plant diseases...',
  tags:['AI','ML','TensorFlow','Flask','Node.js'],
  slides:[
    '/images/plant_1.png',
    '/images/plant_2.png',
    '/images/plant_3.png'
  ],
  github:'https://github.com/Premhari-7/plant-disease-analyzer-ai',
  live:'#',
  icons:[SiJavascript, SiNodedotjs, SiMongodb]
},

{
  name:'Smart Parking System',
  desc:'Parking slot booking system built using Python and Flask.',
  tags:['Python','Flask','HTML','CSS','JS'],
  slides:[
    '/images/park_1.png',
    '/images/park_2.png',
    '/images/park_3.png'
  ],
  github:'https://github.com/premhari-7/smart-parking-system',
  live:'https://github.com/Premhari-7/smart-parking-system',
  icons:[SiJavascript, SiNodedotjs]
},
]

function Slide({ src }) {
  const isPath = typeof src === 'string' && src.startsWith('/')
  return (
    <div className="project-slide">
      {isPath && <img src={src} alt="screenshot" />}
    </div>
  )
}

function ProjectCard({ proj }) {
  const [idx, setIdx] = useState(0)
  const total = proj.slides.length

  const go = useCallback(
    dir => setIdx(i => (i + dir + total) % total),
    [total]
  )

  useEffect(() => {
    const t = setInterval(() => go(1), 3000)
    return () => clearInterval(t)
  }, [go])

  return (
    <div className="project-card">
      <div className="project-carousel">
        <div
          className="project-slides"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {proj.slides.map((s, i) => (
            <Slide key={i} src={s} />
          ))}
        </div>

        <button className="carousel-btn carousel-prev" onClick={() => go(-1)}>
          <FiChevronLeft size={15} />
        </button>

        <button className="carousel-btn carousel-next" onClick={() => go(1)}>
          <FiChevronRight size={15} />
        </button>
      </div>

      <div className="project-info">
        <h3 className="project-name">{proj.name}</h3>
        <p className="project-desc">{proj.desc}</p>

        <div className="project-tags">
          {proj.tags.map(t => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>

        <div className="project-footer">
          <a href={proj.live} target="_blank" className="view-link">
            View Project <FiExternalLink size={12} />
          </a>

          <div className="tech-icons">
            {proj.icons.map((Icon, i) => (
              <Icon key={i} size={15} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ paddingTop:'60px' }}>
      <div className="container">

        <div className="sec-header">
          <div className="sec-divider" />
          <h2 className="sec-title">
            My <span>Projects</span>
          </h2>
          <p className="sec-sub">
            A selection of things I've designed and built
          </p>
        </div>

        <div className="projects-grid">
          {projects.map(p => (
            <ProjectCard key={p.name} proj={p} />
          ))}
        </div>

      </div>
    </section>
  )
}