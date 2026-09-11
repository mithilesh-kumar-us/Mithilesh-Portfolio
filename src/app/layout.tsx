import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PortfolioWrapper } from '@/components/ui/PortfolioWrapper';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Mithilesh Kumar U S | Applied AI & Full Stack Engineer',
  description:
    'Portfolio of Mithilesh Kumar U S — B.Tech student at Amrita School of Engineering, ex-iXp Intern at SAP Labs. Building agentic AI systems, LLM tooling, and full-stack applications.',
  keywords: [
    'Mithilesh Kumar',
    'Full Stack Developer',
    'AI Engineer',
    'Applied AI',
    'LLM Developer',
    'MCP',
    'RAG',
    'React Developer',
    'Python',
    'Node.js',
    'FastAPI',
    'SAP Labs',
    'Amrita',
    'Portfolio',
  ],
  authors: [{ name: 'Mithilesh Kumar U S' }],
  creator: 'Mithilesh Kumar U S',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Mithilesh Kumar | Portfolio',
    title: 'Mithilesh Kumar U S | Applied AI & Full Stack Engineer',
    description:
      'Portfolio of Mithilesh Kumar U S — ex-iXp Intern at SAP Labs, B.Tech @ Amrita. Applied AI & full-stack engineer.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Mithilesh Kumar Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mithilesh Kumar U S | Applied AI & Full Stack Engineer',
    description:
      'Portfolio of Mithilesh Kumar U S — ex-iXp Intern at SAP Labs, B.Tech @ Amrita.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="min-h-screen font-sans">
        <PortfolioWrapper>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </PortfolioWrapper>
      </body>
    </html>
  );
}
