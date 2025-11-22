import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';
import { Card } from './ui/card';

const About = ({ personalInfo, experience, education, certifications }) => {
  return (
    <section id="about" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Profile */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              <Card className="relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-md opacity-30"></div>
                    <img 
                      src={personalInfo.profileImage} 
                      alt={personalInfo.name}
                      className="relative w-32 h-32 rounded-full object-cover border-4 border-white/20"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">{personalInfo.name}</h3>
                    <p className="text-blue-300 text-lg mb-4">{personalInfo.title}</p>
                    <div className="flex items-center justify-center md:justify-start text-slate-300 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>India</span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed mt-6">
                  {personalInfo.description}
                </p>
              </Card>
            </div>

            {/* Education & Certifications */}
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-400" />
                Education & Certifications
              </h4>
              <div className="space-y-4">
                <div className="border-l-2 border-blue-500/30 pl-4">
                  <h5 className="font-semibold text-white">{education.degree}</h5>
                  <p className="text-blue-300">{education.institution}</p>
                  <p className="text-slate-400 text-sm">{education.year}</p>
                </div>
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-2 border-purple-500/30 pl-4">
                    <h5 className="font-semibold text-white">{cert.name}</h5>
                    <p className="text-purple-300">{cert.issuer}</p>
                    <p className="text-slate-400 text-sm">{cert.date}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Experience Timeline */}
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-blue-400" />
              Career Journey
            </h4>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"></div>
              
              {experience.map((exp, index) => (
                <div key={exp.id} className="relative pl-12 pb-8 group">
                  {/* Timeline dot */}
                  <div className="absolute left-2 w-4 h-4 bg-blue-500 rounded-full border-2 border-slate-950 group-hover:bg-purple-500 transition-colors duration-300"></div>
                  
                  <Card className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02]">
                    <h5 className="text-xl font-semibold text-white mb-1">{exp.position}</h5>
                    <p className="text-blue-300 font-medium mb-2">{exp.company}</p>
                    <p className="text-slate-400 text-sm mb-4 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.duration}
                      {exp.location && (
                        <>
                          <span className="mx-2">•</span>
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </>
                      )}
                    </p>
                    <ul className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-slate-300 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;