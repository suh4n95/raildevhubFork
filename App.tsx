
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import RayNextStoryPage from './pages/RayNextStoryPage';
import RayDataStoryPage from './pages/RayDataStoryPage';
import AboutPage from './pages/AboutPage';
import ExpertisePage from './pages/ExpertisePage';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/stories/raynext" element={<RayNextStoryPage />} />
          <Route path="/stories/raydata" element={<RayDataStoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/expertise" element={<ExpertisePage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
