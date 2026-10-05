import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Roustabout - Docker Management Utility & Fast CLI',
  description:
    'A unified, lightweight CLI for Docker container management, interactive shells, log streaming, and safe pruning.',
  keywords: [
    'Docker',
    'Docker CLI',
    'Containers',
    'DevOps',
    'Container Management',
    'Docker Prune',
    'Roustabout',
  ],
  other: {
    'google-adsense-account': 'ca-pub-8973108060277483',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L1H2CLH4R3"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-L1H2CLH4R3');
`,
          }}
        />
        <meta name="google-adsense-account" content="ca-pub-8973108060277483" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8973108060277483"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="bg-slate-950 text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
