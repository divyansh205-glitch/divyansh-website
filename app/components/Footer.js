import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://instagram.com/divyansh.24', label: 'Instagram', icon: 'IG' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div>
            <div className="footer__brand-name">DIVYANSH DUBEY</div>
            <div className="footer__brand-tagline">Entrepreneur &amp; Community Builder</div>
            <p className="footer__brand-desc">
              A community for learning about product-based direct selling through customer service, practical training, and mentorship.
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
            <div className="footer__col-title">Connect</div>
            <div className="footer__links">
              <a href="mailto:divyanshdubey938@gmail.com" className="footer__link">divyanshdubey938@gmail.com</a>
              <Link href="/contact" className="footer__link">Book a Call</Link>
              {/* <Link href="/programs" className="footer__link">How It Works</Link> */}
              <Link href="/contact" className="footer__link">Ask a Question</Link>
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
