import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Random Posts Generator",
  description: "Generated by Aarjav Jain using Next.js",
  authors: [{ name: "Aarjav Jain" }],
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Post",
    "Random",
    "Generator",
    "create posts",
    "random posts",
    "get posts",
  ],
  // icons: [{ rel: "icon", url: "/favicon.ico" }, { rel: "apple-touch-icon", url: "/apple-touch-icon.png" }, { rel: 'favicon', url: '/favicon.ico' }],
  twitter: {
    site: "@AarjavJain",
    card: "summary_large_image",
    images: "/logo.png",
    creator: "@AarjavJain",
    title: "Random Posts Generator",
    description: "Generated by Aarjav Jain using Next.js",
  },
  publisher: "Aarjav Jain",
  generator: "Next.js",
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  openGraph: {
    url: "https://random-posts-generator.vercel.app/",
    title: "Posts Generator",
    description: "Generated by Aarjav Jain using Next.js",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Random Posts Generator",
      },
    ],
    siteName: "Posts Generator",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen w-screen">
          <Header />
          <div className=" max-w-full max-h-full overflow-auto">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
