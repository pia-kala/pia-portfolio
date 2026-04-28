import { Link } from 'react-router-dom'
import content from '../data/content.json'
import heroImg from '../assets/hero.PNG'
import './Home.css'

function LabelChip({ label }) {
  return (
    <span className={label === '1st Prize' ? 'label-chip label-chip--red' : 'label-chip'}>
      {label}
    </span>
  )
}

function Home() {
  const { caseStudies, disasterDrawer, meta } = content

  const scrollToWork = () => {
    const el = document.getElementById('work')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="home page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <span className="hero-tag">UX/UI DESIGNER · SWITZERLAND</span>
          <h1 className="hero-headline">
            Designing<br />
            <span>things</span> for<br />
            people
          </h1>
          <p className="hero-also">...and also for myself</p>
          <p className="hero-sub">
            Product and UX designer with a habit of noticing things that don't work,
            and an obsession with fixing them. Also draws frogs.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={scrollToWork}>See my work</button>
            <a href={`mailto:${meta.email}`} className="btn-ghost">Get in touch</a>
          </div>
        </div>
        <div className="hero-right">
          <img src={heroImg} alt="Pía at her desk, buried in post-its" className="hero-img" />
        </div>
      </section>

      {/* WORK */}
      <section className="work" id="work">
        <div className="work-header">
          <span className="work-label">Selected work</span>
          <span className="work-count">{caseStudies.length} case studies</span>
        </div>
        <div className="work-rows">
          {caseStudies.map((study, i) => (
            <Link to={`/case-study/${study.id}`} className="work-row" key={study.id}>
              <span className="work-row-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="work-row-body">
                <div className="work-row-labels">
                  {study.labels.map(l => <LabelChip key={l} label={l} />)}
                </div>
                <div className="work-row-title">{study.title}</div>
                <div className="work-row-tagline">{study.tagline}</div>
              </div>
              <span className="work-row-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      {/* DISASTER STRIP */}
      <section className="disaster-strip">
        <div className="disaster-wrap">
          <div className="disaster-head">
            <h2 className="disaster-title">
              Disaster<br />
              <span className="disaster-title-accent">Drawer</span>
            </h2>
            <p className="disaster-sub">
              A sneak peek into my chaotic mind.<br />
              Just because.
            </p>
          </div>
          <div className="disaster-grid">
            {disasterDrawer.map(item => (
              <Link to="/disaster-drawer" className="disaster-item" key={item.id}>
                <span className="disaster-item-label">{item.label}</span>
                <span className="disaster-item-title">{item.title}</span>
                <span className="disaster-item-arrow">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        <span className="home-footer-name">
          Pía Vargas · UX/UI Designer · {new Date().getFullYear()}
        </span>
        <div className="home-footer-links">
          <a href={meta.linkedin} target="_blank" rel="noreferrer" className="home-footer-link">LinkedIn</a>
          <a href={meta.instagram_illustration} target="_blank" rel="noreferrer" className="home-footer-link">Illustration</a>
          <a href={meta.instagram_photography} target="_blank" rel="noreferrer" className="home-footer-link">Photography</a>
        </div>
      </footer>

    </main>
  )
}

export default Home
