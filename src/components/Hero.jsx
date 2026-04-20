import { FiArrowRight, FiArrowDown } from 'react-icons/fi'
import { HiOutlineCode } from 'react-icons/hi'
// ── TO ADD YOUR PHOTO ───────────────────────────────────────────
// 1. Copy your photo to:  src/assets/profile.jpg
// 2. Uncomment the line below:
// import profileImg from '../assets/profile.jpg'
// 3. Replace <HiOutlineCode.../> with: <img src={profileImg} alt="Prem Hari S" />
// ───────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-inner">

          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-dot" />
              Available for Work
            </div>
            <h1 className="hero-name">Prem Hari  <span>S</span></h1>
            <p className="hero-role">
              MERN Stack Developer &amp; UI/UX Designer crafting fast,
              beautiful, and user-centered digital experiences — from
              pixel-perfect interfaces to scalable backends.
            </p>
            <div className="hero-btns">
              <a href="#projects" className="btn-primary">View Projects <FiArrowRight /></a>
              <a href="#contact"  className="btn-outline">Contact Me</a>
            </div>
            <div className="hero-scroll">
              <span className="scroll-line" />
              Scroll to explore
              <FiArrowDown size={13} />
            </div>
          </div>

          <div className="hero-img-wrap">
            <div className="hero-img-ring">
              <div className="hero-img-inner">
               <img src="/images/profile.jpeg" alt="Prem Hari S" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}