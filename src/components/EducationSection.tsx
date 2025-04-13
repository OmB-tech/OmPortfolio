"use client"

import { useEffect, useRef } from "react"
import { Layers } from "lucide-react"

export default function EducationSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")

          // Animate timeline items
          const items = entry.target.querySelectorAll(".timeline-item")
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("animate-slide-right")
            }, index * 300)
          })
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
      id="education"
      className="py-20 px-4 bg-navy-900 opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center justify-center font-pirate">
          <Layers className="mr-3 text-gold-500" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 text-4xl">My Voyage</span>
        </h2>

        <div className="relative border-l-2 border-gold-500/50 ml-6 md:ml-0 md:mx-auto md:max-w-2xl pl-8 space-y-12">
          <div className="timeline-item relative opacity-0 -translate-x-10 transition-all duration-700">
            <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-navy-900 bg-gold-500 animate-pulse"></div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-red-500 rounded-lg blur opacity-25"></div>
              <div className="relative bg-navy-800 rounded-lg p-6 backdrop-blur-sm border border-gold-500/20">
                <h3 className="text-xl font-bold text-gold-300">Schooling</h3>
                <p className="text-gold-100/70 mt-1">School of Scholars, Malkapur</p>
                <div className="mt-4 text-gold-100">
                  <p>Score:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gold-100/70">
                    <li>92%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item relative opacity-0 -translate-x-10 transition-all duration-700">
            <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-navy-900 bg-gold-500 animate-pulse"></div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-red-500 rounded-lg blur opacity-25"></div>
              <div className="relative bg-navy-800 rounded-lg p-6 backdrop-blur-sm border border-gold-500/20">
                <h3 className="text-xl font-bold text-gold-300">Bachelor of Technology in Computer Engineering</h3>
                <p className="text-gold-100/70 mt-1">R. C. Patel Institute of Technology, Shirpur</p>
                <div className="mt-4 text-gold-100">
                  <p>Relevant coursework:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gold-100/70">
                    <li>Data Structures and Algorithms</li>
                    <li>Database Management</li>
                    <li>Computer Networks</li>
                    <li>Operating Systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
