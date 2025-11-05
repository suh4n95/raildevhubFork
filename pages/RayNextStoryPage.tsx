import React from 'react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import CtaBanner from '../components/CtaBanner';
import AnimatedSection from '../components/AnimatedSection';

const RayNextStoryPage: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Story Header */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 text-center">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/4 left-0 w-full h-full bg-gradient-radial from-sky-200/50 to-transparent dark:from-sky-500/20 rounded-full blur-3xl"></div>
        </div>
        <AnimatedSection>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-sky-600 dark:text-sky-400 tracking-widest uppercase">Ankara to Istanbul • November 2025</p>
            <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">RayNext: The Future of Digital Railway</h1>
          </div>
        </AnimatedSection>
      </section>

      {/* Quote Block */}
      <AnimatedSection className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <GlassCard className="p-8 md:p-12">
            <blockquote className="text-center text-lg md:text-xl font-medium text-slate-800 dark:text-slate-200 italic">
              “A journey that begins from the heart of Turkey, Ankara… A vision crossing Istanbul’s bridges… The story of a digital transformation rising above thousands of kilometers of railway networks.”
            </blockquote>
          </GlassCard>
        </div>
      </AnimatedSection>
      
      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {/* Why RayNext? */}
            <AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Why RayNext?</h2>
                      <p className="mt-4 text-slate-600 dark:text-slate-400"><strong className="text-black dark:text-white">Ray:</strong> Inspired by the steel rails that form the backbone of our nation's transport. <br/><strong className="text-black dark:text-white">Next:</strong> Symbolizing the next generation of technology and progress.</p>
                  </div>
                  <GlassCard className="p-4"><img src="https://picsum.photos/seed/raynext-vision/600/400" alt="Vision of RayNext" className="rounded-2xl" /></GlassCard>
              </div>
            </AnimatedSection>

            {/* Vision and Inspiration */}
            <AnimatedSection>
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <ContentBlock title="The Vision Starting from Ankara" text="The concept of RayNext was born within the halls of UDHGM's headquarters in Ankara. The goal was ambitious yet clear: to create a single, complete digital ecosystem that connects every facet of the railway sector, ensuring efficiency, transparency, and security." />
                  <ContentBlock title="Inspiration from Istanbul" text="The project's execution is a testament to Turkish engineering, led by PiA Group. The bridging of continents in Istanbul serves as a powerful metaphor for RayNext—connecting disparate systems and processes into one seamless, powerful platform." />
              </div>
            </AnimatedSection>

            {/* Feature Cards */}
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <FeatureCard title="What RayNext Means" items={['Gateway to the Future', 'Continuous Progress', 'User Experience Excellence', 'National Technology Pride', 'International Standards']} />
                  <FeatureCard title="Who Uses RayNext" items={['UDHGM Personnel', 'Applicants Nationwide', 'ECM Organizations', 'Training Centers', 'Data Analysts']} />
              </div>
            </AnimatedSection>

            {/* The Journey Ahead */}
            <AnimatedSection>
              <div>
                  <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white">The Journey Ahead</h2>
                  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                      <TimelineStep year="2025" title="MVP Launch" description="The initial version of RayNext goes live, digitalizing core processes." />
                      <TimelineStep year="2026" title="Feedback & Iteration" description="Incorporating user feedback to enhance features and usability." />
                      <TimelineStep year="2027+" title="AI Integration" description="Introducing predictive analytics and intelligent automation features." />
                  </div>
              </div>
            </AnimatedSection>

        </div>
      </section>
      
      <AnimatedSection>
        <CtaBanner
          title="See Our Other Flagship Project"
          description="Explore RayData, the platform turning railway data into actionable intelligence."
          primaryLink={{ href: '/projects', label: 'View All Projects' }}
          secondaryLink={{ href: '/stories/raydata', label: 'Explore RayData' }}
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

const FeatureCard: React.FC<{title: string, items: string[]}> = ({title, items}) => (
    <GlassCard className="p-8">
        <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{title}</h3>
        <ul className="space-y-2">
            {items.map(item => <li key={item} className="text-slate-600 dark:text-slate-400 before:content-['•'] before:mr-2 before:text-sky-500">{item}</li>)}
        </ul>
    </GlassCard>
);

const TimelineStep: React.FC<{year: string, title: string, description: string}> = ({year, title, description}) => (
    <div className="relative p-6 border-l-2 border-sky-300 dark:border-sky-800">
        <div className="absolute -left-4 top-5 w-8 h-8 bg-white dark:bg-slate-800 ring-2 ring-sky-300 dark:ring-sky-700 rounded-full flex items-center justify-center font-bold text-sky-600 dark:text-sky-400 text-xs">{year}</div>
        <h4 className="font-bold text-lg text-slate-900 dark:text-white">{title}</h4>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{description}</p>
    </div>
);

export default RayNextStoryPage;