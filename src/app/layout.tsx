import './globals.css';
import type { Metadata } from 'next';

import { cn } from '@/lib/utils';
import { Inter as FontSans } from 'next/font/google';
import { Header } from '@/components/global/Header';
import ProgressBarProvider from '@/components/providers/ProgresBarProvider';
import AuthProvider from '@/components/providers/AuthProvider';
import ThemeProvider from '@/components/providers/ThemeProvider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased flex flex-col w-full',
          fontSans.variable,
        )}
      >
        <ProgressBarProvider>
          <AuthProvider>
            <ThemeProvider>
              <Header />
              {children}
            </ThemeProvider>
          </AuthProvider>
        </ProgressBarProvider>
      </body>
    </html>
  );
}
