"use client"

import { useEffect, useRef, useState } from "react"
import { Terminal } from "lucide-react"
import TerminalAbout from "./TerminalAbout"
import SocialLinks from "./SocialLinks"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null)

  // Typewriter effect state
  const titles = [
    "Computer Engineering Student",
    "Frontend Developer",
    "Problem Solver",
    "Tech Enthusiast",
  ]
  const [currentText, setCurrentText] = useState("")
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Cursor state
  const [cursorVisible, setCursorVisible] = useState(true)

  // Animate section fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          entry.target.classList.add("fade-in")
          entry.target.classList.remove("opacity-0")
        }
      },
      { threshold: 0.1 }
    )

    const current = sectionRef.current
    if (current) observer.observe(current)

    return () => {
      if (current) observer.unobserve(current)
    }
  }, [])

  // Cursor blinking effect
  useEffect(() => {
    const blink = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)
    return () => clearInterval(blink)
  }, [])

  // Typewriter effect logic
  useEffect(() => {
    const currentTitle = titles[index]
    let timeout: NodeJS.Timeout

    if (!isDeleting) {
      if (charIndex < currentTitle.length) {
        setCurrentText((prev) => prev + currentTitle.charAt(charIndex))
        setCharIndex((prev) => prev + 1)
        timeout = setTimeout(() => {}, 100)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1500)
      }
    } else {
      if (charIndex > 0) {
        setCurrentText((prev) => prev.slice(0, -1))
        setCharIndex((prev) => prev - 1)
        timeout = setTimeout(() => {}, 50)
      } else {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % titles.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, index, titles])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 px-4 bg-navy-800 opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 flex items-center font-pirate">
              <Terminal className="mr-3 text-gold-500" />
              <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                About My Journey
              </span>
            </h2>


            <TerminalAbout name="Om Sanjay Borle" />
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-red-500 rounded-lg blur opacity-25" />
              <div className="relative bg-navy-900 p-6 rounded-lg border border-gold-500/20">
                <p className="text-gold-100 leading-relaxed">
                  I'm a passionate computer engineering student with a focus on web development and problem solving.
                </p>
                <p className="text-gold-100 leading-relaxed mt-4">
                  Currently pursuing my degree in Computer Engineering from R. C. Patel Institute of Technology,
                  Shirpur. I have a strong foundation in programming languages like C, Java, and JavaScript, and I'm
                  proficient in web development technologies such as React and Tailwind CSS.
                </p>
                <p className="text-gold-100 leading-relaxed mt-4">
                  I love tackling complex problems and finding innovative solutions. My goal is to leverage my skills
                  and knowledge to create impactful applications that make a difference in people's lives.
                </p>
                <div className="mt-6">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
