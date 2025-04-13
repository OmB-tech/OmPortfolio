"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

interface NavItem {
  name: string
  href: string
}

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<string>("home")
  const navRef = useRef<HTMLElement>(null)

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      const sections = ["home", "about", "skills", "projects", "education", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMobileMenuOpen])

  const navItems: NavItem[] = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Education", href: "/#education" },
    { name: "Contact", href: "/#contact" },
  ]

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault()
      const id = href.replace("/#", "")
      const element = document.getElementById(id)

      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setIsMobileMenuOpen(false)
      }
    }
  }

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              {/* Logo content */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="md:flex space-x-1 mx-auto">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3 py-2 rounded-md text-xl font-medium transition-colors ${
                  activeSection === item.href.replace("/#", "")
                    ? "text-gold-300"
                    : "text-gold-100/70 hover:text-gold-300"
                }`}
              >
                {item.name}
                {activeSection === item.href.replace("/#", "") && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold-300 to-gold-500 transform scale-x-100 origin-left transition-transform"></span>
                )}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? "text-gold-300 hover:bg-navy-800" : "text-gold-300 hover:bg-navy-900/30"
              }`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-navy-900/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-4 space-y-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`py-3 px-4 text-center text-lg font-pirate rounded-lg transition-colors ${
                activeSection === item.href.replace("/#", "")
                  ? "bg-gold-500/10 text-gold-300 border border-gold-500/20"
                  : "text-gold-100 hover:bg-navy-800"
              }`}
            >
              {item.name}
            </a>
          ))}

          <div className="absolute bottom-10 left-0 w-full px-4">
            <div className="border-t border-gold-500/20 pt-6 flex justify-center">
              <div className="h-12 w-12 opacity-50">{/* Placeholder for logo */}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
