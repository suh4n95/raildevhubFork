import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`
        bg-white/40 dark:bg-slate-800/40 
        backdrop-blur-2xl 
        rounded-3xl 
        ring-1 ring-black/5 dark:ring-white/10 
        shadow-2xl shadow-gray-500/10 dark:shadow-2xl dark:shadow-cyan-500/10
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;