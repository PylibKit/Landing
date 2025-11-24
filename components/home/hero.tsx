"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <section className="relative overflow-hidden min-h-screen flex flex-col">
        <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10 flex-1 flex flex-col">
          <div className="mx-auto max-w-6xl text-center flex-1 flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Badge
                variant="secondary"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-green-50 to-green-100 border border-green-200 text-green-800 hover:from-green-100 hover:to-green-200 transition-colors"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                🎉 PyLibKit v1.0 Beta — Now with iOS Support!
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <h1
                id="main-title"
                className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              >
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Python
                </span>{" "}
                ↔{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Swift
                </span>{" "}
                integration
                <br />
                <span className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl font-normal">
                  for macOS & iOS apps
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-12 max-w-3xl"
            >
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                The first cross-platform SDK to run Python natively inside Swift
                apps. Now supporting both macOS and iOS with zero configuration.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>App Store Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>macOS + iOS Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Swift Package Manager</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                // href="https://github.com/pylibkit/pylibkit"
                // target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {/* Get Started */}
                Comming Soon
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </a>

              <a
                href="#features"
                className="group inline-flex items-center gap-2 px-6 py-4 border border-border bg-background hover:bg-muted text-foreground font-medium rounded-full transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                View Features
              </a>
            </motion.div>
          </div>

          {/* Social Proof Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-auto pb-8"
          >
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span>Loved by 500+ developers</span>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                Crafted by{" "}
                <span className="text-foreground font-semibold">Byteflow</span>{" "}
                — Enabling seamless Swift-Python development across Apple
                platforms
              </p>

              <div className="flex items-center justify-center gap-8">
                {/* Swift Logo */}
                <div className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-orange-50/50 border border-orange-200/50 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-md">
                    <svg
                      className="w-7 h-7 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M14.94 5.19A4.38 4.38 0 0 0 16 2a4.44 4.44 0 0 0-3.17 1.33c-.9.8-1.46 1.91-1.46 3.24 0 .21.04.42.12.61.07.08.24.13.61.13h.05c.8-.01 1.54-.42 2.06-1.12.42-.56.73-1.37.73-2zM12 24c6.4 0 12-5.27 12-12 0-6.4-5.27-12-12-12C5.6 0 0 5.27 0 12c0 6.4 5.27 12 12 12zm4.17-18.5c.9-.9.9-2.36 0-3.26s-2.36-.9-3.26 0L12 3.15 11.09 2.24c-.9-.9-2.36-.9-3.26 0s-.9 2.36 0 3.26L8.74 6.41 7.83 7.32c-.9.9-.9 2.36 0 3.26s2.36.9 3.26 0L12 9.67l.91.91c.9.9 2.36.9 3.26 0s.9-2.36 0-3.26L15.26 6.41l.91-.91z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-orange-700">
                    Swift
                  </span>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <svg
                    className="w-4 h-4 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 13l3 3 7-7"
                    />
                  </svg>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>

                {/* Python Logo */}
                <div className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-blue-50/50 border border-blue-200/50 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-md">
                    <svg
                      className="w-7 h-7 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.4 0c3.3 0 6.2 2.4 6.2 6.1v2.3h-3.1V6.1c0-1.7-1.4-3.1-3.1-3.1s-3.1 1.4-3.1 3.1v2.3H6.2V6.1C6.2 2.4 9.1 0 12.4 0zm-6.1 9.4h12.5c.4 0 .8.4.8.8v11.9c0 .4-.4.8-.8.8H6.3c-.4 0-.8-.4-.8-.8V10.2c0-.4.4-.8.8-.8z" />
                      <circle cx="12" cy="16" r="2" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-blue-700">
                    Python
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
