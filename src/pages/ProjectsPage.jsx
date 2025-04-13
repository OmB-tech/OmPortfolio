"use client";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Server, Github } from "lucide-react";
import { Button } from "../components/ui/Button";
import ProjectCard from "../components/ProjectCard";
import Layout from "../components/Layout";
export default function ProjectsPage() {
    useEffect(() => {
        // Set page title
        document.title = "Projects | Om Borle";
        // Animate project cards on load
        const cards = document.querySelectorAll(".project-card");
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add("animate-fade-in");
            }, index * 150);
        });
    }, []);
    // Sample projects data - you can replace with your actual projects
    const projects = [
        {
            title: "Smart Home Automation System",
            description: "Designed and implemented a complete IoT-based home automation system using Arduino, Raspberry Pi, and a custom mobile app.",
            tags: ["IoT", "Arduino", "React Native", "MQTT"],
            image: "/images/projects/smart-home.jpg",
            github: "https://github.com",
            demo: "https://demo.com",
        },
        {
            title: "Neural Network Visualizer",
            description: "An interactive web application that visualizes neural networks in real-time, allowing users to experiment with different architectures.",
            tags: ["JavaScript", "TensorFlow.js", "D3.js", "React"],
            image: "/images/projects/neural-network.jpg",
            github: "https://github.com",
        },
        {
            title: "Distributed Database System",
            description: "Implemented a distributed database system with fault tolerance and consistency guarantees as part of a distributed systems course.",
            tags: ["Java", "Distributed Systems", "Consensus Algorithms"],
            image: "/images/projects/database.jpg",
            github: "https://github.com",
        },
        {
            title: "Compiler Design Project",
            description: "Built a compiler for a subset of C language, including lexical analysis, parsing, semantic analysis, and code generation.",
            tags: ["C++", "LLVM", "Compiler Design"],
            image: "/images/projects/compiler.jpg",
            github: "https://github.com",
        },
        {
            title: "Personal Portfolio Website",
            description: "Designed and developed a responsive portfolio website using React and Tailwind CSS with custom animations and interactive elements.",
            tags: ["React", "Tailwind CSS", "JavaScript"],
            image: "/images/projects/portfolio.jpg",
            github: "https://github.com",
            demo: "https://demo.com",
        },
        {
            title: "E-commerce Platform",
            description: "Built a full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment processing.",
            tags: ["React", "Node.js", "MongoDB", "Stripe API"],
            image: "/images/projects/ecommerce.jpg",
            github: "https://github.com",
        },
        {
            title: "Real-time Chat Application",
            description: "Developed a real-time chat application with features like private messaging, group chats, and file sharing.",
            tags: ["Socket.io", "React", "Express", "MongoDB"],
            image: "/images/projects/chat-app.jpg",
            github: "https://github.com",
        },
        {
            title: "Weather Forecast App",
            description: "Created a weather forecast application that provides current weather data and forecasts for any location using weather APIs.",
            tags: ["React", "OpenWeather API", "Geolocation API"],
            image: "/images/projects/weather-app.jpg",
            github: "https://github.com",
            demo: "https://demo.com",
        },
    ];
    return (<Layout>
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-8">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-gold-400 hover:text-gold-300">
                <ArrowLeft className="mr-2 h-4 w-4"/>
                Back to Home
              </Button>
            </Link>
          </div>

          <h1 className="text-4xl font-bold mb-12 flex items-center font-pirate">
            <Server className="mr-3 text-gold-500"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">
              All Treasures
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (<div key={index} className="project-card opacity-0 transition-opacity duration-700">
                <ProjectCard title={project.title} description={project.description} tags={project.tags} image={project.image} github={project.github} demo={project.demo}/>
              </div>))}
          </div>

          <div className="text-center mt-16">
            <a href="https://github.com/omborle" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="group border-gold-500 bg-navy-900/50 hover:bg-gold-500/10 text-gold-300 hover:text-gold-100 transition-all duration-300 transform hover:scale-105">
                <Github className="mr-2 h-5 w-5 text-gold-400 group-hover:text-gold-300"/>
                View GitHub Profile
              </Button>
            </a>
          </div>
        </div>
      </main>
    </Layout>);
}
