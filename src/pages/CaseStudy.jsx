import { useParams, Link } from 'react-router-dom'
import content from '../data/content.json'
import './CaseStudy.css'

function CaseStudy() {
  const { id } = useParams()
  const study = content.caseStudies.find((s) => s.id === id)

  if (!study) {
    return (
      <div className="cs-not-found">
        <p>Case study not found.</p>
        <Link to="/">Go back home</Link>
      </div>
    )
  }

  return (
    <article className="cs">

      <div className="cs-header">
        <Link to="/" className="cs-back">← Back</Link>
        <div className="cs-labels">
          {study.labels.map((label) => (
            <span className="cs-label" key={label}>{label}</span>
          ))}
        </div>
        <h1 className="cs-title">{study.title}</h1>
        <p className="cs-tagline">{study.tagline}</p>
      </div>

      <div className="cs-meta">
        <div className="cs-meta-item">
          <span className="cs-meta-label">Role</span>
          <span className="cs-meta-value">{study.role}</span>
        </div>
        <div className="cs-meta-item">
          <span className="cs-meta-label">Team</span>
          <span className="cs-meta-value">{study.team}</span>
        </div>
        <div className="cs-meta-item">
          <span className="cs-meta-label">Duration</span>
          <span className="cs-meta-value">{study.duration}</span>
        </div>
        <div className="cs-meta-item">
          <span className="cs-meta-label">Status</span>
          <span className="cs-meta-value">{study.status}</span>
        </div>
      </div>

      {study.nda && (
        <div className="cs-nda">
          <span className="cs-nda-label">NDA</span>
          <p>Final screens and deliverables are covered by a non-disclosure agreement and cannot be shown publicly. The case study focuses on process, decisions, and outcomes.</p>
        </div>
      )}

      <div className="cs-overview">
        <h2 className="cs-section-title">Project Overview</h2>
        <p>{study.overview}</p>
      </div>

      <div className="cs-sections">
        {study.sections.map((section) => (
          <div className="cs-section" key={section.title}>
            <h2 className="cs-section-title">{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}
      </div>

      <div className="cs-footer">
        <Link to="/" className="btn-primary">← Back to work</Link>
      </div>

    </article>
  )
}

export default CaseStudy