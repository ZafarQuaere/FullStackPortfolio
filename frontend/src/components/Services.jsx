import React from 'react';
import { Bug, Code, FileCheck, Users, Clock, CheckCircle2, Shield, MessageCircle } from 'lucide-react';
import { Card } from './ui/card';

const Services = () => {
  const serviceOfferings = [
    {
      icon: Bug,
      title: "Bug Detection & Resolution",
      description: "Comprehensive bug analysis and fixing for up to 2 critical bugs per engagement",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Code,
      title: "Build Error Solutions",
      description: "Expert troubleshooting for compilation errors, dependency conflicts, and build failures",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Crash Analysis & Prevention",
      description: "In-depth crash investigation with root cause analysis and preventive measures",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FileCheck,
      title: "Comprehensive Documentation",
      description: "Detailed documentation of issues, solutions, and code changes for future reference",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const deliverables = [
    {
      icon: Bug,
      title: "Issue Resolution",
      description: "Fix up to 2 critical bugs with thorough testing and validation"
    },
    {
      icon: MessageCircle,
      title: "Problem Analysis",
      description: "Clear explanation of the bug, its root cause, and impact on your application"
    },
    {
      icon: Code,
      title: "Solution Documentation",
      description: "Detailed documentation of the implemented solution and best practices"
    },
    {
      icon: FileCheck,
      title: "Code Change Log",
      description: "Comprehensive documentation of all code modifications and improvements"
    },
    {
      icon: Clock,
      title: "Unlimited Revisions",
      description: "Continuous support until the issues are completely resolved"
    },
    {
      icon: CheckCircle2,
      title: "Quality Assurance",
      description: "Guaranteed customer satisfaction with professional service delivery"
    }
  ];

  const expertise = [
    "Application crashes and force closes",
    "Build and compilation errors",
    "Performance optimization issues",
    "Memory leaks and ANR (Application Not Responding)",
    "API integration problems",
    "Third-party library conflicts",
    "UI/UX rendering issues",
    "Database and storage errors",
    "Authentication and authorization bugs",
    "Payment gateway integration issues"
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Bug Fixing & Issue Resolution
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Professional Android app debugging and issue resolution services. I specialize in identifying, 
            analyzing, and fixing bugs, crashes, and build errors to ensure your application runs smoothly 
            and delivers exceptional user experience.
          </p>
        </div>

        {/* Service Offerings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {serviceOfferings.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <Card key={index} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02] group">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 leading-relaxed">{service.description}</p>
              </Card>
            );
          })}
        </div>

        {/* What You'll Receive */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            What You'll Receive
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, index) => {
              const IconComponent = item.icon;
              
              return (
                <Card key={index} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <IconComponent className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Issues I Can Resolve
          </h3>
          <Card className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Commitment Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md border border-white/10 p-8 rounded-xl">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">Client-Focused Approach</h4>
                <p className="text-slate-300 leading-relaxed">
                  Your satisfaction is my top priority. I am committed to building long-term 
                  relationships based on trust, quality, and reliable service delivery. Every 
                  project is handled with professionalism and attention to detail.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-white/10 p-8 rounded-xl">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-purple-500/20 rounded-full">
                <Clock className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">Flexible & Available</h4>
                <p className="text-slate-300 leading-relaxed">
                  I maintain flexible working hours to accommodate different time zones and urgent 
                  requirements. Whether you need immediate bug fixes or scheduled maintenance, I'm 
                  here to support your development needs.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/10 p-10 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Fix Your App Issues?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your bug fixing needs and get your Android application running smoothly. 
              Professional service with guaranteed results.
            </p>
            <a 
              href="#contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Started Now
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;

