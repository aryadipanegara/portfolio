import { AuroraBackground } from "@/components/ui/aurora-background";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aryadipanegara.com"),
  title: {
    default: "Arya Dipanegara | Frontend development",
    template: "%s | Arya Dipanegara",
  },
  description:
    "Arya Dipanegara is a passionate full stack developer and UI/UX designer, crafting innovative web solutions with cutting-edge technologies. Explore my portfolio showcasing expertise in React, Node.js, and modern web development practices.",
  keywords: [
    "Full Stack Developer",
    "Frontend Development",
    "Software Engineer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Aurora Dipanegara",
    "UI/UX Designer",
    "Web Development",
    "React",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Arya Dipanegara",
  ],
  authors: [{ name: "Arya Dipanegara", url: "https://www.aryadipanegara.com" }],
  creator: "Arya Dipanegara",
  publisher: "Arya Dipanegara",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  applicationName: "Arya Dipanegara Portfolio",
  openGraph: {
    type: "website",
    url: "https://www.aryadipanegara.com",
    title: "Arya Dipanegara | Frontend development",
    description:
      "Discover the portfolio of Arya Dipanegara, a skilled full stack developer and UI/UX designer. Explore innovative web solutions and cutting-edge projects.",
    siteName: "Arya Dipanegara Portfolio",
    images: [
      {
        url: "https://www.aryadipanegara.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arya Dipanegara - Frontend development",
      },
      {
        url: "https://www.aryadipanegara.com/og-image-alt.jpg",
        width: 1200,
        height: 600,
        alt: "Arya Dipanegara's Latest Projects",
      },
    ],
    locale: "en_US",
    countryName: "Indonesia",
  },
  twitter: {
    card: "summary_large_image",
    site: "@aryadipanegara",
    creator: "@aryadipanegara",
    title: "Arya Dipanegara | Innovative Web Solutions",
    description:
      "Full stack developer and UI/UX designer crafting next-gen web experiences. Explore my portfolio for cutting-edge projects and insights.",
    images: ["https://www.aryadipanegara.com/twitter-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    me: ["aryadipanegara@email.com", "https://twitter.com/aryadipanegara"],
  },
  alternates: {
    canonical: "https://www.aryadipanegara.com",
    languages: {
      "en-US": "https://www.aryadipanegara.com/en-US",
      "id-ID": "https://www.aryadipanegara.com/id-ID",
    },
  },
  category: "Technology",
  classification: "Web Development, UI/UX Design",
  other: {
    "dc.creator": "Arya Dipanegara",
    "dc.description":
      "Portfolio of Arya Dipanegara, showcasing expertise in full stack development and UI/UX design.",
    "dc.publisher": "Arya Dipanegara",
    "dc.title": "Arya Dipanegara Portfolio",
    "dc.language": "en-US",
    "dc.rights": "© 2023 Arya Dipanegara. All rights reserved.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuroraBackground>
          <main className="min-h-screen p-8">{children}</main>
        </AuroraBackground>
      </body>
    </html>
  );
}
