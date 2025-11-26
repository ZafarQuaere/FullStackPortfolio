import React from 'react';
import { MapPin, Award, Target, Trophy, CheckCircle2 } from 'lucide-react';
import { Card } from './ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';

const About = ({ personalInfo, experience = [], education, certifications }) => {
  // Concise key responsibilities
  const conciseResponsibilities = [
    "Develop cross-platform mobile applications (Android, iOS, Flutter, React Native, KMP)",
    "Build full-stack web applications, landing pages, and MVPs",
    "Design and implement scalable architecture patterns (MVVM, Clean Architecture, Microservices)",
    "Lead development teams and mentor engineers on best practices",
    "Optimize application performance and maintain CI/CD pipelines"
  ];
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
          </div>

          {/* Right Column - Responsibilities & Achievements */}
          <div className="space-y-6">
            <Tabs defaultValue="responsibilities" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-white/5 backdrop-blur-md border border-white/10 p-1 rounded-xl mb-6">
                <TabsTrigger 
                  value="responsibilities"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white text-slate-300 rounded-lg transition-all"
                >
                  <Target className="w-4 h-4 mr-2" />
                  Responsibilities
                </TabsTrigger>
                <TabsTrigger 
                  value="achievements"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white text-slate-300 rounded-lg transition-all"
                >
                  <Trophy className="w-4 h-4 mr-2" />
                  Achievements
                </TabsTrigger>
              </TabsList>

              {/* Concise Responsibilities Tab */}
              <TabsContent value="responsibilities" className="mt-0">
                <Card className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                      <Target className="w-5 h-5 text-purple-400" />
                    </div>
                    <h5 className="text-xl font-semibold text-white">Key Responsibilities</h5>
                  </div>
                  <ul className="space-y-3">
                    {conciseResponsibilities.map((desc, i) => (
                      <li key={i} className="text-slate-300 text-sm flex items-start group/item">
                        <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 text-purple-400 flex-shrink-0 group-hover/item:text-cyan-400 transition-colors" />
                        <span className="flex-1 leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </TabsContent>

              {/* Achievements Tab with Education & Certifications */}
              <TabsContent value="achievements" className="mt-0 space-y-4">
                {/* Key Achievements */}
                <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md border border-cyan-500/20 p-6 rounded-xl hover:border-cyan-500/40 transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h5 className="text-xl font-semibold text-white">Key Achievements</h5>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        Led development of 10+ production mobile applications with millions of downloads across Android and iOS platforms
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        Successfully delivered 15+ web projects including landing pages, MVPs, and full-stack applications
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        Mentored and trained development teams, improving code quality and delivery speed by 40%
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        Implemented scalable architecture patterns reducing technical debt and improving maintainability
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        Optimized application performance resulting in 30% faster load times and improved user experience
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Education & Certifications */}
                <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md border border-blue-500/20 p-6 rounded-xl hover:border-blue-500/40 transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center">
                      <Award className="w-6 h-6 text-blue-400" />
                    </div>
                    <h5 className="text-xl font-semibold text-white">Education & Certifications</h5>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-2 border-blue-500/30 pl-4">
                      <h5 className="font-semibold text-white">{education?.degree}</h5>
                      <p className="text-blue-300">{education?.institution}</p>
                      <p className="text-slate-400 text-sm">{education?.year}</p>
                    </div>
                    {certifications?.map((cert, index) => (
                      <div key={index} className="border-l-2 border-purple-500/30 pl-4">
                        <h5 className="font-semibold text-white">{cert.name}</h5>
                        <p className="text-purple-300">{cert.issuer}</p>
                        <p className="text-slate-400 text-sm">{cert.date}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;