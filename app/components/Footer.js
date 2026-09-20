import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/podcast', label: 'Podcast' },
    { href: '/programs', label: 'Programs' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const programLinks = [
    { href: '/programs', label: 'Elite Mastermind' },
    { href: '/programs', label: 'Business Coaching' },
    { href: '/programs', label: 'Strategy Sessions' },
    { href: '/programs', label: 'Online Courses' },
    { href: '/programs', label: 'Group Coaching' },
  ];

  const socialLinks = [
    { href: 'https://instagram.com', label: 'Instagram', icon: 'IG' },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'IN' },
    { href: 'https://youtube.com', label: 'YouTube', icon: 'YT' },
    { href: 'https://twitter.com', label: 'Twitter', icon: 'TW' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div>
            <div className="footer__brand-name">DIVYANSH DUBEY</div>
            <div className="footer__brand-tagline">Entrepreneur &amp; Business Strategist</div>
            <p className="footer__brand-desc">
              When ambitious people make great money, they do extraordinary things.
              I help visionary entrepreneurs build profitable businesses and create lasting impact.
            </p>
            <div className="footer__social">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  id={`footer-${link.label.toLowerCase()}-link`}
                >
                  <span style={{ fontSize: '0.6rem', fontWeight: '700', letterSpacing: '0.05em' }}>
                    {link.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="footer__col-title">Navigation</div>
            <div className="footer__links">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer__link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="footer__col-title">Programs</div>
            <div className="footer__links">
              {programLinks.map((link) => (
                <Link key={link.label} href={link.href} className="footer__link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="footer__col-title">Connect</div>
            <div className="footer__links">
              <a href="mailto:hello@divyanshdubey.com" className="footer__link">hello@divyanshdubey.com</a>
              <Link href="/contact" className="footer__link">Book a Call</Link>
              <Link href="/podcast" className="footer__link">Listen to Podcast</Link>
              <Link href="/contact" className="footer__link">Speaking Inquiries</Link>
            </div>
            <div style={{ marginTop: 'var(--space-6)' }}>
              <Link href="/contact" className="btn btn-gold-outline btn-sm">
                Work With Me
              </Link>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Divyansh Dubey. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <Link href="/privacy" className="footer__bottom-link">Privacy Policy</Link>
            <Link href="/terms" className="footer__bottom-link">Terms of Service</Link>
            <Link href="/disclaimer" className="footer__bottom-link">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
