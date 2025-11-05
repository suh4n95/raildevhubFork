import React from 'react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import TechPills from '../components/TechPills';
import MetricStrip from '../components/MetricStrip';
import CtaBanner from '../components/CtaBanner';
import { CheckCircleIcon, ArrowRightIcon } from '../components/icons';
import AnimatedSection from '../components/AnimatedSection';

const ProjectsPage: React.FC = () => {
  const projectImpactMetrics = [
    { value: '2', label: 'Major Platforms' },
    { value: '100+', label: 'Reports & Dashboards' },
    { value: '15%', label: 'Efficiency Increase' },
    { value: '40%', label: 'Faster Decisions' },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Header */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 text-center">
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-radial from-sky-200/40 to-transparent dark:from-sky-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-radial from-cyan-200/40 to-transparent dark:from-cyan-500/20 rounded-full blur-3xl"></div>
        </div>
        <AnimatedSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">Our Projects</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg lg:text-xl text-slate-700 dark:text-slate-300">
            Building the digital infrastructure that powers the future of railway transportation.
          </p>
        </div>
        </AnimatedSection>
      </section>

      {/* RayNext Project Section */}
      <AnimatedSection className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-black dark:text-white">RayNext – Digital Railway Management System</h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                The future of digital railway starts today. A comprehensive platform for UDHGM (General Directorate of Transportation Services Regulation) to digitalize all railway sector processes, from type approval to train driver management.
              </p>
              <ul className="mt-6 space-y-4">
                <FeatureListItem text="Complete Digital Ecosystem — From type approval to vehicle registration, ECM management to safety certificates, training centers to train driver management." />
                <FeatureListItem text="Seamless Integration — E-Government, Ministry of Health, U-NET, GIB integration — part of Turkey’s digital ecosystem." />
                <FeatureListItem text="User-Centric Design — From UDHGM personnel in Ankara to applicants across Turkey." />
              </ul>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 items-center">
                  <TechPills technologies={['Java SpringBoot', 'React', 'Microservices', 'PostgreSQL', 'Kubernetes', 'Docker']} />
                  <Link to="/stories/raynext" className="text-sm font-semibold text-sky-600 dark:text-cyan-400 flex items-center hover:text-sky-500 dark:hover:text-cyan-300 transition-colors">
                      Learn More <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
               <GlassCard className="p-4">
                  <img src="https://picsum.photos/seed/raynext/800/600" alt="Abstract representation of RayNext" className="rounded-2xl shadow-lg"/>
               </GlassCard>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* RayData Project Section */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div>
               <GlassCard className="p-4">
                  <img src="https://picsum.photos/seed/raydata/800/600" alt="Abstract representation of RayData" className="rounded-2xl shadow-lg"/>
               </GlassCard>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-black dark:text-white">RayData – The Power of Railway Data</h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                The digital brain of railway operations... transforms data into decision-making power with 3 dashboards, 100+ reports, and real-time analytics.
              </p>
              <ul className="mt-6 space-y-4">
                <FeatureListItem text="3 Comprehensive Dashboards — Executive, Operations, Analytics." />
                <FeatureListItem text="100+ Detailed Reports — Covering all railway operations." />
                <FeatureListItem text="Real-Time & Predictive — Live data streaming, AI-powered demand forecasts, failure predictions, optimization." />
              </ul>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 items-center">
                  <TechPills technologies={['React', 'Recharts', 'Leaflet', 'Data Warehouse', 'OLAP Cubes', 'PostgreSQL', 'Redis', 'Elasticsearch']} />
                   <Link to="/stories/raydata" className="text-sm font-semibold text-sky-600 dark:text-cyan-400 flex items-center hover:text-sky-500 dark:hover:text-cyan-300 transition-colors">
                      Learn More <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Project Impact Section */}
      <AnimatedSection>
        <MetricStrip metrics={projectImpactMetrics} />
      </AnimatedSection>

      <AnimatedSection>
        <CtaBanner
          title="Explore Our Expertise"
          description="Discover the technologies and methodologies that power our innovative solutions."
          primaryLink={{ href: '/expertise', label: 'View Our Expertise' }}
        />
      </AnimatedSection>
    </div>
  );
};

const FeatureListItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start">
    <CheckCircleIcon className="flex-shrink-0 h-6 w-6 text-cyan-500 mt-0.5" />
    <span className="ml-3 text-slate-700 dark:text-slate-300">{text}</span>
  </li>
);

export default ProjectsPage;