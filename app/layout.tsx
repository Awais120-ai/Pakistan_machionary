import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Pakistan HMTC | Heavy Machinery Training Center",
    template: "%s | Pakistan HMTC"
  },
  description:
    "Pakistan HMTC delivers hands-on heavy machinery and driving training for graders, excavators, loaders, cranes, forklifts, trailers, JCB, and cars. Train with skilled instructors and earn a certificate.",
  keywords: [
    "Pakistan HMTC",
    "heavy machinery training",
    "excavator training",
    "forklift training",
    "HTV",
    "grader",
    "crane",
    "JCB",
    "loader"
  ],
  icons: { icon: "/images/logo.jpg" },
  openGraph: {
    title: "Pakistan HMTC | Heavy Machinery Training Center",
    description: "Hands-on heavy machinery and driving training designed to build skilled, confident operators.",
    type: "website",
    images: ["/images/logo.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pakistan HMTC | Heavy Machinery Training Center",
    description: "Hands-on heavy machinery and driving training designed to build skilled, confident operators.",
    images: ["/images/logo.jpg"]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  alternateName: site.fullName,
  email: site.email,
  telephone: ["+923128616980", "+923419470579", "+923115092877"],
  sameAs: [site.facebook],
  areaServed: "Pakistan"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
