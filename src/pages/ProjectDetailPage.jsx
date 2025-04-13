"use client";
import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from "lucide-react";
import { Button } from "../components/ui/Button";
import Layout from "../components/Layout";
// Sample project data - replace with your actual data source
const projects = {
    "smart-home-automation-system": {
        title: "Smart Home Automation System",
        description: "Designed and implemented a complete IoT-based home automation system using Arduino, Raspberry Pi, and a custom mobile app.",
        longDescription: `
      This project involved creating a comprehensive smart home automation system that allows users to control various aspects of their home environment through a mobile application.
      
      The system uses Arduino microcontrollers connected to various sensors and actuators throughout the home, which communicate with a central Raspberry Pi hub. The Raspberry Pi serves as the brain of the operation, processing data from the sensors and sending commands to the actuators based on user input or automated rules.
      
      The mobile application, built with React Native, provides an intuitive interface for users to control lights, temperature, security systems, and other connected devices. It also displays real-time data from sensors and allows users to set up automated routines.
      
      The communication between the mobile app and the Raspberry Pi hub is handled using MQTT, a lightweight messaging protocol designed for IoT applications. This ensures reliable and efficient communication even in environments with limited bandwidth.
    `,
        tags: ["IoT", "Arduino", "React Native", "MQTT", "Raspberry Pi", "Embedded Systems"],
        image: "/images/projects/smart-home.jpg",
        gallery: [
            "/images/projects/smart-home-1.jpg",
            "/images/projects/smart-home-2.jpg",
            "/images/projects/smart-home-3.jpg",
        ],
        github: "https://github.com",
        demo: "https://demo.com",
        date: "June 2023",
        features: [
            "Remote control of home devices through mobile app",
            "Automated routines based on time, sensor data, or user location",
            "Real-time monitoring of temperature, humidity, and energy usage",
            "Integration with voice assistants like Alexa and Google Assistant",
            "Secure authentication and encryption for all communications",
        ],
        technologies: [
            "Arduino (C/C++)",
            "Raspberry Pi (Python)",
            "React Native",
            "MQTT Protocol",
            "Node.js backend",
            "MongoDB for data storage",
        ],
    },
    "neural-network-visualizer": {
        title: "Neural Network Visualizer",
        description: "An interactive web application that visualizes neural networks in real-time, allowing users to experiment with different architectures.",
        longDescription: `
      The Neural Network Visualizer is an educational tool designed to help students and professionals understand how neural networks function by providing a visual representation of the network architecture and the data flow through the network during training and inference.
      
      Users can create custom neural network architectures by adding layers, neurons, and connections through an intuitive drag-and-drop interface. They can then train these networks on various datasets, either provided by the application or uploaded by the user.
      
      The visualization shows the activation of each neuron in real-time as data passes through the network, helping users understand how information is transformed at each layer. Users can also visualize the weights and biases of the network, and see how they change during training.
      
      The application is built using React for the frontend, with D3.js handling the visualizations. The neural network computations are performed using TensorFlow.js, which allows the entire application to run in the browser without requiring a backend server for the computations.
    `,
        tags: ["JavaScript", "TensorFlow.js", "D3.js", "React", "Machine Learning", "Data Visualization"],
        image: "/images/projects/neural-network.jpg",
        gallery: [
            "/images/projects/neural-network-1.jpg",
            "/images/projects/neural-network-2.jpg",
            "/images/projects/neural-network-3.jpg",
        ],
        github: "https://github.com",
        demo: "https://demo.com",
        date: "March 2023",
        features: [
            "Interactive drag-and-drop interface for creating neural network architectures",
            "Real-time visualization of neuron activations during training and inference",
            "Support for various layer types (Dense, Convolutional, Pooling, etc.)",
            "Ability to train networks on built-in or custom datasets",
            "Visualization of training metrics (loss, accuracy) over time",
            "Export trained models in TensorFlow.js format",
        ],
        technologies: ["React", "TensorFlow.js", "D3.js", "HTML Canvas", "Web Workers for non-blocking computation"],
    },
    // Add more projects as needed
};
export default function ProjectDetailPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = slug ? projects[slug] : undefined;
    useEffect(() => {
        if (!project) {
            navigate("/projects");
            return;
        }
        // Set page title
        document.title = `${project.title} | Om Borle`;
        // Animate elements on load
        const elements = document.querySelectorAll(".animate-on-load");
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("animate-fade-in");
            }, index * 150);
        });
    }, [project, navigate, slug]);
    if (!project) {
        return null;
    }
    return (<Layout>
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Link to="/projects">
              <Button variant="ghost" size="sm" className="text-gold-400 hover:text-gold-300">
                <ArrowLeft className="mr-2 h-4 w-4"/>
                Back to Projects
              </Button>
            </Link>
          </div>

          <div className="space-y-8">
            <div className="animate-on-load opacity-0 transition-opacity duration-700">
              <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500 font-pirate">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (<span key={tag} className="inline-flex items-center rounded-full bg-navy-800 px-2.5 py-0.5 text-xs font-medium text-gold-300 border border-gold-500/20">
                    <Tag className="mr-1 h-3 w-3"/>
                    {tag}
                  </span>))}
              </div>
              <div className="flex items-center text-gold-400 mb-8">
                <Calendar className="mr-2 h-4 w-4"/>
                <span>{project.date}</span>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden animate-on-load opacity-0 transition-opacity duration-700">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-red-500 rounded-lg blur opacity-25"></div>
                <div className="relative rounded-xl overflow-hidden">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full object-cover"/>
                </div>
              </div>
            </div>

            <div className="space-y-4 animate-on-load opacity-0 transition-opacity duration-700">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-red-500 rounded-lg blur opacity-25"></div>
                <div className="relative bg-navy-800 p-6 rounded-lg border border-gold-500/20">
                  <h2 className="text-2xl font-semibold text-gold-300 mb-4">Overview</h2>
                  <p className="text-gold-100 leading-relaxed">{project.description}</p>
                  <div className="whitespace-pre-line text-gold-100/70 leading-relaxed mt-4">
                    {project.longDescription}
                  </div>
                </div>
              </div>
            </div>

            {project.features && (<div className="space-y-4 animate-on-load opacity-0 transition-opacity duration-700">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-red-500 rounded-lg blur opacity-25"></div>
                  <div className="relative bg-navy-800 p-6 rounded-lg border border-gold-500/20">
                    <h2 className="text-2xl font-semibold text-gold-300 mb-4">Key Features</h2>
                    <ul className="list-disc list-inside space-y-2 text-gold-100">
                      {project.features.map((feature, index) => (<li key={index}>{feature}</li>))}
                    </ul>
                  </div>
                </div>
              </div>)}

            {project.technologies && (<div className="space-y-4 animate-on-load opacity-0 transition-opacity duration-700">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-red-500 rounded-lg blur opacity-25"></div>
                  <div className="relative bg-navy-800 p-6 rounded-lg border border-gold-500/20">
                    <h2 className="text-2xl font-semibold text-gold-300 mb-4">Technologies</h2>
                    <div className="space-x-2">
                      {project.technologies.map((tech, index) => (<span key={index} className="inline-flex items-center rounded-md bg-navy-900 px-3 py-1 text-sm font-medium text-gold-300 border border-gold-500/20">
                          {tech}
                        </span>))}
                    </div>
                  </div>
                </div>
              </div>)}

            {project.gallery && (<div className="space-y-4 animate-on-load opacity-0 transition-opacity duration-700">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-red-500 rounded-lg blur opacity-25"></div>
                  <div className="relative bg-navy-800 p-6 rounded-lg border border-gold-500/20">
                    <h2 className="text-2xl font-semibold text-gold-300 mb-4">Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {project.gallery.map((image, index) => (<div key={index} className="rounded-lg overflow-hidden border border-gold-500/20">
                          <img src={image || "/placeholder.svg"} alt={`${project.title} screenshot ${index + 1}`} className="w-full h-full object-cover"/>
                        </div>))}
                    </div>
                  </div>
                </div>
              </div>)}

            <div className="space-y-4 animate-on-load opacity-0 transition-opacity duration-700">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-red-500 rounded-lg blur opacity-25"></div>
                <div className="relative bg-navy-800 p-6 rounded-lg border border-gold-500/20">
                  <h2 className="text-2xl font-semibold text-gold-300 mb-4">Links</h2>
                  <div className="space-x-4">
                    {project.github && (<a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="text-gold-300 border border-gold-500 hover:bg-gold-500/10">
                          <Github className="mr-2 h-5 w-5"/>
                          GitHub
                        </Button>
                      </a>)}
                    {project.demo && (<a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="text-gold-300 border border-gold-500 hover:bg-gold-500/10">
                          <ExternalLink className="mr-2 h-5 w-5"/>
                          Live Demo
                        </Button>
                      </a>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>);
}
