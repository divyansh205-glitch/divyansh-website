import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

export default function HomePage() {
  const episodes = [
    { num: 'EP.042', title: 'How to Build a 7-Figure Business From Scratch', duration: '38 min' },
    { num: 'EP.041', title: 'The Mindset Shift That Changed Everything for My Business', duration: '31 min' },
    { num: 'EP.040', title: 'Why Your Network Is Your Greatest Asset', duration: '44 min' },
    { num: 'EP.039', title: 'How to Attract High-Ticket Clients Consistently', duration: '27 min' },
    { num: 'EP.038', title: 'The Secret to Scaling Without Burning Out', duration: '36 min' },
  ];

  const testimonials = [
    {
      text: "Working with Divyansh completely transformed my business. In 6 months, I went from struggling to hit ₹50K months to consistently crossing ₹5 lakhs. The clarity and strategy he provided was the greatest investment I've ever made.",
      author: 'Priya Sharma',
      role: 'Digital Marketing Consultant',
      initials: 'PS',
    },
    {
      text: "The Business Mastermind was life-changing. Not only did I implement the right strategies, but I corrected my mindset around money. Divyansh's coaching gave me the permission to think bigger and earn more.",
      author: 'Rahul Mehta',
      role: 'E-Commerce Founder',
      initials: 'RM',
    },
    {
      text: "Divyansh's strategy sessions helped me implement the right systems to hit and surpass my first 7-figure year. His network, his insights, and his genuine care for my success made all the difference.",
      author: 'Ananya Kapoor',
      role: 'Business Coach & Speaker',
      initials: 'AK',
    },
  ];

  const programs = [
    {
      image: '/images/speaking.jpg',
      tag: 'Flagship Program',
      title: 'Elite Entrepreneur Mastermind',
      description: 'Take your business into the elite territory of multiple seven figures and beyond.',
      href: '/programs',
    },
    {
      image: '/images/about.jpg',
      tag: 'Group Coaching',
      title: 'Business Accelerator',
      description: 'Get unlimited access to coaching, mentorship, and a like-minded community.',
      href: '/programs',
    },
    {
      image: '/images/hero-portrait.jpg',
      tag: '1-on-1',
      title: 'Strategy Sessions',
      description: 'Lock arms with Divyansh in a high-impact session to map your path to success.',
      href: '/programs',
    },
  ];

  const mediaLogos = ['Forbes', 'Inc.', 'Entrepreneur', 'Business Today', 'Economic Times'];

  const stats = [
    { number: '500+', label: 'Clients Served' },
    { number: '₹50Cr+', label: 'Revenue Generated' },
    { number: '42', label: 'Podcast Episodes' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <span>GRAB OUR <strong>90-DAY BUSINESS BLUEPRINT</strong> AND UNLOCK HIDDEN REVENUE &amp; CONSISTENT GROWTH!</span>
        <Link href="/contact" id="announcement-download-link">DOWNLOAD NOW →</Link>
      </div>

      <Navbar />

      <main id="main-content">
        {/* ============================================================
            HERO SECTION
            ============================================================ */}
        <section className="hero" aria-label="Hero section">
          <div className="hero__upper">
            <div className="hero__bg" aria-hidden="true" />

            <div className="container hero__content">
              <div className="hero__subtitle">
                Entrepreneur, Investor &amp; Business Strategist
              </div>

              <h1 className="hero__title">
                MAKING
                <mark>GREAT</mark>
                MONEY.
                <span style={{ color: 'var(--color-white-70)', fontSize: '70%' }}>DOING GREAT</span>
                <span style={{ color: 'var(--color-white)', fontSize: '70%' }}>THINGS.</span>
              </h1>

              <p className="hero__description">
                I help ambitious people build <mark>highly profitable businesses</mark> so they can create the life and impact they deserve.
              </p>

              <div className="hero__actions">
                <Link href="/contact" className="btn btn-primary btn-lg" id="hero-cta-primary">
                  Work With Me
                </Link>
                <Link href="/podcast" className="btn btn-outline btn-lg" id="hero-cta-podcast">
                  Listen to Podcast
                </Link>
              </div>
            </div>

            <div className="hero__scroll-indicator" aria-hidden="true">
              <div className="hero__scroll-line" />
              <span>Scroll</span>
            </div>
          </div>

          {/* Featured In */}
          <div className="hero__lower">
            <div className="container">
              <div className="hero__lower-inner">
                <span className="hero__featured-label">Featured In</span>
                <div className="hero__featured-divider" aria-hidden="true" />
                <div className="hero__logos">
                  {mediaLogos.map((logo) => (
                    <span key={logo} className="hero__logo-text">{logo}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            ABOUT SECTION
            ============================================================ */}
        <section className="about" id="about-section">
          <div className="container">
            <div className="about__inner">
              <ScrollReveal direction="left">
                <div className="about__image-wrap">
                  <div className="about__image-frame">
                    <Image
                      src="/images/hero-portrait.jpg"
                      alt="Divyansh Dubey - Entrepreneur and Business Strategist"
                      width={600}
                      height={700}
                      style={{ width: '100%', height: '600px', objectFit: 'cover' }}
                      priority
                    />
                  </div>
                  <div className="about__image-decoration" aria-hidden="true" />
                  <div className="about__image-decoration-2" aria-hidden="true" />
                  <div className="about__stats">
                    {stats.map((stat) => (
                      <div key={stat.label} className="about__stat">
                        <div className="about__stat-number">{stat.number}</div>
                        <div className="about__stat-label">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="about__content">
                  <div className="about__eyebrow">About Me</div>
                  <h2 className="about__title">
                    Hi, I&apos;m<br />
                    <mark>Divyansh</mark><br />
                    Dubey.
                  </h2>
                  <div className="about__divider" />
                  <p className="about__text">
                    As a successful entrepreneur and investor, I know first-hand that <em>doing great things requires making great money.</em> When you step into your worth and start earning your potential, you not only change your life, but you can start to change the lives of others.
                  </p>
                  <p className="about__text">
                    I&apos;ve helped countless clients earn six and seven figure incomes. Today, <em>I&apos;m here to empower you to write your own success story, earn as much as you can, and use it to do extraordinary things in the world.</em>
                  </p>
                  <div className="about__actions">
                    <Link href="/about" className="btn btn-primary" id="about-learn-more-btn">
                      More About Me
                    </Link>
                    <Link href="/contact" className="btn btn-outline" id="about-contact-btn">
                      Let&apos;s Connect
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ============================================================
            PODCAST SECTION
            ============================================================ */}
        <section className="podcast" id="podcast-section">
          <div className="container">
            <div className="podcast__inner">
              <ScrollReveal direction="left">
                <div className="podcast__info">
                  <div className="podcast__eyebrow">Now Streaming</div>
                  <h2 className="podcast__title">
                    THE<br />
                    <span>DIVYANSH</span><br />
                    <span>DUBEY</span><br />
                    SHOW
                  </h2>

                  <div className="podcast__cover">
                    <Image
                      src="/images/podcast-cover.jpg"
                      alt="The Divyansh Dubey Show - Podcast Cover"
                      width={200}
                      height={200}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>

                  <p className="podcast__description">
                    As an entrepreneur and investor, I believe that when ambitious people make great money, they do extraordinary things! Throughout the episodes, I&apos;ll provide you with every tool you need to build an <em>unapologetically successful business.</em>
                  </p>
                  <p className="podcast__description">
                    You&apos;ll get the insider tips, tools, and incredible stories to <em>grow your business, your wealth, and your impact.</em>
                  </p>

                  <div className="podcast__cta">
                    <Link href="/podcast" className="btn btn-primary" id="podcast-tune-in-btn">
                      Tune In
                    </Link>
                    <Link href="/podcast" className="btn btn-gold-outline" id="podcast-view-all-btn">
                      View All Episodes
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="podcast__episodes">
                  <div className="podcast__episodes-header">
                    <div className="podcast__episodes-line" aria-hidden="true" />
                    <span className="podcast__episodes-label">Recent Episodes — Listen Now</span>
                  </div>

                  {episodes.map((ep, i) => (
                    <Link
                      key={ep.num}
                      href="/podcast"
                      className="episode-item"
                      id={`episode-item-${i + 1}`}
                    >
                      <div className="episode__number">{ep.num}</div>
                      <div className="episode__content">
                        <div className="episode__title">{ep.title}</div>
                        <div className="episode__meta">{ep.duration}</div>
                      </div>
                      <div className="episode__play-btn" aria-label={`Play ${ep.title}`}>
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ============================================================
            TESTIMONIALS SECTION
            ============================================================ */}
        <section className="testimonials" id="testimonials-section">
          <div className="container">
            <ScrollReveal>
              <div className="section-header">
                <div className="section-header__eyebrow">Success Stories</div>
                <h2 className="section-header__title">
                  What Our Community Members<br />Are Saying
                  <span className="underline-decoration" aria-hidden="true" />
                </h2>
              </div>
            </ScrollReveal>

            <div className="testimonials__grid">
              {testimonials.map((t, i) => (
                <ScrollReveal key={t.author} delay={i * 100}>
                  <div className="testimonial-card">
                    <div className="testimonial-card__avatar">
                      <div style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, var(--color-gold-dark), var(--color-orange))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.2rem',
                        color: 'white',
                        letterSpacing: '0.05em',
                      }}>
                        {t.initials}
                      </div>
                    </div>
                    <div className="testimonial-card__stars" aria-label="5 stars">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="testimonial-card__text">&ldquo;{t.text}&rdquo;</p>
                    <div className="testimonial-card__author">{t.author}</div>
                    <div className="testimonial-card__role">{t.role}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            PROGRAMS SECTION
            ============================================================ */}
        <section className="programs" id="programs-section">
          <div className="container">
            <ScrollReveal>
              <div className="section-header">
                <div className="section-header__eyebrow">Work With Divyansh</div>
                <h2 className="section-header__title">
                  Programs
                  <span className="underline-decoration" aria-hidden="true" />
                </h2>
              </div>
            </ScrollReveal>

            <div className="programs__grid">
              {programs.map((program, i) => (
                <ScrollReveal key={program.title} delay={i * 100}>
                  <Link href={program.href} className="program-card" id={`program-card-${i + 1}`}>
                    <Image
                      src={program.image}
                      alt={program.title}
                      width={600}
                      height={400}
                      className="program-card__image"
                    />
                    <div className="program-card__overlay">
                      <div className="program-card__tag">{program.tag}</div>
                      <h3 className="program-card__title">{program.title}</h3>
                      <p className="program-card__description">{program.description}</p>
                      <span className="program-card__btn">
                        Learn More
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <div className="programs__more">
              <Link href="/programs" className="btn btn-gold-outline btn-lg" id="view-all-programs-btn">
                View All Programs
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================
            INSTAGRAM SECTION
            ============================================================ */}
        <section className="social-section" id="social-section">
          <div className="container">
            <div className="social-section__header">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="social-section__title">
                    Keep up<br /><span>with Divyansh.</span>
                  </h2>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div>
                  <p className="social-section__handle">
                    Follow along on Instagram:{' '}
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" id="instagram-follow-link">
                      @divyanshdubey
                    </a>
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <div className="social-grid">
                {[
                  '💡', '🚀', '💰', '🎯',
                  '📈', '🌟', '💪', '🎙️',
                ].map((emoji, i) => (
                  <a
                    key={i}
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-post"
                    aria-label={`View Instagram post ${i + 1}`}
                    id={`instagram-post-${i + 1}`}
                  >
                    <div className="social-post__placeholder">{emoji}</div>
                    <div className="social-post__overlay">
                      <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
