import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export const metadata = {
  title: 'How It Works | Divyansh Dubey',
  description: 'Explore the product-led business model, customer-first approach, learning, and mentorship offered through the community.',
};

const programs = [
  {
    image: '/images/speaking.jpg',
    badge: 'Products',
    title: 'Start with Product Knowledge',
    description: 'Get to know the available wellness, personal care, home, and lifestyle products before deciding what you may want to recommend.',
    features: [
      'Review product details and current pricing',
      'Understand availability in your market',
      'Ask questions before making a purchase',
      'Focus on products that meet real customer needs',
    ],
    href: '/contact',
    cta: 'Ask About Products',
  },
  {
    image: '/images/about.jpg',
    badge: 'Training',
    title: 'Learn the Business Basics',
    description: 'Understand how customer sales, costs, and the written compensation plan work so you can make an informed decision.',
    features: [
      'Review the current compensation terms',
      'Learn about customer service and follow-up',
      'Understand potential costs and expenses',
      'Set realistic expectations for your effort',
    ],
    href: '/contact',
    cta: 'Ask About Training',
  },
  {
    image: '/images/hero-portrait.jpg',
    badge: 'Mentorship',
    title: 'Get Guidance as You Learn',
    description: 'Talk through your questions with a mentor and get support as you learn the products and the day-to-day fundamentals.',
    features: [
      'Ask questions in a one-to-one conversation',
      'Learn how to explain products accurately',
      'Practise clear, respectful conversations',
      'Get ongoing guidance from the community',
    ],
    href: '/contact',
    cta: 'Talk With a Mentor',
  },
  {
    image: '/images/speaking1.jpg',
    badge: 'Community',
    title: 'Grow with a Team',
    description: 'Build practical skills with peers who value consistency, responsible product sharing, and helping one another learn.',
    features: [
      'Learn from other people’s experience',
      'Share ideas and practise together',
      'Build at a pace that suits your circumstances',
      'Develop leadership skills over time',
    ],
    href: '/contact',
    cta: 'Ask About the Community',
  },
];

export default function ProgramsPage() {
  return (
    <>
      <div className="announcement-bar">
        <span>WANT TO KNOW MORE? <strong>START WITH A CONVERSATION.</strong></span>
        <Link href="/contact" id="programs-announcement-link">ASK A QUESTION →</Link>
      </div>
      <Navbar />

      <main id="programs-main">
        {/* Page Header */}
        <div className="page-header">
          <div className="container">
            <h1 className="page-header__title">HOW IT WORKS</h1>
          </div>
        </div>

        {/* Programs Grid */}
        <section className="section section--dark programs-page" id="all-programs">
          <div className="container">
            <ScrollReveal>
              <div className="section-header" style={{ marginBottom: 'var(--space-12)' }}>
                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-white-70)', maxWidth: '620px', margin: '0 auto', lineHeight: 1.8 }}>
                  This is an independent, product-led business opportunity—not a job or a guaranteed income. Take time to understand the products, costs, and written compensation terms before deciding whether it is right for you.
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
                QUESTIONS BEFORE YOU DECIDE?
              </div>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-white-70)', marginBottom: 'var(--space-8)', maxWidth: '540px', margin: '0 auto var(--space-8)' }}>
                Ask for a straightforward explanation of the products, how the business works, and what getting started may involve. There is no pressure to join.
              </p>
              <Link href="/contact" className="btn btn-primary btn-lg" id="programs-discovery-call-btn">
                Talk With a Mentor
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
