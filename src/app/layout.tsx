import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import Navigation from "../components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sameer-dev.online'),
  title: {
    default: "Sameer Dev | Full-Stack MERN + Next.js Developer",
    template: "%s | Sameer Dev"
  },
  description: "Passionate full-stack developer specializing in MERN stack and Next.js. Creating modern, scalable web applications with exceptional user experiences.",
  keywords: [
    "Full-Stack Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Web Development",
    "Frontend",
    "Backend",
    "JavaScript"
  ],
  authors: [{ name: "Sameer Dev" }],
  creator: "Sameer Dev",
  publisher: "Sameer Dev",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sameer-dev.online/",
    title: "Sameer Dev | Full-Stack MERN + Next.js Developer",
    description: "Passionate full-stack developer specializing in MERN stack and Next.js. Creating modern, scalable web applications with exceptional user experiences.",
    siteName: "Sameer Dev Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sameer Dev - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameer Dev | Full-Stack MERN + Next.js Developer",
    description: "Passionate full-stack developer specializing in MERN stack and Next.js. Creating modern, scalable web applications with exceptional user experiences.",
    images: ["/og-image.jpg"],
    creator: "@sameerdev",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
