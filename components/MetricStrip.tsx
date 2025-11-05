import React from 'react';

interface Metric {
  value: string;
  label: string;
}

interface MetricStripProps {
  metrics: Metric[];
}

const MetricStrip: React.FC<MetricStripProps> = ({ metrics }) => {
  return (
    <div className="bg-gray-100/80 dark:bg-slate-800/50 backdrop-blur-sm py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-sky-500 via-cyan-400 to-emerald-500 text-transparent bg-clip-text">
                {metric.value}
              </span>
              <span className="mt-1 text-sm sm:text-base text-slate-600 dark:text-slate-400 tracking-wide">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetricStrip;