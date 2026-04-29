import content from '../data/content.json'
import aboutMeImg from '../assets/About_me.png'
import './About.css'

function About() {
  const { about, meta } = content

  return (
    <main className="about page">
      <div className="about-grid">

        {/* LEFT: sticky illustration */}
        <div className="about-image-col">
          <img
            src={aboutMeImg}
            alt="Pía's character standing, hand on head"
            className="about-illustration"
          />
        </div>

        {/* RIGHT: text content */}
        <div className="about-text-col">
          <span className="about-label">About</span>
          <h1 className="about-title">Paula (Pía)</h1>

          <p className="about-intro">{about.intro}</p>

          <hr className="about-divider" />

          {about.paragraphs.map((p, i) => (
            <p key={i} className="about-paragraph">{p}</p>
          ))}

          <hr className="about-divider" />

          <div className="about-links">
            <a href={meta.linkedin} target="_blank" rel="noreferrer" className="btn-primary">
              LinkedIn
            </a>
            <a href={`mailto:${meta.email}`} className="btn-ghost">
              Get in touch
            </a>
          </div>

        </div>

      </div>
    </main>
  )
}

export default About
