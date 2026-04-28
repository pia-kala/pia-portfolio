import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Nav.css'

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    const onResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { label: 'Work', to: '/' },
    { label: 'Disaster Drawer', to: '/disaster-drawer' },
    { label: 'About', to: '/about' },
    { label: 'Contact', href: 'mailto:mpaula.vm@gmail.com' },
  ]

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/'
    return location.pathname.startsWith(to)
  }

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <Link to="/" className="nav-logo">PÍA</Link>

        {!isMobile && (
          <ul className="nav-links">
            {links.map(link => link.href ? (
              <li key={link.label}>
                <a href={link.href} className="nav-link">{link.label}</a>
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`nav-link${isActive(link.to) ? ' nav-link--active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {isMobile && (
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="nav-hamburger-line" />
            <span className="nav-hamburger-line" />
            <span className="nav-hamburger-line" />
          </button>
        )}
      </nav>

      {menuOpen && (
        <div className="nav-overlay">
          <button className="nav-overlay-close" onClick={() => setMenuOpen(false)}>
            CLOSE ×
          </button>
          {links.map(link => link.href ? (
            <a
              key={link.label}
              href={link.href}
              className="nav-overlay-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.label}
              to={link.to}
              className="nav-overlay-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default Nav
