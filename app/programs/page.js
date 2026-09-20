import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export const metadata = {
  title: 'Programs | Divyansh Dubey - Entrepreneur Coaching & Mastermind',
  description: 'Explore Divyansh Dubey programs — Elite Mastermind, Business Coaching, Strategy Sessions, and online courses for ambitious entrepreneurs.',
};

const programs = [
  {
    image: '/images/speaking.jpg',
    badge: 'Flagship',
    title: 'Elite Entrepreneur Mastermind',
    description: 'Take your business into the elite territory of multiple seven figures and beyond. This is our most exclusive, high-touch program designed for serious entrepreneurs.',
    features: [
      'Monthly group coaching calls with Divyansh',
      'Private community of elite entrepreneurs',
      'VIP in-person retreat (twice yearly)',
      'Unlimited access to all resources and frameworks',
      'Accountability partnership and peer support',
    ],
    href: '/contact',
    cta: 'Apply Now',
  },
  {
    image: '/images/about.jpg',
    badge: 'Group Coaching',
    title: 'Business Accelerator',
    description: 'Get unlimited access to coaching, mentorship, and a like-minded community. For businesses under ₹50L who want to scale to the next level.',
    features: [
      'Weekly group coaching sessions',
      'Access to private community',
      'Monthly curriculum and action plans',
      'Guest expert trainings',
      'On-demand video library',
    ],
    href: '/contact',
    cta: 'Join Now',
  },
  {
    image: '/images/hero-portrait.jpg',
    badge: '1-on-1',
    title: 'Strategy Sessions',
    description: 'Lock arms with Divyansh in a high-impact 90-minute session and build an incredible roadmap to your next level in business.',
    features: [
      '90-minute deep-dive strategy call',
      'Personalized business audit and assessment',
      'Custom action plan and next steps',
      'Priority follow-up support',
      'Recording of the full session',
    ],
    href: '/contact',
    cta: 'Book a Session',
  },
  {
    image: '/images/podcast-cover.jpg',
    badge: 'Online Course',
    title: 'The Money Principles',
    description: 'Maximize your earning potential by mastering your relationship with money. This 5-module course rewires your money mindset for abundance.',
    features: [
      '5 in-depth video modules',
      'Workbooks and implementation guides',
      'Private Facebook community access',
      'Lifetime access to all content',
      'Regular content updates',
    ],
    href: '/contact',
    cta: 'Enroll Now',
  },
];

export default function ProgramsPage() {
  return (
    <>
      <div className="announcement-bar">
        <span>LIMITED SPOTS — <strong>ELITE MASTERMIND</strong> APPLICATIONS NOW OPEN!</span>
        <Link href="/contact" id="programs-announcement-link">APPLY NOW →</Link>
      </div>
      <Navbar />

      <main id="programs-main">
        {/* Page Header */}
        <div className="page-header">
          <div className="container">
            <div className="page-header__eyebrow">Work With Divyansh</div>
            <h1 className="page-header__title">PROGRAMS</h1>
          </div>
        </div>

        {/* Programs Grid */}
        <section className="section section--dark programs-page" id="all-programs">
          <div className="container">
            <ScrollReveal>
              <div className="section-header" style={{ marginBottom: 'var(--space-12)' }}>
                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-white-70)', maxWidth: '620px', margin: '0 auto', lineHeight: 1.8 }}>
                  Whether you&apos;re just starting or ready to scale to seven figures, there&apos;s a program designed exactly for where you are and where you want to go.
                </p>
              </div>
            </ScrollReveal>

            <div className="programs-detailed-grid">
              {programs.map((program, i) => (
                <ScrollReveal key={program.title} delay={i * 80}>
                  <div className="program-detailed-card">
                    <div className="program-detailed-card__image-wrap">
                      <Image
                        src={program.image}
                        alt={program.title}
                        width={600}
                        height={300}
                        className="program-detailed-card__image"
                      />
                      <div className="program-detailed-card__badge">{program.badge}</div>
                    </div>
                    <div className="program-detailed-card__body">
                      <h2 className="program-detailed-card__title">{program.title}</h2>
                      <p className="program-detailed-card__desc">{program.description}</p>
                      <div className="program-detailed-card__features">
                        {program.features.map((f) => (
                          <div key={f} className="program-feature">{f}</div>
                        ))}
                      </div>
                      <Link
                        href={program.href}
                        className="btn btn-primary w-full"
                        style={{ justifyContent: 'center' }}
                        id={`program-cta-${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {program.cta}
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Not Sure CTA */}
        <section style={{
          background: 'var(--color-dark-2)',
          padding: 'var(--space-20) 0',
          textAlign: 'center',
          borderTop: '1px solid var(--color-white-10)',
        }}>
          <div className="container">
            <ScrollReveal>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '0.03em', textTransform: 'uppercase', color: 'var(--color-white)', marginBottom: 'var(--space-5)' }}>
                NOT SURE WHICH PROGRAM IS RIGHT FOR YOU?
              </div>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-white-70)', marginBottom: 'var(--space-8)', maxWidth: '540px', margin: '0 auto var(--space-8)' }}>
                Let&apos;s have a conversation. Book a free discovery call and I&apos;ll help you identify the best path forward.
              </p>
              <Link href="/contact" className="btn btn-primary btn-lg" id="programs-discovery-call-btn">
                Book a Free Discovery Call
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
