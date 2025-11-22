import React, { useState, useEffect, useRef } from 'react';
import { Card } from './ui/card';

const Skills = ({ skills }) => {
  const [visibleSkills, setVisibleSkills] = useState(new Set());
  const skillRefs = useRef([]);

  const allSkills = [
    ...skills.mobile,
    ...skills.web,
    ...skills.architecture,
    ...skills.tools
  ];

  const skillCategories = [
    { name: "Mobile Development", skills: skills.mobile, color: "from-blue-500 to-cyan-500" },
    { name: "Web Development", skills: skills.web, color: "from-green-500 to-emerald-500" },
    { name: "Architecture", skills: skills.architecture, color: "from-purple-500 to-pink-500" },
    { name: "Tools & Technologies", skills: skills.tools, color: "from-orange-500 to-red-500" }
  ];

  useEffect(() => {
    const observers = skillRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleSkills(prev => new Set([...prev, index]));
              }, index * 100);
            }
          });
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Technical Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through 10+ years of mobile and web development experience
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={category.name} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
                {category.name}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const globalIndex = categoryIndex * 10 + skillIndex;
                  const isVisible = visibleSkills.has(globalIndex);
                  
                  return (
                    <div 
                      key={skill.name}
                      ref={el => skillRefs.current[globalIndex] = el}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-blue-300 text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out transform`}
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                            }}
                          />
                        </div>
                        
                        {/* Animated glow effect */}
                        <div 
                          className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${category.color} rounded-full blur-sm opacity-50 transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>

        {/* Interactive Skill Tags */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Android", "iOS", "Flutter", "React Native", "KMP", "React.js", 
              "Next.js", "Node.js", "TypeScript", "MongoDB", "Firebase", 
              "MVVM", "Clean Architecture", "Git", "Docker"
            ].map((tech, index) => (
              <div
                key={tech}
                className="group px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-slate-300 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                <span className="text-sm font-medium">{tech}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;