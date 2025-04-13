"use client"

import { useEffect, useRef } from "react"
import { Zap, Mail, Linkedin, Github } from "lucide-react"
import ContactForm from "./ContactForm"

export default function ContactSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 px-4 bg-navy-800 opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center justify-center font-pirate">
          <Zap className="mr-3 text-gold-500" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 text-4xl">
            Send me a Message
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-red-500 rounded-lg blur opacity-25"></div>
              <div className="relative bg-navy-900 p-6 rounded-lg border border-gold-500/20">
                <h3 className="text-xl font-semibold text-gold-300 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 group">
                    <div className="p-2 rounded-full bg-navy-800 border border-gold-500/20 group-hover:border-gold-500/50 transition-colors">
                      <Mail className="h-5 w-5 text-gold-400" />
                    </div>
                    <span className="text-gold-100 group-hover:text-gold-300 transition-colors">
                      omborle14@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <div className="p-2 rounded-full bg-navy-800 border border-gold-500/20 group-hover:border-gold-500/50 transition-colors">
                      <Linkedin className="h-5 w-5 text-gold-400" />
                    </div>
                    <span className="text-gold-100 group-hover:text-gold-300 transition-colors">
                      linkedin.com/in/om-borle-25a9b328a
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <div className="p-2 rounded-full bg-navy-800 border border-gold-500/20 group-hover:border-gold-500/50 transition-colors">
                      <Github className="h-5 w-5 text-gold-400" />
                    </div>
                    <span className="text-gold-100 group-hover:text-gold-300 transition-colors">
                      github.com/OmB-tech
                    </span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gold-500/20">
                  <p className="text-gold-100 leading-relaxed">
                    I'm currently looking for internship opportunities in web development. Feel free to reach out if
                    you'd like to collaborate on a project or discuss potential opportunities.
                  </p>
                </div>

              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
