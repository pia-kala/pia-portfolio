import { useState } from 'react'
import { Link } from 'react-router-dom'
import content from '../data/content.json'
import Lightbox from '../components/Lightbox'

import './DisasterDrawer.css'

// 3 arcanos shown in the drama section right panel
const DRAMA_CHARS = [
  { src: '/disaster/drama/arcano_el_loco.PNG',     label: 'EL LOCO' },
  { src: '/disaster/drama/arcano_la_estrella.PNG', label: 'LA ESTRELLA' },
  { src: '/disaster/drama/arcano_los_amantes.PNG', label: 'LOS AMANTES' },
]
const DRAMA_ROTATIONS = [-4, 0, 3]

// Film roll photos — duplicated for seamless infinite scroll
const ROLLS_BASE = [
  '/disaster/rolls/abu-magritte.png',
  '/disaster/rolls/beso-lluvia-mar.jpg',
  '/disaster/rolls/bici-ams.jpg',
  '/disaster/rolls/boy-playa.jpg',
  '/disaster/rolls/c-vende.png',
  '/disaster/rolls/churros.jpg',
  '/disaster/rolls/colombia-fruta.jpg',
  '/disaster/rolls/hombre-traje-tlfn.png',
  '/disaster/rolls/mano.png',
  '/disaster/rolls/ocapi.jpg',
  '/disaster/rolls/phhoto%20boom%20colombia.jpg',
  '/disaster/rolls/piramyda.png',
  '/disaster/rolls/plato-exp1.png',
  '/disaster/rolls/plato-exp2.png',
  '/disaster/rolls/ruinas-svalbard.png',
  '/disaster/rolls/tinglao.jpg',
  '/disaster/rolls/turismo-car.jpg',
]
const ROLLS_PHOTOS = [...ROLLS_BASE, ...ROLLS_BASE]
const ROLLS_LIGHTBOX = ROLLS_BASE.map(src => ({ src }))

const DUMP_ITEMS = [
  { src: '/disaster/dump/dump-face_expressions.JPG',       label: 'EXPRESSIONS' },
  { src: '/disaster/dump/dump-character_sheet.JPG',        label: 'CHARACTER SHEET' },
  { src: '/disaster/dump/dump-turnaround_dressed.PNG',     label: 'CHARACTER' },
  { src: '/disaster/dump/dump-turnaround_naked.PNG',       label: 'CHARACTER' },
  { src: '/disaster/dump/dump-brutalist_collage.JPG',      label: 'COLLAGE' },
  { src: '/disaster/dump/dump-cat_god.JPG',                label: 'CAT GOD' },
  { src: '/disaster/dump/IMG_20211008_0001.jpg',           label: 'UNTITLED' },
  { src: '/disaster/dump/IMG_20211008_0002.jpg',           label: 'UNTITLED' },
  { src: '/disaster/dump/IMG_20211008_0005.jpg',           label: 'UNTITLED' },
  { src: '/disaster/dump/IMG_20211008_0006.jpg',           label: 'UNTITLED' },
  { src: '/disaster/dump/dump-IMG_0729.JPG',               label: 'UNTITLED' },
  { src: '/disaster/dump/dump-IMG_0730.JPG',               label: 'UNTITLED' },
  { src: '/disaster/dump/dump-IMG_0855.JPG',               label: 'UNTITLED' },
  { src: '/disaster/dump/dump-IMG_0961.JPG',               label: 'UNTITLED' },
  { src: '/disaster/dump/dump-IMG_1505.JPG',               label: 'UNTITLED' },
  { src: '/disaster/dump/dump-IMG_1506.JPG',               label: 'UNTITLED' },
  { src: '/disaster/dump/dump-IMG_1581.PNG',               label: 'UNTITLED' },
  { src: '/disaster/dump/dump-IMG_1584.PNG',               label: 'UNTITLED' },
  { src: '/disaster/dump/dump-IMG_1682.JPG',               label: 'UNTITLED' },
  { src: '/disaster/dump/dump-IMG_1838.JPG',               label: 'UNTITLED' },
  { src: '/disaster/dump/dump-IMG_1845.JPG',               label: 'UNTITLED' },
  { src: '/disaster/dump/dump-animation_loop.MP4',         label: 'ANIMATION',  type: 'video' },
  { src: '/disaster/dump/dump-character_turnaround.MOV',  label: 'TURNAROUND', type: 'video' },
]

function DumpItem({ item, index, onOpen }) {
  const [hovered, setHovered] = useState(false)
  const delay = (index * 60) % 900

  if (item.type === 'video') {
    return (
      <div
        className="dd-dump-item dd-dump-item--video"
        style={{ animationDelay: `${delay}ms` }}
        onClick={() => onOpen(index)}
      >
        <div className="dd-dump-video-thumb">
          <span className="dd-dump-play-btn">▶</span>
        </div>
        <div className="dd-dump-caption" style={{ opacity: 1 }}>
          {item.label}
        </div>
      </div>
    )
  }

  return (
    <div
      className="dd-dump-item"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(index)}
    >
      <img
        src={item.src}
        alt={item.label}
        className="dd-dump-img"
        style={{ transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
        loading="lazy"
      />
      <div className="dd-dump-caption" style={{ opacity: hovered ? 1 : 0 }}>
        {item.label}
      </div>
    </div>
  )
}

function PiasDramaSection({ item }) {
  const [igHover, setIgHover] = useState(false)
  const [lightbox, setLightbox] = useState({ open: false, index: 0 })

  return (
    <>
      <section className="dd-drama-sec">
        <div className="dd-drama-inner">
          <div className="dd-drama-left">
            <span className="dd-drama-label">{item.label}</span>
            <h2 className="dd-drama-title">{item.title}</h2>
            <p className="dd-drama-desc">{item.description}</p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="dd-ig-link dd-ig-link--pink"
                style={{
                  background: igHover ? '#E5AF9F' : 'transparent',
                  color: igHover ? '#000' : '#E5AF9F',
                }}
                onMouseEnter={() => setIgHover(true)}
                onMouseLeave={() => setIgHover(false)}
              >
                View on Instagram ↗
              </a>
            )}
          </div>
          <div className="dd-drama-right">
            <div className="dd-drama-char-grid">
              {DRAMA_CHARS.map((char, i) => (
                <img
                  key={i}
                  src={char.src}
                  alt={char.label}
                  className="dd-drama-char"
                  style={{ transform: `rotate(${DRAMA_ROTATIONS[i]}deg)`, cursor: 'pointer' }}
                  onClick={() => setLightbox({ open: true, index: i })}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = `rotate(${DRAMA_ROTATIONS[i]}deg) scale(1.06) translateY(-8px)`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = `rotate(${DRAMA_ROTATIONS[i]}deg)`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {lightbox.open && (
        <Lightbox
          items={DRAMA_CHARS}
          index={lightbox.index}
          onClose={() => setLightbox({ open: false, index: 0 })}
          onChange={i => setLightbox(lb => ({ ...lb, index: i }))}
        />
      )}
    </>
  )
}

function RandomRollsSection({ item }) {
  const [igHover, setIgHover] = useState(false)
  const [lightbox, setLightbox] = useState({ open: false, index: 0 })

  return (
    <>
      <section className="dd-rolls-sec">
        <div className="dd-rolls-inner">
          <div className="dd-rolls-left">
            <span className="dd-rolls-label">{item.label}</span>
            <h2 className="dd-rolls-title">{item.title}</h2>
            <p className="dd-rolls-desc">{item.description}</p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="dd-ig-link dd-ig-link--black"
                style={{
                  background: igHover ? '#000' : 'transparent',
                  color: igHover ? '#fff' : '#000',
                }}
                onMouseEnter={() => setIgHover(true)}
                onMouseLeave={() => setIgHover(false)}
              >
                View on Instagram ↗
              </a>
            )}
          </div>
          <div className="dd-rolls-right">
            <div className="dd-rolls-strip">
              {ROLLS_PHOTOS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="dd-rolls-photo"
                  loading="lazy"
                  onClick={() => {
                    const baseIdx = ROLLS_BASE.indexOf(src)
                    if (baseIdx >= 0) setLightbox({ open: true, index: baseIdx })
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {lightbox.open && (
        <Lightbox
          items={ROLLS_LIGHTBOX}
          index={lightbox.index}
          onClose={() => setLightbox({ open: false, index: 0 })}
          onChange={i => setLightbox(lb => ({ ...lb, index: i }))}
        />
      )}
    </>
  )
}

function TheDumpSection({ item }) {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 })

  return (
    <>
      <section className="dd-dump-sec">
        <div className="dd-dump-header">
          <span className="dd-dump-label">{item.label}</span>
          <h2 className="dd-dump-title">{item.title}</h2>
          <p className="dd-dump-desc">{item.description}</p>
        </div>
        <div className="dd-dump-grid">
          {DUMP_ITEMS.map((dumpItem, i) => (
            <DumpItem
              key={i}
              item={dumpItem}
              index={i}
              onOpen={idx => setLightbox({ open: true, index: idx })}
            />
          ))}
        </div>
      </section>
      {lightbox.open && (
        <Lightbox
          items={DUMP_ITEMS}
          index={lightbox.index}
          onClose={() => setLightbox({ open: false, index: 0 })}
          onChange={i => setLightbox(lb => ({ ...lb, index: i }))}
        />
      )}
    </>
  )
}

function DisasterDrawer() {
  const { disasterDrawer } = content
  const [drama, rolls, dump] = disasterDrawer

  return (
    <main className="dd page">

      {/* PAGE HEADER */}
      <div className="dd-header">
        <div>
          <span className="dd-page-label">The Drawer</span>
          <h1 className="dd-page-title">
            Disaster <span>Drawer</span>
          </h1>
        </div>
        <p className="dd-header-sub">
          Not polished. Not for clients.<br /> Just things that make me, me.
        </p>
      </div>

      <PiasDramaSection item={drama} />
      <RandomRollsSection item={rolls} />
      <TheDumpSection item={dump} />

      <div className="dd-footer">
        <Link to="/" className="btn-ghost">← Back home</Link>
      </div>

    </main>
  )
}

export default DisasterDrawer
