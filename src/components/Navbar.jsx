import { useState, useEffect } from 'react'

const links = ['about','skills','projects','contact']

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <nav style={scrolled ? { boxShadow:'0 4px 30px rgba(0,0,0,.35)' } : {}}>
        <div className="nav-logo">PH</div>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l}><a href={`#${l}`}>{l.charAt(0).toUpperCase()+l.slice(1)}</a></li>
          ))}
        </ul>
        <button className={`nav-toggle ${open?'open':''}`} onClick={() => setOpen(v=>!v)} aria-label="menu">
          <span/><span/><span/>
        </button>
      </nav>
      <div className={`nav-mobile ${open?'open':''}`}>
        {links.map(l => (
          <a key={l} href={`#${l}`} onClick={close}>
            {l.charAt(0).toUpperCase()+l.slice(1)}
          </a>
        ))}
      </div>
    </>
  )
}