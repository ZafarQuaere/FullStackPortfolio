import React from 'react';
import { Bug, Code, Shield, FileText, Search, FileCode, RefreshCw, CheckCircle2, Users, Clock, ArrowRight } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import SectionHeader from './shared/SectionHeader';
import ServiceCard from './shared/ServiceCard';
import { scrollToSection } from '../utils/scrollUtils';

const BugFixing = () => {
  const services = [
    {
      id: 1,
      title: "Bug Detection & Resolution",
      description: "Comprehensive bug analysis and fixing for up to 2 critical bugs per engagement.",
      icon: Bug,
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 2,
      title: "Build Error Solutions",
      description: "Expert troubleshooting for compilation errors, dependency conflicts, and build failures.",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Crash Analysis & Prevention",
      description: "In-depth crash investigation with root cause analysis and preventive measures.",
      icon: Shield,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Comprehensive Documentation",
      description: "Detailed documentation of issues, solutions, and code changes for future reference.",
      icon: FileText,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const deliverables = [
    {
      id: 1,
      title: "Issue Resolution",
      description: "Fix up to 2 critical bugs with thorough testing and validation.",
      icon: Bug
    },
    {
      id: 2,
      title: "Problem Analysis",
      description: "Clear explanation of the bug, its root cause, and impact on your application.",
      icon: Search
    },
    {
      id: 3,
      title: "Solution Documentation",
      description: "Detailed documentation of the implemented solution and best practices.",
      icon: Code
    },
    {
      id: 4,
      title: "Code Change Log",
      description: "Comprehensive documentation of all code modifications and improvements.",
      icon: FileCode
    },
    {
      id: 5,
      title: "Unlimited Revisions",
      description: "Continuous support until the issues are completely resolved.",
      icon: RefreshCw
    },
    {
      id: 6,
      title: "Quality Assurance",
      description: "Guaranteed customer satisfaction with professional service delivery.",
      icon: CheckCircle2
    }
  ];

  const issues = [
    "Application crashes and force closes",
    "Performance optimization issues",
    "API integration problems",
    "UI/UX rendering issues",
    "Authentication and authorization bugs",
    "Build and compilation errors",
    "Memory leaks and ANR (Application Not Responding)",
    "Third-party library conflicts",
    "Database and storage errors",
    "Payment gateway integration issues"
  ];

  return (
    <section id="bug-fixing" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader 
          title="Expert in Bug Fixes and Issue Resolutions"
          subtitle="Professional Android app debugging and issue resolution services. I specialize in identifying, analyzing, and fixing bugs, crashes, and build errors to ensure your application runs smoothly and delivers exceptional user experience."
          subtitleClassName="max-w-3xl"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* What You'll Receive Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12 font-['Space_Grotesk']">
            What You'll Receive
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item) => {
              const IconComponent = item.icon;
              return (
                <Card key={item.id} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Issues I Can Resolve */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8 font-['Space_Grotesk']">
            Issues I Can Resolve
          </h3>
          <Card className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {issues.map((issue, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300 text-sm leading-relaxed">{issue}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Service Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Card className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">Client-Focused Approach</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Your satisfaction is my top priority. I am committed to building long-term relationships based on trust, quality, and reliable service delivery. Every project is handled with professionalism and attention to detail.
            </p>
          </Card>

          <Card className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">Flexible & Available</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              I maintain flexible working hours to accommodate different time zones and urgent requirements. Whether you need immediate bug fixes or scheduled maintenance, I'm here to support your development needs.
            </p>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-md border border-blue-500/20 p-8 rounded-xl text-center">
          <h3 className="text-3xl font-bold text-white mb-4 font-['Space_Grotesk']">
            Ready to Fix Your App Issues?
          </h3>
          <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">
            Let's discuss your bug fixing needs and get your Android application running smoothly. Professional service with guaranteed results.
          </p>
          <Button 
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 group"
            onClick={() => scrollToSection('#contact')}
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default BugFixing;

