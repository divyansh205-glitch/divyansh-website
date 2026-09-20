'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', inquiry: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, send to your backend/email service
    setSubmitted(true);
  };

  const contactDetails = [
    { icon: '📧', label: 'Email', value: 'hello@divyanshdubey.com' },
    { icon: '📱', label: 'Instagram', value: '@divyanshdubey' },
    { icon: '🎙️', label: 'Podcast', value: 'The Divyansh Dubey Show' },
    { icon: '📍', label: 'Location', value: 'Mumbai, India' },
  ];

  return (
    <>
      <div className="announcement-bar">
        <span>READY TO BUILD YOUR DREAM BUSINESS? <strong>LET&apos;S TALK.</strong></span>
        <Link href="#contact-form" id="contact-announcement-link">BOOK A CALL →</Link>
      </div>
      <Navbar />

      <main id="contact-main">
        {/* Page Header */}
        <div className="page-header">
          <div className="container">
            <div className="page-header__eyebrow">Get In Touch</div>
            <h1 className="page-header__title">CONTACT</h1>
          </div>
        </div>

        {/* Contact Section */}
        <section className="section section--dark contact-page" id="contact-form">
          <div className="container">
            <div className="contact-page__inner">

              <ScrollReveal direction="left">
                <div className="contact-info">
                  <div className="about__eyebrow">Let&apos;s Connect</div>
                  <h2 className="contact-info__title">
                    Let&apos;s Build<br />
                    <span>Something</span><br />
                    Great Together.
                  </h2>
                  <div className="about__divider" />
                  <p className="contact-info__text">
                    Whether you&apos;re interested in working together, have a question about my programs, or want to invite me to speak at your event — I&apos;d love to hear from you.
                  </p>
                  <p className="contact-info__text">
                    Fill out the form and I&apos;ll get back to you within 48 hours. For urgent inquiries, reach out directly on Instagram.
                  </p>

                  <div style={{ marginTop: 'var(--space-8)' }}>
                    {contactDetails.map((detail) => (
                      <div key={detail.label} className="contact-detail">
                        <div className="contact-detail__icon">{detail.icon}</div>
                        <div>
                          <div className="contact-detail__label">{detail.label}</div>
                          <div className="contact-detail__value">{detail.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div style={{ marginTop: 'var(--space-8)' }}>
                    <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-white-50)', marginBottom: 'var(--space-4)' }}>
                      Follow Along
                    </div>
                    <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                      {['Instagram', 'LinkedIn', 'YouTube', 'Twitter'].map((s) => (
                        <a
                          key={s}
                          href="#"
                          className="footer__social-link"
                          aria-label={s}
                          id={`contact-${s.toLowerCase()}-link`}
                        >
                          <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                            {s.slice(0, 2).toUpperCase()}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="contact-form" id="contact-form-card">
                  {submitted ? (
                    <div style={{ textAlign: 'center', padding: 'var(--space-12) 0' }}>
                      <div style={{ fontSize: '4rem', marginBottom: 'var(--space-4)' }}>🎉</div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-white)', marginBottom: 'var(--space-4)' }}>
                        Message Received!
                      </h3>
                      <p style={{ color: 'var(--color-white-70)', lineHeight: 1.8, marginBottom: 'var(--space-6)' }}>
                        Thank you for reaching out! I read every message personally and will get back to you within 48 hours.
                      </p>
                      <button onClick={() => setSubmitted(false)} className="btn btn-gold-outline" id="contact-send-another-btn">
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="contact-form__title">Send a Message</h2>
                      <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                          <div className="form-group">
                            <label className="form-label" htmlFor="contact-name">Full Name *</label>
                            <input
                              id="contact-name"
                              name="name"
                              type="text"
                              className="form-input"
                              placeholder="Your name"
                              value={form.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label" htmlFor="contact-email">Email *</label>
                            <input
                              id="contact-email"
                              name="email"
                              type="email"
                              className="form-input"
                              placeholder="your@email.com"
                              value={form.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                          <input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            className="form-input"
                            placeholder="+91 00000 00000"
                            value={form.phone}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-group">
                          <label className="form-label" htmlFor="contact-inquiry">What Are You Inquiring About? *</label>
                          <select
                            id="contact-inquiry"
                            name="inquiry"
                            className="form-select form-input"
                            value={form.inquiry}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select an option...</option>
                            <option value="mastermind">Elite Entrepreneur Mastermind</option>
                            <option value="accelerator">Business Accelerator</option>
                            <option value="strategy">Strategy Session</option>
                            <option value="course">Online Course</option>
                            <option value="speaking">Speaking Inquiry</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label className="form-label" htmlFor="contact-message">Tell Me About Your Business &amp; Goals *</label>
                          <textarea
                            id="contact-message"
                            name="message"
                            className="form-textarea"
                            placeholder="Share where you are in your business, what challenges you're facing, and what you're hoping to achieve..."
                            value={form.message}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <button
                          type="submit"
                          className="btn btn-primary"
                          style={{ width: '100%', justifyContent: 'center', padding: '16px' }}
                          id="contact-submit-btn"
                        >
                          Send Message →
                        </button>

                        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-white-30)', textAlign: 'center', marginTop: 'var(--space-4)', lineHeight: 1.6 }}>
                          By submitting, you agree to receive communication from Divyansh Dubey. We respect your privacy and will never spam you.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ background: 'var(--color-dark-2)', padding: 'var(--space-20) 0', borderTop: '1px solid var(--color-white-10)' }} id="faq-section">
          <div className="container">
            <ScrollReveal>
              <div className="section-header" style={{ marginBottom: 'var(--space-12)' }}>
                <div className="section-header__eyebrow">Quick Answers</div>
                <h2 className="section-header__title">
                  Frequently Asked Questions
                  <span className="underline-decoration" />
                </h2>
              </div>
            </ScrollReveal>

            <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {[
                { q: 'How quickly will I hear back?', a: 'I personally read every message and respond within 48 hours. For urgent matters, reach out via Instagram DM.' },
                { q: 'Do you work with beginners?', a: 'Absolutely. My programs are designed for entrepreneurs at every stage — from those just starting to those scaling to seven figures.' },
                { q: 'Are programs available online?', a: 'Yes! All programs are delivered virtually, so you can work with me from anywhere in India or worldwide.' },
                { q: 'What makes your coaching different?', a: 'I combine real-world entrepreneur experience with proven frameworks. I\'ve been in the trenches and built real businesses, so I give you practical strategies that actually work.' },
              ].map((faq, i) => (
                <ScrollReveal key={faq.q} delay={i * 80}>
                  <div style={{
                    background: 'var(--color-dark-3)',
                    border: '1px solid var(--color-white-10)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-6)',
                    transition: 'border-color var(--transition-base)',
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-gold-dark)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--color-white-10)'}
                  >
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-lg)', letterSpacing: '0.03em', textTransform: 'uppercase', color: 'var(--color-white)', marginBottom: 'var(--space-3)' }}>
                      {faq.q}
                    </h3>
                    <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-white-60)', lineHeight: 1.8 }}>{faq.a}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
