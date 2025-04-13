import { Github, Linkedin, Twitter, Mail } from "lucide-react";
export default function SocialLinks() {
    return (<div className="flex space-x-4 pt-4">
      <a href="https://github.com/omborle" target="_blank" rel="noopener noreferrer">
        <button className="rounded-full w-10 h-10 flex items-center justify-center border border-accent-primary/50 bg-dark-bg hover:bg-accent-primary/10 hover:border-accent-primary transition-colors">
          <Github className="h-5 w-5 text-accent-primary"/>
          <span className="sr-only">GitHub</span>
        </button>
      </a>
      <a href="https://linkedin.com/in/omborle" target="_blank" rel="noopener noreferrer">
        <button className="rounded-full w-10 h-10 flex items-center justify-center border border-accent-primary/50 bg-dark-bg hover:bg-accent-primary/10 hover:border-accent-primary transition-colors">
          <Linkedin className="h-5 w-5 text-accent-primary"/>
          <span className="sr-only">LinkedIn</span>
        </button>
      </a>
      <a href="https://twitter.com/omborle" target="_blank" rel="noopener noreferrer">
        <button className="rounded-full w-10 h-10 flex items-center justify-center border border-accent-primary/50 bg-dark-bg hover:bg-accent-primary/10 hover:border-accent-primary transition-colors">
          <Twitter className="h-5 w-5 text-accent-primary"/>
          <span className="sr-only">Twitter</span>
        </button>
      </a>
      <a href="mailto:om.borle@example.com">
        <button className="rounded-full w-10 h-10 flex items-center justify-center border border-accent-primary/50 bg-dark-bg hover:bg-accent-primary/10 hover:border-accent-primary transition-colors">
          <Mail className="h-5 w-5 text-accent-primary"/>
          <span className="sr-only">Email</span>
        </button>
      </a>
    </div>);
}
