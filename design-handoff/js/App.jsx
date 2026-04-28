// App.jsx — hash-based routing + Tweaks panel

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "cardStyle": "rows",
  "pageBg": "white",
  "heroLayout": "split"
}/*EDITMODE-END*/;

const tweakPanelS = {
  panel: {
    position: 'fixed', bottom: '24px', right: '24px', zIndex: 999,
    background: '#fff', border: '1px solid #E4DFDE',
    padding: '20px 24px', width: '240px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
    animation: 'fadeIn 0.2s ease',
  },
  panelTitle: {
    fontFamily: "'Courier Prime', monospace", fontSize: '10px',
    textTransform: 'uppercase', letterSpacing: '2.5px', color: '#A3A3A3',
    marginBottom: '16px', display: 'block',
  },
  group: { marginBottom: '16px' },
  groupLabel: {
    fontFamily: "'Courier Prime', monospace", fontSize: '9px',
    textTransform: 'uppercase', letterSpacing: '2px', color: '#A3A3A3',
    display: 'block', marginBottom: '8px',
  },
  opts: { display: 'flex', gap: '6px', flexWrap: 'wrap' },
  opt: {
    fontFamily: "'Courier Prime', monospace", fontSize: '10px',
    textTransform: 'uppercase', letterSpacing: '1px',
    padding: '5px 10px', cursor: 'pointer',
    border: '1px solid #E4DFDE', background: 'transparent', color: '#555',
    transition: 'all 0.15s',
  },
  optActive: {
    border: '1px solid #BB2F2E', background: '#BB2F2E', color: '#fff',
  },
};

function TweakGroup({ label, options, value, onChange }) {
  return (
    <div style={tweakPanelS.group}>
      <span style={tweakPanelS.groupLabel}>{label}</span>
      <div style={tweakPanelS.opts}>
        {options.map(opt => (
          <button
            key={opt.value}
            style={value === opt.value
              ? { ...tweakPanelS.opt, ...tweakPanelS.optActive }
              : tweakPanelS.opt
            }
            onClick={() => onChange(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function TweaksPanel({ tweaks, setTweak }) {
  return (
    <div style={tweakPanelS.panel}>
      <span style={tweakPanelS.panelTitle}>Tweaks</span>

      <TweakGroup
        label="Card style"
        options={[
          { value: 'rows', label: 'Rows' },
          { value: 'grid', label: 'Grid' },
          { value: 'poster', label: 'Poster' },
        ]}
        value={tweaks.cardStyle}
        onChange={v => setTweak('cardStyle', v)}
      />

      <TweakGroup
        label="Background"
        options={[
          { value: 'white', label: 'White' },
          { value: 'warm', label: 'Warm' },
        ]}
        value={tweaks.pageBg}
        onChange={v => setTweak('pageBg', v)}
      />

      <TweakGroup
        label="Hero layout"
        options={[
          { value: 'split', label: 'Split' },
          { value: 'type', label: 'Type-first' },
        ]}
        value={tweaks.heroLayout}
        onChange={v => setTweak('heroLayout', v)}
      />
    </div>
  );
}

function parseRoute() {
  const hash = window.location.hash.replace('#', '');
  if (hash.startsWith('/case-study/')) {
    return { page: 'case-study', id: hash.replace('/case-study/', '') };
  }
  if (hash === '/disaster-drawer') return { page: 'disaster-drawer', id: null };
  if (hash === '/about') return { page: 'about', id: null };
  return { page: 'home', id: null };
}

function App() {
  const [route, setRoute] = React.useState(parseRoute);
  const [tweaks, setTweaksState] = React.useState(TWEAK_DEFAULTS);
  const [tweaksVisible, setTweaksVisible] = React.useState(false);

  // Tweak setter — updates state and posts to parent for persistence
  const setTweak = React.useCallback((key, val) => {
    setTweaksState(prev => {
      const next = { ...prev, [key]: val };
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: next }, '*');
      return next;
    });
  }, []);

  // Apply background based on tweak
  React.useEffect(() => {
    document.body.style.background = tweaks.pageBg === 'warm' ? '#E5E5E5' : '#FFFFFF';
  }, [tweaks.pageBg]);

  // Hash routing + tweaks message listener
  React.useEffect(() => {
    // Register listener BEFORE announcing availability
    const handleMessage = (e) => {
      if (e.data?.type === '__activate_edit_mode') setTweaksVisible(true);
      if (e.data?.type === '__deactivate_edit_mode') setTweaksVisible(false);
    };
    window.addEventListener('message', handleMessage);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');

    const handleHash = () => {
      setRoute(parseRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHash);

    return () => {
      window.removeEventListener('message', handleMessage);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  const navigate = React.useCallback((page, id = null) => {
    if (page === 'home') window.location.hash = '';
    else if (page === 'case-study') window.location.hash = `/case-study/${id}`;
    else window.location.hash = `/${page}`;
    setRoute({ page, id });
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (route.page) {
      case 'case-study':
        return <CaseStudy navigate={navigate} studyId={route.id} />;
      case 'about':
        return <About navigate={navigate} />;
      case 'disaster-drawer':
        return <DisasterDrawer navigate={navigate} />;
      default:
        return <Home navigate={navigate} tweaks={tweaks} />;
    }
  };

  return (
    <>
      <Nav navigate={navigate} currentPage={route.page} />
      {renderPage()}
      {tweaksVisible && <TweaksPanel tweaks={tweaks} setTweak={setTweak} />}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
