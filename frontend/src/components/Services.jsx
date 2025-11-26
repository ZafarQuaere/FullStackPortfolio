import React from 'react';
import { Smartphone, Code, Rocket, Briefcase, Wrench, Layers, Bug } from 'lucide-react';
import SectionHeader from './shared/SectionHeader';
import ServiceCard from './shared/ServiceCard';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Native App Development",
      description: "Expert development of native mobile applications for Android and iOS platforms with optimal performance and platform-specific features.",
      icon: Smartphone,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Cross Platform App Development Using Flutter and React Native",
      description: "Build efficient cross-platform mobile applications using Flutter and React Native for faster development and code reusability across platforms.",
      icon: Code,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "MVP Creation",
      description: "Rapid development of Minimum Viable Products (MVPs) to validate your business idea quickly and cost-effectively with core features.",
      icon: Rocket,
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      id: 4,
      title: "Landing Page",
      description: "High-converting landing pages designed to capture leads, drive conversions, and support your marketing campaigns with modern design.",
      icon: Briefcase,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 5,
      title: "Portfolios",
      description: "Professional portfolio websites showcasing your work, skills, and achievements with elegant design and smooth user experience.",
      icon: Layers,
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 6,
      title: "Website Maintenance and Bug Resolutions",
      description: "Ongoing support and maintenance services to keep your website secure, updated, and running smoothly with quick bug fixes.",
      icon: Wrench,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 7,
      title: "Mobile App Maintenance and Bug Resolutions",
      description: "Comprehensive maintenance and support for mobile applications including bug fixes, updates, and performance optimizations.",
      icon: Smartphone,
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      id: 8,
      title: "Expert in Fixing Crashes and Build Issues",
      description: "Specialized expertise in diagnosing and resolving app crashes, build failures, and technical issues across mobile and web platforms.",
      icon: Bug,
      gradient: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader 
          title="My Services"
          subtitle="Comprehensive development and maintenance services for mobile and web applications"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

