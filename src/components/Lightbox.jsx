import { useEffect, useCallback } from 'react'
import './Lightbox.css'

export default function Lightbox({ items, index, onClose, onChange }) {
  const item = items[index]
  const hasMany = items.length > 1

  const prev = useCallback(
    () => onChange((index - 1 + items.length) % items.length),
    [index, items.length, onChange]
  )
  const next = useCallback(
    () => onChange((index + 1) % items.length),
    [index, items.length, onChange]
  )

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  const label = item.label || item.caption || ''

  return (
    <div className="lb-backdrop" onClick={onClose}>
      {hasMany && (
        <button
          className="lb-arrow lb-arrow--left"
          onClick={e => { e.stopPropagation(); prev() }}
          aria-label="Previous"
        >
          ‹
        </button>
      )}

      <div className="lb-frame" onClick={e => e.stopPropagation()}>
        <button className="lb-close" onClick={onClose} aria-label="Close">✕</button>

        {item.type === 'video' ? (
          <video
            key={item.src}
            src={item.src}
            className="lb-media"
            autoPlay
            controls
            playsInline
          />
        ) : (
          <img src={item.src} alt={label} className="lb-media" />
        )}

        {label && <p className="lb-caption">{label}</p>}
      </div>

      {hasMany && (
        <button
          className="lb-arrow lb-arrow--right"
          onClick={e => { e.stopPropagation(); next() }}
          aria-label="Next"
        >
          ›
        </button>
      )}
    </div>
  )
}
