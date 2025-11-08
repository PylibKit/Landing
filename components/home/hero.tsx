"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
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
              <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 text-sm">
                <Sparkles className="h-4 w-4" />
                New — PyLibKit v0.1
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <h1 id="main-title" className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Seamless <strong>Swift ↔ Python</strong> integration<br />
                <strong>natively on macOS</strong> — <span className="italic">PyLibKit</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground"
            >
              PyLibKit lets macOS developers embed and run a full Python runtime inside Swift apps. Call Python from Swift,
              run AI models or automation scripts, and ship safely within the App Sandbox — all with minimal setup.
            </motion.p>

            {/* Get started button */}
            <div className="flex items-center justify-center">
              <a href="/docs/components/theme-toggle-animations">
                <div className="group cursor-pointer border border-border bg-card gap-2 h-[60px] flex items-center p-[10px] rounded-full">
                  <div className="border border-border bg-primary h-[40px] rounded-full flex items-center justify-center text-primary-foreground">
                    <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-base">
                      {/* ...existing svg... */}
                      Get PyLibKit
                    </p>
                  </div>
                  <div className="text-muted-foreground group-hover:ml-4 ease-in-out transition-all size-[24px] flex items-center justify-center rounded-full border-2 border-border">
                    {/* ...existing svg... */}
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Social Proof Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-auto pb-8"
          >
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-6">Built by Byteflow — trusted by macOS developers</p>
              <div className="flex items-center justify-center gap-8">
                {/* Swift Logo */}
                <div className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:drop-shadow-[0_0_8px_rgba(255,125,0,0.25)] transition-all duration-300">
                  <svg
                    width="40"
                    height="40"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 333334 333015"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    imageRendering="optimizeQuality"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <defs>
                      <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="173948" y1="-2539.76" x2="125024" y2="274914">
                        <stop offset="0" stopColor="#e5a235" />
                        <stop offset="1" stopColor="#d23629" />
                      </linearGradient>
                      <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="196383" y1="-1115.35" x2="137302" y2="333952">
                        <stop offset="0" stopColor="#f9b13d" />
                        <stop offset="1" stopColor="#e63830" />
                      </linearGradient>
                    </defs>
                    <g fillRule="nonzero">
                      <path d="M73350 243h186101c41094-298 73883 32298 73883 73585v185770c0 40626-32789 73763-73883 73415H73350c-39718 0-72999-32789-72999-73415V73828C351 32541 33632-523 73350 243z" fill="url(#a)" />
                      <path d="M281382 272374s-12972-21008-34183-21008c-21660 0-32351 21008-75206 21008-92987 0-137068-76506-138071-78316 0 519 519 519 519 519L0 158396V73558C0 32462 33572 1 73099 1h66538l48550 49735c52 0 52-519 532-1015 110252 76190 74705 158613 74705 158613s30525 34574 17958 65042z" fill="url(#b)" />
                      <path d="M189263 49490c109868 74795 74378 157625 74378 157625s30534 34878 18035 65459c0 0-12991-21231-34161-21231-21219 0-33928 21231-75302 21231-94193 0-137215-78533-137215-78533 83546 56856 141921 16544 141921 16544C138636 188424 57167 83892 57167 83892c70392 59101 100324 74754 100324 74754-17690-14066-68076-87098-68076-87098 41046 40763 121543 98528 121543 98528 22163-64076-21694-120586-21694-120586z" fill="#fefefe" />
                    </g>
                  </svg>
                </div>

                {/* Python Logo */}
                <div className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:drop-shadow-[0_0_8px_rgba(53,114,255,0.25)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 255" preserveAspectRatio="xMinYMin meet"><defs><linearGradient x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%" id="a"><stop stopColor="#387EB8" offset="0%" /><stop stopColor="#366994" offset="100%" /></linearGradient><linearGradient x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%" id="b"><stop stopColor="#FFE052" offset="0%" /><stop stopColor="#FFC331" offset="100%" /></linearGradient></defs><path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" fill="url(#a)" /><path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z" fill="url(#b)" /></svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
