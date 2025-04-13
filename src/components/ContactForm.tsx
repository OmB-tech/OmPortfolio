"use client"

import { useState, FormEvent, ChangeEvent } from "react"
import { Button } from "./ui/Button"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

type SubmitStatus = "success" | "error" | null

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setSubmitStatus("error")

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-red-500 rounded-lg blur opacity-25"></div>
      <div className="relative bg-navy-900 rounded-lg p-6 backdrop-blur-sm border border-gold-500/20">
        {submitStatus === "success" ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/20 text-gold-500 mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gold-300">Message Sent!</h3>
            <p className="text-gold-100/70">Thank you for reaching out. I'll get back to you soon.</p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gold-300">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md border-gold-500/30 bg-navy-800 text-gold-100 px-3 py-2 text-sm focus:border-gold-500 focus:ring-gold-500 transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gold-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border-gold-500/30 bg-navy-800 text-gold-100 px-3 py-2 text-sm focus:border-gold-500 focus:ring-gold-500 transition-colors"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-gold-300">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-md border-gold-500/30 bg-navy-800 text-gold-100 px-3 py-2 text-sm focus:border-gold-500 focus:ring-gold-500 transition-colors"
                placeholder="Subject"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gold-300">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-md border-gold-500/30 bg-navy-800 text-gold-100 px-3 py-2 text-sm focus:border-gold-500 focus:ring-gold-500 transition-colors"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-600 hover:to-amber-700 text-navy-900 font-medium transition-all duration-300 transform hover:scale-105"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            {submitStatus === "error" && (
              <p className="text-red-500 text-sm text-center">
                There was an error sending your message. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  )
}