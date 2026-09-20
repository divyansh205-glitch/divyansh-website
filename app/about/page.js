import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export const metadata = {
  title: 'About Divyansh Dubey | Entrepreneur & Business Strategist',
  description: 'Learn about Divyansh Dubey - entrepreneur, investor, and business strategist dedicated to helping ambitious people build profitable businesses.',
};

export default function AboutPage() {
  const values = [
    { icon: '💡', title: 'Relentless Growth', text: 'I believe growth never stops. Every challenge is an opportunity to level up — personally and professionally.' },
    { icon: '🤝', title: 'Genuine Service', text: "True success comes from serving others. My mission is to give more than I take, and create ripple effects of positive change." },
    { icon: '💰', title: 'Unapologetic Success', text: 'Money is a tool for good. I empower entrepreneurs to earn their full potential without guilt or limitation.' },
    { icon: '🌟', title: 'Radical Transparency', text: "I share the real stories — the wins, the failures, and everything in between. No fluff, just truth and actionable insight." },
    { icon: '🚀', title: 'Bold Action', text: 'Success requires courage. I help entrepreneurs take bold, strategic actions that move the needle, even when it feels scary.' },
    { icon: '❤️', title: 'Community First', text: 'We go further together. Building a thriving community of purpose-driven entrepreneurs is at the heart of everything I do.' },
  ];

  const timeline = [
    { year: '2016', title: 'First Venture', desc: 'Started my first business from my college dorm room with nothing but a laptop and a dream.' },
    { year: '2018', title: 'First ₹1 Crore Year', desc: 'Crossed the seven-figure mark after years of relentless learning, pivoting, and executing.' },
    { year: '2020', title: 'Launched The Podcast', desc: 'Started "The Divyansh Dubey Show" to share lessons and inspire the next generation of entrepreneurs.' },
    { year: '2022', title: 'Elite Mastermind Launch', desc: 'Created the Elite Entrepreneur Mastermind, serving 50+ high-level entrepreneurs to scale their businesses.' },
    { year: '2024', title: 'Impact at Scale', desc: 'Now helping 500+ entrepreneurs across India build profitable businesses and create lasting impact.' },
  ];

  return (
    <>
      <div className="announcement-bar">
        <span>DOWNLOAD THE FREE <strong>90-DAY BUSINESS BLUEPRINT</strong></span>
        <Link href="/contact" id="about-announcement-link">GRAB IT FREE →</Link>
      </div>
      <Navbar />

      <main id="about-main">
        {/* Page Header */}
        <div className="page-header">
          <div className="container">
            <div className="page-header__eyebrow">My Story</div>
            <h1 className="page-header__title">ABOUT DIVYANSH</h1>
          </div>
        </div>

        {/* Hero Section */}
        <section className="section section--dark">
          <div className="container">
            <div className="about-page__hero">
              <ScrollReveal direction="left">
                <div style={{ position: 'relative' }}>
                  <div style={{
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-lg)',
                  }}>
                    <Image
                      src="/images/about.jpg"
                      alt="Divyansh Dubey in his office"
                      width={600}
                      height={500}
                      style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                      priority
                    />
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '-20px',
                    right: '-20px',
                    background: 'linear-gradient(135deg, var(--color-gold), var(--color-orange))',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-5) var(--space-6)',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'white', lineHeight: 1 }}>8+</div>
                    <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginTop: '4px' }}>Years Building</div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div>
                  <div className="about__eyebrow">Who I Am</div>
                  <h2 className="about__title">
                    Entrepreneur,<br />
                    <mark>Investor</mark> &amp;<br />
                    Strategist
                  </h2>
                  <div className="about__divider" />
                  <p className="about__text">
                    I&apos;m Divyansh Dubey — an entrepreneur, investor, and business strategist who has built multiple companies from the ground up and helped hundreds of others do the same.
                  </p>
                  <p className="about__text">
                    My journey started with a simple belief: <em>when ambitious people make great money, they do extraordinary things.</em> This belief has guided every business decision, every coaching program, and every conversation I&apos;ve had.
                  </p>
                  <p className="about__text">
                    Today, I work with entrepreneurs at every stage — from those taking their first leap to seasoned business owners looking to scale to seven figures and beyond. <em>My mission is to give you the strategies, mindset, and community to reach your full potential.</em>
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Story / Timeline */}
        <section className="section section--dark-2" id="my-journey">
          <div className="container">
            <ScrollReveal>
              <div className="section-header">
                <div className="section-header__eyebrow">The Journey</div>
                <h2 className="section-header__title">
                  My Story
                  <span className="underline-decoration" />
                </h2>
              </div>
            </ScrollReveal>

            <div style={{ maxWidth: '720px', margin: '0 auto', marginTop: 'var(--space-12)' }}>
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 100}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '100px 1fr',
                    gap: 'var(--space-8)',
                    marginBottom: 'var(--space-8)',
                    paddingBottom: 'var(--space-8)',
                    borderBottom: i < timeline.length - 1 ? '1px solid var(--color-white-10)' : 'none',
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'var(--text-3xl)',
                      color: 'var(--color-gold)',
                      lineHeight: 1,
                      paddingTop: '6px',
                    }}>
                      {item.year}
                    </div>
                    <div>
                      <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'var(--text-xl)',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        color: 'var(--color-white)',
                        marginBottom: 'var(--space-2)',
                      }}>
                        {item.title}
                      </h3>
                      <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-white-60)', lineHeight: 1.8 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section section--dark about-page__values" id="my-values">
          <div className="container">
            <ScrollReveal>
              <div className="section-header">
                <div className="section-header__eyebrow">What I Stand For</div>
                <h2 className="section-header__title">
                  My Core Values
                  <span className="underline-decoration" />
                </h2>
              </div>
            </ScrollReveal>

            <div className="values-grid">
              {values.map((value, i) => (
                <ScrollReveal key={value.title} delay={i * 80}>
                  <div className="value-card">
                    <div className="value-card__icon">{value.icon}</div>
                    <h3 className="value-card__title">{value.title}</h3>
                    <p className="value-card__text">{value.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          background: 'linear-gradient(135deg, var(--color-gold-dark) 0%, var(--color-orange) 100%)',
          padding: 'var(--space-20) 0',
          textAlign: 'center',
        }}>
          <div className="container">
            <ScrollReveal>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '0.03em', textTransform: 'uppercase', color: 'white', marginBottom: 'var(--space-5)' }}>
                READY TO BUILD SOMETHING GREAT?
              </div>
              <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.85)', marginBottom: 'var(--space-8)', maxWidth: '560px', margin: '0 auto var(--space-8)' }}>
                Let&apos;s talk about your business and map a clear path to your next level of success.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-outline btn-lg" style={{ borderColor: 'white', color: 'white' }} id="about-cta-contact">
                  Work With Me
                </Link>
                <Link href="/programs" className="btn btn-lg" style={{ background: 'white', color: 'var(--color-orange)' }} id="about-cta-programs">
                  View Programs
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
