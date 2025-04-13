import { Github } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "./ui/Button"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  github?: string
  demo?: string
}

export default function ProjectCard({ 
  title, 
  description, 
  tags, 
  image, 
  github, 
  demo 
}: ProjectCardProps) {
  // Create a slug from the title for project detail page linking
  const slug = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")

  return (
    <div className="group relative overflow-hidden rounded-xl bg-navy-800 border border-gold-500/20 transition-all duration-300 hover:border-gold-500/50 hover:bg-navy-800/70 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image || "/images/placeholder.jpg"}
          alt={title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105 bg-[#EBE2E1]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-70"></div>
      </div>

      <div className="p-6 relative">
        <h3 className="text-xl font-bold">
          <Link to={`/project/${slug}`} className="text-gold-300 hover:text-gold-500 transition-colors">
            {title}
          </Link>
        </h3>
        <p className="mt-2 text-gold-100/70 line-clamp-3">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-navy-700/50 px-2.5 py-0.5 text-xs font-medium text-gold-300 border border-gold-500/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex space-x-3">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="border-gold-500/30 bg-navy-800/70 hover:bg-gold-500/10 text-gold-300 hover:text-gold-100 transition-all duration-300"
              >
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Button>
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="border-gold-500/30 bg-navy-800/70 hover:bg-gold-500/10 text-gold-300 hover:text-gold-100 transition-all duration-300"
              >
                Live Demo
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}