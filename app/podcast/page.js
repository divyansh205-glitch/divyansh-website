import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export const metadata = {
  title: 'The Divyansh Dubey Show | Entrepreneur & Business Podcast',
  description: 'Listen to The Divyansh Dubey Show — a podcast for ambitious entrepreneurs ready to build profitable businesses and create extraordinary impact.',
};

const allEpisodes = [
  { num: 'EP.042', title: 'How to Build a 7-Figure Business From Scratch', date: 'Sep 12, 2026', duration: '38 min', desc: 'In this episode, I break down the exact framework I used to build my first 7-figure business from absolutely nothing.' },
  { num: 'EP.041', title: 'The Mindset Shift That Changed Everything for My Business', date: 'Sep 5, 2026', duration: '31 min', desc: 'Discover the single mindset shift that allowed me to stop thinking like an employee and start thinking like a true CEO.' },
  { num: 'EP.040', title: 'Why Your Network Is Your Greatest Asset', date: 'Aug 29, 2026', duration: '44 min', desc: 'I share the exact networking strategies that led to my biggest business breakthroughs and partnerships.' },
  { num: 'EP.039', title: 'How to Attract High-Ticket Clients Consistently', date: 'Aug 22, 2026', duration: '27 min', desc: 'Stop chasing clients. Learn the positioning and value-delivery framework that makes premium clients come to you.' },
  { num: 'EP.038', title: 'The Secret to Scaling Without Burning Out', date: 'Aug 15, 2026', duration: '36 min', desc: 'Growth without boundaries leads to burnout. I share the systems and boundaries that allowed me to scale sustainably.' },
  { num: 'EP.037', title: 'Building Multiple Streams of Income as an Entrepreneur', date: 'Aug 8, 2026', duration: '42 min', desc: 'Diversification is key to financial freedom. Learn how to build multiple income streams that support each other.' },
  { num: 'EP.036', title: 'The Power of a Strong Personal Brand in 2026', date: 'Aug 1, 2026', duration: '33 min', desc: 'Your personal brand is your most valuable business asset. Here is how to build one that attracts opportunity.' },
  { num: 'EP.035', title: 'How to Make Better Business Decisions Faster', date: 'Jul 25, 2026', duration: '29 min', desc: 'Indecision kills momentum. I share the decision-making frameworks I use to move fast and with confidence.' },
];

export default function PodcastPage() {
  const platforms = ['Apple Podcasts', 'Spotify', 'Google Podcasts', 'Amazon Music'];

  return (
    <>
      <div className="announcement-bar">
        <span>NEW EPISODE EVERY WEEK — <strong>SUBSCRIBE SO YOU NEVER MISS OUT!</strong></span>
        <Link href="#episodes" id="podcast-announcement-link">LISTEN NOW →</Link>
      </div>
      <Navbar />

      <main id="podcast-main">
        {/* Page Header */}
        <div className="page-header">
          <div className="container">
            <div className="page-header__eyebrow">Audio Coaching</div>
            <h1 className="page-header__title">THE PODCAST</h1>
          </div>
        </div>

        {/* Featured / Intro Section */}
        <section className="section section--dark-2 podcast-page__featured">
          <div className="container">
            <div className="podcast-page__featured-inner">
              <ScrollReveal direction="left">
                <div>
                  <Image
                    src="/images/podcast-cover.jpg"
                    alt="The Divyansh Dubey Show"
                    width={400}
                    height={400}
                    style={{ width: '100%', maxWidth: '380px', height: 'auto', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div>
                  <div className="podcast__eyebrow">Now Streaming</div>
                  <h2 className="podcast__title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                    THE DIVYANSH<br />
                    <span>DUBEY SHOW</span>
                  </h2>
                  <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-white-70)', lineHeight: 1.8, marginBottom: 'var(--space-5)' }}>
                    As an entrepreneur and investor, I believe that when ambitious people make great money, they do extraordinary things! Each week, I bring you raw, honest conversations and actionable strategies to help you build the business and life you deserve.
                  </p>
                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-white-60)', lineHeight: 1.8, marginBottom: 'var(--space-8)' }}>
                    From insider secrets of successful entrepreneurs to proven frameworks for growth — this podcast will empower you to earn more, give more, and live more.
                  </p>
                  <div style={{ marginBottom: 'var(--space-6)' }}>
                    <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-white-50)', marginBottom: 'var(--space-3)' }}>
                      Listen On
                    </div>
                    <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                      {platforms.map((p) => (
                        <a
                          key={p}
                          href="#"
                          className="btn btn-gold-outline btn-sm"
                          id={`platform-${p.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Episodes List */}
        <section className="section section--dark episodes-section" id="episodes">
          <div className="container">
            <ScrollReveal>
              <div className="section-header">
                <div className="section-header__eyebrow">All Episodes</div>
                <h2 className="section-header__title">
                  Recent Episodes
                  <span className="underline-decoration" />
                </h2>
              </div>
            </ScrollReveal>

            <div className="episodes-list">
              {allEpisodes.map((ep, i) => (
                <ScrollReveal key={ep.num} delay={i * 60}>
                  <div className="episode-item" id={`ep-list-${i + 1}`} tabIndex={0} role="article" aria-label={ep.title}>
                    <div className="episode__number">{ep.num}</div>
                    <div className="episode__content">
                      <div className="episode__title">{ep.title}</div>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-white-50)', lineHeight: 1.6, marginTop: '4px', maxWidth: '600px' }}>
                        {ep.desc}
                      </p>
                      <div className="episode__meta" style={{ marginTop: 'var(--space-2)' }}>
                        {ep.date} &bull; {ep.duration}
                      </div>
                    </div>
                    <div className="episode__play-btn" aria-label={`Play ${ep.title}`}>
                      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe CTA */}
        <section style={{
          background: 'var(--color-dark-2)',
          padding: 'var(--space-20) 0',
          textAlign: 'center',
          borderTop: '1px solid var(--color-white-10)',
        }}>
          <div className="container">
            <ScrollReveal>
              <div className="podcast__eyebrow" style={{ textAlign: 'center', display: 'block', marginBottom: 'var(--space-4)' }}>Never Miss an Episode</div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '0.03em', textTransform: 'uppercase', color: 'var(--color-white)', marginBottom: 'var(--space-5)' }}>
                SUBSCRIBE &amp; GROW
              </h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-white-70)', marginBottom: 'var(--space-8)', maxWidth: '500px', margin: '0 auto var(--space-8)' }}>
                New episodes drop every week. Subscribe on your favorite platform so you never miss a conversation.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary btn-lg" id="podcast-subscribe-btn">
                  Get Notified
                </Link>
                <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg" id="spotify-subscribe-link">
                  Listen on Spotify
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
