'use client'

import './agreement.css'
import { useState } from 'react'

const included = [
  ['01', 'Search visibility', "Help more local customers find your business when they're looking for a plumber."],
  ['02', 'Conversion-focused website', 'A clear, fast experience designed to turn visitors into calls, requests, and booked work.'],
  ['03', 'Lead capture', 'Infrastructure designed to capture potential customers and reduce lost opportunities.'],
  ['04', 'Automated request + response', 'Help make sure customer requests do not disappear simply because nobody responded immediately.'],
  ['05', 'Active monthly management', 'Ongoing updates, posts, fresh photos/content, search optimization, and conversion improvements.'],
  ['06', 'Rank tracking', 'Monitor search visibility and track progress over time.'],
  ['07', '24-hour turnaround', 'Fast turnaround for applicable requests and updates.'],
]

const agreementTerms = [
  ['Offer', 'This agreement confirms participation in the Ravalith Founding Partner Program, limited to the first three clients accepted by Ravalith.'],
  ['Founding partner exchange', 'In exchange for special first-year pricing, the Client agrees to provide one honest testimonial and allow Ravalith to document the work as a case study.'],
  ['Ownership and access', 'The Client retains ownership of its domain, Google Business Profile, business accounts, and listings. Ravalith retains its internal systems, processes, templates, and proprietary methods.'],
  ['Client responsibilities', 'The Client will provide accurate business information and the access needed to perform the services, including appropriate customer and communication permissions.'],
  ['Results', 'Ravalith does not guarantee a specific number of leads, customers, rankings, or revenue. Results vary by market, competition, demand, and other factors outside Ravalith’s control.'],
]

export default function AgreementPage() {
  const [accepted, setAccepted] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="agreement-shell">
      <div className="grain" aria-hidden="true" />
      <header className="agreement-header">
        <a className="wordmark" href="/" aria-label="Ravalith home">ravalith</a>
        <div className="agreement-header-meta"><span>Founding partner program</span><a href="/">Back to site ↗</a></div>
      </header>

      <section className="agreement-hero">
        <div>
          <p className="eyebrow">Ravalith / founding partner agreement</p>
          <h1>More customers.<br /><em>Less leakage.</em></h1>
          <p className="agreement-lede">You are joining Ravalith as one of our first three founding partners. We&apos;ll build and operate the customer-acquisition system designed to help your plumbing business get found, convert more prospects, and capture the customers already trying to reach you.</p>
        </div>
        <div className="agreement-index"><span>AGREEMENT / 01</span><span>READ WITH CARE</span><span>2026</span></div>
      </section>

      <section className="agreement-dark intro-panel"><div className="panel-label">01 / The offer</div><div><h2>A customer-acquisition system — <em>not just another website.</em></h2><p>Your website is one part of a larger engine. Ravalith connects visibility, conversion, lead capture, and ongoing optimization around one outcome: more plumbing customers.</p></div></section>

      <section className="agreement-light value-panel"><div className="panel-label">02 / What you&apos;re getting</div><div className="value-grid"><article><strong>Get found.</strong><p>Improve visibility when customers are actively searching for plumbing services.</p></article><article><strong>Convert attention.</strong><p>Turn website visitors into real inquiries with a conversion-focused experience.</p></article><article><strong>Capture demand.</strong><p>Make it easier for customers to reach you — and harder for good leads to disappear.</p></article><article><strong>Keep improving.</strong><p>We continue managing and optimizing the system instead of handing it over and walking away.</p></article></div></section>

      <section className="agreement-light services-panel"><div className="panel-label">03 / Included services</div><div className="included-list">{included.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="not-included">Not included: Custom AI Receptionist and Paid Lead Generation Management. These are available through higher-level services.</p></section>

      <section className="agreement-dark engine-panel"><div className="panel-label">04 / The engine</div><h2>You don&apos;t need another website.<br /><em>You need a better engine.</em></h2><div className="engine-steps"><span>Generate more demand.</span><span>Convert more demand.</span><span>Capture more demand.</span><span>Continue improving.</span></div></section>

      <section className="agreement-light pricing-panel"><div className="panel-label">05 / Founding partner pricing</div><div className="pricing-layout"><div><p className="pricing-kicker">Only three founding partners</p><h2>A serious start<br />to <em>better growth.</em></h2><p className="pricing-note">Founding partners retain their special founding rate for the first year. A 12-month commitment is recommended.</p></div><div className="price-card"><div className="price-row"><span>Implementation &amp; launch</span><strong>$1,500</strong><small>one-time</small></div><div className="price-row"><span>Ongoing operation</span><strong>$447<span>/mo</span></strong><small>first 12 months</small></div><div className="price-card-foot">After the first 12 months, the account moves to Ravalith&apos;s standard Customer Growth pricing, currently $997/month.</div></div></div></section>

      <section className="agreement-light terms-panel"><div className="panel-label">06 / Agreement terms</div><div className="terms-list">{agreementTerms.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <section className="agreement-dark accept-panel"><div className="panel-label">07 / Acceptance</div><div className="accept-layout"><div><h2>Ready to build<br />the <em>engine?</em></h2><p>You&apos;re not signing up for another website. You&apos;re putting a system in place to help your business get found, capture more opportunities, and turn more of them into booked work.</p></div><div className="accept-card">{submitted ? <div className="accepted-state"><span>✓</span><p className="eyebrow">Agreement recorded</p><h3>Welcome, founding partner.</h3><p>We&apos;ll follow up with next steps and the information needed to begin implementation.</p><a href="mailto:support@ravalith.com">support@ravalith.com ↗</a></div> : <form onSubmit={(event) => { event.preventDefault(); if (accepted) setSubmitted(true) }}><p className="form-label">Confirm your agreement</p><label className="check-row"><input type="checkbox" checked={accepted} onChange={(event) => setAccepted(event.target.checked)} /><span>I have read and understand what I am receiving, what I am paying, and the founding partner requirements outlined above.</span></label><button className="button button-light" type="submit" disabled={!accepted}>Accept agreement <span>↗</span></button><p className="form-foot">By accepting, you confirm your intent to participate in the Ravalith Founding Partner Program under the terms on this page.</p></form>}</div></div></section>

      <footer className="agreement-footer"><a className="wordmark" href="/">ravalith</a><p>Customer acquisition systems<br />for plumbing companies.</p><a href="mailto:support@ravalith.com">support@ravalith.com</a><small>© 2026 Ravalith. All rights reserved.</small></footer>
    </main>
  )
}
