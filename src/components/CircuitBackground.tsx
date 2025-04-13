"use client"

import { useEffect, useRef } from "react"

interface NodeType {
  x: number
  y: number
  size: number
  connections: NodeType[]
  draw: (ctx: CanvasRenderingContext2D) => void
}

export default function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Circuit node class
    class Node implements NodeType {
      x: number
      y: number
      size: number
      connections: NodeType[]

      constructor(x: number, y: number, size: number) {
        this.x = x
        this.y = y
        this.size = size
        this.connections = []
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Draw node
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(16, 185, 129, 0.1)"
        ctx.fill()
        ctx.strokeStyle = "rgba(16, 185, 129, 0.3)"
        ctx.stroke()

        // Draw connections
        this.connections.forEach((node) => {
          ctx.beginPath()
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(node.x, node.y)
          ctx.strokeStyle = "rgba(16, 185, 129, 0.1)"
          ctx.stroke()
        })
      }
    }

    // Create nodes
    const nodeCount = Math.floor((window.innerWidth * window.innerHeight) / 40000)
    const nodes: NodeType[] = []

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const size = Math.random() * 2 + 1
      nodes.push(new Node(x, y, size))
    }

    // Connect nodes
    nodes.forEach((node) => {
      const connectionsCount = Math.floor(Math.random() * 3) + 1

      for (let i = 0; i < connectionsCount; i++) {
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)]
        if (randomNode !== node && !node.connections.includes(randomNode)) {
          node.connections.push(randomNode)
        }
      }
    })

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw all nodes and connections
      nodes.forEach((node) => {
        node.draw(ctx)
      })

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-30" />
}