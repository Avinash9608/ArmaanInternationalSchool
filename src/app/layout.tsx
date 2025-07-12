import type { Metadata } from 'next';
import './globals.css';
import { AppHeader } from '@/components/layout/header';
import { AppFooter } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Lora, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const lora = Lora({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '700'],
  variable: '--font-lora',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-grotesk',
});


export const metadata: Metadata = {
  title: 'Armaan International School',
  description: 'Empowering Young Minds in Sonmai, Bihar. Admissions open for classes 1-8.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className={cn('font-body antialiased', lora.variable, spaceGrotesk.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppHeader />
          <main>{children}</main>
          <AppFooter />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
