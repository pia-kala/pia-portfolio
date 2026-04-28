// Home.jsx — Hero + Work (3 card styles) + Disaster Drawer strip

const homeS = {
  page: { paddingTop: '72px' },
  // ─── HERO ───
  hero: {
    display: 'grid', gridTemplateColumns: '55fr 45fr',
    minHeight: 'calc(100vh - 72px)', alignItems: 'center',
    maxWidth: '1280px', margin: '0 auto',
    padding: '48px 48px 64px', gap: '24px',
  },
  heroTypeFirst: {
    display: 'block', maxWidth: '1280px', margin: '0 auto',
    padding: '80px 48px 64px', minHeight: 'calc(100vh - 72px)',
  },
  heroLeft: { display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' },
  heroTag: {
    fontFamily: "'Courier Prime', monospace", fontSize: '11px',
    textTransform: 'uppercase', letterSpacing: '2.5px', color: '#555',
  },
  heroHeadline: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(80px, 9.5vw, 140px)',
    lineHeight: '0.93', letterSpacing: '-1px', color: '#000',
    margin: 0,
  },
  heroAlso: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '22px',
    fontStyle: 'italic', color: '#555', lineHeight: 1.3,
    marginTop: '-4px',
  },
  heroSub: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '17px',
    lineHeight: 1.75, color: '#2B2B2B', maxWidth: '460px',
  },
  heroCta: { display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '4px' },
  heroRight: {
    display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
    position: 'relative', overflow: 'visible',
  },
  heroImg: {
    width: '100%', maxWidth: '520px', objectFit: 'contain',
    transform: 'translateY(8px)',
    filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.08))',
  },
  // ─── WORK SECTION ───
  work: {
    maxWidth: '1280px', margin: '0 auto',
    padding: '72px 48px 80px', borderTop: '1px solid #E4DFDE',
  },
  workHeader: { display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '40px' },
  workTitle: {
    fontFamily: "'Courier Prime', monospace", fontSize: '11px',
    textTransform: 'uppercase', letterSpacing: '3px', color: '#555',
  },
  workCount: { fontFamily: "'Courier Prime', monospace", fontSize: '11px', color: '#A3A3A3' },
  // CARD STYLE: ROWS
  rowsList: { display: 'flex', flexDirection: 'column' },
  row: {
    display: 'grid', gridTemplateColumns: '80px 1fr 32px',
    gap: '24px', alignItems: 'start', padding: '36px 0',
    borderBottom: '1px solid #E4DFDE', cursor: 'pointer',
    background: 'none', border: 'none', textAlign: 'left',
    width: '100%', borderTop: 'none', transition: 'background 0.2s',
    position: 'relative',
  },
  rowNum: {
    fontFamily: "'Bebas Neue', sans-serif", fontSize: '56px',
    lineHeight: 1, color: '#E5E5E5', paddingTop: '4px',
    transition: 'color 0.2s', userSelect: 'none',
  },
  rowBody: { display: 'flex', flexDirection: 'column', gap: '8px' },
  rowLabels: { display: 'flex', gap: '8px', flexWrap: 'wrap' },
  rowLabel: {
    fontFamily: "'Courier Prime', monospace", fontSize: '10px',
    textTransform: 'uppercase', letterSpacing: '1.5px',
    border: '1px solid #C1BCBB', padding: '2px 7px',
    color: '#555', whiteSpace: 'nowrap',
  },
  rowLabelRed: {
    fontFamily: "'Courier Prime', monospace", fontSize: '10px',
    textTransform: 'uppercase', letterSpacing: '1.5px',
    border: '1px solid #BB2F2E', padding: '2px 7px',
    color: '#BB2F2E', whiteSpace: 'nowrap',
  },
  rowTitle: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(36px, 3.5vw, 52px)',
    lineHeight: '0.95', color: '#000', letterSpacing: '-0.5px',
  },
  rowTagline: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '15px',
    color: '#555', lineHeight: 1.55, maxWidth: '600px',
    marginTop: '2px',
  },
  rowArrow: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '22px',
    color: '#C1BCBB', transition: 'color 0.2s, transform 0.2s',
    alignSelf: 'center',
  },
  // CARD STYLE: GRID
  gridList: {
    display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px',
  },
  gridCard: {
    display: 'flex', flexDirection: 'column', gap: '12px',
    padding: '36px 32px', border: '1px solid #E4DFDE',
    cursor: 'pointer', background: 'none', textAlign: 'left',
    transition: 'border-color 0.2s, background 0.15s',
  },
  gridLabels: { display: 'flex', gap: '6px', flexWrap: 'wrap' },
  gridTitle: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(32px, 2.8vw, 44px)',
    lineHeight: '0.95', color: '#000', flex: 1,
  },
  gridTagline: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '14px',
    color: '#555', lineHeight: 1.55,
  },
  gridArrow: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '20px',
    color: '#C1BCBB', alignSelf: 'flex-end', transition: 'color 0.2s',
  },
  // CARD STYLE: POSTER
  posterList: { display: 'flex', flexDirection: 'column', gap: 0 },
  posterItem: {
    padding: '48px 0', borderBottom: '1px solid #E4DFDE',
    cursor: 'pointer', background: 'none', border: 'none',
    textAlign: 'left', width: '100%', transition: 'background 0.15s',
  },
  posterMeta: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' },
  posterTitle: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(56px, 7vw, 96px)',
    lineHeight: '0.9', letterSpacing: '-1px', color: '#000',
    transition: 'color 0.2s',
  },
  posterBottom: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
    marginTop: '12px',
  },
  posterTagline: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '16px',
    color: '#555', lineHeight: 1.5, maxWidth: '560px',
  },
  posterArrow: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '28px',
    color: '#E5E5E5', transition: 'color 0.2s',
    flexShrink: 0, marginLeft: '24px',
  },
  // ─── DISASTER STRIP ───
  disasterStrip: {
    background: '#2B2B2B', padding: '80px 48px',
    marginTop: '0',
  },
  disasterWrap: { maxWidth: '1280px', margin: '0 auto' },
  disasterHead: {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'flex-end', marginBottom: '48px', gap: '32px',
    flexWrap: 'wrap',
  },
  disasterTitle: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(56px, 6vw, 88px)',
    lineHeight: '0.9', color: '#fff', margin: 0,
  },
  disasterAccent: { color: '#BB2F2E' },
  disasterSub: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '16px',
    color: '#B8B4B3', maxWidth: '360px', lineHeight: 1.6,
    alignSelf: 'flex-end',
  },
  disasterGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2px',
  },
  disasterItem: {
    background: '#2B2B2B', padding: '32px 28px 28px',
    cursor: 'pointer', transition: 'background 0.2s',
    display: 'flex', flexDirection: 'column', gap: '10px',
    border: 'none', textAlign: 'left', minHeight: '180px',
  },
  disasterLabel: {
    fontFamily: "'Courier Prime', monospace", fontSize: '10px',
    textTransform: 'uppercase', letterSpacing: '2px', color: '#BB2F2E',
  },
  disasterItemTitle: {
    fontFamily: "'Bebas Neue', sans-serif", fontSize: '32px',
    color: '#fff', lineHeight: 1, flex: 1,
    transition: 'color 0.2s',
  },
  disasterArrow: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '18px',
    color: '#555', marginTop: 'auto', alignSelf: 'flex-end',
    transition: 'color 0.2s',
  },
  // ─── FOOTER ───
  footer: {
    maxWidth: '1280px', margin: '0 auto', padding: '40px 48px',
    borderTop: '1px solid #E4DFDE', display: 'flex',
    justifyContent: 'space-between', alignItems: 'center',
    flexWrap: 'wrap', gap: '16px',
  },
  footerName: {
    fontFamily: "'Courier Prime', monospace", fontSize: '11px',
    textTransform: 'uppercase', letterSpacing: '2px', color: '#555',
  },
  footerLinks: { display: 'flex', gap: '24px' },
  footerLink: {
    fontFamily: "'Courier Prime', monospace", fontSize: '11px',
    textTransform: 'uppercase', letterSpacing: '1.5px', color: '#555',
    transition: 'color 0.2s',
  },
};

// label with style
function Tag({ label, red }) {
  return (
    <span style={red ? homeS.rowLabelRed : homeS.rowLabel}>{label}</span>
  );
}

// ─── CARD ROWS ───
function CardRows({ studies, navigate }) {
  const [hovered, setHovered] = React.useState(null);

  return (
    <div style={{ ...homeS.rowsList, borderTop: '1px solid #E4DFDE' }}>
      {studies.map((s, i) => {
        const isHovered = hovered === s.id;
        return (
          <button
            key={s.id}
            style={{
              ...homeS.row,
              background: isHovered ? '#FAF9F8' : 'transparent',
              borderBottom: '1px solid #E4DFDE',
              outline: 'none',
            }}
            onClick={() => navigate('case-study', s.id)}
            onMouseEnter={() => setHovered(s.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Ghost number */}
            <span style={{ ...homeS.rowNum, color: isHovered ? '#C1BCBB' : '#E5E5E5' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <div style={homeS.rowBody}>
              <div style={homeS.rowLabels}>
                {s.labels.map(l => (
                  <Tag key={l} label={l} red={l === '1ST PRIZE'} />
                ))}
                {s.nda && <Tag label="NDA" red={false} />}
              </div>
              <div style={homeS.rowTitle}>{s.title}</div>
              <div style={homeS.rowTagline}>{s.tagline}</div>
            </div>
            <span style={{ ...homeS.rowArrow, color: isHovered ? '#BB2F2E' : '#C1BCBB' }}>↗</span>
          </button>
        );
      })}
    </div>
  );
}

// ─── CARD GRID ───
function CardGrid({ studies, navigate }) {
  const [hovered, setHovered] = React.useState(null);

  return (
    <div style={homeS.gridList}>
      {studies.map(s => {
        const isHovered = hovered === s.id;
        return (
          <button
            key={s.id}
            style={{
              ...homeS.gridCard,
              borderColor: isHovered ? '#000' : '#E4DFDE',
              background: isHovered ? '#FAF9F8' : 'transparent',
              outline: 'none',
            }}
            onClick={() => navigate('case-study', s.id)}
            onMouseEnter={() => setHovered(s.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={homeS.gridLabels}>
              {s.labels.map(l => (
                <Tag key={l} label={l} red={l === '1ST PRIZE'} />
              ))}
            </div>
            <div style={{ ...homeS.gridTitle }}>{s.title}</div>
            <div style={homeS.gridTagline}>{s.tagline}</div>
            <span style={{ ...homeS.gridArrow, color: isHovered ? '#BB2F2E' : '#C1BCBB' }}>↗</span>
          </button>
        );
      })}
    </div>
  );
}

// ─── CARD POSTER ───
function CardPoster({ studies, navigate }) {
  const [hovered, setHovered] = React.useState(null);

  return (
    <div style={{ borderTop: '1px solid #E4DFDE' }}>
      {studies.map(s => {
        const isHovered = hovered === s.id;
        return (
          <button
            key={s.id}
            style={{
              ...homeS.posterItem,
              borderBottom: '1px solid #E4DFDE',
              padding: '40px 0',
              outline: 'none',
              display: 'block',
            }}
            onClick={() => navigate('case-study', s.id)}
            onMouseEnter={() => setHovered(s.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={homeS.posterMeta}>
              {s.labels.map(l => (
                <Tag key={l} label={l} red={l === '1ST PRIZE'} />
              ))}
            </div>
            <div style={{ ...homeS.posterTitle, color: isHovered ? '#BB2F2E' : '#000' }}>
              {s.title}
            </div>
            <div style={homeS.posterBottom}>
              <div style={homeS.posterTagline}>{s.tagline}</div>
              <span style={{ ...homeS.posterArrow, color: isHovered ? '#BB2F2E' : '#E4DFDE' }}>↗</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}

// ─── HOME ───
function Home({ navigate, tweaks }) {
  const { caseStudies, disasterDrawer, meta } = window.CONTENT;
  const cardStyle = tweaks.cardStyle || 'rows';
  const heroLayout = tweaks.heroLayout || 'split';

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  const HeroContent = () => (
    <div style={homeS.heroLeft}>
      <span style={homeS.heroTag}>UX/UI DESIGNER · SWITZERLAND</span>
      <h1 style={homeS.heroHeadline}>
        Designing<br />
        things for<br />
        people
      </h1>
      <p style={homeS.heroAlso}>...and also for myself</p>
      <p style={homeS.heroSub}>
        Product and UX designer with a habit of noticing things that don't work, and an obsession with fixing them. Also draws frogs.
      </p>
      <div style={homeS.heroCta}>
        <button className="btn-primary" onClick={scrollToWork}>See my work</button>
        <a className="btn-ghost" href={`mailto:${meta.email}`}>Get in touch</a>
      </div>
    </div>
  );

  return (
    <main style={homeS.page} className="page">

      {/* ─── HERO ─── */}
      {heroLayout === 'split' ? (
        <section style={homeS.hero}>
          <HeroContent />
          <div style={homeS.heroRight}>
            <img src="assets/hero.PNG" alt="Pía's character at her desk, buried in post-its" style={homeS.heroImg} />
          </div>
        </section>
      ) : (
        <section style={homeS.heroTypeFirst}>
          <div style={{ maxWidth: '760px' }}>
            <HeroContent />
          </div>
        </section>
      )}

      {/* ─── WORK ─── */}
      <section style={homeS.work} id="work">
        <div style={homeS.workHeader}>
          <span style={homeS.workTitle}>Selected work</span>
          <span style={homeS.workCount}>{caseStudies.length} case studies</span>
        </div>

        {cardStyle === 'rows' && <CardRows studies={caseStudies} navigate={navigate} />}
        {cardStyle === 'grid' && <CardGrid studies={caseStudies} navigate={navigate} />}
        {cardStyle === 'poster' && <CardPoster studies={caseStudies} navigate={navigate} />}
      </section>

      {/* ─── DISASTER STRIP ─── */}
      <section style={homeS.disasterStrip}>
        <div style={homeS.disasterWrap}>
          <div style={homeS.disasterHead}>
            <h2 style={homeS.disasterTitle}>
              Disaster<br /><span style={homeS.disasterAccent}>Drawer</span>
            </h2>
            <p style={homeS.disasterSub}>A sneak peek into my chaotic mind. Just because.</p>
          </div>
          <div style={homeS.disasterGrid}>
            {disasterDrawer.map(item => (
              <DisasterStripItem key={item.id} item={item} navigate={navigate} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={homeS.footer}>
        <span style={homeS.footerName}>Pía Vargas · UX/UI Designer · {new Date().getFullYear()}</span>
        <div style={homeS.footerLinks}>
          <a href={meta.linkedin} target="_blank" rel="noreferrer"
            style={homeS.footerLink}
            onMouseEnter={e => e.currentTarget.style.color = '#BB2F2E'}
            onMouseLeave={e => e.currentTarget.style.color = '#555'}
          >LinkedIn</a>
          <a href={meta.instagram_illustration} target="_blank" rel="noreferrer"
            style={homeS.footerLink}
            onMouseEnter={e => e.currentTarget.style.color = '#BB2F2E'}
            onMouseLeave={e => e.currentTarget.style.color = '#555'}
          >Illustration</a>
          <a href={meta.instagram_photography} target="_blank" rel="noreferrer"
            style={homeS.footerLink}
            onMouseEnter={e => e.currentTarget.style.color = '#BB2F2E'}
            onMouseLeave={e => e.currentTarget.style.color = '#555'}
          >Photography</a>
        </div>
      </footer>

    </main>
  );
}

function DisasterStripItem({ item, navigate }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <button
      style={{ ...homeS.disasterItem, background: hovered ? '#3D3D3D' : '#2B2B2B', outline: 'none' }}
      onClick={() => navigate('disaster-drawer')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={homeS.disasterLabel}>{item.label}</span>
      <span style={{ ...homeS.disasterItemTitle, color: hovered ? '#E5AF9F' : '#fff' }}>{item.title}</span>
      <span style={{ ...homeS.disasterArrow, color: hovered ? '#E5AF9F' : '#555' }}>↗</span>
    </button>
  );
}

Object.assign(window, { Home });
