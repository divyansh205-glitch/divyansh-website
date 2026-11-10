import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export const metadata = {
  title: 'About Divyansh Dubey',
  description: 'Meet Divyansh Dubey and learn about the community’s customer-first approach to product-based direct selling.',
};

export default function AboutPage() {
  const values = [
    { icon: '💡', title: 'Keep Learning', text: 'Build product knowledge and practical business skills through steady learning and open questions.' },
    { icon: '🤝', title: 'Serve Customers', text: 'Put customer needs first and share accurate information about products, pricing, and availability.' },
    { icon: '🌟', title: 'Be Transparent', text: 'Discuss the costs, effort, and compensation terms clearly. Business outcomes are never guaranteed.' },
    { icon: '🚀', title: 'Take Thoughtful Action', text: 'Make informed decisions, set a sustainable pace, and focus on consistent, responsible effort.' },
    { icon: '❤️', title: 'Support Each Other', text: 'Share what you learn, welcome questions, and help others make decisions that suit their own goals.' },
    { icon: '🌍', title: 'Grow with Purpose', text: 'Build relationships and skills that can serve you well, whatever direction your journey takes.' },
  ];

  const timeline = [
    { year: '01', title: 'Explore', desc: 'Start with a conversation about the business opportunityx, the business model, costs, and your own goals.' },
    { year: '02', title: 'Understand', desc: 'Take time to review current product information and the written compensation terms.' },
    { year: '03', title: 'Learn', desc: 'Build product knowledge and practise clear, customer-first conversations with guidance.' },
    { year: '04', title: 'Grow Together', desc: 'If you choose to participate, keep learning, serve customers, and support others on the team.' },
  ];

  return (
    <>
      <div className="announcement-bar">
        <span>LEARN ABOUT THE <strong>COMMUNITY</strong></span>
        <Link href="/contact" id="about-announcement-link">ASK A QUESTION →</Link>
      </div>
      <Navbar />

      <main id="about-main">
        {/* Page Header */}
        <div className="page-header">
          <div className="container">
            <div className="page-header__eyebrow">The Person Behind the Community</div>
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
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'white', lineHeight: 1 }}>TEAM</div>
                    <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginTop: '4px' }}>Learn Together</div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div>
                  <div className="about__eyebrow">Who I Am</div>
                  <h2 className="about__title">
                    Building<br />
                    <mark>with people</mark><br />
                    in mind.
                  </h2>
                  <div className="about__divider" />
                  <p className="about__text">
                    I&apos;m Divyansh Dubey. I&apos;m part of a community for people exploring a product-led direct-selling business with guidance and peer support.
                  </p>
                  <p className="about__text">
                    I believe a business conversation should begin with the facts: what the products are, how customers are served, what participation may cost, and how the compensation plan works.
                  </p>
                  <p className="about__text">
                    My role is to help people find clear answers and learn the fundamentals. Participation is optional, and business results vary; there is no promise of income or a particular outcome.
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
                <div className="section-header__eyebrow">A Thoughtful First Step</div>
                <h2 className="section-header__title">
                  How We Get Started
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
                CURIOUS ABOUT THE OPPORTUNITY?
              </div>
              <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.85)', marginBottom: 'var(--space-8)', maxWidth: '560px', margin: '0 auto var(--space-8)' }}>
                Let&apos;s have a no-pressure conversation about products, costs, expectations, and whether this business model fits your goals.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-outline btn-lg" style={{ borderColor: 'white', color: 'white' }} id="about-cta-contact">
                  Talk With a Mentor
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
