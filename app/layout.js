import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/Whatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: '%s | VTA Global Services',
    default: 'VTA Global Services - Visa, Attestation & Translation'
  },
  description: 'Visa, Attestation, and Translation Services',
  metadataBase: new URL('https://vtaglobal.in'),
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VTA Global Services",
    "url": "https://vtaglobal.in",
    "logo": "https://vtaglobal.in/favicon.ico",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service"
    }
  };
  return (
    <html lang="en">
      <body
        // ADDED 'overflow-x-hidden' HERE:
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white flex flex-col min-h-screen overflow-x-hidden`}
      >
        {/* Wrapper to ensure content doesn't touch edges on mobile, but allows full-width backgrounds */}
        <div className="w-full overflow-x-hidden">
          {/* JSON-LD Organization structured data for SEO / Sitelinks */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Navbar />
          
          <main className="grow">
            {children}
          </main>
          
          <Footer/>
          <WhatsAppButton/>
        </div>
      </body>
    </html>
  );
}