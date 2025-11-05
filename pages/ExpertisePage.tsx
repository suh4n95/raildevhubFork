import React from 'react';
import CtaBanner from '../components/CtaBanner';
import GlassCard from '../components/GlassCard';
import { AiIcon, SoftwareIcon } from '../components/icons';
import AnimatedSection from '../components/AnimatedSection';

const aiExpertise = [
    { title: "Large Language Models (LLM)", description: "Intelligent query systems, automated reports, and multilingual support." },
    { title: "AI Agents", description: "Predictive maintenance, anomaly detection, and autonomous decision-making." },
    { title: "Multi-Criteria Planning (MCP)", description: "Optimizing complex scheduling and routing scenarios." },
    { title: "Agent-to-Agent (A2A)", description: "Creating collaborative systems for dynamic resource allocation." },
    { title: "Big Data Analytics", description: "Real-time processing, ML models, and interactive BI dashboards." }
];

const softwareExpertise = [
    { title: "Java & SpringBoot", description: "Robust, scalable, and secure backend microservices." },
    { title: "React & Modern Web", description: "Intuitive, high-performance user interfaces." },
    { title: "Microservices Architecture", description: "Building resilient and independently deployable services." },
    { title: "PostgreSQL & MongoDB", description: "Versatile data storage solutions for relational and NoSQL needs." },
    { title: "Kubernetes & Docker", description: "Containerization and orchestration for cloud-native environments." },
    { title: "Linux & Elasticsearch", description: "Powering our infrastructure and enabling powerful search capabilities." }
];

const ExpertisePage: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Header */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 text-center">
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-radial from-cyan-200/40 to-transparent dark:from-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-radial from-sky-200/40 to-transparent dark:from-sky-500/20 rounded-full blur-3xl"></div>
        </div>
        <AnimatedSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">Our Expertise</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg lg:text-xl text-slate-700 dark:text-slate-300">
            The intersection of deep domain knowledge and cutting-edge technology.
          </p>
        </div>
        </AnimatedSection>
      </section>

      {/* Main Expertise Sections */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Artificial Intelligence */}
                <AnimatedSection>
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center text-white">
                                <AiIcon className="w-7 h-7" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Artificial Intelligence</h2>
                        </div>
                        <div className="space-y-6">
                            {aiExpertise.map(item => <ExpertiseItem key={item.title} title={item.title} description={item.description} />)}
                        </div>
                    </div>
                </AnimatedSection>

                {/* Software Engineering */}
                <AnimatedSection>
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center text-white">
                                <SoftwareIcon className="w-7 h-7" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Software Engineering</h2>
                        </div>
                        <div className="space-y-6">
                            {softwareExpertise.map(item => <ExpertiseItem key={item.title} title={item.title} description={item.description} />)}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
      </section>

      <AnimatedSection>
        <CtaBanner
          title="See Our Expertise in Action"
          description="Our projects are the ultimate showcase of our technical capabilities. Explore how we apply this expertise to solve real-world railway challenges."
          primaryLink={{ href: '/projects', label: 'View Our Projects' }}
        />
      </AnimatedSection>
    </div>
  );
};

interface ExpertiseItemProps {
    title: string;
    description: string;
}

const ExpertiseItem: React.FC<ExpertiseItemProps> = ({ title, description }) => (
    <GlassCard className="p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-400/10 dark:hover:shadow-cyan-500/10">
        <h3 className="font-semibold text-lg text-black dark:text-white">{title}</h3>
        <p className="mt-1 text-slate-600 dark:text-slate-400">{description}</p>
    </GlassCard>
);

export default ExpertisePage;