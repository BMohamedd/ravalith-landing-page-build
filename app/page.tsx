'use client'

import { useEffect, useState } from 'react'

const flowSteps = [
  ['01', 'Get found', 'Local visibility that puts your business in the right searches.'],
  ['02', 'Convert', 'A clear, fast experience that makes calling feel obvious.'],
  ['03', 'Capture', 'Every form, call, and missed opportunity accounted for.'],
  ['04', 'Follow up', 'Fast, consistent responses while intent is still high.'],
  ['05', 'Book', 'A repeatable path from first search to booked job.'],
]

const services = [
  ['01', 'Search visibility', 'Show up when the right customer is looking.'],
  ['02', 'Conversion design', 'Turn attention into calls, forms, and real intent.'],
  ['03', 'Lead capture', 'Make sure opportunities do not disappear between the ring and the response.'],
  ['04', 'Follow-up systems', 'Respond quickly, stay present, and recover missed demand.'],
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

export default function Page() {
  const [isContactOpen, setContactOpen] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isContactOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isContactOpen])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setContactOpen(false)
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const openContact = () => {
    setSubmitted(false)
    setContactOpen(true)
    setMenuOpen(false)
  }

  return (
    <main className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Ravalith home">ravalith</a>
        <nav className={isMenuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#system" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#point-of-view" onClick={() => setMenuOpen(false)}>Point of view</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <button className="header-cta" type="button" onClick={openContact}>Book a call <Arrow /></button>
        <button className="menu-toggle" type="button" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen} onClick={() => setMenuOpen(!isMenuOpen)}>
          <span /><span />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow">Customer acquisition systems / for plumbing companies</p>
          <h1>More customers.<br /><em>Less leakage.</em></h1>
          <p className="hero-description">Ravalith builds and operates the system behind your next booked job — from being found to following up before the opportunity goes cold.</p>
          <div className="hero-actions">
            <button className="button button-light" type="button" onClick={openContact}>Book a call <Arrow /></button>
            <a className="text-link" href="mailto:support@ravalith.com">support@ravalith.com</a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract flowing silver form" role="img">
          <div className="liquid liquid-one" /><div className="liquid liquid-two" /><div className="liquid liquid-three" />
          <div className="art-caption"><span>01 — FLOW</span><span>RAVALITH / 2026</span></div>
          <div className="art-orbit"><i /><i /><i /></div>
        </div>
        <div className="scroll-note"><span className="scroll-line" /> Scroll to explore</div>
      </section>

      <section className="statement dark-section">
        <p className="eyebrow">The problem is not visibility alone</p>
        <h2>Your website should do<br />more than <em>exist.</em></h2>
        <p className="statement-copy">It should turn searches into calls, visitors into leads, and leads into booked jobs. Ravalith builds the system behind that process.</p>
      </section>

      <section className="leak-section light-section" id="point-of-view">
        <div className="section-intro">
          <p className="eyebrow">Where growth gets lost</p>
          <h2>Every lost customer<br />goes <em>somewhere.</em></h2>
        </div>
        <div className="leak-layout">
          <div className="leak-visual"><div className="leak-ring" /><span className="leak-label">LEAK / 00:04</span><span className="leak-pip" /></div>
          <div className="leak-copy"><p>A potential customer searches for a plumber. They see several companies. The website is confusing. The phone is not answered. Nobody follows up.</p><p>They move on. That customer is now someone else&apos;s job.</p><p className="bold-copy">Ravalith exists to close those gaps.</p></div>
        </div>
      </section>

      <section className="system-section light-section" id="system">
        <div className="section-heading"><p className="eyebrow">A connected system</p><h2>From search<br />to <em>booked job.</em></h2></div>
        <div className="flow-line" aria-label="Customer acquisition flow">{flowSteps.map(([number, title, copy], index) => <div className="flow-step" key={number}><span className="step-number">{number}</span><div className="step-dot" /><h3>{title}</h3><p>{copy}</p>{index < flowSteps.length - 1 && <span className="step-arrow" aria-hidden="true">→</span>}</div>)}</div>
      </section>

      <section className="services-section dark-section" id="services">
        <div className="section-heading services-heading"><p className="eyebrow">What we build</p><h2>Not another website.<br /><em>A better engine.</em></h2><p>Every part is designed to work together, so your marketing starts behaving like a system — not a collection of disconnected tactics.</p></div>
        <div className="service-list">{services.map(([number, title, copy]) => <article className="service-row" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><span className="service-arrow">↗</span></article>)}</div>
      </section>

      <section className="point-section light-section">
        <div className="point-art"><div className="point-wave" /><span>PRECISION / PATIENCE / PROGRESS</span></div>
        <div className="point-copy"><p className="eyebrow">The Ravalith point of view</p><h2>We do not build websites to win design awards.</h2><p>Design matters because first impressions matter. SEO matters because visibility matters. Follow-up matters because speed matters. The system matters because disconnected tactics create weak results.</p><p className="bold-copy">We build to win customers.</p></div>
      </section>

      <section className="proof-section light-section"><p className="eyebrow">Proof, without the theater</p><h2>Built for <em>growth.</em></h2><div className="proof-card"><span>CASE STUDIES / COMING AS THE DATA DOES</span><p>We will show the actual change in traffic, leads, calls, and booked jobs. No invented numbers. No borrowed logos. Just the work and what it changed.</p><div className="proof-grid"><span>Traffic</span><span>Leads</span><span>Calls</span><span>Booked jobs</span></div></div></section>

      <section className="final-section dark-section" id="contact"><p className="eyebrow">The next move is simple</p><h2>Ready to stop<br />losing <em>customers?</em></h2><p>Let&apos;s take a look at your current customer-acquisition system and identify where opportunity is being lost.</p><button className="button button-light" type="button" onClick={openContact}>Book a call <Arrow /></button><a className="final-email" href="mailto:support@ravalith.com">support@ravalith.com</a></section>

      <footer className="site-footer"><div><a className="wordmark" href="#top">ravalith</a><p>Customer acquisition systems<br />for plumbing companies.</p></div><div className="footer-links"><a href="#system">How it works</a><a href="#services">Services</a><a href="/agreement">Founding partner agreement</a><a href="mailto:support@ravalith.com">Email us</a></div><small>© 2026 Ravalith. All rights reserved.</small></footer>

      {isContactOpen && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setContactOpen(false) }}><section className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title"><button className="modal-close" type="button" aria-label="Close contact form" onClick={() => setContactOpen(false)}>×</button>{submitted ? <div className="success-state"><span className="success-mark">✓</span><p className="eyebrow">Request received</p><h2>We&apos;ll be in touch.</h2><p>Thanks for reaching out. We&apos;ll review your information and get back to you shortly.</p><a href="mailto:support@ravalith.com">support@ravalith.com</a></div> : <><p className="eyebrow">Let&apos;s talk growth</p><h2 id="contact-title">Tell us a little<br />about your business.</h2><p className="modal-intro">A few details is all we need to start a useful conversation.</p><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}><div className="form-grid"><label>Name<input required name="name" autoComplete="name" /></label><label>Business name<input required name="business" autoComplete="organization" /></label><label>Business website<input required type="url" name="website" placeholder="https://" /></label><label>Phone number<input required type="tel" name="phone" autoComplete="tel" /></label><label>City<input required name="city" autoComplete="address-level2" /></label><label>State<input required name="state" autoComplete="address-level1" /></label></div><label>Anything else you&apos;d like us to know?<textarea name="message" rows={3} /></label><button className="button button-dark form-submit" type="submit">Request a call <Arrow /></button></form><a className="modal-email" href="mailto:support@ravalith.com">Or email support@ravalith.com</a></>}</section></div>}
    </main>
  )
}
