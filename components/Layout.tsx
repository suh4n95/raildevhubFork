import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#F7F7F5] text-[#111] dark:bg-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-sans antialiased">
      <Navbar />
      <main className="flex-grow pt-24"> {/* Increased padding top for taller navbar */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;