import React from 'react';
import { Card } from '../ui/card';

/**
 * Reusable service card component
 * Eliminates duplication between Services and BugFixing components
 */
const ServiceCard = ({ service, showGlow = true, iconSize = "w-14 h-14", iconInnerSize = "w-7 h-7" }) => {
  const IconComponent = service.icon;
  
  return (
    <div className="group">
      {showGlow && (
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
      )}
      
      <Card className="relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300 transform group-hover:scale-105 h-full flex flex-col">
        <div className={`${iconSize} rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className={`${iconInnerSize} text-white`} />
        </div>

        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
          {service.title}
        </h3>
        
        <p className="text-slate-300 text-sm leading-relaxed flex-grow">
          {service.description}
        </p>
      </Card>
    </div>
  );
};

export default ServiceCard;

