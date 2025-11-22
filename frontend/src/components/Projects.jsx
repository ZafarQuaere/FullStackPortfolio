import React, { useState } from 'react';
import { ExternalLink, Github, Smartphone, Tag } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Projects = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const types = ['All', 'Mobile App', 'Website'];
  
  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const typeMatch = selectedType === 'All' || project.type === selectedType.toLowerCase().replace(' ', '');
    return categoryMatch && typeMatch;
  });

  const getCategoryColor = (category) => {
    const colors = {
      'Mobile App': 'from-blue-500 to-cyan-500',
      'E-commerce': 'from-green-500 to-emerald-500',
      'Professional Services': 'from-purple-500 to-pink-500',
      'Landing Page': 'from-orange-500 to-red-500',
      'Portfolio': 'from-indigo-500 to-blue-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A showcase of mobile applications and websites I've architected and developed across various industries
          </p>
        </div>

        {/* Type Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {types.map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedType === type
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'bg-white/5 border-white/20 text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {type}
            </Button>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-white/5 border-white/20 text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(project.category)} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <Card className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform group-hover:scale-105">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`bg-gradient-to-r ${getCategoryColor(project.category)} text-white border-0`}>
                      {project.category}
                    </Badge>
                  </div>

                  {/* Project links overlay */}
                  <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4 transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      {project.type === 'mobile' ? (
                        <>
                          <Smartphone className="w-4 h-4 mr-2" />
                          Play Store
                        </>
                      ) : (
                        <>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Site
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-white/10 text-slate-300 rounded-md border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-white/5 text-slate-400 rounded-md">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Project Footer */}
                  <div className="flex items-center justify-between">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 p-0"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {project.type === 'mobile' ? 'View App' : 'Visit Site'}
                    </Button>
                    
                    <div className="flex items-center text-slate-400 text-xs">
                      <Tag className="w-3 h-3 mr-1" />
                      {project.type === 'mobile' ? 'Mobile App' : 'Website'}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://github.com/ZafarQuaere', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;