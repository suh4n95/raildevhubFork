import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogoIcon, MenuIcon, XIcon, SunIcon, MoonIcon } from './icons';
import { useTheme } from '../contexts/ThemeContext';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/expertise', label: 'Expertise' },
  { href: '/about', label: 'About' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300
        ${isScrolled ? 'bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl' : 'bg-transparent backdrop-blur-none'} 
        rounded-3xl ring-1 ring-black/5 dark:ring-white/10 shadow-lg dark:shadow-2xl dark:shadow-cyan-500/10`}>
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 flex-shrink-0 text-xl font-bold text-slate-800 dark:text-white">
            <LogoIcon className="h-8 w-8 text-sky-500" />
            <span>RailDevHub</span>
          </Link>
          <div className="flex items-center">
            <nav className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} />
              ))}
            </nav>
          {/*  
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
            </button>
            */}
            <div className="md:hidden ml-2">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                <span className="sr-only">Open main menu</span>
                {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
            {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-2 mx-4`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg rounded-2xl ring-1 ring-black/5 dark:ring-white/10 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
    href: string;
    label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
    const location = useLocation();
    const isActive = location.pathname === href;
    return (
        <Link
            to={href}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 relative
                ${isActive ? 'text-white' : 'text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white'}`}
        >
            {isActive && (
                 <span className="absolute inset-0 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full -z-10"></span>
            )}
            {label}
        </Link>
    );
}

export default Navbar;