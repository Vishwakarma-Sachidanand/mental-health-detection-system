import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ToastProviderWrapper } from "@/components/ui/use-toast";
import { SITE_CONFIG } from "@/constants/site";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "mental health",
    "AI prediction",
    "multimodal AI",
    "depression detection",
    "emotion recognition",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ToastProviderWrapper>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ToastProviderWrapper>
      </body>
    </html>
  );
}
