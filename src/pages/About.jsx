import { Link } from 'react-router-dom'
import content from '../data/content.json'
import './About.css'

function About() {
  const { about, meta } = content

  return (
    <main className="about">

      <div className="about-header">
        <h1 className="about-title">About me</h1>
      </div>

      <div className="about-grid">

        <div className="about-image">
          <div className="about-image-placeholder">
            <span>your illustration goes here</span>
          </div>
        </div>

        <div className="about-content">
          <p className="about-intro">{about.intro}</p>
          {about.paragraphs.map((paragraph, index) => (
            <p className="about-paragraph" key={index}>{paragraph}</p>
          ))}

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