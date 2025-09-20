import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import Navigation from "../components/Navigation";
import Script from "next/script";
import ClientGTM from "../components/ClientGTM";
import little_logo from "../../public/little_logo_2.png";

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
    default: "Sameer Dev | Professional Websites for Coaches & Trainers",
    template: "%s | Sameer Dev"
  },
   icons: {
    icon: little_logo.src,
    
  },
  description: "Transform your coaching business with a professional website. We specialize in creating conversion-focused websites for coaches and trainers that attract more clients and grow revenue.",
  keywords: [
    "Coach Website Design",
    "Trainer Website Development",
    "Coaching Business Website",
    "Professional Coach Website",
    "Life Coach Website",
    "Business Coach Website",
    "Fitness Trainer Website",
    "Coaching Website Builder",
    "Coach Marketing Website",
    "Coaching Business Growth"
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
    title: "Sameer Dev | Professional Websites for Coaches & Trainers",
    description: "Transform your coaching business with a professional website. We specialize in creating conversion-focused websites for coaches and trainers that attract more clients and grow revenue.",
    siteName: "Sameer Dev",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sameer Dev - Professional Websites for Coaches & Trainers",
      },
    ],
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
         {/* GTM Script */}
      <Script
        id="gtm-loader"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-MLTFP34J');
              `,
        }}
      />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={little_logo.src} />
      </head>
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
       {/* GTM No Script */}
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MLTFP34J"
              height="0" width="0" className={"hidden"}></iframe></noscript>
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          <Navigation />
          {children}
        </ThemeProvider>
          <ClientGTM />
      </body>
    </html>
  );
}
