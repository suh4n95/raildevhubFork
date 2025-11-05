import React from 'react';
import GlassCard from '../components/GlassCard';
import CtaBanner from '../components/CtaBanner';
import MetricStrip from '../components/MetricStrip';
import AnimatedSection from '../components/AnimatedSection';

const RayDataStoryPage: React.FC = () => {
    const expectedImpactMetrics = [
        { value: '15%', label: 'Efficiency Boost' },
        { value: '40%', label: 'Faster Decisions' },
        { value: '<2s', label: 'Data Access Time' },
        { value: '90%+', label: 'User Satisfaction' },
    ];
  return (
    <div className="overflow-x-hidden">
      {/* Story Header */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 text-center">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/4 left-0 w-full h-full bg-gradient-radial from-cyan-200/50 to-transparent dark:from-cyan-500/20 rounded-full blur-3xl"></div>
        </div>
        <AnimatedSection>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 tracking-widest uppercase">Istanbul to Ankara • November 2025</p>
            <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">RayData: The Power of Railway Data</h1>
          </div>
        </AnimatedSection>
      </section>

      {/* Quote Block */}
      <AnimatedSection className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <GlassCard className="p-8 md:p-12">
            <blockquote className="text-center text-lg md:text-xl font-medium text-slate-800 dark:text-slate-200 italic">
              “A data revolution rising from Istanbul, designed to empower every decision made in Ankara, and impacting every kilometer of track across the nation.”
            </blockquote>
          </GlassCard>
        </div>
      </AnimatedSection>
      
      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {/* Why RayData? */}
            <AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <GlassCard className="p-4 order-2 md:order-1"><img src="https://picsum.photos/seed/raydata-vision/600/400" alt="Vision of RayData" className="rounded-2xl" /></GlassCard>
                  <div className="order-1 md:order-2">
                      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Why RayData?</h2>
                      <p className="mt-4 text-slate-600 dark:text-slate-400"><strong className="text-black dark:text-white">Ray:</strong> For the railway system it serves. <br/><strong className="text-black dark:text-white">Data:</strong> For the raw power of information it unleashes.</p>
                  </div>
              </div>
            </AnimatedSection>

            {/* Vision and Need */}
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <ContentBlock title="The Vision from Istanbul" text="Developed by the expert teams at PiA Group, RayData was envisioned as the digital brain of the railway. The vision was to create a single source of truth, transforming vast amounts of operational data into clear, actionable insights." />
                  <ContentBlock title="The Need from Ankara" text="In Ankara, at the TCDD Transportation decision center, the need for faster, data-backed decisions was paramount. RayData was commissioned to meet this need, providing real-time analytics to optimize everything from scheduling to maintenance." />
              </div>
            </AnimatedSection>

            {/* Feature Trio */}
            <AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <GlassCard className="p-8">
                      <h3 className="text-4xl font-bold bg-gradient-to-br from-sky-500 to-cyan-400 text-transparent bg-clip-text">3</h3>
                      <p className="mt-2 font-semibold text-slate-800 dark:text-slate-200">Dashboards</p>
                  </GlassCard>
                  <GlassCard className="p-8">
                      <h3 className="text-4xl font-bold bg-gradient-to-br from-sky-500 to-cyan-400 text-transparent bg-clip-text">100+</h3>
                      <p className="mt-2 font-semibold text-slate-800 dark:text-slate-200">Reports</p>
                  </GlassCard>
                  <GlassCard className="p-8">
                      <h3 className="text-4xl font-bold bg-gradient-to-br from-sky-500 to-cyan-400 text-transparent bg-clip-text">Real-Time</h3>
                      <p className="mt-2 font-semibold text-slate-800 dark:text-slate-200">Analytics</p>
                  </GlassCard>
              </div>
            </AnimatedSection>

            {/* What RayData Means */}
            <AnimatedSection>
              <div>
                  <h2 className="text-3xl font-bold text-center mb-10 text-slate-900 dark:text-white">What RayData Means</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      <MeaningItem title="Data Democratization" text="Making data accessible to everyone, from executives to field operators."/>
                      <MeaningItem title="Decision-Making Speed" text="Reducing time-to-insight from days to seconds."/>
                      <MeaningItem title="Operational Excellence" text="Optimizing resources, predicting failures, and improving service."/>
                      <MeaningItem title="Safety Priority" text="Using data to proactively identify and mitigate risks."/>
                  </div>
              </div>
            </AnimatedSection>
        </div>
      </section>

      {/* Expected Impact */}
      <AnimatedSection>
        <MetricStrip metrics={expectedImpactMetrics} />
      </AnimatedSection>
      
      <AnimatedSection>
        <CtaBanner
          title="View RayData Project Details"
          description="See the full scope of our data analytics platform and its impact on railway operations."
          primaryLink={{ href: '/projects', label: 'Project Overview' }}
          secondaryLink={{ href: '/expertise', label: 'Our AI Expertise' }}
        />
      </AnimatedSection>
    </div>
  );
};

const ContentBlock: React.FC<{title: string, text: string}> = ({title, text}) => (
    <div>
        <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{title}</h3>
        <p className="text-slate-700 dark:text-slate-300">{text}</p>
    </div>
);

const MeaningItem: React.FC<{title: string, text: string}> = ({title, text}) => (
    <div className="text-center">
        <h4 className="font-bold text-lg text-slate-900 dark:text-white">{title}</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{text}</p>
    </div>
);


export default RayDataStoryPage;