"use client"

import { useState, useEffect, useRef } from "react"

const TerminalAbout: React.FC<{ name: string }> = ({ name }) => {
  const [displayText, setDisplayText] = useState<string>("")
  const [cursorVisible, setCursorVisible] = useState<boolean>(true)
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0)

  const charIndexRef = useRef<number>(0)
  const currentTextRef = useRef<string>("")
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const lines: string[] = [
    `Hello, I'm ${name}.`, 
    "Computer Engineering Student.", 
    "Frontend Developer.", 
    "Problem Solver."
  ]

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 400)
    return () => clearInterval(interval)
  }, [])

  // Typewriter effect
  useEffect(() => {
    const typeText = () => {
      const currentLine = lines[currentLineIndex]
      if (charIndexRef.current < currentLine.length) {
        currentTextRef.current += currentLine[charIndexRef.current]
        setDisplayText(currentTextRef.current)
        charIndexRef.current++
        timeoutRef.current = setTimeout(typeText, 100)
      } else {
        timeoutRef.current = setTimeout(backspaceText, 1500)
      }
    }

    const backspaceText = () => {
      if (currentTextRef.current.length > 0) {
        currentTextRef.current = currentTextRef.current.slice(0, -1)
        setDisplayText(currentTextRef.current)
        timeoutRef.current = setTimeout(backspaceText, 50)
      } else {
        // Reset for next line
        charIndexRef.current = 0
        currentTextRef.current = ""
        setCurrentLineIndex((prev) => (prev + 1) % lines.length)
      }
    }

    typeText()

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentLineIndex, lines])

  return (
    <div className="font-mono bg-zinc-900 border border-zinc-700 rounded-lg p-4 h-48 flex items-center">
      <div className="text-zinc-300">
        <div className="flex items-center h-[40%]">
          <span className="text-2xl">{displayText}</span>
          <span
            className={`ml-0.5 inline-block w-2.5 h-5 bg-emerald-400 ${
              cursorVisible ? "opacity-100" : "opacity-0"
            } transition-opacity duration-100`}
          />
        </div>
      </div>
    </div>
  )
}

export default TerminalAbout