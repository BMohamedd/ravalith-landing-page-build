'use client'

import './agreement.css'
import { useState } from 'react'

const packageItems = [
  ['Customer acquisition website', 'A conversion-focused plumbing website with hosting, maintenance, security, and standard website fees included.'],
  ['Google Business Profile', 'Initial setup and optimization, followed by ongoing monthly management, posts, photos, Q&A, and category updates.'],
  ['Review follow-up', 'An automated request and response system designed to help you generate more customer reviews.'],
  ['Missed-call recovery', 'Automated follow-up for missed calls so more potential customers have a chance to reach you.'],
  ['Local Google visibility', 'Ongoing local SEO, a strong foundation, and 3–6 local SEO posts per month focused on your service area.'],
  ['Monthly reporting', 'A monthly performance report and rank tracking so you can see what is changing.'],
]

const terms = [
  ['What this agreement does', 'This confirms your participation in the Ravalith Founding Partner Program. It is limited to the first three plumbing companies accepted by Ravalith.'],
  ['Your founding partner commitment', 'In exchange for the special first-year price, you agree to provide one honest testimonial and allow Ravalith to document the work as a case study. Your testimonial does not have to be positive; it only needs to reflect your genuine experience.'],
  ['Case study permission', 'You allow Ravalith to use your business name, website, relevant results, screenshots, and performance information in marketing materials and case studies. Ravalith will not knowingly publish confidential information you specifically ask us not to disclose.'],
  ['Ownership and access', 'You keep ownership of your domain, Google Business Profile, business accounts, and listings. Ravalith may be added as an authorized manager where needed. Ravalith keeps ownership of its internal systems, processes, templates, and proprietary methods.'],
  ['Your responsibilities', 'You agree to provide accurate business information and the access needed to do the work. You are responsible for your customer relationships and for ensuring any customer information or permissions you provide are accurate and appropriate.'],
  ['Results', 'Our goal is to help you generate more customers and reduce lost opportunities. Results vary by market, competition, demand, and other factors. Ravalith does not guarantee a specific number of leads, customers, rankings, or revenue.'],
]

export default function AgreementPage() {
  const [accepted, setAccepted] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="agreement-shell">
      <header className="agreement-header">
        <a className="wordmark" href="/" aria-label="Ravalith home">ravalith</a>
        <nav className="agreement-actions"><a className="download-link" href="/agreement.html" download="ravalith-founding-partner-agreement.html">Download HTML</a><a className="back-link" href="/">Back to website</a></nav>
      </header>

      <section className="agreement-hero" aria-labelledby="hero-title">
        <div className="hero-topline"><span>Ravalith / Founding Partner Program</span><span>Agreement 01 — 2026</span></div>
        <div className="hero-main">
          <p className="hero-kicker">Customer acquisition, without the leakage.</p>
          <h1 id="hero-title">More customers.<br /><span>Less leakage.</span></h1>
          <div className="hero-bottom"><p>Founding Partner Agreement</p><a href="#summary">Read the short version <span>↓</span></a></div>
        </div>
        <figure className="hero-art" aria-label="Abstract liquid metal artwork">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MP9ot6a1u2LxSkvJYS7N6d9dPTLbmD.png" alt="Liquid metal flowing over a dark stone block" />
          <figcaption>R / 01</figcaption>
        </figure>
      </section>

      <div className="agreement-container">
        <section className="agreement-intro">
          <p className="eyebrow">Ravalith / Founding Partner Program</p>
          <div className="intro-copy-wrap">
            <h2>Founding Partner<br /><span>Agreement</span></h2>
            <p className="intro-copy">Please read this page carefully. It explains exactly what you are buying, what it costs, what you receive, and what you agree to as a founding partner.</p>
          </div>
        </section>

        <section id="summary" className="summary-card" aria-label="Agreement summary">
          <p className="section-label">The short version</p>
          <h2>You get more customers — and stop losing the ones already trying to reach you.</h2>
          <p>Ravalith builds and operates a customer-acquisition system for your plumbing company. This is more than a website: it helps people find you, trust you, contact you, and get a response.</p>
          <div className="summary-grid"><div><span>You pay</span><strong>$1,500</strong><small>one-time implementation</small></div><div><span>Then</span><strong>$447 / month</strong><small>for your first 12 months</small></div><div><span>After year one</span><strong>$997 / month</strong><small>standard Customer Growth pricing</small></div></div>
        </section>

        <section className="readable-section">
          <p className="section-label">01 / Your offer</p>
          <div className="section-content"><h2>What you are buying</h2><p>You are joining a limited program for the first three Ravalith clients. You receive the core Customer Growth package at a special founding rate for the first year.</p><div className="callout"><strong>The goal is simple</strong><span>Get more plumbing jobs and stop letting good customers slip away.</span></div></div>
        </section>

        <section className="readable-section package-section">
          <p className="section-label">02 / Your package</p>
          <div className="section-content"><h2>What you receive</h2><p>These are the services included in your Founding Partner Program.</p><div className="package-list">{packageItems.map(([title, copy], index) => <article key={title}><span className="item-number">{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div><div className="not-included"><strong>Not included</strong><p>Custom AI Receptionist and Paid Lead Generation Management. These are available through higher-level services.</p></div></div>
        </section>

        <section className="readable-section requirements-section">
          <p className="section-label">03 / In exchange</p>
          <div className="section-content"><h2>What you agree to do</h2><p>The special founding price comes with two straightforward requirements:</p><div className="requirement-list"><article><strong>1</strong><div><h3>Give one honest testimonial</h3><p>Share your genuine experience working with Ravalith. It does not need to be positive — it needs to be honest.</p></div></article><article><strong>2</strong><div><h3>Allow a case study</h3><p>Let Ravalith use your business name, website, relevant results, screenshots, and performance information to document the work.</p></div></article></div></div>
        </section>

        <section className="readable-section terms-section">
          <p className="section-label">04 / Important terms</p>
          <div className="section-content"><h2>Before you accept</h2><div className="terms-list">{terms.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div>
        </section>

        <section className="accept-section"><p className="section-label">05 / Your decision</p>{submitted ? <div className="success-message"><p className="eyebrow">Agreement recorded</p><h2>Welcome, founding partner.</h2><p>We&apos;ll follow up with next steps and the information needed to begin.</p><a href="mailto:support@ravalith.com">support@ravalith.com ↗</a></div> : <div className="accept-inner"><div><h2>Ready to move forward?</h2><p>By accepting below, you confirm that you understand the price, package, founding partner requirements, and terms on this page.</p></div><form onSubmit={(event) => { event.preventDefault(); if (accepted) setSubmitted(true) }}><label className="check-row"><input type="checkbox" checked={accepted} onChange={(event) => setAccepted(event.target.checked)} /><span>I have read and understand what I am buying, what I am paying, and what I am agreeing to.</span></label><button type="submit" disabled={!accepted}>Accept agreement <span>→</span></button></form></div>}</section>
      </div>

      <footer className="agreement-footer"><a className="wordmark" href="/">ravalith</a><a href="mailto:support@ravalith.com">Questions? Email support@ravalith.com</a></footer>
    </main>
  )
}
