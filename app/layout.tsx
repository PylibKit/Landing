import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { PostHogProvider } from "../components/PostHogProvider"

export const metadata: Metadata = {
  title: "PyLibKit - Swift ↔ Python Integration for iOS & macOS",
  description: "PyLibKit v1.0 Beta: The first cross-platform SDK to run Python natively inside Swift apps. Now supporting both iOS and macOS with zero configuration - perfect for automation, data processing, and more.",
  keywords: ["Swift", "Python", "iOS", "macOS", "SDK", "Integration", "Automation", "App Development", "Native", "Runtime", "Cross-Platform"],
  publisher: "PyLibKit",
  metadataBase: new URL("https://pylibkit.org"),
  openGraph: {
    title: "PyLibKit v1.0 - Swift ↔ Python Integration for iOS & macOS",
    description: "The first cross-platform SDK to run Python natively in Swift apps. Now supporting iPhone, iPad, and Mac with the same codebase.",
    url: "https://pylibkit.org",
    siteName: "PyLibKit",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PyLibKit v1.0 - Swift ↔ Python Integration for iOS & macOS",
    description: "The first cross-platform SDK to run Python natively in Swift apps. Now supporting iPhone, iPad, and Mac with the same codebase.",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="dark">
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  )
}