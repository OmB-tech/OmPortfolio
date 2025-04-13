"use client";

import { useEffect, useRef } from "react";
import { Cpu } from "lucide-react";
import SkillNode from "./SkillNode";

export default function SkillsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");

          const nodes = entry.target.querySelectorAll(".skill-node");
          nodes.forEach((node, index) => {
            setTimeout(() => {
              node.classList.add("animate-scale-in");
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 px-4 bg-navy-900 opacity-0"
    >
      <div className="max-w-5xl mx-auto my-10  h">
        <h2 className="text-3xl font-bold mb-12 flex items-center justify-center font-pirate">
          <Cpu className="mr-3 text-amber-500" />
          <span className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
            My Arsenal
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-red-500 rounded-lg blur opacity-25"></div>
              <h3 className="relative bg-navy-800 text-xl font-semibold text-center mb-4 text-amber-300 py-2 rounded-lg border border-amber-500/20">
                Programming Languages
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="skill-node opacity-0">
                <SkillNode name="C" level={85} color="gold" />
              </div>
              <div className="skill-node opacity-0">
                <SkillNode name="Java" level={75} color="gold" />
              </div>
              <div className="skill-node opacity-0">
                <SkillNode name="SQL" level={75} color="gold" />
              </div>
              <div className="skill-node opacity-0">
                <SkillNode name="HTML" level={95} color="gold" />
              </div>
              <div className="skill-node opacity-0">
                <SkillNode name="CSS" level={90} color="gold" />
              </div>
              <div className="skill-node opacity-0">
                <SkillNode name="JavaScript" level={90} color="gold" />
              </div>
            </div>
          </div>

          {/* Frameworks */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-red-500 rounded-lg blur opacity-25"></div>
              <h3 className="relative bg-navy-800 text-xl font-semibold text-center mb-4 text-amber-300 py-2 rounded-lg border border-amber-500/20">
                Frameworks
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="skill-node opacity-0">
                <SkillNode name="React" level={90} color="gold" />
              </div>
              <div className="skill-node opacity-0">
                <SkillNode name="Tailwind CSS" level={85} color="gold" />
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-red-500 rounded-lg blur opacity-25"></div>
              <h3 className="relative bg-navy-800 text-xl font-semibold text-center mb-4 text-amber-300 py-2 rounded-lg border border-amber-500/20">
                Tools & Technologies
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="skill-node opacity-0">
                <SkillNode name="Git" level={90} color="gold" />
              </div>
              <div className="skill-node opacity-0">
                <SkillNode name="Canva" level={75} color="gold" />
              </div>
              <div className="skill-node opacity-0">
                <SkillNode name="Linux" level={85} color="gold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
