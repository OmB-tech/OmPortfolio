"use client";
import { useEffect, useRef } from "react";
import { Server } from "lucide-react";
import ProjectCard from "./ProjectCard";
export default function ProjectsSection() {
    const sectionRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fade-in");
                // Animate project cards
                const cards = entry.target.querySelectorAll(".project-card");
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add("animate-slide-up");
                    }, index * 150);
                });
            }
        }, { threshold: 0.1 });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    return (<section ref={sectionRef} id="projects" className="py-20 px-4 bg-navy-800 opacity-0 transition-opacity duration-1000">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center justify-center font-pirate">
          <Server className="mr-3 text-gold-500"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 text-4xl">My Treasures</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="project-card opacity-0 translate-y-10 transition-all duration-700">
            <ProjectCard title="College Predictor" description="The College Predictor website helps students estimate their chances of admission into various colleges based on entrance exam scores, category, and preferences. It provides personalized college suggestions, eligibility insights, and streamlines the decision-making process for aspirants." tags={["HTML", "CSS", "Javascript"]} image="https://play-lh.googleusercontent.com/0EdbRA6bnqKtSaChxft4C-cvYun67_9cHxX6FlEI84lz82L2vDBCPRvf3eb8QFRjeQQ=w240-h480-rw" github="https://github.com/OmB-tech/"/>
          </div>

          <div className="project-card opacity-0 translate-y-10 transition-all duration-700">
            <ProjectCard title="Carbon Footprint Tracker" description="The Carbon Footprint Tracker website helps users monitor and reduce their carbon emissions by tracking daily activities. It offers insights, tips, and reports to promote eco-friendly habits and support a sustainable lifestyle through personalized environmental impact analysis." tags={["React JS", "Firebase", "Next JS", "Tailwind CSS"]} image="https://miro.medium.com/v2/resize:fit:1400/1*BKS2ONp4X4vbqm7nt9l5aw.png" github="https://github.com/OmB-tech/"/>
          </div>

          <div className="project-card opacity-0 translate-y-10 transition-all duration-700">
            <ProjectCard title="GamifiedEdu" description="The Gamified Educational Platform makes learning fun and engaging for underprivileged children through interactive games and quizzes. It enhances knowledge retention, boosts motivation, and provides a playful environment to develop essential skills in a user-friendly, game-based learning format." tags={["React", "Firebase"]} image="https://cdn-icons-png.flaticon.com/512/6570/6570640.png" github="https://github.com/OmB-tech/"/>
          </div>

          <div className="project-card opacity-0 translate-y-10 transition-all duration-700">
            <ProjectCard title="Akatsuki Project Hub" description="Akatsuki Project Hub is a centralized platform for managing, showcasing, and collaborating on student projects. It enables users to upload, explore, and contribute to diverse academic and creative works, fostering innovation, teamwork, and knowledge sharing among peers." tags={["React JS", "Typescript", "Tailwind CSS"]} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQWdCWJwrxKHS4WeSyVXEKGVDiW-s0gvAKg&s" github="https://github.com/OmB-tech/"/>
          </div>
        </div>

       
      </div>

    </section>);
}
