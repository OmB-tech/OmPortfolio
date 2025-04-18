"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "./ui/Button"
import MyPic from "../assets/MyPic.jpeg"
import type { MouseEvent } from "react"

interface ParallaxElement extends HTMLElement {
  dataset: {
    speed: string
  }
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const animationFrameId = useRef<number>(0)

  // Typewriter effect setup
  const phrases = [
    "Computer Engineering Student",
    "Frontend Developer",
    "Problem Solving"
  ]
  const [currentText, setCurrentText] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = phrases[phraseIndex]
      if (isDeleting) {
        setCurrentText(fullText.substring(0, charIndex - 1))
        setCharIndex((prev) => prev - 1)
      } else {
        setCurrentText(fullText.substring(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)
      }

      // Transition between typing and deleting
      if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex])

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (!heroRef.current) return

      animationFrameId.current = requestAnimationFrame(() => {
        const { clientX, clientY } = e
        const { innerWidth, innerHeight } = window

        const xNorm = (clientX / innerWidth) - 0.5
        const yNorm = (clientY / innerHeight) - 0.5

        const elements = heroRef.current?.querySelectorAll<ParallaxElement>(".parallax-element") ?? []
        elements.forEach((el) => {
          const speed = Number(el.dataset.speed) || 0
          el.style.transform = `translate(${xNorm * speed}px, ${yNorm * speed}px)`
        })
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  const handleScroll = () => {
    const aboutSection = document.getElementById("about")
    aboutSection?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Parallax background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[20, 30, 10].map((speed, index) => (
          <div
            key={index}
            className={`absolute ${index === 0 ? "top-20 left-20 w-64 h-64" :
                index === 1 ? "bottom-20 right-20 w-80 h-80" :
                  "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96"
              } rounded-full ${index === 0 ? "bg-blue-500/10" :
                index === 1 ? "bg-gold-500/10" :
                  "bg-red-500/10"
              } blur-3xl parallax-element`}
            data-speed={speed}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gold-500 shadow-lg shadow-gold-500/20 transition-transform duration-300 group-hover:scale-105">
              <img
                src={MyPic}
                alt="Portrait of Om Sanjay Borle"
                className="w-full h-full object-cover"
                width={192}
                height={192}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold mb-6 font-pirate tracking-wide">
          <span className="text-white text-6xl">Om Sanjay Borle</span>
        </h1>

        {/* 👉 Typewriter Line */}
        <p className="text-2xl md:text-2xl text-gold-100 mb-8 max-w-2xl mx-auto font-mono min-h-[2.5rem]">
          {currentText}
          <span className="animate-pulse">|</span>
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            onClick={handleScroll}
            className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            aria-label="Scroll to About section"
          >
            Explore My Journey
          </Button>

          <Button
            variant="outline"
            className="border-gold-500 text-gold-300 hover:bg-gold-500/10 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            onClick={() => {
              const contact = document.getElementById("contact")
              contact?.scrollIntoView({ behavior: "smooth", block: "start" })
            }}
            aria-label="Navigate to Contact section"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
