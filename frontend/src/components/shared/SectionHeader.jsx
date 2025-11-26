import React from 'react';

/**
 * Reusable section header component
 * Used across multiple sections to maintain consistency
 */
const SectionHeader = ({ title, subtitle, subtitleClassName = "" }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
        {title}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
      {subtitle && (
        <p className={`text-slate-300 text-lg mx-auto leading-relaxed ${subtitleClassName || 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

