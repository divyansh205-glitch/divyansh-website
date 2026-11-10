import './globals.css';

export const metadata = {
  title: 'Divyansh Dubey',
  description: 'Learn about a product-led business opportunity built around customer value, practical training, mentorship, and community.',
  keywords: 'Divyansh Dubey, direct selling, product business, mentorship, community',
  openGraph: {
    title: 'Divyansh Dubey',
    description: 'Explore a product-led business opportunity with practical learning and community support.',
    type: 'website',
    url: 'https://divyansh-dubey.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
