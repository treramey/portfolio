import localFont from 'next/font/local';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

import { Layout } from '@/components/layout';

import { cn } from '@/lib/utils';
import '@/styles/globals.css';

const nbArchitect = localFont({
  src: [
    {
      path: '../../public/fonts/NBArchitektStd/NBArchitektStd-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NBArchitektStd/NBArchitektStd-Regular.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NBArchitektStd/NBArchitektStd-Light.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-nb-architect',
});

const nbArchitectNeue = localFont({
  src: [
    {
      path: '../../public/fonts/NBArchitektStd/NBArchitektStdNeue-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NBArchitektStd/NBArchitektStdNeue-Regular.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NBArchitektStd/NBArchitektStdNeue-Light.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-nb-architect-neue',
});

export const metadata = {
  title: 'treramey.com',
  description: "Trevor Ramey's personal website",
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${GeistSans.variable} ${GeistMono.variable} ${nbArchitect.variable} ${nbArchitectNeue.variable}`,
          'overscroll-x-auto bg-background font-sans selection:bg-black selection:text-white dark:bg-[#0F0F0F] dark:selection:bg-white dark:selection:text-black',
        )}
      >
        <Layout>
          <main className="relative min-h-screen cursor-default text-lg tracking-wide antialiased">
            <div className="relative z-0 mx-auto flex max-w-[432px] px-4 pb-[12rem] sm:max-w-screen-sm sm:px-[2.875rem] sm:pb-[32.25rem] md:max-w-[1000px] md:space-x-8 md:pl-10 md:pr-[3.75rem]">
              {children}
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[8rem] w-full bg-[url('/images/bg-gradient.svg')] bg-[length:10px_240px] bg-repeat-x sm:h-[12.5rem] sm:opacity-60"></div>
            <div className="pointer-events-none fixed inset-0 z-40 h-screen w-full bg-[url('/images/crt-line.svg')] bg-size-4px bg-repeat opacity-30 mix-blend-overlay"></div>
          </main>
        </Layout>
      </body>
    </html>
  );
}
