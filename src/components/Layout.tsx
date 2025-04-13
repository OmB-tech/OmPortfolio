"use client"

import { ReactNode, useEffect } from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { animateScroll } from "./utils/scrollAnimation"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    // Initialize scroll animations
    animateScroll()

    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-navy-900 text-white overflow-hidden flex flex-col">
      <NavBar />
      <main className="flex-grow">{children}</main> 
    </div>
  )
}