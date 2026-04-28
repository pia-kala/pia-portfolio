import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import content from '../data/content.json'
import Lightbox from '../components/Lightbox'
import './CaseStudy.css'

function CaseStudy() {
  const { id } = useParams()
  const { caseStudies } = content
  const study = caseStudies.find((s) => s.id === id)
  const idx = caseStudies.findIndex((s) => s.id === id)
  const nextStudy = caseStudies[(idx + 1) % caseStudies.length]

  const [lightbox, setLightbox] = useState({ open: false, index: 0 })

  useEffect(() => {
    window.scrollTo(0, 0)
    setLightbox({ open: false, index: 0 })
  }, [id])

  if (!study) {
    return (
      <div className="cs-not-found">
        <p>Case study not found.</p>
        <Link to="/">Go back home</Link>
      </div>
    )
  }

  const metaItems = [
    { label: 'Role', value: study.role },
    { label: 'Team', value: study.team },
    { label: 'Duration', value: study.duration },
    { label: 'Status', value: study.status },
  ]

  const lightboxItems = study.images
    ? study.images.map(img => ({ src: img.src, label: img.caption }))
    : []

  return (
    <>
      <main className="cs-page page">
        <div className="cs-wrap">

          {/* HEADER */}
          <div className="cs-header">
            <Link to="/" className="cs-back">← Back to work</Link>
            <div className="cs-labels">
              {study.labels.map((label) => (
                <span
                  key={label}
                  className={label === '1st Prize' ? 'cs-label cs-label--red' : 'cs-label'}
                >
                  {label}
                </span>
              ))}
              {study.nda && <span className="cs-label cs-label--red">NDA</span>}
            </div>
            <h1 className="cs-title">{study.title}</h1>
            <p className="cs-tagline">{study.tagline}</p>
          </div>

          {/* META BAR */}
          <div className="cs-meta">
            {metaItems.map((item, i) => (
              <div key={item.label} className={i < 3 ? 'cs-meta-item' : 'cs-meta-item cs-meta-item--last'}>
                <span className="cs-meta-label">{item.label}</span>
                <span className="cs-meta-value">{item.value}</span>
              </div>
            ))}
          </div>

          {/* NDA NOTICE */}
          {study.nda && (
            <div className="cs-nda">
              <span className="cs-nda-badge">NDA</span>
              <p>Final screens and deliverables are covered by a non-disclosure agreement and cannot be shown publicly. This case study focuses on process, decisions, and outcomes.</p>
            </div>
          )}

          {/* OVERVIEW */}
          <div className="cs-overview">
            <span className="cs-overview-label">Overview</span>
            <p className="cs-overview-text">{study.overview}</p>
          </div>

          {/* IMAGE GRID */}
          {study.images && study.images.length > 0 && (
            <div className="cs-image-grid">
              {study.images.map((img, i) => (
                <div
                  key={i}
                  className="cs-image-card"
                  onClick={() => setLightbox({ open: true, index: i })}
                >
                  <img src={img.src} alt={img.caption} className="cs-image" />
                  <p className="cs-image-caption">{img.caption}</p>
                </div>
              ))}
            </div>
          )}

          {/* SECTIONS */}
          <div className="cs-sections">
            {study.sections.map((section) => (
              <div className="cs-section" key={section.title}>
                <h2 className="cs-section-title">{section.title}</h2>
                <p>{section.content}</p>
              </div>
            ))}
          </div>

          {/* FOOTER NAV */}
          <div className="cs-footer">
            <Link to="/" className="btn-ghost">← All work</Link>
            <div className="cs-footer-next">
              <Link to={`/case-study/${nextStudy.id}`} className="btn-primary" style={{ marginTop: '0px' }}>
                {nextStudy.shortTitle} →
              </Link>
            </div>
          </div>

        </div>
      </main>

      {lightbox.open && lightboxItems.length > 0 && (
        <Lightbox
          items={lightboxItems}
          index={lightbox.index}
          onClose={() => setLightbox({ open: false, index: 0 })}
          onChange={i => setLightbox(lb => ({ ...lb, index: i }))}
        />
      )}
    </>
  )
}

export default CaseStudy
