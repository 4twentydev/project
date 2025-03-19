'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navigation />
          <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}