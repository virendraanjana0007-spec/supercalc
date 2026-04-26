import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SuperCalc - 60+ Free Online Calculators | Finance, Health, Student Tools",
  description: "Free online calculators for EMI, GST, BMI, Age, SIP, Loan, and 60+ more tools. Fast, accurate, and beautiful calculators for every need.",
  keywords: "calculator, online calculator, EMI calculator, GST calculator, BMI calculator, age calculator, finance tools, student tools",
  authors: [{ name: "SuperCalc" }],
  verification: {
    google: "baPv3Hywy3BPr3L4lF7G7vdZhVL5l3_XZKmaAPAhE_o",
  },
  openGraph: {
    title: "SuperCalc - Free Online Calculators",
    description: "60+ Free Online Calculators for Every Need",
    type: "website",
    url: "https://supercalc-dun.vercel.app/",
  },
  other: {
    'google-site-verification': 'baPv3Hywy3BPr3L4lF7G7vdZhVL5l3_XZKmaAPAhE_o',
    'google-adsense-account': 'ca-pub-8857627341562937',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0PS3WN2K75"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0PS3WN2K75');
            `,
          }}
        />
        
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8857627341562937"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-gradient-main">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
