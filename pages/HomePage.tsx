import React from 'react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import MetricStrip from '../components/MetricStrip';
import CtaBanner from '../components/CtaBanner';
import TechPills from '../components/TechPills';
import { ArrowRightIcon } from '../components/icons';
import AnimatedSection from '../components/AnimatedSection';

const HomePage: React.FC = () => {
  const projectImpactMetrics = [
    { value: '2', label: 'Major Platforms' },
    { value: '100+', label: 'Reports & Dashboards' },
    { value: '15%', label: 'Efficiency Increase' },
    { value: '40%', label: 'Faster Decisions' },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] lg:w-[60rem] lg:h-[60rem] bg-gradient-radial from-cyan-300/40 to-transparent dark:from-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[40rem] h-[40rem] lg:w-[60rem] lg:h-[60rem] bg-gradient-radial from-sky-300/40 to-transparent dark:from-sky-400/20 rounded-full blur-3xl"></div>
        </div>
        <AnimatedSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-balance text-slate-900 dark:text-white">
            Transforming Railway Operations Through <span className="bg-gradient-to-br from-sky-500 via-cyan-400 to-emerald-400 text-transparent bg-clip-text">Innovative Digital Solutions.</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg lg:text-xl text-slate-700 dark:text-slate-300">
            RailDevHub is at the forefront of the digital revolution in the railway sector, building intelligent, scalable, and robust platforms for a new era of transportation.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-sky-500 to-cyan-500 hover:scale-[1.02] transition-transform duration-300 shadow-lg"
            >
              View Projects
            </Link>
            <Link
              to="/stories/raynext"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-black dark:text-white bg-white/60 dark:bg-slate-700/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-700/80 transition-colors duration-300 shadow-lg"
            >
              Our Stories <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        </AnimatedSection>
      </section>

      {/* Metric Strip */}
       <AnimatedSection>
        <MetricStrip metrics={projectImpactMetrics} />
      </AnimatedSection>

      {/* Projects Preview Section */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Our Flagship Projects</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
                Two platforms, one vision: a fully digitized and data-driven railway ecosystem.
              </p>
            </div>
          </AnimatedSection>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
             <AnimatedSection>
              <ProjectPreviewCard
                title="RayNext"
                subtitle="Digital Railway Management System"
                description="A comprehensive platform to digitalize all railway sector processes, from type approval to train driver management."
                link="/stories/raynext"
                tech={['Java SpringBoot', 'React', 'Microservices', 'PostgreSQL', 'Kubernetes']}
              />
            </AnimatedSection>
             <AnimatedSection>
              <ProjectPreviewCard
                title="RayData"
                subtitle="The Power of Railway Data"
                description="The digital brain of railway operations, transforming data into decision-making power with dashboards, reports, and real-time analytics."
                link="/stories/raydata"
                tech={['React', 'Recharts', 'Data Warehouse', 'OLAP Cubes', 'Elasticsearch']}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <AnimatedSection>
        <CtaBanner
          title="Ready to Build the Future?"
          description="Explore our expertise and see how we're rewriting the future of mobility, one line of code at a time."
          primaryLink={{ href: '/expertise', label: 'Our Expertise' }}
          secondaryLink={{ href: '/about', label: 'About Us' }}
        />
      </AnimatedSection>
    </div>
  );
};

interface ProjectPreviewCardProps {
    title: string;
    subtitle: string;
    description: string;
    link: string;
    tech: string[];
}

const ProjectPreviewCard: React.FC<ProjectPreviewCardProps> = ({ title, subtitle, description, link, tech }) => (
    <Link to={link} className="block group">
        <GlassCard className="p-8 h-full transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-sky-500/20 dark:group-hover:shadow-cyan-500/20">
            <h3 className="text-2xl font-bold bg-gradient-to-br from-sky-500 via-cyan-400 to-emerald-500 text-transparent bg-clip-text">{title}</h3>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">{subtitle}</p>
            <p className="mt-4 text-slate-600 dark:text-slate-400">{description}</p>
            <div className="mt-6">
                <TechPills technologies={tech} />
            </div>
            <div className="mt-6 text-sm font-semibold text-sky-600 dark:text-cyan-400 flex items-center group-hover:text-sky-500 dark:group-hover:text-cyan-300">
                Read the Story <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
        </GlassCard>
    </Link>
)

export default HomePage;