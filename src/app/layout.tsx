import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // metadataBase: new URL("https://www.aryadipanegara.com"),
  title: {
    default: "Arya Dipanegara | Frontend Developer",
    template: "%s | Arya Dipanegara",
  },
  description:
    "Arya Dipanegara is a passionate frontend developer, crafting innovative web solutions with cutting-edge technologies. Explore my portfolio showcasing expertise in React, JavaScript, and modern web development practices.",
  keywords: [
    "Frontend Developer",
    "Software Engineer",
    "React Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Arya Dipanegara",
    "Web Development",
    "React",
    "JavaScript",
    "TypeScript",
  ],
  authors: [
    { name: "Arya Dipanegara", url: "https://aryagunawann.vercel.app/" },
  ],
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
  twitter: {
    card: "summary_large_image",
    site: "@aryadipanegara",
    creator: "@aryadipanegara",
    title: "Arya Dipanegara | Innovative Web Solutions",
    description:
      "Frontend developer crafting next-gen web experiences. Explore my portfolio for cutting-edge projects and insights.",
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
  classification: "Web Development",
  other: {
    "dc.creator": "Arya Dipanegara",
    "dc.description":
      "Portfolio of Arya Dipanegara, showcasing expertise in frontend development.",
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
        <main className="min-h-screen p-4 bg-black">{children}</main>
      </body>
    </html>
  );
}
