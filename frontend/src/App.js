import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import mock data
import { 
  personalInfo, 
  skills, 
  projects, 
  experience, 
  education, 
  certifications, 
  blogPosts 
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
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      const offset = 80; // Account for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = aboutSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
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
          
          <Blog blogPosts={blogPosts} />
          
          <Contact personalInfo={personalInfo} />
        </main>
        
        <Footer personalInfo={personalInfo} />
        
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;