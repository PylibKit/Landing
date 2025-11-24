"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "What is PyLibKit exactly?",
      answer:
        "PyLibKit is a macOS development kit that enables Swift apps to embed and run a full Python runtime natively. It allows developers to call Python functions directly from Swift code, execute AI models, run automation scripts, and leverage Python's ecosystem while maintaining the performance and safety of Swift apps.",
    },
    {
      question: "Do I need Python experience to use PyLibKit?",
      answer:
        "While basic Python knowledge is helpful, it's not strictly required. PyLibKit provides a Swift-friendly API that abstracts many Python complexities. You can start with simple Python scripts and gradually explore more advanced features as you become comfortable with the integration.",
    },
    {
      question: "Can I use PyLibKit in App Store apps?",
      answer:
        "Yes! PyLibKit is designed to work within the macOS App Sandbox environment. The embedded Python runtime operates safely within your app's sandbox, ensuring App Store compliance while providing the flexibility to run Python code.",
    },
    {
      question: "What Python packages can I use with PyLibKit?",
      answer:
        "PyLibKit supports most pure Python packages and many popular libraries. You can use packages for data processing, web scraping, automation, file manipulation, and more. Some packages with complex native dependencies may require additional configuration.",
    },
    {
      question: "What platforms does PyLibKit v1.0 support?",
      answer:
        "PyLibKit v1.0 Beta supports both iOS and macOS platforms. This means you can now use Python in your iPhone, iPad, and Mac apps with the same codebase and API. Universal compatibility across all Apple platforms.",
    },
    {
      question: "How do I get started with PyLibKit?",
      answer:
        "Getting started is simple: install PyLibKit via Swift Package Manager, import the framework in your Swift project, and start calling Python functions directly from your Swift code. Our documentation includes step-by-step tutorials and example projects to help you begin.",
    },
    {
      question: "What's the performance impact of using PyLibKit?",
      answer:
        "PyLibKit is optimized for minimal overhead. The Python runtime runs in the same process as your Swift app, eliminating IPC costs. For compute-heavy tasks like data processing or automation, the performance benefits of Python's ecosystem often outweigh the integration overhead.",
    },
  ]

  return (
    <section id="faq" className="relative overflow-hidden pb-120 pt-24">
      {/* Background blur effects */}
      <div className="bg-primary/20 absolute top-1/2 -right-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl"></div>
      <div className="bg-primary/20 absolute top-1/2 -left-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl"></div>

      <div className="z-10 container mx-auto px-4">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="border-primary/40 text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 uppercase">
            <span>✶</span>
            <span className="text-sm">Faqs</span>
          </div>
        </motion.div>

        <motion.h2
          className="mx-auto mt-6 max-w-xl text-center text-4xl font-medium md:text-[54px] md:leading-[60px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Questions? We've got{" "}
          <span className="bg-gradient-to-b from-foreground via-rose-200 to-primary bg-clip-text text-transparent">
            answers
          </span>
        </motion.h2>

        <div className="mx-auto mt-12 flex max-w-xl flex-col gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="from-secondary/40 to-secondary/10 rounded-2xl border border-white/10 bg-gradient-to-b p-6 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset] transition-all duration-300 hover:border-white/20 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleItem(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  toggleItem(index)
                }
              }}
              {...(index === faqs.length - 1 && { "data-faq": faq.question })}
            >
              <div className="flex items-start justify-between">
                <h3 className="m-0 font-medium pr-4">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className=""
                >
                  {openItems.includes(index) ? (
                    <Minus className="text-primary flex-shrink-0 transition duration-300" size={24} />
                  ) : (
                    <Plus className="text-primary flex-shrink-0 transition duration-300" size={24} />
                  )}
                </motion.div>
              </div>
              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    className="mt-4 text-muted-foreground leading-relaxed overflow-hidden"
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                      opacity: { duration: 0.2 },
                    }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
