// About.jsx — two-column layout: illustration + text

const aboutS = {
  page: { paddingTop: '72px', minHeight: '100vh' },
  grid: {
    display: 'grid', gridTemplateColumns: '44fr 56fr',
    minHeight: 'calc(100vh - 72px)', alignItems: 'start',
  },
  // ─── IMAGE COLUMN ───
  imageCol: {
    position: 'sticky', top: '72px',
    height: 'calc(100vh - 72px)', overflow: 'hidden',
    background: '#E5E5E5', display: 'flex',
    alignItems: 'flex-end', justifyContent: 'flex-start',
    padding: '0 32px',
  },
  illustration: {
    width: '100%', maxWidth: '380px',
    objectFit: 'contain', display: 'block',
    filter: 'drop-shadow(0 -4px 24px rgba(0,0,0,0.06))',
  },
  // ─── TEXT COLUMN ───
  textCol: {
    padding: '72px 64px 80px 64px',
    display: 'flex', flexDirection: 'column', gap: '28px',
  },
  pageLabel: {
    fontFamily: "'Courier Prime', monospace", fontSize: '11px',
    textTransform: 'uppercase', letterSpacing: '3px', color: '#A3A3A3',
  },
  title: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(64px, 6vw, 88px)',
    lineHeight: '0.92', letterSpacing: '-1px', color: '#000',
    margin: 0,
  },
  intro: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '20px',
    lineHeight: 1.65, color: '#000', fontWeight: 500,
    maxWidth: '560px', borderTop: '2px solid #000',
    paddingTop: '28px',
  },
  paragraph: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '17px',
    lineHeight: 1.8, color: '#2B2B2B', maxWidth: '560px',
  },
  divider: {
    border: 'none', borderTop: '1px solid #E4DFDE', margin: '4px 0',
  },
  links: { display: 'flex', gap: '12px', flexWrap: 'wrap', paddingTop: '8px' },
  // ─── DECORATION: work_utensils ───
  utensils: {
    width: '100%', maxWidth: '200px',
    objectFit: 'contain', opacity: 0.6,
    marginTop: '8px',
  },
};

function About({ navigate }) {
  const { about, meta } = window.CONTENT;

  return (
    <main style={aboutS.page} className="page">
      <div style={aboutS.grid}>

        {/* ─── LEFT: ILLUSTRATION ─── */}
        <div style={aboutS.imageCol}>
          <img
            src="assets/About_me.png"
            alt="Pía's character standing, hand on head"
            style={aboutS.illustration}
          />
        </div>

        {/* ─── RIGHT: TEXT ─── */}
        <div style={aboutS.textCol}>
          <span style={aboutS.pageLabel}>About</span>
          <h1 style={aboutS.title}>Paula (Pía)</h1>

          <p style={aboutS.intro}>{about.intro}</p>

          <hr style={aboutS.divider} />

          {about.paragraphs.map((p, i) => (
            <p key={i} style={aboutS.paragraph}>{p}</p>
          ))}

          <hr style={aboutS.divider} />

          <div style={aboutS.links}>
            <a
              href={meta.linkedin}
              target="_blank" rel="noreferrer"
              className="btn-primary"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${meta.email}`}
              className="btn-ghost"
            >
              Get in touch
            </a>
          </div>

          {/* small decoration */}
          <img
            src="assets/work_utensils.PNG"
            alt=""
            aria-hidden="true"
            style={aboutS.utensils}
          />
        </div>

      </div>
    </main>
  );
}

Object.assign(window, { About });
