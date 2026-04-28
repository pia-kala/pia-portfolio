// Nav.jsx — fixed top navigation with scroll reactive backdrop + mobile menu

const navS = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    height: '72px', display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', padding: '0 48px',
    transition: 'background 0.3s, border-color 0.3s',
  },
  logo: {
    fontFamily: "'Bebas Neue', sans-serif", fontSize: '30px',
    letterSpacing: '3px', color: '#000', cursor: 'pointer',
    background: 'none', border: 'none', padding: 0, lineHeight: 1,
  },
  links: { display: 'flex', gap: '36px', alignItems: 'center', listStyle: 'none' },
  link: {
    fontFamily: "'Courier Prime', monospace", fontSize: '11px',
    textTransform: 'uppercase', letterSpacing: '2px', color: '#2B2B2B',
    cursor: 'pointer', background: 'none', border: 'none', padding: 0,
    transition: 'color 0.2s',
  },
  hamburger: {
    display: 'flex', flexDirection: 'column', gap: '5px',
    cursor: 'pointer', background: 'none', border: 'none', padding: '6px',
  },
  hline: { width: '22px', height: '2px', background: '#000', display: 'block' },
  overlay: {
    position: 'fixed', inset: 0, background: '#000', zIndex: 200,
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    justifyContent: 'center', gap: '32px',
    animation: 'fadeIn 0.25s ease',
  },
  overlayClose: {
    position: 'absolute', top: '28px', right: '48px',
    fontFamily: "'Courier Prime', monospace", fontSize: '11px',
    textTransform: 'uppercase', letterSpacing: '2px', color: '#555',
    cursor: 'pointer', background: 'none', border: 'none',
  },
  overlayLink: {
    fontFamily: "'Bebas Neue', sans-serif", fontSize: '64px',
    lineHeight: 1, letterSpacing: '2px', color: '#fff',
    cursor: 'pointer', background: 'none', border: 'none', padding: 0,
    transition: 'color 0.2s',
  },
};

function Nav({ navigate, currentPage }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [mobile, setMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    const onResize = () => setMobile(window.innerWidth <= 768);
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize); };
  }, []);

  const items = [
    { label: 'Work', page: 'home' },
    { label: 'Disaster Drawer', page: 'disaster-drawer' },
    { label: 'About', page: 'about' },
    { label: 'Contact', href: 'mailto:mpaula.vm@gmail.com' },
  ];

  const go = (item) => {
    setMenuOpen(false);
    if (item.href) { window.location.href = item.href; }
    else { navigate(item.page); }
  };

  const navBg = scrolled
    ? 'rgba(255,255,255,0.94)'
    : 'transparent';
  const navBorder = scrolled ? '1px solid #E4DFDE' : '1px solid transparent';

  return (
    <>
      <nav style={{ ...navS.nav, background: navBg, borderBottom: navBorder, backdropFilter: scrolled ? 'blur(12px)' : 'none', WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none' }}>
        <button style={navS.logo} onClick={() => navigate('home')}>PÍA</button>

        {!mobile && (
          <ul style={navS.links}>
            {items.map(item => {
              const isActive = currentPage === item.page;
              return (
                <li key={item.label}>
                  <button
                    style={{ ...navS.link, color: isActive ? '#BB2F2E' : '#2B2B2B' }}
                    onClick={() => go(item)}
                    onMouseEnter={e => e.currentTarget.style.color = '#BB2F2E'}
                    onMouseLeave={e => e.currentTarget.style.color = isActive ? '#BB2F2E' : '#2B2B2B'}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        {mobile && (
          <button style={navS.hamburger} onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <span style={navS.hline} />
            <span style={navS.hline} />
            <span style={navS.hline} />
          </button>
        )}
      </nav>

      {menuOpen && (
        <div style={navS.overlay}>
          <button style={navS.overlayClose} onClick={() => setMenuOpen(false)}>CLOSE ×</button>
          {items.map(item => (
            <button
              key={item.label}
              style={navS.overlayLink}
              onClick={() => go(item)}
              onMouseEnter={e => e.currentTarget.style.color = '#BB2F2E'}
              onMouseLeave={e => e.currentTarget.style.color = '#fff'}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

Object.assign(window, { Nav });
