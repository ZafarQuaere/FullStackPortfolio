import React, { useEffect } from 'react';
import './App.css';
import { Toaster } from './components/ui/toaster';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import BugFixing from './components/BugFixing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { scrollToSection } from './utils/scrollUtils';

// Import mock data
import { 
  personalInfo, 
  skills, 
  projects, 
  experience, 
  education, 
  certifications
} from './mock';

function App() {
  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      // Only remove if link still exists
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  const handleExploreClick = () => {
    scrollToSection('#about');
  };

  return (
    <div className="App">
      <Header personalInfo={personalInfo} />
      
      <main className="min-h-screen">
        <Hero 
          personalInfo={personalInfo} 
          onExploreClick={handleExploreClick}
        />
        
        <About 
          personalInfo={personalInfo}
          experience={experience}
          education={education}
          certifications={certifications}
        />
        
        <Skills skills={skills} />
        
        <Projects projects={projects} />
        
        <Services />
        
        <BugFixing />
        
        <Contact personalInfo={personalInfo} />
      </main>
      
      <Footer personalInfo={personalInfo} />
      
      <Toaster />
    </div>
  );
}

export default App;