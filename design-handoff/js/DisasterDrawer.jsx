// DisasterDrawer.jsx — three sections: Pias Drama, Random Rolls, The Dump (masonry + animations)

const ddS = {
  page: { paddingTop: '72px', minHeight: '100vh' },

  // ─── PAGE HEADER ───
  header: {
    maxWidth: '1280px', margin: '0 auto', padding: '64px 48px 56px',
    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
    flexWrap: 'wrap', gap: '24px', borderBottom: '1px solid #E4DFDE',
  },
  headerLeft: {},
  pageLabel: {
    fontFamily: "'Courier Prime', monospace", fontSize: '11px',
    textTransform: 'uppercase', letterSpacing: '3px', color: '#A3A3A3',
    marginBottom: '16px', display: 'block',
  },
  pageTitle: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(72px, 8vw, 120px)',
    lineHeight: '0.9', letterSpacing: '-1px', color: '#000', margin: 0,
  },
  titleAccent: { color: '#BB2F2E' },
  headerSub: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '17px',
    color: '#555', maxWidth: '360px', lineHeight: 1.65, alignSelf: 'flex-end',
  },

  // ─── SECTION: PIAS DRAMA ───
  dramaSec: {
    background: '#2B2B2B',
    padding: '0',
    overflow: 'hidden',
  },
  dramaInner: {
    maxWidth: '1280px', margin: '0 auto',
    display: 'grid', gridTemplateColumns: '1fr 1fr',
    minHeight: '420px',
  },
  dramaLeft: {
    padding: '56px 48px', display: 'flex', flexDirection: 'column',
    gap: '20px', justifyContent: 'center',
  },
  dramaSectionLabel: {
    fontFamily: "'Courier Prime', monospace", fontSize: '10px',
    textTransform: 'uppercase', letterSpacing: '2px', color: '#BB2F2E',
  },
  dramaTitle: {
    fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(40px, 4vw, 64px)',
    lineHeight: '0.95', color: '#fff', margin: 0,
  },
  dramaDesc: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '16px',
    color: '#B8B4B3', lineHeight: 1.7, maxWidth: '400px',
  },
  dramaRight: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    gap: '-16px', padding: '40px', overflow: 'hidden', position: 'relative',
    background: '#1E1E1E',
  },
  dramaCharGrid: {
    display: 'flex', gap: '8px', alignItems: 'flex-end',
    height: '100%',
  },
  dramaChar: {
    height: '260px', objectFit: 'contain',
    filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.4))',
    transition: 'transform 0.3s ease',
    transformOrigin: 'bottom center',
    flexShrink: 0,
  },
  igLink: {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    fontFamily: "'Courier Prime', monospace", fontSize: '11px',
    textTransform: 'uppercase', letterSpacing: '2px',
    color: '#E5AF9F', border: '1px solid #E5AF9F',
    padding: '10px 18px', cursor: 'pointer',
    transition: 'all 0.2s', textDecoration: 'none',
    background: 'transparent', width: 'fit-content',
  },

  // ─── SECTION: RANDOM ROLLS ───
  rollsSec: {
    background: '#FFFFFF', borderTop: '1px solid #E4DFDE',
  },
  rollsInner: {
    maxWidth: '1280px', margin: '0 auto',
    display: 'grid', gridTemplateColumns: '1fr 1fr',
    minHeight: '380px', direction: 'rtl',
  },
  rollsLeft: {
    direction: 'ltr', padding: '56px 48px',
    display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center',
  },
  rollsRight: {
    direction: 'ltr', overflow: 'hidden',
    background: '#E5E5E5', position: 'relative',
  },
  rollsStrip: {
    display: 'flex', height: '100%', gap: '2px',
    animation: 'stripScroll 18s linear infinite',
    willChange: 'transform',
  },
  rollsPhoto: {
    height: '100%', minWidth: '200px', objectFit: 'cover',
    flexShrink: 0,
  },
  rollsSectionLabel: {
    fontFamily: "'Courier Prime', monospace", fontSize: '10px',
    textTransform: 'uppercase', letterSpacing: '2px', color: '#BB2F2E',
  },
  rollsTitle: {
    fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(40px, 4vw, 64px)',
    lineHeight: '0.95', color: '#000', margin: 0,
  },
  rollsDesc: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '16px',
    color: '#555', lineHeight: 1.7, maxWidth: '400px',
  },
  rollsIgLink: {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    fontFamily: "'Courier Prime', monospace", fontSize: '11px',
    textTransform: 'uppercase', letterSpacing: '2px',
    color: '#000', border: '1px solid #000',
    padding: '10px 18px', cursor: 'pointer',
    transition: 'all 0.2s', textDecoration: 'none',
    background: 'transparent', width: 'fit-content',
  },

  // ─── SECTION: THE DUMP ───
  dumpSec: {
    background: '#FAFAF9', borderTop: '1px solid #E4DFDE',
  },
  dumpHeader: {
    maxWidth: '1280px', margin: '0 auto', padding: '56px 48px 40px',
  },
  dumpSectionLabel: {
    fontFamily: "'Courier Prime', monospace", fontSize: '10px',
    textTransform: 'uppercase', letterSpacing: '2px', color: '#A3A3A3',
    marginBottom: '12px', display: 'block',
  },
  dumpTitle: {
    fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(40px, 4vw, 56px)',
    lineHeight: '0.95', color: '#000', margin: '0 0 12px',
  },
  dumpDesc: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '16px',
    color: '#555', lineHeight: 1.65, maxWidth: '560px',
  },
  dumpGrid: {
    maxWidth: '1280px', margin: '0 auto', padding: '0 48px 80px',
    columns: '4', columnGap: '8px',
  },
  dumpItem: {
    breakInside: 'avoid', marginBottom: '8px',
    overflow: 'hidden', cursor: 'pointer',
    position: 'relative', display: 'block',
  },
  dumpImg: {
    width: '100%', display: 'block',
    transition: 'transform 0.4s ease',
  },
  dumpCaption: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    background: 'rgba(0,0,0,0.65)', padding: '8px 10px',
    fontFamily: "'Courier Prime', monospace", fontSize: '9px',
    textTransform: 'uppercase', letterSpacing: '1.5px', color: '#fff',
    opacity: 0, transition: 'opacity 0.25s ease',
  },

  // ─── PAGE FOOTER ───
  footer: {
    maxWidth: '1280px', margin: '0 auto', padding: '32px 48px 64px',
    borderTop: '1px solid #E4DFDE',
  },
};

const DUMP_ITEMS = [
  { src: 'assets/dump-hello.gif', label: 'HELLO' },
  { src: 'assets/dump-arcano_el_loco.PNG', label: 'EL LOCO' },
  { src: 'assets/dump-arcano_la_estrella.PNG', label: 'LA ESTRELLA' },
  { src: 'assets/dump-brutalist_collage.JPG', label: 'COLLAGE' },
  { src: 'assets/dump-arcano_los_amantes.PNG', label: 'LOS AMANTES' },
  { src: 'assets/dump-character_sheet.JPG', label: 'CHARACTER SHEET' },
  { src: 'assets/dump-arcano_el_sol.PNG', label: 'EL SOL' },
  { src: 'assets/dump-IMG_0729.JPG', label: 'UNTITLED' },
  { src: 'assets/dump-face_expressions.JPG', label: 'EXPRESSIONS' },
  { src: 'assets/dump-arcano_la_emperatriz.PNG', label: 'LA EMPERATRIZ' },
  { src: 'assets/dump-cat_god.JPG', label: 'CAT GOD' },
  { src: 'assets/dump-turnaround_dressed.PNG', label: 'CHARACTER' },
  { src: 'assets/dump-arcano_la_sacerdotisa.PNG', label: 'LA SACERDOTISA' },
  { src: 'assets/dump-IMG_1682.JPG', label: 'UNTITLED' },
  { src: 'assets/dump-turnaround_naked.PNG', label: 'CHARACTER' },
  { src: 'assets/dump-IMG_0730.JPG', label: 'UNTITLED' },
  { src: 'assets/dump-IMG_1845.JPG', label: 'UNTITLED' },
  { src: 'assets/dump-IMG_1503.JPG', label: 'UNTITLED' },
  { src: 'assets/dump-IMG_1581.PNG', label: 'UNTITLED' },
  { src: 'assets/dump-IMG_1838.JPG', label: 'UNTITLED' },
];

const ROLLS_PHOTOS = [
  'assets/dump-IMG_0729.JPG',
  'assets/dump-IMG_1682.JPG',
  'assets/dump-IMG_0730.JPG',
  'assets/dump-IMG_1845.JPG',
  'assets/dump-IMG_1838.JPG',
  'assets/dump-IMG_1503.JPG',
  // duplicate for seamless loop
  'assets/dump-IMG_0729.JPG',
  'assets/dump-IMG_1682.JPG',
  'assets/dump-IMG_0730.JPG',
];

function DumpItem({ item, index }) {
  const [hovered, setHovered] = React.useState(false);
  const delay = (index * 60) % 900; // stagger up to 900ms

  return (
    <div
      style={{
        ...ddS.dumpItem,
        animation: `dumpIn 0.5s ease both`,
        animationDelay: `${delay}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={item.src}
        alt={item.label}
        style={{
          ...ddS.dumpImg,
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
        }}
        loading="lazy"
      />
      <div style={{ ...ddS.dumpCaption, opacity: hovered ? 1 : 0 }}>
        {item.label}
      </div>
    </div>
  );
}

function PiasDramaSection({ item }) {
  const [igHover, setIgHover] = React.useState(false);

  return (
    <section style={ddS.dramaSec}>
      <div style={ddS.dramaInner}>
        <div style={ddS.dramaLeft}>
          <span style={ddS.dramaSectionLabel}>{item.label}</span>
          <h2 style={ddS.dramaTitle}>{item.title}</h2>
          <p style={ddS.dramaDesc}>{item.description}</p>
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            style={{
              ...ddS.igLink,
              background: igHover ? '#E5AF9F' : 'transparent',
              color: igHover ? '#000' : '#E5AF9F',
              borderColor: '#E5AF9F',
            }}
            onMouseEnter={() => setIgHover(true)}
            onMouseLeave={() => setIgHover(false)}
          >
            View on Instagram ↗
          </a>
        </div>
        <div style={ddS.dramaRight}>
          <div style={ddS.dramaCharGrid}>
            {['assets/dump-face_expressions.JPG', 'assets/dump-character_sheet.JPG', 'assets/dump-turnaround_dressed.PNG'].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Character illustration"
                style={{
                  ...ddS.dramaChar,
                  transform: `rotate(${[-4, 0, 3][i]}deg)`,
                }}
                onMouseEnter={e => e.currentTarget.style.transform = `rotate(${[-4, 0, 3][i]}deg) scale(1.06) translateY(-8px)`}
                onMouseLeave={e => e.currentTarget.style.transform = `rotate(${[-4, 0, 3][i]}deg)`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RandomRollsSection({ item }) {
  const [igHover, setIgHover] = React.useState(false);

  return (
    <section style={ddS.rollsSec}>
      <div style={ddS.rollsInner}>
        <div style={ddS.rollsLeft}>
          <span style={ddS.rollsSectionLabel}>{item.label}</span>
          <h2 style={ddS.rollsTitle}>{item.title}</h2>
          <p style={ddS.rollsDesc}>{item.description}</p>
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            style={{
              ...ddS.rollsIgLink,
              background: igHover ? '#000' : 'transparent',
              color: igHover ? '#fff' : '#000',
            }}
            onMouseEnter={() => setIgHover(true)}
            onMouseLeave={() => setIgHover(false)}
          >
            View on Instagram ↗
          </a>
        </div>
        <div style={ddS.rollsRight}>
          <div style={ddS.rollsStrip}>
            {ROLLS_PHOTOS.map((src, i) => (
              <img key={i} src={src} alt="" style={ddS.rollsPhoto} loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TheDumpSection({ item }) {
  return (
    <section style={ddS.dumpSec}>
      <div style={ddS.dumpHeader}>
        <span style={ddS.dumpSectionLabel}>{item.label}</span>
        <h2 style={ddS.dumpTitle}>{item.title}</h2>
        <p style={ddS.dumpDesc}>{item.description}</p>
      </div>
      <div style={ddS.dumpGrid}>
        {DUMP_ITEMS.map((item, i) => (
          <DumpItem key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

function DisasterDrawer({ navigate }) {
  const { disasterDrawer, meta } = window.CONTENT;
  const [drama, rolls, dump] = disasterDrawer;

  return (
    <main style={ddS.page} className="page">

      {/* ─── PAGE HEADER ─── */}
      <div style={ddS.header}>
        <div style={ddS.headerLeft}>
          <span style={ddS.pageLabel}>The Drawer</span>
          <h1 style={ddS.pageTitle}>
            Disaster<br /><span style={ddS.titleAccent}>Drawer</span>
          </h1>
        </div>
        <p style={ddS.headerSub}>
          Not polished. Not for clients. Just things that make me, me.
        </p>
      </div>

      {/* ─── PIAS DRAMA ─── */}
      <PiasDramaSection item={drama} />

      {/* ─── RANDOM ROLLS ─── */}
      <RandomRollsSection item={rolls} />

      {/* ─── THE DUMP ─── */}
      <TheDumpSection item={dump} />

      {/* ─── FOOTER ─── */}
      <div style={ddS.footer}>
        <button className="btn-ghost" onClick={() => navigate('home')}>← Back home</button>
      </div>

    </main>
  );
}

Object.assign(window, { DisasterDrawer });
