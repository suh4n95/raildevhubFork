import React from 'react';

interface TechPillsProps {
  technologies: string[];
}

const TechPills: React.FC<TechPillsProps> = ({ technologies }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 text-xs font-medium text-sky-800 bg-sky-100/70 dark:text-cyan-300 dark:bg-cyan-900/50 rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechPills;