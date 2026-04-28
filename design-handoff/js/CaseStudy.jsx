// CaseStudy.jsx — full case study page with fixed meta layout

const csS = {
  page: { paddingTop: '72px', minHeight: '100vh' },
  wrap: { maxWidth: '1280px', margin: '0 auto', padding: '0 48px' },
  narrow: { maxWidth: '720px' },

  // ─── HEADER ───
  header: { padding: '56px 0 48px', borderBottom: '1px solid #E4DFDE' },
  back: {
    display: 'inline-flex', alignItems: 'center', gap: '6px',
    fontFamily: "'Courier Prime', monospace", fontSize: '11px',
    textTransform: 'uppercase', letterSpacing: '2px', color: '#555',
    cursor: 'pointer', background: 'none', border: 'none', padding: 0,
    marginBottom: '32px', transition: 'color 0.2s',
  },
  labels: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' },
  label: {
    fontFamily: "'Courier Prime', monospace", fontSize: '10px',
    textTransform: 'uppercase', letterSpacing: '1.5px',
    border: '1px solid #C1BCBB', padding: '3px 8px', color: '#555',
  },
  labelRed: {
    fontFamily: "'Courier Prime', monospace", fontSize: '10px',
    textTransform: 'uppercase', letterSpacing: '1.5px',
    border: '1px solid #BB2F2E', padding: '3px 8px', color: '#BB2F2E',
  },
  title: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(60px, 7vw, 100px)',
    lineHeight: '0.92', letterSpacing: '-1px', color: '#000',
    margin: '0 0 20px',
  },
  tagline: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '20px',
    lineHeight: 1.55, color: '#555', maxWidth: '660px',
    fontStyle: 'italic',
  },

  // ─── META BAR ───
  meta: {
    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '0', padding: '32px 0', borderBottom: '1px solid #E4DFDE',
  },
  metaItem: {
    display: 'flex', flexDirection: 'column', gap: '8px',
    padding: '0 24px 0 0',
    borderRight: '1px solid #E4DFDE',
  },
  metaItemLast: {
    display: 'flex', flexDirection: 'column', gap: '8px', padding: '0',
  },
  metaLabel: {
    fontFamily: "'Courier Prime', monospace", fontSize: '10px',
    textTransform: 'uppercase', letterSpacing: '2px', color: '#A3A3A3',
  },
  metaValue: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '15px',
    color: '#2B2B2B', lineHeight: 1.5,
  },

  // ─── NDA ───
  nda: {
    display: 'flex', gap: '16px', alignItems: 'flex-start',
    padding: '20px 24px', margin: '32px 0',
    borderLeft: '3px solid #BB2F2E', background: '#FAF9F8',
  },
  ndaBadge: {
    fontFamily: "'Courier Prime', monospace", fontSize: '10px',
    textTransform: 'uppercase', letterSpacing: '2px',
    border: '1px solid #BB2F2E', padding: '3px 8px',
    color: '#BB2F2E', flexShrink: 0, alignSelf: 'flex-start',
    marginTop: '2px',
  },
  ndaText: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '15px',
    color: '#555', lineHeight: 1.65,
  },

  // ─── OVERVIEW ───
  overviewBlock: { padding: '56px 0 48px' },
  overviewLabel: {
    fontFamily: "'Courier Prime', monospace", fontSize: '10px',
    textTransform: 'uppercase', letterSpacing: '2.5px', color: '#A3A3A3',
    marginBottom: '20px', display: 'block',
  },
  overviewText: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '19px',
    lineHeight: 1.8, color: '#2B2B2B', maxWidth: '680px',
  },

  // ─── SECTIONS ───
  sections: { borderTop: '1px solid #E4DFDE' },
  section: { padding: '52px 0', borderBottom: '1px solid #E4DFDE' },
  sectionTitle: {
    fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px',
    lineHeight: '0.95', letterSpacing: '-0.5px', color: '#000',
    marginBottom: '20px',
  },
  sectionText: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '17px',
    lineHeight: 1.8, color: '#2B2B2B', maxWidth: '660px',
  },

  // ─── IMAGES ───
  imageGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2px', margin: '48px 0',
  },
  imageCard: { background: '#F5F1F0', overflow: 'hidden' },
  image: { width: '100%', height: '280px', objectFit: 'cover', display: 'block' },
  imageCaption: {
    fontFamily: "'Courier Prime', monospace", fontSize: '10px',
    textTransform: 'uppercase', letterSpacing: '1.5px', color: '#A3A3A3',
    padding: '10px 14px',
  },

  // ─── FOOTER ───
  csFooter: {
    padding: '48px 0 80px', display: 'flex',
    justifyContent: 'space-between', alignItems: 'center',
    flexWrap: 'wrap', gap: '16px',
  },
  nextLabel: {
    fontFamily: "'Courier Prime', monospace", fontSize: '11px',
    textTransform: 'uppercase', letterSpacing: '2px', color: '#A3A3A3',
  },
};

function CaseStudy({ navigate, studyId }) {
  const { caseStudies } = window.CONTENT;
  const study = caseStudies.find(s => s.id === studyId);
  const idx = caseStudies.findIndex(s => s.id === studyId);
  const nextStudy = caseStudies[(idx + 1) % caseStudies.length];

  React.useEffect(() => { window.scrollTo(0, 0); }, [studyId]);

  if (!study) {
    return (
      <main style={csS.page} className="page">
        <div style={csS.wrap}>
          <p style={{ padding: '80px 0', fontFamily: "'DM Sans', sans-serif", color: '#555' }}>
            Case study not found.{' '}
            <button onClick={() => navigate('home')} style={{ ...csS.back, display: 'inline', marginBottom: 0 }}>
              Go back
            </button>
          </p>
        </div>
      </main>
    );
  }

  const metaItems = [
    { label: 'Role', value: study.role },
    { label: 'Team', value: study.team },
    { label: 'Duration', value: study.duration },
    { label: 'Status', value: study.status },
  ];

  return (
    <main style={csS.page} className="page">
      <div style={csS.wrap}>

        {/* ─── HEADER ─── */}
        <div style={csS.header}>
          <button
            style={csS.back}
            onClick={() => navigate('home')}
            onMouseEnter={e => e.currentTarget.style.color = '#BB2F2E'}
            onMouseLeave={e => e.currentTarget.style.color = '#555'}
          >
            ← Back to work
          </button>

          <div style={csS.labels}>
            {study.labels.map(l => (
              <span key={l} style={l === '1ST PRIZE' ? csS.labelRed : csS.label}>{l}</span>
            ))}
            {study.nda && <span style={csS.label}>NDA</span>}
          </div>

          <h1 style={csS.title}>{study.title}</h1>
          <p style={csS.tagline}>{study.tagline}</p>
        </div>

        {/* ─── META BAR ─── */}
        <div style={csS.meta}>
          {metaItems.map((item, i) => (
            <div key={item.label} style={i < 3 ? csS.metaItem : csS.metaItemLast}>
              <span style={csS.metaLabel}>{item.label}</span>
              <span style={csS.metaValue}>{item.value}</span>
            </div>
          ))}
        </div>

        {/* ─── NDA NOTICE ─── */}
        {study.nda && (
          <div style={csS.nda}>
            <span style={csS.ndaBadge}>NDA</span>
            <p style={csS.ndaText}>
              Final screens and deliverables are covered by a non-disclosure agreement and cannot be shown publicly. This case study focuses on process, decisions, and outcomes.
            </p>
          </div>
        )}

        {/* ─── OVERVIEW ─── */}
        <div style={csS.overviewBlock}>
          <span style={csS.overviewLabel}>Overview</span>
          <p style={csS.overviewText}>{study.overview}</p>
        </div>

        {/* ─── IMAGES (Asobal only) ─── */}
        {study.images && study.images.length > 0 && (
          <div style={csS.imageGrid}>
            {study.images.map((img, i) => (
              <div key={i} style={csS.imageCard}>
                <img src={img.src} alt={img.caption} style={csS.image} />
                <p style={csS.imageCaption}>{img.caption}</p>
              </div>
            ))}
          </div>
        )}

        {/* ─── SECTIONS ─── */}
        <div style={csS.sections}>
          {study.sections.map(sec => (
            <div key={sec.title} style={csS.section}>
              <h2 style={csS.sectionTitle}>{sec.title}</h2>
              <p style={csS.sectionText}>{sec.content}</p>
            </div>
          ))}
        </div>

        {/* ─── FOOTER NAV ─── */}
        <div style={csS.csFooter}>
          <button
            className="btn-ghost"
            onClick={() => navigate('home')}
          >
            ← All work
          </button>
          <div style={{ textAlign: 'right' }}>
            <div style={csS.nextLabel}>Next</div>
            <button
              className="btn-primary"
              onClick={() => navigate('case-study', nextStudy.id)}
              style={{ marginTop: '8px' }}
            >
              {nextStudy.shortTitle} →
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}

Object.assign(window, { CaseStudy });
