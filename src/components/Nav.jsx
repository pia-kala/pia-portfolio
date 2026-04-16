import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">PÍA</Link>
      <ul className="nav-links">
        <li><Link to="/">Work</Link></li>
        <li><Link to="/disaster-drawer">Disaster Drawer</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="mailto:mpaula.vm@gmail.com">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Nav