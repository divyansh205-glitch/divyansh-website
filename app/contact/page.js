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
    const subject = encodeURIComponent(`Website inquiry: ${form.inquiry}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'Not provided'}\n\n${form.message}`
    );
    window.location.href = `mailto:divyanshdubey938@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const contactDetails = [
    { icon: '📧', label: 'Email', value: 'divyanshdubey938@gmail.com' },
    { icon: '🤝', label: 'Community' },
    { icon: '📍', label: 'Location', value: 'Noida, India' },
  ];

  return (
    <>
      <div className="announcement-bar">
        <span>HAVE QUESTIONS ABOUT THE BUSINESS? <strong>LET&apos;S TALK.</strong></span>
        <Link href="#contact-form" id="contact-announcement-link">GET IN TOUCH →</Link>
      </div>
      <Navbar />

      <main id="contact-main">
        {/* Page Header */}
        <div className="page-header">
          <div className="container">
            <div className="page-header__eyebrow">Start with a Conversation</div>
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
                    Let&apos;s Talk<br />
                    <span>About the</span><br />
                    Opportunity.
                  </h2>
                  <div className="about__divider" />
                  <p className="contact-info__text">
                    Interested in the products or curious about how the business works? Send your questions and I&apos;ll help you find the information you need to make an informed decision.
                  </p>
                  <p className="contact-info__text">
                    There&apos;s no pressure to join. Ask about product details, current costs, training, or the written compensation terms.
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

                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="contact-form" id="contact-form-card">
                  {submitted ? (
                    <div style={{ textAlign: 'center', padding: 'var(--space-12) 0' }}>
                      <div style={{ fontSize: '4rem', marginBottom: 'var(--space-4)' }}>🎉</div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-white)', marginBottom: 'var(--space-4)' }}>
                        Your Email Is Ready
                      </h3>
                      <p style={{ color: 'var(--color-white-70)', lineHeight: 1.8, marginBottom: 'var(--space-6)' }}>
                        Your email app should open with your message. If it doesn&apos;t, email divyanshdubey938@gmail.com directly.
                      </p>
                      <button onClick={() => setSubmitted(false)} className="btn btn-gold-outline" id="contact-send-another-btn">
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="contact-form__title">Send a Message</h2>
                      <form onSubmit={handleSubmit} aria-label="Contact form">
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
                            <option value="products">Product information</option>
                            <option value="business">How the business works</option>
                            <option value="costs">Costs and compensation terms</option>
                            <option value="mentorship">Training and mentorship</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label className="form-label" htmlFor="contact-message">What Would You Like to Know? *</label>
                          <textarea
                            id="contact-message"
                            name="message"
                            className="form-textarea"
                            placeholder="Ask about products, costs, training, or the business model..."
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
                { q: 'Do I need prior experience?', a: 'You can start by asking questions and learning about the products and business model. Take time to decide whether it fits your circumstances.' },
                { q: 'Is income guaranteed?', a: 'No. This is an independent business opportunity, not a job or guaranteed income. Any results depend on factors such as sales, expenses, effort, and the current written compensation terms.' },
                { q: 'What should I review before deciding?', a: 'Ask for current product pricing, any start-up or ongoing costs, refund terms, and the complete compensation plan. Review the details before making a commitment.' },
                { q: 'Can I ask questions without joining?', a: 'Yes. You can have a conversation about the products and the business model before deciding whether you want to participate.' },
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
