import { Link } from 'react-router-dom'
import content from '../data/content.json'
import './DisasterDrawer.css'

function DisasterDrawer() {
    const { disasterDrawer } = content

    return (
<main className="dd">
      <div className="dd-header">
        <h1 className="dd-title">
          Disaster <span>Drawer</span>
        </h1>
        <p className="dd-sub">A sneak peek into my chaotic mind. Just because.</p>
      </div>

      <div className="dd-sections">
        {disasterDrawer.map((item) => (
          <div className="dd-item" key={item.id}>
            <div className="dd-item-header">
              <span className="dd-item-label">{item.label}</span>
              <h2 className="dd-item-title">{item.title}</h2>
              <p className="dd-item-desc">{item.description}</p>
{item.link && (
  <a
    href={item.link}
    target="_blank"
    rel="noreferrer"
    className="btn-primary"
  >
    View on Instagram
  </a>
)}
            </div>
            <div className="dd-item-gallery">
              <div className="dd-gallery-placeholder">
                <span>content coming soon</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="dd-footer">
        <Link to="/" className="btn-ghost">Back home</Link>
      </div>
    </main >
  )
}

export default DisasterDrawer