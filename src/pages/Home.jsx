import { Link } from 'react-router-dom'
import content from '../data/content.json'
import './Home.css'

function Home() {
  const { caseStudies, disasterDrawer } = content

  return (
    <main className="home">

      <div className="home-grid">

        <section className="hero">
          <span className="hero-tag">UX/UI · Illustration · Photography</span>
          <h1 className="hero-headline">
            Designing<br />
            <span className="hero-headline-accent">things</span><br />
            for people<br />
            ... and also<br />
            for myself
          </h1>
          <p className="hero-sub">
            Product and UX designer with a habit of noticing things that don't work,
            and an obsession with fixing them. Also draws frogs.
          </p>
          <div className="hero-cta">
            <Link to="/about" className="btn-primary">About me</Link>
            <a href="mailto:mpaula.vm@gmail.com" className="btn-ghost">Get in touch</a>
          </div>
        </section>

        <section className="work" id="work">
          <div className="section-header">
            <h2 className="section-title">Selected work</h2>
            <span className="section-count">{caseStudies.length} case studies</span>
          </div>
          <div className="case-grid">
            {caseStudies.map((study) => (
              <Link
                to={`/case-study/${study.id}`}
                className="case-card"
                key={study.id}
              >
                <div className="case-card-top">
                  <div className="case-labels">
                    {study.labels.map((label) => (
                      <span className="case-label" key={label}>{label}</span>
                    ))}
                  </div>
                  <h3 className="case-title">{study.title}</h3>
                  <p className="case-tagline">{study.tagline}</p>
                </div>
                <div className="case-card-bottom">
                  <span className="case-arrow">↗</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>

      <section className="disaster-strip">
        <div className="disaster-header">
          <div>
            <h2 className="disaster-title">Disaster<br /><span>Drawer</span></h2>
          </div>
          <p className="disaster-sub">A sneak peek into my chaotic mind. Just because.</p>
        </div>
        <div className="disaster-grid">
          {disasterDrawer.map((item) => (
            <Link
              to="/disaster-drawer"
              className="disaster-item"
              key={item.id}
            >
              <span className="disaster-item-label">{item.label}</span>
              <h3 className="disaster-item-title">{item.title}</h3>
            </Link>
          ))}
        </div>
      </section>

    </main>
  )
}

export default Home