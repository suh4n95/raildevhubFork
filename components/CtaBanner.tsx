import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from './icons';

interface CtaBannerProps {
  title: string;
  description: string;
  primaryLink: { href: string; label: string };
  secondaryLink?: { href: string; label: string };
}

const CtaBanner: React.FC<CtaBannerProps> = ({ title, description, primaryLink, secondaryLink }) => {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 md:p-12 overflow-hidden bg-gradient-to-br from-sky-100 via-cyan-50 to-emerald-50 dark:from-slate-800 dark:via-sky-950 dark:to-slate-800 shadow-xl">
           <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-radial from-sky-400/50 to-transparent rounded-full blur-3xl -z-0"></div>
           <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-radial from-emerald-400/50 to-transparent rounded-full blur-3xl -z-0"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white tracking-tight">{title}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-700 dark:text-slate-300">{description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to={primaryLink.href}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 hover:scale-[1.02] transition-transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                {primaryLink.label}
              </Link>
              {secondaryLink && (
                <Link
                  to={secondaryLink.href}
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-black dark:text-white bg-white/60 dark:bg-slate-700/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-700/80 transition-colors duration-300 shadow-lg"
                >
                  {secondaryLink.label} <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;