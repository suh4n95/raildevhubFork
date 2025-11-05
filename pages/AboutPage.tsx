import React from 'react';
import CtaBanner from '../components/CtaBanner';
import GlassCard from '../components/GlassCard';
import { CheckCircleIcon } from '../components/icons';
import AnimatedSection from '../components/AnimatedSection';


const AboutPage: React.FC = () => {
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">About RailDevHub</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg lg:text-xl text-slate-700 dark:text-slate-300">
            Where Steel Rails Meet Silicon Dreams.
          </p>
        </div>
        </AnimatedSection>
      </section>
      
      {/* Our Story */}
      <AnimatedSection className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center">
             <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Story: The Birth of a Revolution</h2>
             <GlassCard className="max-w-3xl mx-auto mt-8 p-8">
                <p className="text-xl italic text-slate-800 dark:text-slate-200">"What if we could see the future of every train before it departs?"</p>
             </GlassCard>
           </div>
           <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
             <GlassCard className="p-8">
                <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">The Railway Heritage</h3>
                <p className="text-slate-600 dark:text-slate-400">Our roots are deeply embedded in the rich history of railway engineering. We understand the weight of every car, the importance of every schedule, and the responsibility of every journey.</p>
             </GlassCard>
             <GlassCard className="p-8">
                <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">The Digital Awakening</h3>
                <p className="text-slate-600 dark:text-slate-400">Our vision was sparked by the transformative power of data and software. We saw an opportunity to merge a century of railway knowledge with the limitless potential of digital innovation.</p>
             </GlassCard>
           </div>
        </div>
      </AnimatedSection>

      {/* Mission & Pillars */}
      <AnimatedSection className="py-20 bg-gray-100/50 dark:bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Mission: Rewriting the Future of Mobility</h2>
                <p className="mt-4 text-slate-700 dark:text-slate-300">Our mission is to engineer the world's most intelligent, reliable, and efficient railway systems by building a seamless digital layer over the physical world of transportation. We are a team of <span className="font-bold text-sky-600 dark:text-sky-400">15 experts</span> committed to this vision.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <PillarCard title="Innovation First" />
                <PillarCard title="Expert Team" />
                <PillarCard title="Quality Focused" />
                <PillarCard title="European Standards" />
            </div>
        </div>
      </AnimatedSection>

      {/* What We're Building */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">What We're Building Today</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <InfoCard title="Digital Platforms" description="Scalable, microservice-based systems like RayNext and RayData."/>
                <InfoCard title="IoT & Smart Sensors" description="Integrating real-time data from tracks, trains, and stations."/>
                <InfoCard title="AI-Powered Intelligence" description="Leveraging machine learning for predictive maintenance and optimization."/>
            </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection>
        <CtaBanner
          title="See Our Work in Action"
          description="Dive into our projects and explore the technical expertise that makes it all possible."
          primaryLink={{ href: '/projects', label: 'View Our Projects' }}
          secondaryLink={{ href: '/expertise', label: 'Our Expertise' }}
        />
      </AnimatedSection>

    </div>
  );
};


const PillarCard: React.FC<{title: string}> = ({title}) => (
    <div className="text-center p-6 bg-white/50 dark:bg-slate-700/20 rounded-2xl shadow-sm">
        <p className="font-semibold text-slate-800 dark:text-slate-200">{title}</p>
    </div>
);

const InfoCard: React.FC<{title: string, description: string}> = ({title, description}) => (
    <GlassCard className="p-8">
        <h3 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400">{description}</p>
    </GlassCard>
);

export default AboutPage;