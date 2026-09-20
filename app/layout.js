import './globals.css';

export const metadata = {
  title: 'DIVYANSH DUBEY // Entrepreneur, Investor & Business Strategist',
  description: 'Divyansh Dubey - Entrepreneur, Investor & Business Strategist. I help ambitious people build profitable businesses and create lasting impact.',
  keywords: 'Divyansh Dubey, entrepreneur, business strategist, investor, podcast, coaching, mastermind',
  openGraph: {
    title: 'DIVYANSH DUBEY // Entrepreneur & Business Strategist',
    description: 'When ambitious people make great money, they do extraordinary things.',
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
