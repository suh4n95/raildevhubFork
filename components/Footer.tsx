import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/30 dark:bg-slate-950/30 backdrop-blur-lg mt-24 ring-1 ring-black/5 dark:ring-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-black dark:text-white mb-4">
              <LogoIcon className="h-8 w-8 text-sky-500" />
              <span>RailDevHub</span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              A specialized team of 15 experts dedicated to revolutionizing the railway industry with cutting-edge digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" className="text-sm text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors">About</Link></li>
              <li><Link to="/expertise" className="text-sm text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors">Expertise</Link></li>
              <li><Link to="/projects" className="text-sm text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/stories/raynext" className="text-sm text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors">Stories</Link></li>
            </ul>
          </div>

          {/* Core Tech */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 tracking-wider uppercase">Core Tech</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-slate-600 dark:text-slate-400">AI & ML</li>
              <li className="text-sm text-slate-600 dark:text-slate-400">Java & SpringBoot</li>
              <li className="text-sm text-slate-600 dark:text-slate-400">React & Modern Web</li>
              <li className="text-sm text-slate-600 dark:text-slate-400">Kubernetes & DevOps</li>
            </ul>
          </div>

          {/* Placeholder for Contact or Socials */}
           <div>
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 tracking-wider uppercase">Connect</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer">Contact Us</li>
              <li className="text-sm text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer">LinkedIn</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-black/5 dark:border-white/10 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>&copy; {new Date().getFullYear()} RailDevHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;