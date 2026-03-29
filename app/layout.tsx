import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anshul Jagota — Backend Engineer & System Architect',
  description:
    'Backend Engineer specializing in scalable distributed systems, microservices, and low-level programming. Building the invisible infrastructure that powers modern applications.',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="audio" href="/audio/ambient.mp3" />
      </head>
      <body>{children}</body>
    </html>
  );
}
