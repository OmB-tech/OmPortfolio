import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gold-500/20 bg-navy-900 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <p className="text-gold-300 font-pirate"></p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/OmB-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-300 hover:text-gold-500 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="linkedin.com/in/om-borle-25a9b328a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-300 hover:text-gold-500 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            
            <a href="mailto:omborle14@gmail.com" className="text-gold-300 hover:text-gold-500 transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gold-300/70 text-sm">
            &copy; {new Date().getFullYear()} Om Sanjay Borle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
