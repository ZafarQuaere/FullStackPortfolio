import React from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Blog = ({ blogPosts }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Latest Insights
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Sharing knowledge about mobile development, web development, and modern software architecture
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={post.id} className="group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <Card className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform group-hover:scale-105">
                {/* Featured Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="bg-white/10 text-slate-300 border-white/20 hover:bg-blue-500/20 hover:text-blue-300 transition-colors text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-slate-400 text-sm mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Read More Button */}
                  <Button 
                    variant="ghost" 
                    className="w-full text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 group/btn"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="text-center mt-12">
          <Card className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl max-w-md mx-auto">
            <div className="mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tag className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">More Content Coming Soon</h3>
            <p className="text-slate-300 text-sm">
              I'm working on more technical articles about cross-platform development, web technologies, and modern software architecture patterns.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blog;