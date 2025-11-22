import React from 'react';
import { Github, Linkedin, Mail, Phone, Heart, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

const Footer = ({ personalInfo }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-white/10">
      {/* Floating Action Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        size="sm"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-4 font-['Space_Grotesk']">
                {personalInfo.name}
              </h3>
              <p className="text-slate-300 leading-relaxed max-w-md">
                Full-Stack Mobile & Web Developer with 10+ years of experience crafting exceptional mobile applications and modern websites. 
                Specializing in cross-platform mobile development, dynamic web applications, and creating user-centric digital solutions.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-purple-500/20 hover:border-purple-500/30 transition-all duration-300"
              >
                <Github className="w-5 h-5 text-slate-300 group-hover:text-purple-300" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-blue-300" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="group p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-green-500/20 hover:border-green-500/30 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-slate-300 group-hover:text-green-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-slate-300 hover:text-blue-300 transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-slate-300 hover:text-blue-300 transition-colors group"
              >
                <Mail className="w-4 h-4 mr-3 group-hover:text-blue-400" />
                <span className="text-sm">{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center text-slate-300 hover:text-green-300 transition-colors group"
              >
                <Phone className="w-4 h-4 mr-3 group-hover:text-green-400" />
                <span className="text-sm">{personalInfo.phone}</span>
              </a>
            </div>

            {/* Availability Status */}
            <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
                <span className="text-green-300 text-sm font-medium">Available for projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-400 text-sm flex items-center">
              © {currentYear} {personalInfo.name}. Built with 
              <Heart className="w-4 h-4 mx-2 text-red-400" />
              and lots of caffeine
            </p>
            <p className="text-slate-400 text-sm mt-4 md:mt-0">
              Designed & Developed with React + FastAPI
            </p>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;